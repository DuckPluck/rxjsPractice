import { Component } from '@angular/core';

import { interval, Subscription } from "rxjs"      /* У rxjs есть два импорта - rxjs (чтобы создавать новые стримы) и rxjs/operators (чтобы оперировать стримами) */
import { map, filter } from "rxjs/operators"       /* по сути операторы это обычные пайпы. Со всеми операторами можно ознакомиться в документации https://rxjs.dev/api */

@Component({
  selector: 'app-a2-rxjs-operators',
  templateUrl: './a2-rxjs-operators.component.html'
})
export class A2RxjsOperatorsComponent {

  sub: Subscription

  constructor() {

    const intevalStream$ = interval(1000)

    this.sub = intevalStream$
    .pipe(                                          /* Для вызова оператора используется метод .pipe(), в который мы последовательно передаем операторы */

      filter((value) => value % 2 === 0),           /* filter() фильтрует значения по правилу в callback функции */

      map((value) => `Mapped value: ${value}`)      /* map() принимает в себя еще одну функцию, где каждую итерацию мы получаем значение value, */                                                                                             
    )                                               /* и можно его преобразовывать, например в строчку */
    .subscribe((value) => {
      console.log(value)
    })                 
  }                                 

  stop() {                                     
    this.sub.unsubscribe()
  }
}
