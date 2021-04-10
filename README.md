[![Build Status](https://travis-ci.org/gilbitron/ng-laravel-pagination.svg?branch=master)](https://travis-ci.org/gilbitron/laravel-vue-pagination) 
[![npm](https://img.shields.io/npm/v/laravel-vue-pagination.svg)](https://www.npmjs.com/package/laravel-vue-pagination) 
[![Downloads](https://img.shields.io/npm/dt/ng-laravel-pagination.svg)](https://www.npmjs.com/package/ng-laravel-pagination)


# Ng Laravel Pagination

A Angular pagination component for Laravel paginator that works with Bootstrap.

## Install

```angular2html
npm install ng-laravel-pagination
``` 

## Usage

#### Import Library in .module.ts:
```javascript
import {NgLaravelPaginationModule} from 'ng-laravel-pagination';

@NgModule({
    ...
    imports: [
        ...
        NgLaravelPaginationModule
    ],
    ...
})
```

#### Use the component:
```angular2html
<ng-laravel-pagination [data]="laravelData" (changePage)="changePage($event)"></ng-laravel-pagination>
```

#### Callback Events

```javascript
changePage(pagination): void {
    console.log(pagination);
}
```

## API

#### Props

| Name | Type | Description |
| --- | --- | --- |
| `data` | Object | An object containing the structure of a [Laravel paginator](https://laravel.com/docs/5.7/pagination) response or a [Laravel API Resource](https://laravel.com/docs/5.7/eloquent-resources) response. |

### Events

| Name | Description |
| --- | --- |
| `changePage` | Triggered when a user changes page. Passes the new `pagination` object as a parameter. |


## License

Released under the MIT License, see [LICENSE](LICENSE).
