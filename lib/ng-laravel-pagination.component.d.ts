import { SimpleChanges, EventEmitter } from '@angular/core';
export declare class NgLaravelPaginationComponent {
    data: any;
    changePage: EventEmitter<any>;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    toArray(num: any): any;
    prevPage(): void;
    nextPage(): void;
    changePagination(page: any): void;
}
