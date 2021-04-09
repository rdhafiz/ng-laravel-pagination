import { Component, Output, Input, EventEmitter } from '@angular/core';
export class NgLaravelPaginationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctbGFyYXZlbC1wYWdpbmF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi9zcmMvbGliL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFpQixZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPcEYsTUFBTSxPQUFPLDRCQUE0QjtJQUlyQztRQUhTLFNBQUksR0FBUSxJQUFJLENBQUM7UUFDaEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFHL0MsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQUc7UUFDUCxPQUFRLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLEVBQUU7WUFDNUIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUF2Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLCtxQkFBcUQ7O2FBRXhEOzs7O21CQUVJLEtBQUs7eUJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25nLWxhcmF2ZWwtcGFnaW5hdGlvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25nLWxhcmF2ZWwtcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmctbGFyYXZlbC1wYWdpbmF0aW9uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOZ0xhcmF2ZWxQYWdpbmF0aW9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBkYXRhOiBhbnkgPSBudWxsO1xuICAgIEBPdXRwdXQoKSBjaGFuZ2VQYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IFRISVMgPSB0aGlzO1xuICAgICAgICBpZiAoY2hhbmdlcy5kYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoYW5nZXMuZGF0YS5jdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9BcnJheShudW0pOiBhbnkge1xuICAgICAgICByZXR1cm4gIEFycmF5KG51bSkuZmlsbChudWxsKS5tYXAoKHggLCBpKSA9PiBpICsgMSk7XG4gICAgfVxuXG4gICAgcHJldlBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY3VycmVudF9wYWdlID4gMSkge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgLSAxO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdpbmF0aW9uKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmV4dFBhZ2UoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuY3VycmVudF9wYWdlID4gMCAmJiB0aGlzLmRhdGEuY3VycmVudF9wYWdlIDwgdGhpcy5kYXRhLmxhc3RfcGFnZSkge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHRoaXMuZGF0YS5jdXJyZW50X3BhZ2UgKyAxO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQYWdpbmF0aW9uKHBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlUGFnaW5hdGlvbihwYWdlKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHtwYWdlfSk7XG4gICAgfVxufVxuIl19