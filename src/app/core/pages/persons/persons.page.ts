import { Component } from "@angular/core";
import { ICheckBoxOption, ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { IPerson } from "../../../entities";
import { PersonService } from "../../services/person.service";

@Component({
    selector: "mf-persons.page",
    templateUrl: "./persons.page.html",
    styleUrls: ["./persons.page.less"]
})
export class PersonsPage {

    public JSON = JSON;
    public Layout = Layout;

    public personOptions: ISelectableOption<IPerson>[] = [];
    public selectedPersons: IPerson[] = [];

    public layoutOptions: ISelectableOption<Layout>[] = [];
    public selectedPersonLayout: Layout[] = []; //[Layout.Vertical];

    public cardMessage: string = "";

    public optionsCheckBox: ICheckBoxOption[] = [
        { title: "option1", checked: false },
        { title: "option2", checked: true },
        { title: "option3", checked: false },
        { title: "option4", checked: false }
    ];

    constructor(
        public personService: PersonService
    ) { }

    public ngOnInit(): void {

        this.layoutOptions.push({
            title: Layout.Horizontal,
            value: Layout.Horizontal
        });

        this.layoutOptions.push({
            title: Layout.Vertical,
            value: Layout.Vertical
        });

        if (this.personService.persons) {
            this.personOptions = this.personService.persons.map((person: IPerson) => {
                return {
                    title: person.name,
                    value: person
                };
            })
        }

        this.selectedPersons = this.personService.persons.length > 0 ?
            [this.personService.persons[0]]
            : [];
    }

    public onCardModeChanged(isEdit: boolean, index: number) {
        this.cardMessage = isEdit ?
            "Please, fill the data" :
            "Data saved";

        //this is how we can get index of *ngFor inside function
        // console.log(index);
    }

    public onSaveClicked(): void {
        this.personService.saveToStorage();
    }
}
