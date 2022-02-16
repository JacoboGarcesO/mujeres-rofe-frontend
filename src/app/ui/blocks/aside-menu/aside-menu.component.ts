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
      image: 'assets/img/red.png',
      link: 'channels/network',
    },
    {
      title: 'Oportunidades',
      description: 'Acceso a información para mujeres',
      image: 'assets/img/oportunidades.png',
      link: 'channels/opportunities',
    },
    {
      title: 'Formación',
      description: 'Cursos, talleres y charlas',
      image: 'assets/img/formacion.png',
      link: 'channels/training',
    },
    {
      title: 'Emprendimiento',
      description: 'Acceso a asesorías y capital semilla',
      image: 'assets/img/emprendimiento.png',
      link: 'channels/business',
    },
    {
      title: 'Contáctanos',
      description: 'Apoyo y soporte',
      image: 'assets/img/logo-4.png',
      link: 'channels/contact',
    },
    {
      title: 'Administrador',
      image: 'assets/img/logo-4.png',
      link: 'admin',
    },
  ];

  handleLogout(): void {
    this.clickedLogout.emit();
  }
}
