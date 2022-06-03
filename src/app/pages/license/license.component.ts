import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from 'src/app/components/payment-dialog/payment-dialog.component';
import { TranslatePipe } from 'src/app/pipes/translate.pipe';
import { ILicense } from '../pages.interface';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {

  // TODO Delete Mock Data

  public licenses: ILicense[];

  constructor(
    private translate: TranslatePipe,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.downloadLicenses();
  }

  private downloadLicenses(): void{
    console.log('Not implemented -> DownloadLicenses');
  }

  public openPayment(): void {
    this.dialog.open(PaymentDialogComponent,{
      width: '40vw'
    });
  }

  public setMockData(): boolean {
    const MOCK_DATA: ILicense[] = [
      {
        name: 'Midnight',
        price: '69,00',
        icon: 'mdi mdi-moon-waxing-crescent',
        color:'#497bfa',
        featuresAvailable:[
          {
            label:this.translate.transform('plans.about_courses'),
            permission: true
          },
          {
            label:this.translate.transform('plans.model_implementantion'),
            permission: true
          },
          {
            label:this.translate.transform('plans.suport'),
            permission: true
          },
          {
            label:this.translate.transform('plans.reports'),
            permission: false
          },
          {
            label:this.translate.transform('plans.consultancy'),
            permission: false
          },
        ]
      },
      {
        name: 'Dawn Cycle',
        price: '137,00',
        icon: 'mdi mdi-moon-waxing-gibbous',
        color:'#0048ff',
        featuresAvailable:[
          {
            label:this.translate.transform('plans.about_courses'),
            permission: true,
          },
          {
            label:this.translate.transform('plans.model_implementantion'),
            permission: true,
          },
          {
            label:this.translate.transform('plans.suport'),
            permission: true,
          },
          {
            label:this.translate.transform('plans.reports'),
            permission: true,
          },
          {
            label:this.translate.transform('plans.consultancy'),
            permission: false,
          },
        ]
      },
      {
        name: 'Night Cycle',
        price: '218,00',
        icon:'mdi mdi-brightness-4',
        color:'#002685',
        featuresAvailable:[
          {
            label:this.translate.transform('plans.about_courses'),
            permission: true
          },
          {
            label:this.translate.transform('plans.model_implementantion'),
            permission: true
          },
          {
            label:this.translate.transform('plans.suport'),
            permission: true
          },
          {
            label:this.translate.transform('plans.reports'),
            permission: true,
          },
          {
            label:this.translate.transform('plans.consultancy'),
            permission: true,
          },
        ]
      },
    ];
    this.licenses = MOCK_DATA;

    return true;
  }


}
