import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PaymentDialogComponent } from 'src/app/components/payment-dialog/payment-dialog.component';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { AuthService } from 'src/app/services/auth.service';
import { ICourse } from '../pages.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public isLogged:boolean = false;
  public courses: ICourse[];

  constructor(
    private router: Router,
    private authService: AuthService,
    public dialog: MatDialog,
    private translate: TranslatePipe,
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

  public openPayment(): void {
    this.dialog.open(PaymentDialogComponent,{
      width: '40vw'
    });
  }

  public setMockData(): boolean{

    const MOCK_DATA: ICourse[] = [
      {
        name:'Kanban',
        icon:'mdi mdi-trello',
        totalTime:30,
        description:'',
        modules:[
          {
            name: this.translate.transform('courses_screen.what_is') + ' Kanban',
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.advantages') + ' Kanban',
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.implement_in_my_company'),
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.increase_produtivity'),
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.tips'),
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
            name: this.translate.transform('courses_screen.what_is') + ' Scrum',
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.advantages') + ' Scrum',
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.implement_in_my_company'),
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.increase_produtivity'),
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.tips'),
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
            name: this.translate.transform('courses_screen.what_is') + ' XP',
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.advantages') + ' XP',
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.implement_in_my_company'),
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.increase_produtivity'),
            classes:[]
          },
          {
            name:this.translate.transform('courses_screen.tips'),
            classes:[]
          },
        ]
      },
    ];

    this.courses = MOCK_DATA;
    
    return true;
  }
}
