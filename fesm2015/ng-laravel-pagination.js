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
        this.align = null;
        this.pageDesc = true;
        this.theme = 'theme-default';
        this.changePage = new EventEmitter();
        this.paginationLimit = 4;
        this.alignmentClass = '';
    }
    ngOnChanges(changes) {
        const THIS = this;
        if (changes.data !== undefined) {
            // console.log(changes.data.currentValue);
        }
        if (changes.align !== undefined) {
            // console.log(changes.align.currentValue);
            this.updateAlignment();
        }
        if (changes.page_desc !== undefined) {
            // console.log(changes.page_desc.currentValue);
        }
        if (changes.theme !== undefined) {
            // console.log(changes.theme.currentValue);
        }
    }
    updateAlignment() {
        if (this.align !== null) {
            if (this.align === 'left') {
                this.alignmentClass = 'ng-laravel-pagination-left';
            }
            else if (this.align === 'center') {
                this.alignmentClass = 'ng-laravel-pagination-center';
            }
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
    isVisible(page) {
        if (this.data.current_page > this.paginationLimit && this.data.current_page <= (this.data.last_page - this.paginationLimit)) {
            if (page < (this.data.current_page - this.paginationLimit)) {
                return false;
            }
            else if (page > (this.data.current_page + this.paginationLimit)) {
                return false;
            }
            else {
                return true;
            }
        }
        else if (this.data.current_page <= this.paginationLimit && page <= ((this.paginationLimit * 2) + 1)) {
            return true;
        }
        else if (this.data.current_page > (this.data.last_page - this.paginationLimit)
            && page >= this.data.last_page - ((this.paginationLimit * 2) + 1)) {
            return true;
        }
        else {
            return false;
        }
    }
}
NgLaravelPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-laravel-pagination',
                template: "<div class=\"ng-laravel-pagination {{alignmentClass}} {{theme}}\" *ngIf=\"data != null\">\n    <div [ngClass]=\"{'pagination-result': true, 'hidden': pageDesc == false}\">\n        <span>Showing {{data.from}} - {{data.to}} of {{data.total}} result</span>\n    </div>\n    <div class=\"pagination-list\">\n        <ul>\n            <li (click)=\"prevPage()\"><a href=\"javascript:void(0)\">\u00AB</a></li>\n\n            <li [ngClass]=\"{'active' : page == data.current_page, 'page-hide': isVisible(page) == false}\"\n                *ngFor=\"let page of toArray(data.last_page); let index = index\"\n                (click)=\"changePagination(page)\">\n                <a href=\"javascript:void(0)\">{{page}}</a>\n            </li>\n\n            <li (click)=\"nextPage()\"><a href=\"javascript:void(0)\">\u00BB</a></li>\n        </ul>\n    </div>\n</div>\n",
                styles: [".ng-laravel-pagination.theme-default{display:inline-block;float:right}.ng-laravel-pagination.theme-default.ng-laravel-pagination-left{display:inline-block;float:left}.ng-laravel-pagination.theme-default.ng-laravel-pagination-center{display:table;float:none;margin:auto}.ng-laravel-pagination.theme-default.ng-laravel-pagination-space-between{width:100%}.ng-laravel-pagination.theme-default .pagination-result{display:inline-block;float:left;font-size:14px;padding:13px 0;color:#6e6e6e;margin-right:25px}.ng-laravel-pagination.theme-default .pagination-result.hidden{display:none}.ng-laravel-pagination.theme-default .pagination-list{display:inline-block;float:right}.ng-laravel-pagination.theme-default .pagination-list ul{padding:0;margin:0;list-style:none;border-radius:.25rem;font-size:16px}.ng-laravel-pagination.theme-default .pagination-list ul li{border:1px solid #eee;border-right:none;float:left}.ng-laravel-pagination.theme-default .pagination-list ul li.disabled{cursor:not-allowed}.ng-laravel-pagination.theme-default .pagination-list ul li.disabled:hover{background-color:#fff}.ng-laravel-pagination.theme-default .pagination-list ul li.disabled a{color:#a6a6a6;cursor:not-allowed}.ng-laravel-pagination.theme-default .pagination-list ul li:last-child{border-right:1px solid #eee}.ng-laravel-pagination.theme-default .pagination-list ul li:hover{background-color:#e9ecef}.ng-laravel-pagination.theme-default .pagination-list ul li a{padding:10px;display:block;margin-left:0;text-decoration:none;color:#0d72b9;font-weight:700;min-width:15px;min-height:15px;text-align:center;line-height:20px}.ng-laravel-pagination.theme-default .pagination-list ul li.active{background-color:#0d72b9}.ng-laravel-pagination.theme-default .pagination-list ul li.active a{color:#fff}.ng-laravel-pagination.theme-round{display:inline-block;float:right}.ng-laravel-pagination.theme-round.yes-bg .pagination-list{padding:2px 20px;border-radius:50px;box-shadow:0 2px 9px rgba(0,0,0,.1)}.ng-laravel-pagination.theme-round.ng-laravel-pagination-left{display:inline-block;float:left}.ng-laravel-pagination.theme-round.ng-laravel-pagination-center{display:table;float:none;margin:auto}.ng-laravel-pagination.theme-round.ng-laravel-pagination-space-between{width:100%}.ng-laravel-pagination.theme-round .pagination-result{display:inline-block;float:left;font-size:14px;padding:13px 0;color:#6e6e6e;margin-right:25px}.ng-laravel-pagination.theme-round .pagination-result.hidden{display:none}.ng-laravel-pagination.theme-round .pagination-list{display:inline-block;float:right}.ng-laravel-pagination.theme-round .pagination-list ul{padding:0;margin:0;list-style:none;border-radius:.25rem;font-size:16px}.ng-laravel-pagination.theme-round .pagination-list ul li{float:left;border-radius:50%}.ng-laravel-pagination.theme-round .pagination-list ul li.disabled{cursor:not-allowed}.ng-laravel-pagination.theme-round .pagination-list ul li.disabled:hover{background-color:#fff;color:#a6a6a6}.ng-laravel-pagination.theme-round .pagination-list ul li.disabled:hover a{color:#a6a6a6;cursor:not-allowed}.ng-laravel-pagination.theme-round .pagination-list ul li:hover{background-color:#383838;color:#fff}.ng-laravel-pagination.theme-round .pagination-list ul li:hover a{color:#fff}.ng-laravel-pagination.theme-round .pagination-list ul li a{padding:10px 12px;display:block;margin-left:0;text-decoration:none;font-weight:700;min-width:15px;min-height:15px;text-align:center;line-height:20px;float:left;border-radius:50%;color:#a6a6a6}.ng-laravel-pagination.theme-round .pagination-list ul li.active{background-color:#383838}.ng-laravel-pagination.theme-round .pagination-list ul li.active a{border-radius:50%;color:#fff}.ng-laravel-pagination.theme-non-button{display:inline-block;float:right}.ng-laravel-pagination.theme-non-button.yes-bg .pagination-list{padding:2px 20px;border-radius:50px;box-shadow:0 2px 9px rgba(0,0,0,.1)}.ng-laravel-pagination.theme-non-button.ng-laravel-pagination-left{display:inline-block;float:left}.ng-laravel-pagination.theme-non-button.ng-laravel-pagination-center{display:table;float:none;margin:auto}.ng-laravel-pagination.theme-non-button.ng-laravel-pagination-space-between{width:100%}.ng-laravel-pagination.theme-non-button .pagination-result{display:inline-block;float:left;font-size:14px;padding:13px 0;color:#6e6e6e;margin-right:25px}.ng-laravel-pagination.theme-non-button .pagination-result.hidden{display:none}.ng-laravel-pagination.theme-non-button .pagination-list{display:inline-block;float:right}.ng-laravel-pagination.theme-non-button .pagination-list ul{padding:0;margin:0;list-style:none;border-radius:.25rem;font-size:16px}.ng-laravel-pagination.theme-non-button .pagination-list ul li{border-right:none;float:left}.ng-laravel-pagination.theme-non-button .pagination-list ul li.disabled{cursor:not-allowed}.ng-laravel-pagination.theme-non-button .pagination-list ul li.disabled:hover{background-color:#fff;color:#a6a6a6}.ng-laravel-pagination.theme-non-button .pagination-list ul li.disabled:hover a{color:#a6a6a6;cursor:not-allowed}.ng-laravel-pagination.theme-non-button .pagination-list ul li:hover a{color:#0d72b9}.ng-laravel-pagination.theme-non-button .pagination-list ul li a{padding:10px;display:block;margin-left:0;text-decoration:none;color:#a6a6a6;font-weight:700;min-width:15px;min-height:15px;text-align:center;line-height:20px}.ng-laravel-pagination.theme-non-button .pagination-list ul li.active a{color:#0d72b9}"]
            },] }
];
NgLaravelPaginationComponent.ctorParameters = () => [];
NgLaravelPaginationComponent.propDecorators = {
    data: [{ type: Input }],
    align: [{ type: Input }],
    pageDesc: [{ type: Input }],
    theme: [{ type: Input }],
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
