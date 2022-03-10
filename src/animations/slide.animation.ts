import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const SLIDE_IN = trigger('slideIn', [
  state(
    'up',
    style({
      opacity: 1,
      transform: 'translate(0PX)'
    })
  ),

  state(
    'down',
    style({
      opacity: 1,
      transform: 'translate(0PX)'
    })
  ),

  state(
    'left',
    style({
      opacity: 1,
      transform: 'translate(0PX)'
    })
  ),

  state(
    'right',
    style({
      opacity: 1,
      transform: 'translate(0PX)'
    })
  ),

  state(
    'hidden',
    style({
      opacity: 0,
    })
  ),

  transition('* => up', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate('600ms 0s ease-out'),
  ]),

  transition('* => down', [
    style({ opacity: 0, transform: 'translateY(-40px)' }),
    animate('600ms 0s ease-in'),
  ]),

  transition('* => left', [
    style({ opacity: 0, transform: 'translateX(-40px)' }),
    animate('600ms 0s ease-in'),
  ]),

  transition('* => right', [
    style({ opacity: 0, transform: 'translateX(40px)' }),
    animate('600ms 0s ease-in'),
  ]),
]);

export const SLIDE_OUT = trigger('slideOut', [
    state(
      'up',
      style({
        opacity: 0,
        transform: 'translateY(-40px)'
      })
    ),
  
    state(
      'down',
      style({
        opacity: 0,
        transform: 'translateY(40px)'
      })
    ),
  
    state(
      'left',
      style({
        opacity: 0,
        transform: 'translateX(40px)'
      })
    ),
  
    state(
      'right',
      style({
        opacity: 0,
        transform: 'translateX(-40px)'
      })
    ),
  
    transition('* => up', [
      style({ opacity: 1}),
      animate('600ms 0s ease-out'),
    ]),
  
    transition('* => down', [
      style({ opacity: 1}),
      animate('600ms 0s ease-in'),
    ]),
  
    transition('* => left', [
      style({ opacity: 1}),
      animate('600ms 0s ease-in'),
    ]),
  
    transition('* => right', [
      style({ opacity: 1}),
      animate('600ms 0s ease-in'),
    ]),
  ]);