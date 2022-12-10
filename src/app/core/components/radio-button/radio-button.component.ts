import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ISelectableOption } from "src/app/entities";

@Component({
    selector: "mf-radio-button",
    templateUrl: "./radio-button.component.html",
    styleUrls: ["./radio-button.component.less"]
})
export class RadioButtonComponent {

    private _defaultOptions: ISelectableOption<string>[] = [
        {
            title: "option1",
            value: "opt1"
        },
        {
            title: "option2",
            value: "opt2"
        },
        {
            title: "option3",
            value: "opt3"
        }
    ]
    private _defaultOptions2: ISelectableOption<number>[] = [
        {
            title: "option0",
            value: 1
        },
        {
            title: "option1",
            value: 2
        },
        {
            title: "option2",
            value: 3
        }
    ]
    private _defaultChecked: string = "opt2";
    private _defaultChecked2: number = 2;


    @Input() public radioOptions: ISelectableOption<unknown>[] = this._defaultOptions2;
    @Input() public radioValue: unknown = this._defaultChecked2;

    @Output() public radioOptionsChange: EventEmitter<ISelectableOption<unknown>[]> = new EventEmitter<ISelectableOption<unknown>[]>();
    @Output() public radioCheckedChange: EventEmitter<unknown> = new EventEmitter<unknown>();

    public OnRadioChecked(checkedOption: unknown): void {
        this.radioValue = checkedOption;
        this.radioCheckedChange.emit(this.radioValue);
        console.log("new radioValue:", this.radioValue);
    }

}
