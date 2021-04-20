import { Component, Output, Input, EventEmitter } from '@angular/core';
export class NgLaravelPaginationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGFyYXZlbC1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi9zcmMvbGliL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFpQixZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPcEYsTUFBTSxPQUFPLDRCQUE0QjtJQVVyQztRQVRTLFNBQUksR0FBUSxJQUFJLENBQUM7UUFDakIsVUFBSyxHQUFRLElBQUksQ0FBQztRQUNsQixhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3JCLFVBQUssR0FBUSxlQUFlLENBQUM7UUFDNUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFL0Msb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFDcEIsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFHcEIsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM1QiwwQ0FBMEM7U0FDN0M7UUFDRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzdCLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ2pDLCtDQUErQztTQUNsRDtRQUNELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDN0IsMkNBQTJDO1NBQzlDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDWCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFD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O3lCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1sYXJhdmVsLXBhZ2luYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZy1sYXJhdmVsLXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdMYXJhdmVsUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZGF0YTogYW55ID0gbnVsbDtcbiAgICBASW5wdXQoKSBhbGlnbjogYW55ID0gbnVsbDtcbiAgICBASW5wdXQoKSBwYWdlRGVzYzogYW55ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSB0aGVtZTogYW55ID0gJ3RoZW1lLWRlZmF1bHQnO1xuICAgIEBPdXRwdXQoKSBjaGFuZ2VQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBwYWdpbmF0aW9uTGltaXQgPSA0O1xuICAgIGFsaWdubWVudENsYXNzID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IFRISVMgPSB0aGlzO1xuICAgICAgICBpZiAoY2hhbmdlcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzLmFsaWduICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZXMuYWxpZ24uY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQWxpZ25tZW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXMucGFnZV9kZXNjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNoYW5nZXMucGFnZV9kZXNjLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWxpZ25tZW50KCkge1xuICAgICAgICBpZiAodGhpcy5hbGlnbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxpZ24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25tZW50Q2xhc3MgPSAnbmctbGFyYXZlbC1wYWdpbmF0aW9uLWxlZnQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25tZW50Q2xhc3MgPSAnbmctbGFyYXZlbC1wYWdpbmF0aW9uLWNlbnRlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0FycmF5KG51bSk6IGFueSB7XG4gICAgICAgIHJldHVybiBBcnJheShudW0pLmZpbGwobnVsbCkubWFwKCh4LCBpKSA9PiBpICsgMSk7XG4gICAgfVxuXG4gICAgcHJldlBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY3VycmVudF9wYWdlID4gMSkge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgLSAxO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdpbmF0aW9uKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY3VycmVudF9wYWdlID4gMCAmJiB0aGlzLmRhdGEuY3VycmVudF9wYWdlIDwgdGhpcy5kYXRhLmxhc3RfcGFnZSkge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgKyAxO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdpbmF0aW9uKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnaW5hdGlvbihwYWdlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHtwYWdlfSk7XG4gICAgfVxuXG4gICAgaXNWaXNpYmxlKHBhZ2UpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmN1cnJlbnRfcGFnZSA+IHRoaXMucGFnaW5hdGlvbkxpbWl0ICYmIHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgPD0gKHRoaXMuZGF0YS5sYXN0X3BhZ2UgLSB0aGlzLnBhZ2luYXRpb25MaW1pdCkpIHtcbiAgICAgICAgICAgIGlmIChwYWdlIDwgKHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgLSB0aGlzLnBhZ2luYXRpb25MaW1pdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPiAodGhpcy5kYXRhLmN1cnJlbnRfcGFnZSArIHRoaXMucGFnaW5hdGlvbkxpbWl0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmN1cnJlbnRfcGFnZSA8PSB0aGlzLnBhZ2luYXRpb25MaW1pdCAmJiBwYWdlIDw9ICgodGhpcy5wYWdpbmF0aW9uTGltaXQgKiAyKSArIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY3VycmVudF9wYWdlID4gKHRoaXMuZGF0YS5sYXN0X3BhZ2UgLSB0aGlzLnBhZ2luYXRpb25MaW1pdClcbiAgICAgICAgICAgICYmIHBhZ2UgPj0gdGhpcy5kYXRhLmxhc3RfcGFnZSAtICgodGhpcy5wYWdpbmF0aW9uTGltaXQgKiAyKSArIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19