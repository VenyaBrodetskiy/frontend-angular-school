import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from "@angular/core";
import { ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { v4 as uuidv4 } from "uuid";

@Component({
    selector: "mf-generic-radio-button",
    templateUrl: "./generic-radio-button.component.html",
    styleUrls: ["./generic-radio-button.component.less"]
})
export class GenericRadioButtonComponent<T> implements OnInit, AfterViewInit {

    @Input() public value: T | undefined;
    @Input() public options: ISelectableOption<T>[] = [];
    @Input() public layout: Layout = Layout.Vertical;
    @Input() public isMultiselect: boolean = false;

    @Output() public valueChange: EventEmitter<T> = new EventEmitter<T>();

    @ViewChild("optionsWrapper") optionsWrapper: ElementRef | undefined;

    public Layout = Layout;

    public unique: string = uuidv4();

    constructor(
        private element: ElementRef
    ) { }

    public ngOnInit(): void {
        console.log(this.element);
    }

    public ngAfterViewInit(): void {
        console.log(this.optionsWrapper);

        const wrapper: HTMLDivElement = this.optionsWrapper?.nativeElement;
        wrapper.style.backgroundColor = "silver";
    }

    public onChange() {
        this.valueChange.emit(this.value);

    }
}
