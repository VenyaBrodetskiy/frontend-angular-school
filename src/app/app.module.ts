import { LayoutService } from './services/layout.service';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CoreModule,
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    exports: [
        FormsModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { };
