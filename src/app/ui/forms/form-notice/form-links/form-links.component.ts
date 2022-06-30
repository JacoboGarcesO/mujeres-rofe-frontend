import { Component, ChangeDetectionStrategy, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { UntypedFormArray, UntypedFormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
import { LinkNoticeModel } from 'src/app/core/models/notice.model';

@Component({
  selector: 'mr-form-links',
  templateUrl: './form-links.component.html',
  styleUrls: ['./form-links.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: subformComponentProviders(FormLinksComponent),
  encapsulation: ViewEncapsulation.None,
})
export class FormLinksComponent implements AfterViewInit {
  public form = createForm<LinkNoticeModel[], { value: LinkNoticeModel[] }>(this, {
    formType: FormType.SUB,
    formControls: {
      value: new UntypedFormArray([]),
    },
    toFormGroup: (value: LinkNoticeModel[]): { value: LinkNoticeModel[] } => {
      return { value };
    },
    fromFormGroup: (formValue: { value: LinkNoticeModel[] }): LinkNoticeModel[] => {
      return formValue.value;
    },
  });

  get formManager(): { [key: string]: (...args: any) => void } {
    return {
      delete: this.delete.bind(this),
      add: this.add.bind(this),
    };
  }

  ngAfterViewInit(): void {
    this.add();
  }

  trackIndex(index: number): number {
    return index;
  }

  private delete(index: number): void {
    this.form.formGroup.controls.value.removeAt(index);
  }

  private add(): void {
    this.form.formGroup.controls.value.push(new UntypedFormControl({ name: null, url: 'https://' }));
  }
}
