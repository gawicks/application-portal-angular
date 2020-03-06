import { NgModule } from '@angular/core';
import { OurServicesComponent } from './ourServices.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleModule } from '../article/article.module';

const routes: Routes = [{path: '', component: OurServicesComponent } ]
@NgModule({
    imports: [RouterModule.forChild(routes), ArticleModule],
    declarations:[OurServicesComponent],
    exports: [OurServicesComponent]
})
export class OurServicesModule {
}