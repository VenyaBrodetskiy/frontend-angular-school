import { Component } from "@angular/core";

interface IPerson {
    name: string;
    id: string;
    address: string;
    email: string;
}
@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.less"]
})
export class AppComponent {
    title = "frontend-nodejs-school";

    public myProperty: string = "Hooray!";
    public htmlProperty: string = "<i>La-la!!</i>"

    public person: IPerson = {
        name: "Venya",
        id: "1",
        address: "HaNeemanim",
        email: "my@email.com"
    }

    public cardMessage: string = "";

    public onClickMeClick(): void {
        this.myProperty = 'Other data';
    }

    public onCardModeChanged(isEdit: boolean) {
        this.cardMessage = isEdit ? "Please, fill the data" : "Data saved";
    }
}
