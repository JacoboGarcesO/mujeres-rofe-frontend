import { Component, ChangeDetectionStrategy, Input, Output, ViewEncapsulation, HostListener } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { createForm, FormType } from 'ngx-sub-form';
import { Subject } from 'rxjs';
import { NotificationsEnum } from 'src/app/core/enums/notifications.enum';
import { UserCredentialsModel } from 'src/app/core/models/user-credentials.model';
import { UserModel } from 'src/app/core/models/user.model';
import { REGEX_RESOURCE } from 'src/app/core/resources/regex.resource';

@Component({
  selector: 'mr-form-user-login',
  templateUrl: './form-user-login.component.html',
  styleUrls: ['./form-user-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormUserLoginComponent {
  @Input() currentUser: UserModel;
  @Input() formNotification: string;
  public notificationsEnum: typeof NotificationsEnum = NotificationsEnum;

  public manualSave$: Subject<void> = new Subject();
  private input$: Subject<UserCredentialsModel> = new Subject();
  @Input() set dataInput(value: UserCredentialsModel) {
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
      email: new UntypedFormControl(null, [Validators.required, Validators.pattern(REGEX_RESOURCE.email)]),
      password: new UntypedFormControl(null, Validators.required),
    },
  });

  @HostListener('window:keydown.enter')
  handleKeyDown() {
    this.manualSave$.next();
  }

  constructor(private router: Router) { }

  navigateToRegister(): void {
    this.router.navigateByUrl('auth/register');
  }

  navigateToForgotPassword(): void {
    this.router.navigateByUrl('auth/forgot-password');
  }
}
