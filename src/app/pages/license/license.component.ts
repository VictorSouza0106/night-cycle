import { Component, OnInit } from '@angular/core';
import { ILicense } from '../pages.interface';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.scss']
})
export class LicenseComponent implements OnInit {

  // TODO Delete Mock Data
  public MOCK_DATA: ILicense[] = [
    {
      name: 'Midnight',
      price: '69,00',
      icon: 'mdi mdi-moon-waxing-crescent',
      color:'#497bfa',
      featuresAvailable:[
        {
          label:'Cursos sobre metodologias ágeis',
          permission: true
        },
        {
          label:'Meio e modelos de implantação',
          permission: true
        },
        {
          label:'Suporte ao cliente',
          permission: true
        },
        {
          label:'Relatório de progresso',
          permission: false
        },
        {
          label:'Consultoria 24h',
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
          label:'Cursos sobre metodologias ágeis',
          permission: true,
        },
        {
          label:'Meio e modelos de implantação',
          permission: true,
        },
        {
          label:'Suporte ao cliente',
          permission: true,
        },
        {
          label:'Relatório de progresso',
          permission: true,
        },
        {
          label:'Consultoria 24h',
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
          label:'Cursos sobre metodologias ágeis',
          permission: true
        },
        {
          label:'Meio e modelos de implantação',
          permission: true
        },
        {
          label:'Suporte ao cliente',
          permission: true
        },
        {
          label:'Relatório de progresso',
          permission: true,
        },
        {
          label:'Consultoria 24h',
          permission: true,
        },
      ]
    },
  ];

  public licenses: ILicense[] = this.MOCK_DATA;

  // constructor() { }

  ngOnInit(): void {
    this.downloadLicenses();
  }

  private downloadLicenses(): void{
    console.log('Not implemented -> DownloadLicenses');
  }

}
