import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const ZOOM_ANIMATIONS = {
  zoomIncreaseIn: 'increase-in',
  zoomIncreaseOut: 'increase-out',
  zoomDecreaseIn: 'decrease-in',
  zoomDecreaseOut: 'decrease-out',
  zoomHidden: 'hidden'
}

export const ZOOM = trigger('zoom', [
  state(
    ZOOM_ANIMATIONS.zoomHidden,
    style({
      opacity: 0,
    })
  ),

  // INCREASE ANIMATION

  state(
    ZOOM_ANIMATIONS.zoomIncreaseIn,
    style({
      opacity: 1,
      transform: 'scale(1)',
    })
  ),

  transition('* => increase-in',
  [
    style({
      opacity: 0,
      transform: 'scale(0.7)'
    }),
    animate('600ms 0s ease-out'),
  ]),

  state(
    ZOOM_ANIMATIONS.zoomIncreaseOut,
    style({
      opacity: 0,
      transform: 'scale(1.3)',
    })
  ),

  transition('* => increase-out',
  [
    style({
      opacity: 1,
      transform: 'scale(1)'
    }),
    animate('600ms 0s ease-out'),
  ]),

  // DECREASE ANIMATION

  state(
    ZOOM_ANIMATIONS.zoomDecreaseIn,
    style({
      opacity: 1,
      transform: 'scale(1)',
    })
  ),

  transition('* => decrease-in',
  [
    style({
      opacity: 0,
      transform: 'scale(1.3)'
    }),
    animate('600ms 0s ease-out'),
  ]),

  state(
    ZOOM_ANIMATIONS.zoomDecreaseOut,
    style({
      opacity: 0,
      transform: 'scale(0.7)',
    })
  ),

  transition('* => decrease-out',
  [
    style({
      opacity: 1,
      transform: 'scale(1)'
    }),
    animate('600ms 0s ease-out'),
  ]),
]);
