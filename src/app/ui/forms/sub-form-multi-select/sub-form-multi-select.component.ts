import { Component, OnInit, ChangeDetectionStrategy, Input, ViewEncapsulation, Renderer2, ChangeDetectorRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { debounceTime, distinctUntilChanged, Subject, Subscription, tap } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { MiscUtil } from 'src/app/core/utils/misc.util';

@Component({
  selector: 'mr-sub-form-multi-select',
  templateUrl: './sub-form-multi-select.component.html',
  styleUrls: ['./sub-form-multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormMultiSelectComponent),
  encapsulation: ViewEncapsulation.None,
})
export class SubFormMultiSelectComponent implements OnInit, OnDestroy, OnChanges {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() options!: OptionModel[];
  @Input() tabid!: string;
  @Input() isSearchable = false;
  @Input() canResetForm: boolean;
  private termSubject: Subject<string> = new Subject();
  private subscriptions: Subscription = new Subscription();
  private optionsListValue: OptionModel[] = [];
  private uniqueId = MiscUtil.uuid();
  private globalListenFunc: () => void;
  public form = createForm<string[], { value: string[] }>(this, {
    formType: FormType.SUB,
    formControls: {
      value: new UntypedFormControl([]),
    },
    toFormGroup: (value: string[]): { value: string[] } => {
      return { value };
    },
    fromFormGroup: (formValue: { value: string[] }): string[] => {
      return formValue.value;
    },
  });

  constructor(
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
  ) {
    this.bindClosest();
  }

  get showSearchable(): boolean {
    return this.isSearchable && this.options?.length > 10;
  }

  get optionsSelected(): OptionModel[] {
    return this.options?.filter((option) => this.form.formGroup.controls.value.value.includes(option.id));
  }

  get optionsList(): OptionModel[] {
    const options = this.optionsListValue?.length ? this.optionsListValue : this.options;
    return this.showSearchable ? options?.slice(0, 10) : options;
  }

  ngOnChanges(): void {
    if (!this.canResetForm) { return; }
    this.form.formGroup.controls.value.setValue([]);    
  }

  ngOnInit(): void {
    this.listenTerm();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
    this.destroyClosest();
  }

  handleClick(event: Event, optionId: string): void {
    event.stopPropagation();
    const options = this.form.formGroup.controls.value.value;

    if (!options.includes(optionId)) {
      options.push(optionId);
    }

    this.form.formGroup.controls.value.setValue(options);
  }

  handleDeselected(optionId: string): void {
    const options = this.form.formGroup.controls.value.value.filter((option) => option !== optionId);
    this.form.formGroup.controls.value.setValue(options);
  }

  handleInput(term: any): void {
    this.termSubject.next(term.value);
  }

  trackIndex(index: number): number {
    return index;
  }

  private listenTerm(): void {
    this.subscriptions.add(
      this.termSubject.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        tap(this.filterOptions.bind(this)),
      ).subscribe(),
    );
  }

  private filterOptions(term: string): void {
    const filteredOptions = this.options.filter(
      (option) => (option.label?.toLowerCase().includes(term?.toLowerCase())));

    this.optionsListValue = filteredOptions.length ? filteredOptions : this.options;
    this.cdRef.markForCheck();
  }

  private closeOptions(): void {
    this.optionsListValue = [];
    this.cdRef.markForCheck();
  }

  private bindClosest(): void {
    this.globalListenFunc = this.renderer.listen('window', 'click', this.closest.bind(this));
  }

  private destroyClosest(): void {
    this.globalListenFunc();
  }

  private closest(event: MouseEvent): void {
    const target = event.target as unknown as HTMLElement;
    const closest = target.closest(`.closest__form-multiselect__${this.uniqueId}`);
    if (!closest) { this.closeOptions(); }
  }
}
