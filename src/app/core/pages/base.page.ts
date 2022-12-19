import { LayoutService } from './../../services/layout.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { States } from 'src/app/constants';

@Component({
    template: "",
})
// other way - different decorator
// @Directive()
export abstract class BasePage implements OnInit, OnDestroy {

    protected _subscriptions: Subscription[] = [];

    private _pageRoute: States = "";

    constructor(
        private layoutService: LayoutService,
        pageRoute: States
    ) {
        this._pageRoute = pageRoute;
    }

    public ngOnInit(): void {
        this._subscriptions.push(this.layoutService.onLayoutDirectionChanged.subscribe(() => {
            console.log(`${this._pageRoute} page: layout changed happened`)
        }));

        this.initialize();
    }

    public ngOnDestroy(): void {
        this._subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
    }

    protected abstract initialize(): void;
}
