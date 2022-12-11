import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RadioButtonIlyaComponent } from "./radio-button-ilya.component";

describe("RadioButtonIlyaComponent", () => {
    let component: RadioButtonIlyaComponent;
    let fixture: ComponentFixture<RadioButtonIlyaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RadioButtonIlyaComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(RadioButtonIlyaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
