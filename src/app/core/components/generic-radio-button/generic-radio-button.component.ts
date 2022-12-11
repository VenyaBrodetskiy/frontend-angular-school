import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { v4 as uuidv4 } from "uuid";

@Component({
    selector: "mf-generic-radio-button",
    templateUrl: "./generic-radio-button.component.html",
    styleUrls: ["./generic-radio-button.component.less"]
})
export class GenericRadioButtonComponent<T> implements OnInit {

    @Input() public value: T | undefined;
    @Input() public options: ISelectableOption<T>[] = [];
    @Input() public layout: Layout = Layout.Vertical;

    @Output() public valueChange: EventEmitter<T> = new EventEmitter<T>();

    public Layout = Layout;

    public unique: string = uuidv4();

    constructor(
        private element: ElementRef
    ) { }

    public ngOnInit(): void {
        console.log(this.element);
    }

    public onChange() {
        this.valueChange.emit(this.value);

    }
}
