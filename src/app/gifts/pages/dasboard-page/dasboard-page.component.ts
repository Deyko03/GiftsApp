import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeader } from "../../components/side--menu/side-menu-header/side-menu-header.component";
import { SideMenuOptions } from "../../components/side--menu/side-menu-options/side-menu-options.component";
import { SideMenu } from "../../components/side--menu/side--menu.component";

@Component({
  selector: 'app-dasboard-page',
  imports: [
    RouterOutlet,
    SideMenu
],
  templateUrl: './dasboard-page.html',
})
export default class DasboardPageComponent {}
