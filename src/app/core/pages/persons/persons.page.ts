import { Component } from "@angular/core";
import { LocalStorageKeys } from "src/app/constants";
import { ISelectableOption } from "src/app/entities";
import { Layout } from "src/app/enums";
import { LocalStorageService } from "../../services/local-storage.service";

interface IPerson {
    name: string;
    id: string;
    address: string;
    email: string;
    gender: string;
    birthdate: Date;
    salary: number;
}

@Component({
    selector: "mf-persons.page",
    templateUrl: "./persons.page.html",
    styleUrls: ["./persons.page.less"]
})
export class PersonsPage {

    public myProperty: string = "Hooray!";
    public htmlProperty: string = "<i>La-la!!</i>";

    public JSON = JSON;
    public Layout = Layout;

    public persons: IPerson[] | null =
        [
            {
                name: "Venya",
                id: "1",
                address: "HaNeemanim",
                email: "my@email.com",
                gender: "Male",
                birthdate: new Date(1980, 1, 1),
                salary: 10000
            },
            {
                name: "John",
                id: "2",
                address: "Haifa",
                email: "my2@email.com",
                gender: "Male",
                birthdate: new Date(1990, 2, 2),
                salary: 15000
            }
        ];
    public personOptions: ISelectableOption<IPerson>[] = [];
    public selectedPerson: IPerson | null = null;

    public layoutOptions: ISelectableOption<Layout>[] = [];
    public selectedPersonLayout: Layout = Layout.Vertical;

    public cardMessage: string = "";

    constructor(
        private localStorageService: LocalStorageService
    ) {

    }
    public ngOnInit(): void {

        this.layoutOptions.push({
            title: Layout.Horizontal,
            value: Layout.Horizontal
        });

        this.layoutOptions.push({
            title: Layout.Vertical,
            value: Layout.Vertical
        });

        // this.persons = this.localStorageService.get(LocalStorageKeys.PERSONS);

        if (this.persons) {
            this.personOptions = this.persons.map((person: IPerson) => {
                return {
                    title: person.name,
                    value: person
                };
            })
        }
    }

    public onClickMeClick(): void {
        this.myProperty = 'Other data';
    }

    public onCardModeChanged(isEdit: boolean, index: number) {
        this.cardMessage = isEdit ?
            "Please, fill the data" :
            "Data saved";

        //this is how we can get index of *ngFor inside function
        // console.log(index);
    }

    public onSaveClicked(): void {
        // console.log("Save Clicked");
        this.localStorageService.set(LocalStorageKeys.PERSONS, this.persons);
    }
}
