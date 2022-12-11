import { Injectable } from "@angular/core";
import { LocalStorageKeys } from "src/app/constants";
import { IPerson } from "src/app/entities";
import { LocalStorageService } from "./local-storage.service";

interface storedPerson {
    name: string;
    id: string;
    address: string;
    email: string;
    gender: string;
    birthdate: string;
    salary: number;
}

interface IPersonService {
    persons: IPerson[];

    initialize(): void;
    saveToStorage(): void;
}

// const persons: IPerson[] | null = [
//     {
//         name: "Venya",
//         id: "1",
//         address: "HaNeemanim",
//         email: "my@email.com",
//         gender: "Male",
//         birthdate: new Date(1980, 1, 1),
//         salary: 10000
//     },
//     {
//         name: "John",
//         id: "2",
//         address: "Haifa",
//         email: "my2@email.com",
//         gender: "Male",
//         birthdate: new Date(1990, 2, 2),
//         salary: 15000
//     }
// ];

@Injectable({
    providedIn: "root"
})
export class PersonService implements IPersonService {
    private _persons: IPerson[] = [];

    constructor(
        private localStorageService: LocalStorageService
    ) { }

    public get persons(): IPerson[] {
        return this._persons;
    }

    public initialize(): void {
        const persons: storedPerson[] | null = this.localStorageService.get(LocalStorageKeys.PERSONS);

        if (persons) {
            this._persons = persons.map((person: storedPerson) => this.toLocal(person));
        }
    }

    public saveToStorage(): void {
        this.localStorageService.set(LocalStorageKeys.PERSONS, this._persons);
    }

    private toLocal(person: storedPerson): IPerson {
        return {
            name: person.name,
            id: person.id,
            address: person.address,
            email: person.email,
            gender: person.gender,
            birthdate: new Date(person.birthdate),
            salary: person.salary
        }
    }
}