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

  initializeStepsAndStart(tourId: string) {
    this.initializeSteps(<IStepOption[]>this.tours.get(tourId));
    this.tourService.start();
  }

  startTour() {
    this.tourService.start();
  }

  endTour() {
    this.tourService.end();
  }

  initializeSteps(steps: IStepOption[], stepDefaults?: IStepOption) {
    if (!stepDefaults) {
      stepDefaults = {
        enableBackdrop: true,
        backdropConfig: {
          offset: 10,
        },
      }
    }
    this.tourService.initialize(steps, stepDefaults);
  }

  get coreService() {
    return this.tourService;
  }

}
