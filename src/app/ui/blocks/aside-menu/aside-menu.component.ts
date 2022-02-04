import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { CurrentUserModel } from 'src/app/core/models/current-user.model';

@Component({
  selector: 'mr-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuComponent {
  @Input() isVisible = false;
  @Input() currentUser: CurrentUserModel | undefined;
  @Output() clickedLogout: EventEmitter<void> = new EventEmitter();

  public items = [
    {
      title: 'Red',
      description: 'Espacio de conexión y apoyo',
      image: 'assets/img/test.png',
    },
    {
      title: 'Oportunidades',
      description: 'Acceso a información para mujeres',
      image: 'assets/img/test.png',
    },
    {
      title: 'Formación',
      description: 'Cursos, talleres y charlas',
      image: 'assets/img/test.png',
    },
    {
      title: 'Emprendimiento',
      description: 'Acceso a asesorías y capital semilla',
      image: 'assets/img/test.png',
    },
    {
      title: 'Contáctanos',
      description: 'Apoyo y soporte',
      image: 'assets/img/test.png',
    },
  ];

  handleLogout(): void {
    this.clickedLogout.emit();
  }
}