import { Component, OnInit, Directive, ContentChild, QueryList, TemplateRef } from '@angular/core';

@Directive({selector: '[articleHeader]'})
  export class ArticleHeaderDirective {
    constructor(public template: TemplateRef<any>) { } 
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  @ContentChild(ArticleHeaderDirective, { static : true })
  public headerTemplate: ArticleHeaderDirective

  ngOnInit() {
  }

}

