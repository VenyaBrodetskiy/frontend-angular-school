import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ICheckBoxOption } from "src/app/entities";
import { v4 as uuidv4 } from "uuid";

@Component({
    selector: "mf-check-box",
    templateUrl: "./check-box.component.html",
    styleUrls: ["./check-box.component.less"]
})
export class CheckBoxComponent {
    @Input() options: ICheckBoxOption[] = [];

    @Output() optionsChange: EventEmitter<ICheckBoxOption[]> = new EventEmitter<ICheckBoxOption[]>();
    public unique: string = uuidv4();

    public onChange(index: number): void {
        this.options[index].checked = !this.options[index].checked;
        this.optionsChange.emit(this.options);
    }

}
