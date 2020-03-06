import { NgModule } from '@angular/core';
import { ContactUsComponent } from './contactUs.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleModule } from '../article/article.module';

const routes: Routes = [{ path:'', component: ContactUsComponent }];
@NgModule({
    imports: [ArticleModule, RouterModule.forChild(routes)],
    declarations:[ContactUsComponent],
    exports: [ContactUsComponent]
})
export class ContactUsModule {
}