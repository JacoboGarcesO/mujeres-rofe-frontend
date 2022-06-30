import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, ViewChild, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocationModel } from 'src/app/core/models/locations.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { ModalComponent } from '../../elements/modal/modal.component';

@Component({
  selector: 'mr-admin-highlighted-cities-list',
  templateUrl: './admin-highlighted-cities-list.component.html',
  styleUrls: ['./admin-highlighted-cities-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AdminHighlightedCitiesListComponent {
  @ViewChild('modalRef') modalRef: ModalComponent;
  @ViewChild('modalDeleteRef') modalDeleteRef: ModalComponent;
  @Input() highlightedCities: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() states: OptionModel[];
  @Input() canCloseModal: boolean;
  @Output() deleteCity: EventEmitter<string> = new EventEmitter();
  @Output() createCity: EventEmitter<string> = new EventEmitter();
  @Output() selectState: EventEmitter<string> = new EventEmitter();
  private cityId: string;

  constructor(
    private cdRef: ChangeDetectorRef,
    private router: Router,
  ) { }

  ngOnChanges(): void {
    if (!this.canCloseModal) { return; }

    this.modalRef.close();
    this.modalDeleteRef.close();
    this.cdRef.detectChanges();
  }

  handleToBack(): void {
    this.router.navigateByUrl('');
  }

  setCityId(cityId: string): void {
    this.cityId = cityId;
  }

  handleDeleteCity(): void {
    this.deleteCity.emit(this.cityId);
  }

  handleLoadCitiesByState({ value }: { value: UserLocationModel }): void {    
    value?.state && this.selectState.emit(value?.state);
  }

  handleCreateCity({ value}: { value: UserLocationModel }): void {
    this.createCity.emit(value?.city);
  }
}
