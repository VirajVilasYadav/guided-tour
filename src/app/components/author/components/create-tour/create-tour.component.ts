import { Component, HostListener, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IStepOption, TourNgBootstrapModule } from 'ngx-ui-tour-ng-bootstrap';
import { TourServiceService } from '../../../../services/tour.service';

@Component({
  selector: 'app-create-tour',
  imports: [
    ReactiveFormsModule,
    TourNgBootstrapModule
  ],
  templateUrl: './create-tour.component.html',
  styleUrl: './create-tour.component.scss'
})
export class CreateTourComponent {

  private tourService: TourServiceService = inject(TourServiceService);
  private fb: FormBuilder = inject(FormBuilder);
  captureClick: boolean = false;
  clickEvent: MouseEvent | null = null;
  steps: IStepOption[] = [];
  stepForm: FormGroup = this.fb.group({
    anchorId: [],
    content: [],
    title: []
  });

  @HostListener('click', ['$event.target'])
  onClick(element: HTMLElement) {
    console.log('element', element);
    if (element.id) {
      this.stepForm.get('anchorId')?.setValue(element.id);
    }
  }

  captureNextClick() {
    this.captureClick = true;
  }

  addStep() {
    this.captureClick = false;
    if (this.stepForm.valid) {
      this.steps.push(this.stepForm.value);
    }
  }

  publishAndPreview() {
    this.tourService.addTour('preview', this.steps);
    this.tourService.initializeStepsAndStart('preview');
  }

}
