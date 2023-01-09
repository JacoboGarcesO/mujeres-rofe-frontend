import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextModule } from '../../elements/text/text.module';
import { PipesModule } from '../../pipes/pipes.module';

@Component({
  selector: 'mr-form-errors',
  standalone: true,
  imports: [CommonModule, TextModule, PipesModule],
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FormErrorsComponent {
  @Input() errors: string[];
}
