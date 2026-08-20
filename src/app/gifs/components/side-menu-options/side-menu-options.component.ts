import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { GifService } from '../../services/gifs.service';

export interface MenuOption {
  label: string;
  sublabel: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'gits-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {
  @Input() public menuOptions: MenuOption[] = [];
  gifService = inject(GifService);
}
