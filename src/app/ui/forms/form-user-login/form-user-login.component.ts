import { Component,ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { UserCredentialsModel } from 'src/app/core/models/user-credentials.model';
import { REGEX_RESOURCE } from 'src/app/core/resources/regex.resource';

@Component({
  selector: 'mr-form-user-login',
  templateUrl: './form-user-login.component.html',
  styleUrls: ['./form-user-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormUserLoginComponent {
  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<UserCredentialsModel | undefined> = new Subject();
  @Input() set dataInput(value: UserCredentialsModel | undefined) {
    this.input$.next(value);
  }

  private disabled$: Subject<boolean> = new Subject();
  @Input() set disabled(value: boolean) {
    this.disabled$.next(!!value);
  }

  @Output() dataOutput: Subject<UserCredentialsModel> = new Subject();
  form = createForm<UserCredentialsModel>(this, {
    formType: FormType.ROOT,
    input$: this.input$,
    disabled$: this.disabled$,
    output$: this.dataOutput,
    manualSave$: this.manualSave$,
    formControls: {
      email: new FormControl(null, [Validators.required, Validators.pattern(REGEX_RESOURCE.email)]),
      password: new FormControl(null, Validators.required),
    },
  });

}
