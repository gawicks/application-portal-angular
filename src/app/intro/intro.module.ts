import { NgModule } from '@angular/core';
import { IntroComponent } from './intro.component';
import { Routes, RouterModule } from '@angular/router';

const introRoutes: Routes = [
    { path: '', component: IntroComponent }
]

@NgModule({
    imports: [RouterModule.forChild(introRoutes)],
    declarations: [IntroComponent],
    exports: [IntroComponent]
})
export class IntroModule {

}