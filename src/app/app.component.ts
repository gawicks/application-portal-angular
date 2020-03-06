import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeTrigger', [
        transition('intro => form, form => conclusion',[
            style({ position: 'relative'}),
            query(':enter, :leave', [
              style({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
              })
            ], { optional: true}),
            query(':enter', [style({ right: '-100%', opacity: 0 })], { optional : true }),
            group([
              query(':leave', [animate('.75s ease-out', style({ right: '100%', opacity: 0 }))] , { optional : true }),
              query(':enter', [animate('.75s ease-out', style({ right: '0%', opacity: 1 }))], { optional: true})
             ])
        ])
    ])]
})
export class AppComponent implements OnInit {

  constructor(public router: Router){
    //Workaround for: https://github.com/angular/angular/issues/12825
    router.events
    .subscribe((event: NavigationStart) => {
      if (event.navigationTrigger === 'popstate') {
        router.navigateByUrl('/intro');
      }
    });

  }

  public ngOnInit(): void {
    this.router.navigateByUrl('/intro');
  }
  
  public getRouteState(outlet: RouterOutlet){
    return outlet.activatedRouteData['name'];
  }
}
