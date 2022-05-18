import { Component, OnInit } from '@angular/core';
import { ICourse } from '../pages.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public MOCK_DATA: ICourse[] = [
    {
      name:'Kanban',
      icon:'mdi mdi-trello',
      totalTime:30,
      description:'',
      modules:[
        {
          name:'O que é Kanban?',
          class:[]
        },
        {
          name:'Vantagens de utilizar Kanbam',
          class:[]
        },
        {
          name:'Como implementar Kamban na minha empresa?',
          class:[]
        },
        {
          name:'Aumentando a produtividade do meu time',
          class:[]
        },
        {
          name:'Dicas e ferramentas',
          class:[]
        },
      ]
    },
    {
      name:'Scrum',
      icon:'mdi mdi-arrow-decision',
      totalTime:40,
      description:'',
      modules:[
        {
          name:'O que é Scrum?',
          class:[]
        },
        {
          name:'Vantagens de utilizar Scrum',
          class:[]
        },
        {
          name:'Como implementar Scrum na minha empresa?',
          class:[]
        },
        {
          name:'Aumentando a produtividade do meu time',
          class:[]
        },
        {
          name:'Dicas e ferramentas',
          class:[]
        },
      ]
    },
    {
      name:'Extreme Progamming',
      icon:'mdi chart-timeline',
      totalTime:30,
      description:'',
      modules:[
        {
          name:'O que é Extreme Progamming?',
          class:[]
        },
        {
          name:'Vantagens de utilizar Extreme Progamming',
          class:[]
        },
        {
          name:'Como implementar Extreme Progamming na minha empresa?',
          class:[]
        },
        {
          name:'Aumentando a produtividade do meu time',
          class:[]
        },
        {
          name:'Dicas e ferramentas',
          class:[]
        },
      ]
    },
  ];

  public courses: ICourse[] = this.MOCK_DATA;

  // constructor() { }

  ngOnInit(): void {
    console.log('');
    
  }

}
