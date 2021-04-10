(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ng-laravel-pagination', ['exports', '@angular/core', '@angular/common', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ng-laravel-pagination'] = {}, global.ng.core, global.ng.common, global.ng.platformBrowser));
}(this, (function (exports, i0, common, platformBrowser) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var NgLaravelPaginationService = /** @class */ (function () {
        function NgLaravelPaginationService() {
        }
        return NgLaravelPaginationService;
    }());
    NgLaravelPaginationService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function NgLaravelPaginationService_Factory() { return new NgLaravelPaginationService(); }, token: NgLaravelPaginationService, providedIn: "root" });
    NgLaravelPaginationService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NgLaravelPaginationService.ctorParameters = function () { return []; };

    var NgLaravelPaginationComponent = /** @class */ (function () {
        function NgLaravelPaginationComponent() {
            this.data = null;
            this.align = null;
            this.pageDesc = true;
            this.changePage = new i0.EventEmitter();
            this.paginationLimit = 4;
            this.alignmentClass = '';
        }
        NgLaravelPaginationComponent.prototype.ngOnChanges = function (changes) {
            var THIS = this;
            if (changes.data !== undefined) {
                console.log(changes.data.currentValue);
            }
            if (changes.align !== undefined) {
                console.log(changes.align.currentValue);
                this.updateAlignment();
            }
            if (changes.page_desc !== undefined) {
                console.log(changes.page_desc.currentValue);
            }
        };
        NgLaravelPaginationComponent.prototype.updateAlignment = function () {
            if (this.align !== null) {
                if (this.align === 'left') {
                    this.alignmentClass = 'ng-laravel-pagination-left';
                }
                else if (this.align === 'center') {
                    this.alignmentClass = 'ng-laravel-pagination-center';
                }
            }
        };
        NgLaravelPaginationComponent.prototype.toArray = function (num) {
            return Array(num).fill(null).map(function (x, i) { return i + 1; });
        };
        NgLaravelPaginationComponent.prototype.prevPage = function () {
            if (this.data.current_page > 1) {
                var page = this.data.current_page - 1;
                this.changePagination(page);
            }
        };
        NgLaravelPaginationComponent.prototype.nextPage = function () {
            if (this.data.current_page > 0 && this.data.current_page < this.data.last_page) {
                var page = this.data.current_page + 1;
                this.changePagination(page);
            }
        };
        NgLaravelPaginationComponent.prototype.changePagination = function (page) {
            this.changePage.emit({ page: page });
        };
        NgLaravelPaginationComponent.prototype.isVisible = function (page) {
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
        };
        return NgLaravelPaginationComponent;
    }());
    NgLaravelPaginationComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ng-laravel-pagination',
                    template: "<div class=\"ng-laravel-pagination {{alignmentClass}}\" *ngIf=\"data != null\">\n    <div [ngClass]=\"{'pagination-result': true, 'hidden': pageDesc == false}\">\n        <span>Showing {{data.from}} - {{data.to}} of {{data.total}} result</span>\n    </div>\n    <div class=\"pagination-list\">\n        <ul>\n            <li (click)=\"prevPage()\"><a href=\"javascript:void(0)\">\u00AB</a></li>\n\n            <li [ngClass]=\"{'active' : page == data.current_page, 'page-hide': isVisible(page) == false}\"\n                *ngFor=\"let page of toArray(data.last_page); let index = index\"\n                (click)=\"changePagination(page)\">\n                <a href=\"javascript:void(0)\">{{page}}</a>\n            </li>\n\n            <li (click)=\"nextPage()\"><a href=\"javascript:void(0)\">\u00BB</a></li>\n        </ul>\n    </div>\n</div>\n",
                    styles: [".ng-laravel-pagination{display:inline-block;float:right}.ng-laravel-pagination.ng-laravel-pagination-left{display:inline-block;float:left}.ng-laravel-pagination.ng-laravel-pagination-center{display:table;float:none;margin:auto}.ng-laravel-pagination .pagination-result{display:inline-block;float:left;font-size:14px;padding:13px 0;color:#6e6e6e;margin-right:25px}.ng-laravel-pagination .pagination-result.hidden{display:none}.ng-laravel-pagination .pagination-list{display:inline-block;float:right}.ng-laravel-pagination .pagination-list ul{padding:0;margin:0;list-style:none;border-radius:.25rem;font-size:16px}.ng-laravel-pagination .pagination-list ul li{border:1px solid #eee;border-right:none;float:left}.ng-laravel-pagination .pagination-list ul li:last-child{border-right:1px solid #eee}.ng-laravel-pagination .pagination-list ul li:hover{background-color:#e9ecef}.ng-laravel-pagination .pagination-list ul li a{padding:10px;display:block;margin-left:0;text-decoration:none;color:#0d72b9;font-weight:700;min-width:15px;min-height:15px;text-align:center;line-height:20px}.ng-laravel-pagination .pagination-list ul li.active{background-color:#0d72b9}.ng-laravel-pagination .pagination-list ul li.active a{color:#fff}"]
                },] }
    ];
    NgLaravelPaginationComponent.ctorParameters = function () { return []; };
    NgLaravelPaginationComponent.propDecorators = {
        data: [{ type: i0.Input }],
        align: [{ type: i0.Input }],
        pageDesc: [{ type: i0.Input }],
        changePage: [{ type: i0.Output }]
    };

    var NgLaravelPaginationModule = /** @class */ (function () {
        function NgLaravelPaginationModule() {
        }
        return NgLaravelPaginationModule;
    }());
    NgLaravelPaginationModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [NgLaravelPaginationComponent],
                    imports: [
                        common.CommonModule, platformBrowser.BrowserModule
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

    exports.NgLaravelPaginationComponent = NgLaravelPaginationComponent;
    exports.NgLaravelPaginationModule = NgLaravelPaginationModule;
    exports.NgLaravelPaginationService = NgLaravelPaginationService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-laravel-pagination.umd.js.map
