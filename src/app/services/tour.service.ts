import { inject, Injectable } from '@angular/core';
import { IStepOption, TourService } from 'ngx-ui-tour-ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class TourServiceService {

  private readonly tourService = inject(TourService);
  private tours: Map<string, IStepOption[]> = new Map<string, IStepOption[]>();

  constructor() { }

  addTour(tourId: string, steps: IStepOption[]) {
    this.tours.set(tourId, steps);
  }

  startTour(tourId: string) {
    this.initializeSteps(<IStepOption[]>this.tours.get(tourId));
    this.tourService.start();
  }

  initializeSteps(steps: IStepOption[]) {
    this.tourService.initialize(steps, {
      enableBackdrop: true,
      backdropConfig: {
        offset: 10,
      },
    });
  }
}
