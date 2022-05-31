import { Injectable } from '@angular/core';
import { langPt } from '../../translates/pt-BR';
import { langEn } from '../../translates/en-US';

@Injectable()
export class TranslateService {

  data: any = {};

  use(lang: string): Promise<object> {
    return new Promise<object>((resolve) => {
      let langData: object;
      if(lang === 'en-US')
        langData = langEn;
      else
        langData = langPt;

      this.data = langData;
      console.log('DATA', this.data);
      
      resolve(langData);
    });
  }

}
