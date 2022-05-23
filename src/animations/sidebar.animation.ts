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
  
  export const SIDEBAR_ANIMATION = {
    hidden: 'hidden',
    closed: 'closed',
    opened: 'opened'
  };
  
  export const SIDEBAR = trigger('sidebar', [
  
    // OPEN ANIMATION
    state(
      SIDEBAR_ANIMATION.opened,
      style({
        width:0,
      })
    ),
  
    transition('closed => opened', [
      style({
        width: window.innerWidth * 0.35,
      }),
      animate('600ms 0s ease-out'),
    ]),

    // CLOSE ANIMATION    
    transition('opened => closed', [
    style({
        width: 0,
    }),
    animate('600ms 0s ease-out'),
    ]),
  ]);