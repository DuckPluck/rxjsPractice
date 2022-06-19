import { Component } from '@angular/core';

import { interval, Subscription } from "rxjs"               /* У rxjs есть два импорта - rxjs (чтобы создавать новые стримы) и rxjs/operators (чтобы оперировать стримами) */
import {  } from "rxjs/operators"

@Component({
  selector: 'app-a1-rxjs-basics',
  templateUrl: './a1-rxjs-basics.component.html'
})
export class A1RxjsBasicsComponent {

  sub: Subscription

  constructor() {                              /* Чтобы посмотреть как это работает реализуем конструктор (или ngOnInit) */

    const intevalStream$ = interval(1000)      /* создадим функцию interval(), чтобы она вернула нам новый стрим */
                                               /* $ в конце константы ставится, чтобы обозначить реактивность, в данном случае стрим */
    this.sub = intevalStream$.subscribe((value) => {      /* Метод subscribe() с callback функцией и аргументом value */
      console.log(value)                       /* Если что-то происходит, метод выдает результат в переменную value */
    })                 
  }                                 

/* Чтобы отменить подписку необходимо создать переменную типа Subscription для получения результата работы метода subscribe() */
/* Теперь эта переменная отвечает за подписку */

  stop() {                                     
    this.sub.unsubscribe()                     /* Далее применям к переменной метод unsubscribe() */
  }

}
