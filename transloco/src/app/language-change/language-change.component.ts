
import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { getBrowserLang } from '@ngneat/transloco';

@Component({
  selector: 'app-language-change',
  templateUrl: './language-change.component.html',
  styleUrls: ['./language-change.component.scss']
})
export class LanguageChangeComponent implements OnInit {

  constructor(private translocoService: TranslocoService) { 
  }

  ngOnInit() {
    console.log(getBrowserLang());
    this.switchTo(getBrowserLang());
  }

  public switchTo(lang: string)
  {
    console.log(lang);
    this.translocoService.setActiveLang(lang);
  }

  public submit()
  {
    console.log('form submitted');
  }
}
