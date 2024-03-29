import { ChangeDetectionStrategy, Component, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { REGEX_RESOURCE } from 'src/app/core/resources/regex.resource';
import { SubFormFileComponent } from '../sub-form-file/sub-form-file.component';
import { SubFormInputComponent } from '../sub-form-input/sub-form-input.component';
import { SubFormLocationComponent } from '../sub-form-location/sub-form-location.component';
import { SubFormMultiSelectComponent } from '../sub-form-multi-select/sub-form-multi-select.component';
import { SubFormSelectComponent } from '../sub-form-select/sub-form-select.component';
import { SubFormTextareaComponent } from '../sub-form-textarea/sub-form-textarea.component';

@Component({
  selector: 'mr-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUserComponent implements OnChanges {
  @ViewChild('documentImageRef') documentImageRef: SubFormFileComponent;
  @ViewChild('imageRef') imageRef: SubFormFileComponent;
  @ViewChild('addressRef') addressRef: SubFormInputComponent;
  @ViewChild('ageRef') ageRef: SubFormInputComponent;
  @ViewChild('documentNumberRef') documentNumberRef: SubFormInputComponent;
  @ViewChild('phoneNumberRef') phoneNumberRef: SubFormInputComponent;
  @ViewChild('emailRef') emailRef: SubFormInputComponent;
  @ViewChild('lastNameRef') lastNameRef: SubFormInputComponent;
  @ViewChild('firstNameRef') firstNameRef: SubFormInputComponent;
  @ViewChild('descriptionRef') descriptionRef: SubFormTextareaComponent;
  @ViewChild('disclosureRef') disclosureRef: SubFormSelectComponent;
  @ViewChild('stratumRef') stratumRef: SubFormSelectComponent;
  @ViewChild('educationRef') educationRef: SubFormSelectComponent;
  @ViewChild('housingTypeRef') housingTypeRef: SubFormSelectComponent;
  @ViewChild('familyIncomeRef') familyIncomeRef: SubFormSelectComponent;
  @ViewChild('familyCoreRef') familyCoreRef: SubFormSelectComponent;
  @ViewChild('ethnicGroupRef') ethnicGroupRef: SubFormMultiSelectComponent;
  @ViewChild('sustainingRef') sustainingRef: SubFormMultiSelectComponent;
  @ViewChild('maritalStatusRef') maritalStatusRef: SubFormSelectComponent;
  @ViewChild('documentTypeRef') documentTypeRef: SubFormSelectComponent;
  @ViewChild('locationRef') locationRef: SubFormLocationComponent;
  @Input() hobbies: OptionModel[];
  @Input() states: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() documents: OptionModel[];
  @Input() education: OptionModel[];
  @Input() ethnicGroups: OptionModel[];
  @Input() familyCore: OptionModel[];
  @Input() familyIncome: OptionModel[];
  @Input() housingType: OptionModel[];
  @Input() maritalStatus: OptionModel[];
  @Input() stratum: OptionModel[];
  @Input() sustenting: OptionModel[];
  @Input() disclosures: OptionModel[];
  @Input() canResetForm: boolean;
  @Input() showCheckConditions = false;
  public isOther = false;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<UserModel> = new Subject();
  @Input() set dataInput(value: UserModel) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<UserModel> = new Subject();
  form = createForm<UserModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      email: new UntypedFormControl(null, [Validators.required, Validators.pattern(REGEX_RESOURCE.email)]),
      firstName: new UntypedFormControl(null, Validators.required),
      lastName: new UntypedFormControl(null, Validators.required),
      image: new UntypedFormControl(null, Validators.required),
      description: new UntypedFormControl(null, Validators.required),
      phoneNumber: new UntypedFormControl(null, Validators.required),
      documentNumber: new UntypedFormControl(null, Validators.required),
      documentImage: new UntypedFormControl(null, Validators.required),
      instagram: new UntypedFormControl(null),
      location: new UntypedFormControl(null, Validators.required),
      facebook: new UntypedFormControl(null),
      hobbies: new UntypedFormControl(null),
      documentType: new UntypedFormControl(null, Validators.required),
      maritalStatus: new UntypedFormControl(null, Validators.required),
      address: new UntypedFormControl(null, Validators.required),
      age: new UntypedFormControl(null, Validators.required),
      familyCore: new UntypedFormControl(null, Validators.required),
      familyIncome: new UntypedFormControl(null, Validators.required),
      housingType: new UntypedFormControl(null, Validators.required),
      education: new UntypedFormControl(null, Validators.required),
      stratum: new UntypedFormControl(null, Validators.required),
      promocionalCode: new UntypedFormControl(null),
      disclosure: new UntypedFormControl(null, Validators.required),
      ethnicGroup: new UntypedFormControl(null, Validators.required),
      sustaining: new UntypedFormControl(null, Validators.required),
      // --------------------
      id: new UntypedFormControl(null),
      rol: new UntypedFormControl(null),
      isPremium: new UntypedFormControl(null),
      isAccept: new UntypedFormControl(null),
      creationDate: new UntypedFormControl(null),
    },
  });

  @Output() initForm = this.form.controlValue$;
  @Output() formUpdate = this.form.formGroup.valueChanges;

  ngOnChanges(): void {
    this.validateIsOther();
    if (!this.canResetForm) { return; }

    Object.keys(
      this.form.formGroup.controls,
    ).forEach((control) => this.form.formGroup.controls[control].setValue(null));
  }

  handleToggleOther(event: string): void {
    this.isOther = event === 'otro';
  }

  sendForm(): void {
    this.touchAllControls();
    if (!this.form.formGroup.invalid && !this.form.formGroup.disabled && this.form.formGroup.value.isAccept) {
      this.manualSave$.next();
    }
  }

  private validateIsOther(): void {
    this.isOther = !this.disclosures?.map((disclosures) => disclosures.id).includes(this.form.formGroup.value?.disclosure);
  }

  private touchAllControls(): void {
    [
      this.imageRef,
      this.documentImageRef,
      this.addressRef,
      this.ageRef,
      this.documentNumberRef,
      this.phoneNumberRef,
      this.emailRef,
      this.lastNameRef,
      this.firstNameRef,
      this.descriptionRef,
      this.disclosureRef,
      this.stratumRef,
      this.educationRef,
      this.housingTypeRef,
      this.familyIncomeRef,
      this.familyCoreRef,
      this.ethnicGroupRef,
      this.sustainingRef,
      this.maritalStatusRef,
      this.documentTypeRef,
    ].forEach((control) => control.setIsTouched(true));
    this.locationRef.markTouched();
  }
}
