import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createForm, FormType, subformComponentProviders } from 'ngx-sub-form';
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
export class SubFormFileComponent {
  @Input() label: string;
  @Input() isImage = true;
  public uniqueId = MiscUtil.uuid();
  public fileSelected: string | ArrayBuffer;

  public form = createForm<MediaModel>(this, {
    formType: FormType.SUB,
    formControls: {
      url: new FormControl(null),
      id: new FormControl(null),
      file: new FormControl(null),
    },
  });

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdRef: ChangeDetectorRef,
  ) { }

  handleChange(event: any) {
    if (event.target.files?.[0]) {
      this.form.formGroup.controls.file.setValue(event.target.files[0]);
      this.toggleLabelFocus(false);

      if (event.target.files[0].type === 'application/pdf') { 
        this.fileSelected = 'assets/img/pdf.svg'; 
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => (this.fileSelected = reader.result);
      reader.readAsDataURL(this.form.formGroup.controls.file.value);
      this.cdRef.detectChanges();
    }    
  }

  toggleLabelFocus(toggle: boolean): void {
    const classes = 'sub-form-file__label--focus';
    this.toggleLabelClass(toggle, classes);
  }

  private toggleLabelClass(toggle: boolean, classes: string): void {
    const label = this.el?.nativeElement?.querySelector('.sub-form-file__label');

    if (!label) { return; }

    toggle
      ? this.renderer.addClass(label, classes)
      : this.renderer.removeClass(label, classes);
  }
}
