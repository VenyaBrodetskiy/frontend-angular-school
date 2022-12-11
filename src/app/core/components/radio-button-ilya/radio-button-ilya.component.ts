import { Component, EventEmitter, Input, Output } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Component({
    selector: "mf-radio-button-ilya",
    templateUrl: "./radio-button-ilya.component.html",
    styleUrls: ["./radio-button-ilya.component.less"]
})
export class RadioButtonIlyaComponent {
    @Input() public value: string = "";
    @Input() public options: string[] = [];

    @Output() public valueChange: EventEmitter<string> = new EventEmitter<string>();

    public unique: string = uuidv4();

    public onChange() {
        this.valueChange.emit(this.value);
    }
}
