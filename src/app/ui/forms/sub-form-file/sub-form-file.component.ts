import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnChanges, Renderer2, ViewEncapsulation } from '@angular/core';
import { UntypedFormControl, ValidationErrors } from '@angular/forms';
import { createForm, FormType, subformComponentProviders, TypedFormGroup } from 'ngx-sub-form';
import { MediaModel } from 'src/app/core/models/media.model';
import { MiscUtil } from 'src/app/core/utils/misc.util';

@Component({
  selector: 'mr-sub-form-file',
  templateUrl: './sub-form-file.component.html',
  styleUrls: ['./sub-form-file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: subformComponentProviders(SubFormFileComponent),
})
export class SubFormFileComponent implements OnChanges {
  @Input() label: string;
  @Input() isImage = true;
  @Input() canResetImage = false;
  public uniqueId = MiscUtil.uuid();
  public fileSelected: string | ArrayBuffer;
  public isTouched = false;

  public form = createForm<MediaModel>(this, {
    formType: FormType.SUB,
    formControls: {
      url: new UntypedFormControl(null),
      id: new UntypedFormControl(null),
      file: new UntypedFormControl(null),
      type: new UntypedFormControl(null),
    },
    formGroupOptions: {
      validators: [
        (formGroup) => this.validateFileSize(formGroup),
        (formGroup) => this.validateFileRequired(formGroup),
      ],
    }
  });

  get errors(): string[] | null {
    return Object.entries(this.form?.formGroupErrors?.formGroup ?? {}).map((error) => error[0]);
  }

  constructor(
    private cdRef: ChangeDetectorRef,
  ) { }

  ngOnChanges(): void {
    if (!this.canResetImage) { return; }
    this.fileSelected = null;
  }

  handleChange(event: any) {
    this.setIsTouched(true);
    const file = event.target.files?.[0];
    if (file) {
      this.form.formGroup.controls.file.setValue(file);

      if (file.type === 'application/pdf') {
        this.fileSelected = 'assets/img/pdf.svg';
        this.cdRef.detectChanges();
        return;
      }

      if (file.size > 2000000) {
        this.fileSelected = 'assets/img/waiting.png';
        this.cdRef.detectChanges();
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => (this.fileSelected = reader.result);
      reader.readAsDataURL(this.form.formGroup.controls.file.value);
      this.cdRef.detectChanges();
    }
  }

  setIsTouched(value: boolean): void {
    this.isTouched = value;
    this.cdRef.detectChanges();
  }

  private validateFileSize(formGroup: TypedFormGroup<MediaModel>): ValidationErrors {
    const fileSize = formGroup.controls.file.value?.size;

    if (fileSize && fileSize > 10000000) {
      return { fileSizeOutRange: true };
    }

    return null;
  }

  private validateFileRequired(formGroup: TypedFormGroup<MediaModel>): ValidationErrors {
    if (!formGroup.controls.url.value && !formGroup.controls.file.value) {
      return { required: true };
    }

    return null;
  }
}
