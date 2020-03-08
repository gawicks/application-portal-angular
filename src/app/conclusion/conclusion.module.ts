import { NgModule } from '@angular/core';
import { ConclusionComponent } from './conclusion.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
const conclusionRoutes: Routes = [
    { path: '', component: ConclusionComponent,
        children: [
            { path: 'contactUs', loadChildren : () => import('../contactUs/contactUs.module').then(m => m.ContactUsModule)},
            { path: 'ourProjects', loadChildren : () => import('../ourProjects/ourProjects.module').then(m => m.OurProjectsModule)},
            { path: 'ourServices', loadChildren : () => import('../ourServices/ourServices.module').then(m => m.OurServicesModule)}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(conclusionRoutes), 
        MatTabsModule, 
        CommonModule
    ],
    declarations: [ConclusionComponent],
    exports: [ConclusionComponent]
})
export class ConclusionModule {

}