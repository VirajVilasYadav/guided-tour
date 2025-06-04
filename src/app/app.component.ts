import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { IStepOption, TourNgBootstrapModule } from 'ngx-ui-tour-ng-bootstrap';
import { SomeAppComponent } from './components/some-app/some-app.component';
import { AuthorComponent } from './components/author/author.component';
import { TourServiceService } from './services/tour.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    TourNgBootstrapModule,
    SomeAppComponent,
    AuthorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'trainer';
  private readonly router = inject(Router);
  private readonly tourService = inject(TourServiceService);
  private readonly steps: IStepOption[] = [
    {
      anchorId: 'step1',
      content: 'Feedback forms is a newly added feature in Guardian One that lets you create a feedback form for a current Ansell product used which can either downloaded as paper form and can be filled through a link too.',
      title: 'New Feature',
    },
    {
      anchorId: 'step4',
      content: 'Number of feedback forms created.',
      title: 'New Sub Feature',
    },
    {
      anchorId: 'step3',
      content: 'At least one contact is now required to be able to publish report to SafeConnect.',
      title: 'New Validation',
    },
    {
      anchorId: 'step5',
      content: 'Number of reports published by you.',
      title: 'New Sub Feature',
    }
  ];

  ngOnInit(): void {
    this.tourService.addTour('initial', this.steps);
  }

  ngAfterViewInit(): void {
    let releaseStep: IStepOption = {
      anchorId: 'main-app',
      content: `
      Changes in this relase are mentioned below,
      <ol class="list-group list-group-numbered">
        <li class="list-group-item">Feedback Forms are now available (New Feature)</li>
        <li class="list-group-item">Added a validation for report publishing to SafeConnect</li>
        <li class="list-group-item">Bugs Fixed</li>
      </ol>
      `,
      title: 'New Release',
    };
    this.tourService.addTour('release', [releaseStep]);
    this.tourService.initializeSteps([releaseStep], {
      stepDimensions: {
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
      },
      enableBackdrop: true,
      backdropConfig: {
        offset: 0,
      },
    });
    this.tourService.startTour();
  }

  startTour() {
    this.router.navigate(['some-app']);
    this.tourService.initializeStepsAndStart('initial');
  }

  createTour() {
    this.router.navigate(['author/create-tour']);
  }

  get coreTourService() {
    return this.tourService.coreService;
  }

}
