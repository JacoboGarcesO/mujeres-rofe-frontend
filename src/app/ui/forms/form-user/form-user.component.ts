import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';
import { REGEX_RESOURCE } from 'src/app/core/resources/regex.resource';

@Component({
  selector: 'mr-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUserComponent  {
  @Input() currentUser: CurrentUserModel | undefined;

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
      location:new FormControl(null),
      hobbies: new FormControl(null),
      // --------------------
      id: new FormControl(null),
      rol: new FormControl(null),
      token: new FormControl(null),
      message: new FormControl(null),
      isPending: new FormControl(null),
      nameComplete: new FormControl(null),
    },
  });
}
