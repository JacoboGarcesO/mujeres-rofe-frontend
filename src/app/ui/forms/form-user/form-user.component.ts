import { Component, OnInit, ChangeDetectionStrategy, Input, Output, OnDestroy, EventEmitter, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject, Subscription, tap } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { OptionModel } from 'src/app/core/models/option.model';
import { REGEX_RESOURCE } from 'src/app/core/resources/regex.resource';

@Component({
  selector: 'mr-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUserComponent implements OnInit, OnDestroy, OnChanges {
  @Input() hobbies: OptionModel[];
  @Input() states: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() canResetForm: boolean;
  @Output() stateSelected: EventEmitter<string> = new EventEmitter();
  private subscriptions: Subscription;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<CurrentUserModel> = new Subject();
  @Input() set dataInput(value: CurrentUserModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<CurrentUserModel> = new Subject();
  form = createForm<CurrentUserModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      email: new FormControl(null, [Validators.required, Validators.pattern(REGEX_RESOURCE.email)]),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      instagram: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      hobbies: new FormControl(null, Validators.required),
      document: new FormControl(null, Validators.required),
      location: new FormControl(null),
      // --------------------
      id: new FormControl(null),
      rol: new FormControl(null),
      token: new FormControl(null),
      message: new FormControl(null),
      isPending: new FormControl(null),
      nameComplete: new FormControl(null),
    },
  });

  ngOnChanges(): void {
    if (!this.canResetForm) { return; }

    Object.keys(
      this.form.formGroup.controls,
    ).forEach((control) => this.form.formGroup.controls[control].setValue(null));
  }
  
  ngOnInit(): void {
    this.init();
    this.initChangesListener();
  }

  ngOnDestroy(): void {
    this.destroy();
  }

  private init(): void {
    this.subscriptions = new Subscription();
  }

  private destroy(): void {
    this.subscriptions.unsubscribe();
  }

  private initChangesListener(): void {
    this.subscriptions.add(
      this.form.formGroup.valueChanges.pipe(
        tap(this.queryStates.bind(this)),
      ).subscribe(),
    );
  }

  private queryStates(formUpdate: CurrentUserModel): void {
    if (formUpdate?.location?.state && !formUpdate?.location?.city) {
      this.stateSelected.emit(formUpdate.location.state);
    }
  }
}
