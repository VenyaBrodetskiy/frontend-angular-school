import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector: "mf-radio-button",
    templateUrl: "./radio-button.component.html",
    styleUrls: ["./radio-button.component.less"]
})
export class RadioButtonComponent {

    private _defaultOptions: string[] = [
        "option1", "option2", "option3"
    ]
    private _defaultChecked: string = "option2";

    @Input() public radioOptions: string[] = this._defaultOptions;
    @Input() public radioChecked: string = this._defaultChecked

    @Output() public radioOptionsChange: EventEmitter<string[]> = new EventEmitter<string[]>();
    @Output() public radioCheckedChange: EventEmitter<string> = new EventEmitter<string>();

    public OnRadioChecked(value: string): void {
        this.radioChecked = value;
        this.radioCheckedChange.emit(this.radioChecked);
    }

}
