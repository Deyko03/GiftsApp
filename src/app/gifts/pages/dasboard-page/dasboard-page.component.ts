import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dasboard-page',
  imports: [
    RouterOutlet
  ],
  templateUrl: './dasboard-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DasboardPage {}
