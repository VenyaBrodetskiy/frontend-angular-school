import { LayoutService } from './../../../services/layout.service';
import { Component } from "@angular/core";
import { map, Observable, Observer, of, Subscription, tap } from "rxjs";
import { BasePage } from "../base.page";
import { States } from 'src/app/constants';

@Component({
    selector: "mf-rxjs",
    templateUrl: "./rxjs.page.html",
    styleUrls: ["./rxjs.page.css"]
})
export class RxjsComponent extends BasePage {

    constructor(
        layoutService: LayoutService
    ) {
        super(layoutService, States.rjxs);
        // this.simpleSubscribtion();

        // this.fullSubscription();

        this.subscriptionWithTap();

        this.subscriptionWithMap();

    }

    protected initialize(): void {

    }

    private simpleSubscribtion(): void {
        // Observable creation
        const observable$: Observable<number> = of(1, 2, 3);

        // simple
        observable$.subscribe((item: number) => console.log(item));
    }

    private fullSubscription(): void {
        // Observable creation
        const observable$: Observable<number> = of(1, 2, 3);

        observable$.subscribe((item: number) => console.log(item));

        // observer with next, error, complete
        const observer: Observer<number> = {
            next(value: number) {
                if (value === 2) {
                    throw new Error("Bad value");
                }
                console.log(value);
            },
            error(err) {
                console.error(err);
            },
            complete() {
                console.log("Observer completed, go home");
            }
        }

        // create subscription on observer
        const subscription: Subscription = observable$.subscribe(observer);

        // if we want to unsubscribe from observable$
        subscription.unsubscribe();
    }

    private subscriptionWithTap(): void {
        // Observable creation
        const observable$: Observable<number> = of(1, 2, 3);

        observable$
            .pipe(
                tap((item: number) => {
                    console.log(item);
                }))
            .subscribe();
    }

    private subscriptionWithMap(): void {
        // Observable creation
        const observable$: Observable<number> = of(1, 2, 3);

        observable$
            .pipe(
                map((item: number) => {
                    return item + '-cool';
                }),
                tap((item: string) => console.log(item)),
                map((item: string) => {
                    return item.substring(0, 2);
                }))
            .subscribe((item: string) => console.log("Final item: ", item));
    }

}
