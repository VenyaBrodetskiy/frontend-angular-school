import { LayoutService } from './services/layout.service';
import { Component } from "@angular/core";
import { States } from "./constants";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent {
    public States = States;

    public title: string = "frontend-nodejs-school";
    public isRtl: boolean = false;

    constructor(
        public layoutService: LayoutService
    ) {

    }
}
