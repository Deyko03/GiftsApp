import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
