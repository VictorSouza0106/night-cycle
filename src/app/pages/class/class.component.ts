import { Component, OnInit } from '@angular/core';
import { SIDEBAR, SIDEBAR_ANIMATION } from 'src/animations/sidebar.animation';
import { IClass, IModule } from '../pages.interface';
const {closed, opened} = SIDEBAR_ANIMATION;

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  animations:[SIDEBAR]
})
export class ClassComponent implements OnInit {

  public sideBarState: string = closed;
  public blockTextStyle: boolean = false;
  public showModuleList: boolean = true;

  public openedModuleIndex: number = 2;

  public MOCK_CLASSES: IClass[] = [
    {name:'First Class',duration:25},
    {name:'Second Class',duration: 20},
    {name:'Third Class',duration: 35},
    {name:'Fourth Class',duration: 12},
    {name:'Fifh Class',duration: 26},
  ];

  public MOCK_DATA: IModule[] = [
    {
      name:'O que é Extreme Progamming?',
      classes:this.MOCK_CLASSES
    },
    {
      name:'Vantagens de utilizar Extreme Progamming',
      classes:this.MOCK_CLASSES
    },
    {
      name:'Como implementar Extreme Progamming na minha empresa?',
      classes:this.MOCK_CLASSES
    },
    {
      name:'Aumentando a produtividade do meu time',
      classes:this.MOCK_CLASSES
    },
    {
      name:'Dicas e ferramentas',
      classes:this.MOCK_CLASSES
    },
  ];
  

  public modules: IModule[] = this.MOCK_DATA;

  // constructor() { }

  ngOnInit(): void {
    console.log('');
    
  }

  public changeState(): void{
    if (this.sideBarState === closed)
      this.sideBarState = opened;
    else
      this.sideBarState = closed;
  }

  public animationState(state: boolean): void{
    
    // this.showClassList = state;
    this.blockTextStyle = state;
  }
  
  public setSelectedModule(index: number): void {

    if (index === this.openedModuleIndex)
      this.openedModuleIndex = -1;
    else
      this.openedModuleIndex = index;
  }

}
