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
import { GenericRadioButtonComponent } from './components/generic-radio-button/generic-radio-button.component'

const routes: Routes = [
    { path: States.persons, component: PersonsPage },
    { path: States.radioButton, component: RadioButtonComponent },
    { path: States.personCard, component: PersonCardComponent },
    { path: "**", component: NotFoundPage }
]

@NgModule({
    declarations: [
        PersonCardComponent,
        PersonsPage,
        NotFoundPage,
        RadioButtonComponent,
        RadioButtonIlyaComponent,
        GenericRadioButtonComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        PersonCardComponent
    ]
})
export class CoreModule {

}