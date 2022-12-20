import { Subscription } from 'rxjs';
import { LayoutService } from './../../../services/layout.service';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ICheckBoxOption, ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { IPerson } from "../../../entities";
import { PersonService } from "../../services/person.service";
import { BasePage } from '../base.page';
import { States } from 'src/app/constants';

@Component({
    selector: "mf-persons.page",
    templateUrl: "./persons.page.html",
    styleUrls: ["./persons.page.less"]
})
export class PersonsPage extends BasePage {

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

    public filteredPersons: IPerson[] = [];
    public filteredPersonBy = "";

    constructor(
        public personService: PersonService,
        layoutService: LayoutService
    ) {
        super(layoutService, States.persons);

        layoutService.footerMessage = "now we are on persons page";

    }

    protected initialize(): void {

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

        this.filteredPersons = this.personService.persons;
    }

    public onCardModeChanged(isEdit: boolean, index: number) {
        this.cardMessage = isEdit ?
            "Please, fill the data" :
            "Data saved";

        //this is how we can get index of *ngFor inside function
        // console.log(index);
    }

    public onSaveClicked(): void {
        this.personService.save();
    }

    public onFilterPersonChange(): void {
        const filterBy: string = this.filteredPersonBy.toLowerCase();
        this.filteredPersons = this.personService.persons.filter((person: IPerson) => {
            return person.name.toLowerCase().indexOf(filterBy) > -1 || person.email.toLowerCase().indexOf(filterBy);
        })
    }
}
