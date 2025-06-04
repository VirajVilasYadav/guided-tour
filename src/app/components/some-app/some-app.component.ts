import { Component } from '@angular/core';
import { TourNgBootstrapModule } from 'ngx-ui-tour-ng-bootstrap';

@Component({
  selector: 'app-some-app',
  imports: [
    TourNgBootstrapModule
  ],
  templateUrl: './some-app.component.html',
  styleUrl: './some-app.component.scss'
})
export class SomeAppComponent {

}
