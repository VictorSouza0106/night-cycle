import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

// TODO adicionar isso na documentação
// Padronização de nomes para padronização
// NOME ANIMAÇÃO - DIRECTION - IN / OUT

export const SLIDE_ANIMATIONS = {
  slideUpIn: 'up-in',
  slideUpOut: 'up-out',
  slideDownIn: 'down-in',
  slideDownOut: 'down-out',
  slideLeftIn: 'left-in',
  slideLeftOut: 'left-out',
  slideRightIn: 'right-in',
  slideRightOut: 'right-out',
  slideHidden: 'hidden'
};

export const SLIDE = trigger('slide', [  
  state(
    SLIDE_ANIMATIONS.slideHidden,
    style({
      opacity: 0,
    })
  ),

  // UP ANIMATION
  state(
    SLIDE_ANIMATIONS.slideUpIn,
    style({
      opacity: 1,
      transform: 'translate(0PX)',
    })
  ),

  transition('* => up-in', [
    style({ 
      opacity: 0, 
      transform: 'translateY(40px)'
    }),
    animate('600ms 0s ease-out'),
  ]),

  state(
    SLIDE_ANIMATIONS.slideUpOut,
    style({
      opacity: 0,
      transform: 'translateY(40PX)',
    })
  ),

  transition('* => up-in', [
    style({ 
      opacity: 1,
    }),
    animate('600ms 0s ease-out'),
  ]),

  // DOWN ANIMATION

  state(
    SLIDE_ANIMATIONS.slideDownIn,
    style({
      opacity: 1,
      transform: 'translate(0PX)',
    })
  ),

  transition('* => down-in', [
    style({ 
      opacity: 0, 
      transform: 'translateY(-40px)'
    }),
    animate('600ms 0s ease-out'),
  ]),

  state(
    SLIDE_ANIMATIONS.slideDownOut,
    style({
      opacity: 0,
      transform: 'translateY(-40PX)',
    })
  ),

  transition('* => down-out', [
    style({ 
      opacity: 1,
    }),
    animate('600ms 0s ease-out'),
  ]),

  // LEFT ANIMATION

  state(
    SLIDE_ANIMATIONS.slideLeftIn,
    style({
      opacity: 1,
      transform: 'translate(0PX)',
    })
  ),

  transition('* => left-in', [
    style({ 
      opacity: 0, 
      transform: 'translateX(-40px)'
    }),
    animate('600ms 0s ease-out'),
  ]),

  state(
    SLIDE_ANIMATIONS.slideLeftOut,
    style({
      opacity: 0,
      transform: 'translateX(-40PX)',
    })
  ),

  transition('* => left-out', [
    style({ 
      opacity: 1,
    }),
    animate('600ms 0s ease-out'),
  ]),

  // RIGHT ANIMATION

  state(
    SLIDE_ANIMATIONS.slideRightIn,
    style({
      opacity: 1,
      transform: 'translate(0PX)',
    })
  ),

  transition('* => right-in', [
    style({ 
      opacity: 0, 
      transform: 'translateX(40px)'
    }),
    animate('600ms 0s ease-out'),
  ]),

  state(
    SLIDE_ANIMATIONS.slideRightOut,
    style({
      opacity: 0,
      transform: 'translateX(40PX)',
    })
  ),

  transition('* => right-out', [
    style({ 
      opacity: 1,
    }),
    animate('600ms 0s ease-out'),
  ]),
]);