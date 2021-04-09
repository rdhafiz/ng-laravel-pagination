import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class NgLaravelPaginationService {
    constructor() { }
}
NgLaravelPaginationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgLaravelPaginationService_Factory() { return new NgLaravelPaginationService(); }, token: NgLaravelPaginationService, providedIn: "root" });
NgLaravelPaginationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgLaravelPaginationService.ctorParameters = () => [];

class NgLaravelPaginationComponent {
    constructor() {
        this.data = null;
        this.changePage = new EventEmitter();
    }
    ngOnChanges(changes) {
        const THIS = this;
        if (changes.data !== undefined) {
            console.log(changes.data.currentValue);
        }
    }
    toArray(num) {
        return Array(num).fill(null).map((x, i) => i + 1);
    }
    prevPage() {
        if (this.data.current_page > 1) {
            const page = this.data.current_page - 1;
            this.changePagination(page);
        }
    }
    nextPage() {
        if (this.data.current_page > 0 && this.data.current_page < this.data.last_page) {
            const page = this.data.current_page + 1;
            this.changePagination(page);
        }
    }
    changePagination(page) {
        this.changePage.emit({ page });
    }
}
NgLaravelPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-laravel-pagination',
                template: "<div class=\"ng-laravel-pagination\" *ngIf=\"data != null\">\n    <div class=\"pagination-result\">\n        <span>Showing {{data.from}} - {{data.to}} of {{data.total}} result</span>\n    </div>\n    <div class=\"pagination-list\">\n        <ul>\n            <li (click)=\"prevPage()\"><a href=\"javascript:void(0)\"><<</a></li>\n            \n            <li *ngFor=\"let page of toArray(data.last_page); let index = index\" (click)=\"changePagination(page)\">\n                <a href=\"javascript:void(0)\">{{page}}</a>\n            </li>\n            \n            <li (click)=\"nextPage()\"><a href=\"javascript:void(0)\">>></a></li>\n        </ul>\n    </div>\n</div>\n",
                styles: [".ng-laravel-pagination{width:100%;display:flex;flex-direction:row;justify-content:space-between}.ng-laravel-pagination .pagination-result{font-size:18px;color:#6e6e6e;display:flex;justify-content:flex-start;align-items:center}.ng-laravel-pagination .pagination-list ul{display:flex;padding:0;list-style:none;border-radius:.25rem;font-size:16px}.ng-laravel-pagination .pagination-list ul li{border:1px solid #eee;border-right:none}.ng-laravel-pagination .pagination-list ul li:last-child{border-right:1px solid #eee}.ng-laravel-pagination .pagination-list ul li:hover{background-color:#e9ecef}.ng-laravel-pagination .pagination-list ul li a{padding:10px;display:block;width:100%;height:100%;margin-left:0;text-decoration:none;color:#0d72b9;font-weight:700}.ng-laravel-pagination .pagination-list ul li.disabled>a{color:#6e6e6e}"]
            },] }
];
NgLaravelPaginationComponent.ctorParameters = () => [];
NgLaravelPaginationComponent.propDecorators = {
    data: [{ type: Input }],
    changePage: [{ type: Output }]
};

class NgLaravelPaginationModule {
}
NgLaravelPaginationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgLaravelPaginationComponent],
                imports: [
                    CommonModule, BrowserModule
                ],
                exports: [NgLaravelPaginationComponent]
            },] }
];

/*
 * Public API Surface of ng-laravel-pagination
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgLaravelPaginationComponent, NgLaravelPaginationModule, NgLaravelPaginationService };
//# sourceMappingURL=ng-laravel-pagination.js.map
