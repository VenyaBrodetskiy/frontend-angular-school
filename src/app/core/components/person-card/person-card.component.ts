import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Gender } from "src/app/enums";

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
    @Input() personBirthday: Date | undefined;
    @Input() personSalary: number | undefined;
    @Input() radioButtonName: string = "defaultRadioButton";

    // need to make name of prop + Change. Then Angular will do banana in the box automatically
    @Output() personNameChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personIdChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personAddressChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personEmailChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personGenderChange: EventEmitter<string> = new EventEmitter<string>();
    @Output() personBirthdayChange: EventEmitter<Date> = new EventEmitter<Date>();
    @Output() personSalaryChange: EventEmitter<number> = new EventEmitter<number>();
    // naming convention: onSmth
    @Output() onModeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() onSaveClicked: EventEmitter<void> = new EventEmitter<void>();

    public buttonTitle: string = "";

    public ViewMode = ViewMode;

    public mode: ViewMode = ViewMode.ReadOnly;

    public genderOptions: string[] = [Gender.Male, Gender.Female];


    public JSON = JSON;

    constructor() {
        this.setButtonTitle();
        // console.log("Name in constructor: ", this.personName); // still null

    }

    public ngOnInit(): void {
        // console.log("Name in OnInit: ", this.personName); // here is set
    }

    public onToggleModeClick(): void {
        if (this.mode == ViewMode.Edit) {
            this.onSaveClicked.emit();
        }

        this.mode = this.mode === ViewMode.ReadOnly ? ViewMode.Edit : ViewMode.ReadOnly;
        this.setButtonTitle();
        this.onModeChange.emit(this.mode === ViewMode.Edit);
    }

    public onPersonNameChange(): void {
        this.personNameChange.emit(this.personName);
    }

    public onPersonIdChange(): void {
        this.personIdChange.emit(this.personId);
    }

    public onPersonAddressChange(): void {
        this.personAddressChange.emit(this.personAddress);
    }

    public onPersonEmailChange(): void {
        this.personEmailChange.emit(this.personEmail);
    }

    public onPersonGenderChange(): void {
        this.personGenderChange.emit(this.personGender);
    }

    public onPersonBirthdayChange(): void {
        this.personBirthdayChange.emit(this.personBirthday);
    }

    public onPersonSalaryChange(): void {
        this.personSalaryChange.emit(this.personSalary);
    }

    private setButtonTitle() {
        this.buttonTitle = this.mode === ViewMode.ReadOnly ? Edit : Save;
    }
}
