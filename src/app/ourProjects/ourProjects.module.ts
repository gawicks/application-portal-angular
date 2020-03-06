import { NgModule } from '@angular/core';
import { OurProjectsComponent } from './ourProjects.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleModule } from '../article/article.module';

const routes: Routes = [{path: '', component: OurProjectsComponent } ]

@NgModule({
    imports: [RouterModule.forChild(routes), ArticleModule],
    declarations:[OurProjectsComponent],
    exports: [OurProjectsComponent]
})
export class OurProjectsModule {
}