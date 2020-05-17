import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrls: ['./language-change.component.scss']
})
export class LanguageChangeComponent implements OnInit {

  public currentLang="en";

  constructor(private translocoService: TranslocoService) { 

  }

  ngOnInit() {
  }

  public switchTo(lang: string)
  {
    console.log(lang);
    this.currentLang = lang;
    this.translocoService.setActiveLang(lang);
  }

  public submit()
  {
    console.log('form submitted');
  }
}
