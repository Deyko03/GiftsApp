import { Component } from '@angular/core';
import { SideMenuOptions } from "../side-menu-options/side-menu-options.component";
import { SideMenuHeader } from '../side-menu-header/side-menu-header.component';
interface MenuOption {
  label:string;
  sublabel:string;
  route:string;
  icon:string;
}


@Component({
  selector: 'gifts-side--menu',
  imports: [SideMenuOptions, SideMenuHeader],
  templateUrl: './side--menu.html',

})
export class SideMenu {

  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifts Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar gifts',
      route: '/dashboard/search',
    },


  ]


}
