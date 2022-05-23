import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ICourse } from '../pages.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public isLogged:boolean = false;

  public MOCK_DATA: ICourse[] = [
    {
      name:'Kanban',
      icon:'mdi mdi-trello',
      totalTime:30,
      description:'',
      modules:[
        {
          name:'O que é Kanban?',
          classes:[]
        },
        {
          name:'Vantagens de utilizar Kanbam',
          classes:[]
        },
        {
          name:'Como implementar Kamban na minha empresa?',
          classes:[]
        },
        {
          name:'Aumentando a produtividade do meu time',
          classes:[]
        },
        {
          name:'Dicas e ferramentas',
          classes:[]
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
          classes:[]
        },
        {
          name:'Vantagens de utilizar Scrum',
          classes:[]
        },
        {
          name:'Como implementar Scrum na minha empresa?',
          classes:[]
        },
        {
          name:'Aumentando a produtividade do meu time',
          classes:[]
        },
        {
          name:'Dicas e ferramentas',
          classes:[]
        },
      ]
    },
    {
      name:'XP',
      icon:'mdi mdi-chart-timeline',
      totalTime:30,
      description:'',
      modules:[
        {
          name:'O que é Extreme Progamming?',
          classes:[]
        },
        {
          name:'Vantagens de utilizar Extreme Progamming',
          classes:[]
        },
        {
          name:'Como implementar Extreme Progamming na minha empresa?',
          classes:[]
        },
        {
          name:'Aumentando a produtividade do meu time',
          classes:[]
        },
        {
          name:'Dicas e ferramentas',
          classes:[]
        },
      ]
    },
  ];

  public courses: ICourse[] = this.MOCK_DATA;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.authService.isAuthenticate.subscribe((isAuth) => {
      this.isLogged = isAuth;
    });   
  }

  public goToCourse(): void{
    this.router.navigateByUrl('class');
  }

}
