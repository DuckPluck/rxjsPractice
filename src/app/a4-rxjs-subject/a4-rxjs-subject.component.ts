import { Component } from '@angular/core';
import { Subscription, Subject } from "rxjs"  

// Subject это такой же класс как и Observable, который позволяет создавать новые стримы, но он являеется расширенной версией. 
// Можно не только подписываться, но и имитить события

@Component({
  selector: 'app-a4-rxjs-subject',
  templateUrl: './a4-rxjs-subject.component.html'
})
export class A4RxjsSubjectComponent {

  sub: Subscription
  stream$: Subject<number> = new Subject<number>()  /* Создаем переменную stream$ типа Subject и выбираем generic-тип наполнения, который будем имитить - <void> */
  counter = 0

  constructor() {
    this.sub = this.stream$.subscribe(value => console.log('Subscribe', value))      /* Для начала подписываемся на стрим и создаем возможность отписки*/
     
  }                                 

  next() {
    this.counter++
    this.stream$.next(this.counter)      /* Дополнительно создаем метод next(), который будет вызывать следующую итерацию стрима. И передавать значение счетчика*/
  }

  stop() {                                     
    this.sub.unsubscribe()
  }
}
