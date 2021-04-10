import { SimpleChanges, EventEmitter } from '@angular/core';
export declare class NgLaravelPaginationComponent {
    data: any;
    align: any;
    pageDesc: any;
    changePage: EventEmitter<any>;
    paginationLimit: number;
    alignmentClass: string;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    updateAlignment(): void;
    toArray(num: any): any;
    prevPage(): void;
    nextPage(): void;
    changePagination(page: any): void;
    isVisible(page: any): any;
}
