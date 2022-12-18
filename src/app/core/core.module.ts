import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { PersonCardComponent } from "./components/person-card/person-card.component";
import { PersonsPage } from "./pages/persons/persons.page";
import { States } from "../constants";
import { NotFoundPage } from './pages/not-found/not-found.page';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioButtonIlyaComponent } from './components/radio-button-ilya/radio-button-ilya.component';
import { GenericMultiselectComponent } from './components/generic-radio-button/generic-multiselect.component'
import { DoublePipe } from "./pipes/double.pipe";
import { PersonService } from "./services/person.service";
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { RxjsComponent } from "./pages/rxjs/rxjs.page";
import { LoginPage } from './pages/login/login.page';
import { HttpClientModule } from '@angular/common/http';
import { FlexBasicsPage } from './pages/flex-basics/flex-basics.page';

const routes: Routes = [
    { path: States.persons, component: PersonsPage },
    { path: States.login, component: LoginPage },
    { path: States.rjxs, component: RxjsComponent },
    { path: States.radioButton, component: RadioButtonComponent },
    { path: States.personCard, component: PersonCardComponent },
    { path: States.flexBasics, component: FlexBasicsPage },
    { path: "**", component: NotFoundPage }
]

@NgModule({
    declarations: [
        PersonCardComponent,
        PersonsPage,
        NotFoundPage,
        RadioButtonComponent,
        RadioButtonIlyaComponent,
        GenericMultiselectComponent,
        DoublePipe,
        CheckBoxComponent,
        RxjsComponent,
        LoginPage,
        FlexBasicsPage
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes),
        HttpClientModule
    ],
    exports: [
        PersonCardComponent
    ]
})
export class CoreModule {
    constructor(
        personService: PersonService
    ) {
        personService.initialize();
    }
}
