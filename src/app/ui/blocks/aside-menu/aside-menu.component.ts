import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'mr-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideMenuComponent {
  @Input() isVisible = false;

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
}
