export class LocalStorageKeys {
    public static PERSONS: string = "PERSONS";
}

export class States {
    // pages
    public static persons: string = "persons";
    public static rjxs: string = "rxjs";
    public static login: string = "login";
    public static flexBasics: string = "flex-basics";

    // components
    public static radioButton: string = "radio-button";
    public static personCard: string = "person-card";
}

export class Endpoints {
    private static baseUrl: string = "http://localhost:6060/";

    public static login: string = `${this.baseUrl}auth/login`;
    public static userById: string = `${Endpoints.baseUrl}user/`;
}
