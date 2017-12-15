import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicPageModule } from 'ionic-angular/module';
// import { SideMenuContentComponent } from "../../../shared/side-menu-content/side-menu-content.component";
// import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomeModule {
    
};