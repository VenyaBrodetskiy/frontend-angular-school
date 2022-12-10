import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

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
export class PersonCardComponent implements OnInit {
    @Input() personName: string = "defaultName";
    @Input() personId: string = "defaultId";
    @Input() personAddress: string = "defaultAddr";
    @Input() personEmail: string = "defaultEmail";
    @Input() personGender: string = "defaultGender";
    @Input() radioButtonName: string = "defaultRadioButton";

    // need to make name of prop + Change. Then Angular will do banana in the box automatically
    @Output() personNameChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personIdChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personAddressChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personEmailChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personGenderChange: EventEmitter<string> = new EventEmitter<string>();
    // naming convention: onSmth
    @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onSaveClicked: EventEmitter<void> = new EventEmitter<void>();

    public buttonTitle: string = "";

    public ViewMode = ViewMode;

    public mode: ViewMode = ViewMode.ReadOnly;

    public listOfGenders: string[] = [
        "Male", "Female"
    ];

    public JSON = JSON;

    constructor() {
        this.setButtonTitle();
        console.log("Name in constructor: ", this.personName);

    }

    public ngOnInit(): void {
        console.log("Name in OnInit: ", this.personName);
    }

    public onToggleModeClick(): void {
        if (this.mode == ViewMode.Edit) {
            this.onSaveClicked.emit();
        }

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

    public OnPersonGenderChange(): void {
        this.personGenderChange.emit(this.personGender);
    }

    private setButtonTitle() {
        this.buttonTitle = this.mode === ViewMode.ReadOnly ? Edit : Save;
    }
}
