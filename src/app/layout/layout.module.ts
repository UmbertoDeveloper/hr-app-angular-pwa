import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StickyHeaderDirective } from "../directives/sticky-header.directive";
import { LeftSideBarToggleService } from "../services/side-bar-toggle";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MainContentComponent } from "./main-content/main-content.component";
import { UserContentLayoutComponent } from "./main-content/user-main-content-layout/user-content-layout/user-content-layout.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavContainer } from "@angular/material/sidenav";



@NgModule({
    exports: [HeaderComponent,UserContentLayoutComponent,FooterComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatSidenavContainer
    ],
    declarations: [HeaderComponent, FooterComponent, MainContentComponent, StickyHeaderDirective, UserContentLayoutComponent],
    providers: [LeftSideBarToggleService]
})


export class LayoutModule { }