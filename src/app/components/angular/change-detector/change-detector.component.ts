import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { ICNDBResponseValue } from 'src/app/shared/models/icndb-api.model';
import { NorrisJokeService } from 'src/app/shared/services/icndb-api.service';

@Component({
  selector: 'app-change-detector',
  templateUrl: './change-detector.component.html',
  styleUrls: ['./change-detector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectorComponent implements OnInit {

  public count: number = 5;
  public joke: ICNDBResponseValue = { id: 0, joke: '', categories: [''] };
  public references: string[] = [
    'https://netbasal.com/a-comprehensive-guide-to-angular-onpush-change-detection-strategy-5bac493074a4',
    'https://dzone.com/articles/how-to-use-change-detection-in-angular'
  ];

  // Code for example with deafult change Detection estrategy
  public tsParentCode: string = `import { Component } from '@angular/core';
  @Component({
    template: \` <h1>Hello {{name}}!</h1> {{runChangeDetection}} \`
  })

  export class HelloComponent {
    @Input() name: string;
    get runChangeDetection() {
      console.log('Checking the view');
      return true;
    }
  }`;

  public tsChildCode: string = `import { Component } from '@angular/core';
  @Component({
    template: \' <hello></hello> <button (click)="onClick()">Trigger change detection</button> \'
  })
  export class AppComponent  {
    onClick() {}
  }`;

  public shellOutCode: string = `# Checking the view // This is logged after each click in the button`;

  // Code for example with onPush change Detection estrategy
  public tooltipCode: string = `import { Component } from '@angular/core';
  @Component({
    selector: 'tooltip',
    template: \`
    < h1 > {{ config.position }}</h1>
    {{ runChangeDetection }} \`,
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class TooltipComponent  {

    @Input() config;

    get runChangeDetection() {
      console.log('Checking the view');
      return true;
    }
  }`;

  public tooltipParentCode: string = `import { Component } from '@angular/core';
  @Component({
    template: \`
    < tooltip[config]="config"> </tooltip> \`
  })
  export class AppComponent  {
    config = {
      position: 'top'
    };

    onClick() {
      this.config = {
        position: 'bottom'
      }
    }
  }`;

  // Code for example with DOM events and Borwser APIs
  public domEventCode: string = `import { Component } from '@angular/core';
  @Component({
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class CounterComponent {
    count = 0;

    constructor() {
      setTimeout(() => this.count = 5, 0);

      setInterval(() => this.count = 5, 100);

      Promise.resolve().then(() => this.count = 5);

      this.http.get('https://count.com').subscribe(res => {
        this.count = res;
      });
    }

    add() {
      this.count++;
    }
  }`;

  // Code for examples where we can check for the change detection
  public detectChangeCode: string = `constructor(private cdr: ChangeDetectorRef) {
  public onGetNewJoke(): void {
    this._norrisJokeService.getRandomJoke().subscribe((resp: any) => {
      this.joke = resp.value;
      this.cdr.detectChanges();
    });
  }`;

  public tickCode: string = `tick() {
    try {
      this._views.forEach((view) => view.detectChanges());
      ...
    } catch (e) {
      ...
    }
  }`;

  public markForCheckCode: string = `markForCheck(): void {
    markParentViewsForCheck(this._view);
  }

  export function markParentViewsForCheck(view: ViewData) {
    let currView: ViewData|null = view;
    while (currView) {
      if (currView.def.flags & ViewFlags.OnPush) {
        currView.state |= ViewState.ChecksEnabled;
      }
      currView = currView.viewContainerParent || currView.parent;
    }
  }`;


  constructor(private _norrisJokeService: NorrisJokeService, private cdr: ChangeDetectorRef) {
    setInterval(() => this.count = 5, 1000);
  }

  ngOnInit() { }

  public onGetNewJoke(): void {
    this._norrisJokeService.getRandomJoke().subscribe((resp: any) => {
      this.joke = resp.value;
      this.cdr.detectChanges();
    });
  }

  public add(): void {
    this.count++;
  }

}
