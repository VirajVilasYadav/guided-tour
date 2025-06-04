import { Component } from '@angular/core';
import { ManageToursComponent } from "./components/manage-tours/manage-tours.component";
import { CreateTourComponent } from './components/create-tour/create-tour.component';

@Component({
  selector: 'app-author',
  imports: [
    CreateTourComponent,
    ManageToursComponent
  ],
  templateUrl: './author.component.html',
  styleUrl: './author.component.scss'
})
export class AuthorComponent {

}
