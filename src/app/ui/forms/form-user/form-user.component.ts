import { Component, ChangeDetectionStrategy, Input, Output, OnChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { OptionModel } from 'src/app/core/models/option.model';
import { UserModel } from 'src/app/core/models/user.model';
import { REGEX_RESOURCE } from 'src/app/core/resources/regex.resource';

@Component({
  selector: 'mr-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUserComponent implements OnChanges {
  @Input() hobbies: OptionModel[];
  @Input() states: OptionModel[];
  @Input() cities: OptionModel[];
  @Input() canResetForm: boolean;

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
      isPremium: new FormControl(null),
    },
  });

  @Output() initForm = this.form.controlValue$;
  @Output() formUpdate = this.form.formGroup.valueChanges;


  ngOnChanges(): void {
    if (!this.canResetForm) { return; }
    
    Object.keys(
      this.form.formGroup.controls,
    ).forEach((control) => this.form.formGroup.controls[control].setValue(null));
  }
}
