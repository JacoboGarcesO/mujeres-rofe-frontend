import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { debounceTime, distinctUntilChanged, Subject, Subscription, tap } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';

@Component({
  selector: 'mr-sub-form-select',
  templateUrl: './sub-form-select.component.html',
  styleUrls: ['./sub-form-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(SubFormSelectComponent),
})
export class SubFormSelectComponent implements OnInit, OnDestroy {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() options!: OptionModel[];
  @Input() tabid!: string;
  @Input() isSearchable = false;
  @Input() canDeleteText = true;
  private termSubject: Subject<string> = new Subject();
  private subscriptions: Subscription = new Subscription();
  private optionsListValue: OptionModel[] = [];

  constructor(private cdRef: ChangeDetectorRef) { }

  get showSearchable(): boolean {
    return this.isSearchable && this.options?.length > 10;
  }

  get optionSelectedLabel(): string | undefined {
    return this.options?.find((option) => option?.id === this.form.formGroup.value.value)?.label;
  }

  get optionsList(): OptionModel[] {
    const options = this.optionsListValue?.length ? this.optionsListValue : this.options;
    return this.showSearchable ? options?.slice(0, 10) : options;
  }

  ngOnInit(): void {
    this.listenTerm();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  handleClick(event: Event, value: string | undefined): void {
    event.stopPropagation();    
    this.form.formGroup.controls.value.setValue(value as string);
  }

  handleInput(term: any): void {
    this.termSubject.next(term.value);
  }

  trackIndex(index: number): number {
    return index;
  }

  resetOption(): void {
    this.form.formGroup.controls.value.setValue(null as unknown as string);
  }

  public form = createForm<string, { value: string }>(this, {
    formType: FormType.SUB,
    formControls: {
      value: new UntypedFormControl(null),
    },
    toFormGroup: (value: string): { value: string } => {
      return { value };
    },
    fromFormGroup: (formValue: { value: string }): string => {
      return formValue.value;
    },
  });

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
}
