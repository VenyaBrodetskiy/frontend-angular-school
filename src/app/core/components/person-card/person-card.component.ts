import { Component, EventEmitter, Input, Output } from "@angular/core";

enum ViewMode {
    ReadOnly,
    Edit
};

const Edit: string = "Edit";
const Save: string = "Save";

@Component({
    selector: "mf-person-card",
    templateUrl: "./person-card.component.html",
    styleUrls: ["./person-card.component.less"]
})
export class PersonCardComponent {
    @Input() personName: string = "";
    @Input() personId: string = "";
    @Input() personAddress: string = "";
    @Input() personEmail: string = "";

    // need to make name of prop + Change. Then Angular will do banana in the box automatically
    @Output() personNameChange: EventEmitter<string> = new EventEmitter<string>;
    @Output() personIdChange: EventEmitter<string> = new EventEmitter<string>;
    @Output() personAddressChange: EventEmitter<string> = new EventEmitter<string>;
    @Output() personEmailChange: EventEmitter<string> = new EventEmitter<string>;
    // naming convention: onSmth
    @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    public buttonTitle: string = "";

    public ViewMode = ViewMode;

    public mode: ViewMode = ViewMode.ReadOnly;

    constructor() {
        this.setButtonTitle();
    }

    public onToggleModeClick(): void {
        this.mode = this.mode === ViewMode.ReadOnly ? ViewMode.Edit : ViewMode.ReadOnly;
        this.setButtonTitle();
        this.onModeChange.emit(this.mode === ViewMode.Edit);
    }

    public OnPersonNameChange(): void {
        this.personNameChange.emit(this.personName);
    }

    public OnPersonIdChange(): void {
        this.personIdChange.emit(this.personId);
    }

    public OnPersonAddressChange(): void {
        this.personAddressChange.emit(this.personAddress);
    }

    public OnPersonEmailChange(): void {
        this.personEmailChange.emit(this.personEmail);
    }

    private setButtonTitle() {
        this.buttonTitle = this.mode === ViewMode.ReadOnly ? Edit : Save;
    }
}
