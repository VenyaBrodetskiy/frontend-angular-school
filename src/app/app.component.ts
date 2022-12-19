import { LayoutService } from './services/layout.service';
import { Component, Inject } from "@angular/core";
import { States } from "./constants";
import { DOCUMENT } from '@angular/common';
import { LayoutDirection } from './enums';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent {
    public States = States;

    public title: string = "frontend-nodejs-school";

    constructor(
        // way to give to app.component power to change index.ts
        @Inject(DOCUMENT) private _document: Document,
        public layoutService: LayoutService
    ) {
        this.alignUi();
    }

    public onChangeDirectionClick(): void {
        this.layoutService.layoutDirection = this.layoutService.layoutDirection === LayoutDirection.Ltr ? LayoutDirection.Rtl : LayoutDirection.Ltr;
        this.alignUi();

    }

    private alignUi() {
        this._document.getElementById("mf-body")!.style.direction = this.layoutService.layoutDirection === LayoutDirection.Rtl ? "rtl" : "ltr";;
    }

}
