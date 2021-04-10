import { Component, Output, Input, EventEmitter } from '@angular/core';
export class NgLaravelPaginationComponent {
    constructor() {
        this.data = null;
        this.align = null;
        this.pageDesc = true;
        this.changePage = new EventEmitter();
        this.paginationLimit = 4;
        this.alignmentClass = '';
    }
    ngOnChanges(changes) {
        const THIS = this;
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
                template: "<div class=\"ng-laravel-pagination {{alignmentClass}}\" *ngIf=\"data != null\">\n    <div [ngClass]=\"{'pagination-result': true, 'hidden': pageDesc == false}\">\n        <span>Showing {{data.from}} - {{data.to}} of {{data.total}} result</span>\n    </div>\n    <div class=\"pagination-list\">\n        <ul>\n            <li (click)=\"prevPage()\"><a href=\"javascript:void(0)\">\u00AB</a></li>\n\n            <li [ngClass]=\"{'active' : page == data.current_page, 'page-hide': isVisible(page) == false}\"\n                *ngFor=\"let page of toArray(data.last_page); let index = index\"\n                (click)=\"changePagination(page)\">\n                <a href=\"javascript:void(0)\">{{page}}</a>\n            </li>\n\n            <li (click)=\"nextPage()\"><a href=\"javascript:void(0)\">\u00BB</a></li>\n        </ul>\n    </div>\n</div>\n",
                styles: [".ng-laravel-pagination{display:inline-block;float:right}.ng-laravel-pagination.ng-laravel-pagination-left{display:inline-block;float:left}.ng-laravel-pagination.ng-laravel-pagination-center{display:table;float:none;margin:auto}.ng-laravel-pagination .pagination-result{display:inline-block;float:left;font-size:14px;padding:13px 0;color:#6e6e6e;margin-right:25px}.ng-laravel-pagination .pagination-result.hidden{display:none}.ng-laravel-pagination .pagination-list{display:inline-block;float:right}.ng-laravel-pagination .pagination-list ul{padding:0;margin:0;list-style:none;border-radius:.25rem;font-size:16px}.ng-laravel-pagination .pagination-list ul li{border:1px solid #eee;border-right:none;float:left}.ng-laravel-pagination .pagination-list ul li:last-child{border-right:1px solid #eee}.ng-laravel-pagination .pagination-list ul li:hover{background-color:#e9ecef}.ng-laravel-pagination .pagination-list ul li a{padding:10px;display:block;margin-left:0;text-decoration:none;color:#0d72b9;font-weight:700;min-width:15px;min-height:15px;text-align:center;line-height:20px}.ng-laravel-pagination .pagination-list ul li.active{background-color:#0d72b9}.ng-laravel-pagination .pagination-list ul li.active a{color:#fff}"]
            },] }
];
NgLaravelPaginationComponent.ctorParameters = () => [];
NgLaravelPaginationComponent.propDecorators = {
    data: [{ type: Input }],
    align: [{ type: Input }],
    pageDesc: [{ type: Input }],
    changePage: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGFyYXZlbC1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi9zcmMvbGliL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFpQixZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPcEYsTUFBTSxPQUFPLDRCQUE0QjtJQVNyQztRQVJTLFNBQUksR0FBUSxJQUFJLENBQUM7UUFDakIsVUFBSyxHQUFRLElBQUksQ0FBQztRQUNsQixhQUFRLEdBQVEsSUFBSSxDQUFDO1FBQ3BCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBRS9DLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLG1CQUFjLEdBQUcsRUFBRSxDQUFDO0lBR3BCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0lBRUQsZUFBZTtR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QkFBcUQ7O2FBRXhEOzs7O21CQUVJLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3lCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBJbnB1dCwgU2ltcGxlQ2hhbmdlcywgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZy1sYXJhdmVsLXBhZ2luYXRpb24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9uZy1sYXJhdmVsLXBhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdMYXJhdmVsUGFnaW5hdGlvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgZGF0YTogYW55ID0gbnVsbDtcbiAgICBASW5wdXQoKSBhbGlnbjogYW55ID0gbnVsbDtcbiAgICBASW5wdXQoKSBwYWdlRGVzYzogYW55ID0gdHJ1ZTtcbiAgICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgcGFnaW5hdGlvbkxpbWl0ID0gNDtcbiAgICBhbGlnbm1lbnRDbGFzcyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBjb25zdCBUSElTID0gdGhpcztcbiAgICAgICAgaWYgKGNoYW5nZXMuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VzLmRhdGEuY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlcy5hbGlnbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VzLmFsaWduLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VzLnBhZ2VfZGVzYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VzLnBhZ2VfZGVzYy5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQWxpZ25tZW50KCkge1xuICAgICAgICBpZiAodGhpcy5hbGlnbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWxpZ24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25tZW50Q2xhc3MgPSAnbmctbGFyYXZlbC1wYWdpbmF0aW9uLWxlZnQnO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFsaWduID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxpZ25tZW50Q2xhc3MgPSAnbmctbGFyYXZlbC1wYWdpbmF0aW9uLWNlbnRlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0FycmF5KG51bSk6IGFueSB7XG4gICAgICAgIHJldHVybiBBcnJheShudW0pLmZpbGwobnVsbCkubWFwKCh4LCBpKSA9PiBpICsgMSk7XG4gICAgfVxuXG4gICAgcHJldlBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY3VycmVudF9wYWdlID4gMSkge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgLSAxO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdpbmF0aW9uKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY3VycmVudF9wYWdlID4gMCAmJiB0aGlzLmRhdGEuY3VycmVudF9wYWdlIDwgdGhpcy5kYXRhLmxhc3RfcGFnZSkge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgKyAxO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdpbmF0aW9uKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnaW5hdGlvbihwYWdlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHtwYWdlfSk7XG4gICAgfVxuXG4gICAgaXNWaXNpYmxlKHBhZ2UpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5kYXRhLmN1cnJlbnRfcGFnZSA+IHRoaXMucGFnaW5hdGlvbkxpbWl0ICYmIHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgPD0gKHRoaXMuZGF0YS5sYXN0X3BhZ2UgLSB0aGlzLnBhZ2luYXRpb25MaW1pdCkpIHtcbiAgICAgICAgICAgIGlmIChwYWdlIDwgKHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgLSB0aGlzLnBhZ2luYXRpb25MaW1pdCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBhZ2UgPiAodGhpcy5kYXRhLmN1cnJlbnRfcGFnZSArIHRoaXMucGFnaW5hdGlvbkxpbWl0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmN1cnJlbnRfcGFnZSA8PSB0aGlzLnBhZ2luYXRpb25MaW1pdCAmJiBwYWdlIDw9ICgodGhpcy5wYWdpbmF0aW9uTGltaXQgKiAyKSArIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRhdGEuY3VycmVudF9wYWdlID4gKHRoaXMuZGF0YS5sYXN0X3BhZ2UgLSB0aGlzLnBhZ2luYXRpb25MaW1pdClcbiAgICAgICAgICAgICYmIHBhZ2UgPj0gdGhpcy5kYXRhLmxhc3RfcGFnZSAtICgodGhpcy5wYWdpbmF0aW9uTGltaXQgKiAyKSArIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19