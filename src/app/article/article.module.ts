import { NgModule } from '@angular/core';
import { ArticleComponent, ArticleHeaderDirective } from './article.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ArticleComponent, ArticleHeaderDirective],
    exports: [ArticleComponent, ArticleHeaderDirective]
})
export class ArticleModule {

}