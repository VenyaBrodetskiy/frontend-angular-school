import { Component, EventEmitter, Input, Output } from "@angular/core";

interface IRadioChecked {
    id: string;
    value: string;
}

@Component({
    selector: "mf-radio-button",
    templateUrl: "./radio-button.component.html",
    styleUrls: ["./radio-button.component.less"]
})
export class RadioButtonComponent {

    private _defaultOptions: string[] = [
        "option1", "option2", "option3"
    ]

    @Input() public radioOptions: string[] = this._defaultOptions;

    @Output() public radioOptionsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
    @Output() public onChecked: EventEmitter<IRadioChecked> = new EventEmitter<IRadioChecked>();

    public OnRadioChecked(id: string, value: string): void {
        this.onChecked.emit({ id: id, value: value });
    }

}
