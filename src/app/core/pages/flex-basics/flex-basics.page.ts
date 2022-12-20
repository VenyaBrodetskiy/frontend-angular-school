import { LayoutService } from './../../../services/layout.service';
import { Component } from "@angular/core";
import { BasePage } from "../base.page";
import { States } from 'src/app/constants';

@Component({
    templateUrl: "./flex-basics.page.html",
    styleUrls: ["./flex-basics.page.less"]
})
export class FlexBasicsPage extends BasePage {
    private X = {};

    constructor(
        layoutService: LayoutService
    ) {
        super(layoutService, States.flexBasics);
    }

    protected initialize(): void {
        // this is just to generate exception, here no meaning in code
        (this.X as any).raise.error = "12";
    }

}
