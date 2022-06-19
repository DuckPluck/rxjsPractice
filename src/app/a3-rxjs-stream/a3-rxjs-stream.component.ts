import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from "rxjs";

@Component({
  selector: 'app-a3-rxjs-stream',
  templateUrl: './a3-rxjs-stream.component.html'
})
export class A3RxjsStreamComponent {

  sub: Subscription

  constructor() { 
    const stream$ = new Observable(observer => {      /* Класс Observable используется для создания новых стримов. В его конструктор передается аргумент observer,*/
                                                      /* от которого мы сможем запускать методы (похоже на промисы, только вместо метода resolve() метод next() ) */
      setTimeout(() => {                              /* Вызовем несколько таймаутов в стриме */
        observer.next(1)
      }, 1500)

      setTimeout(() => {                              /* Помимо метода next() у обсервера есть метод complete() (аналог промисов - complete() ) */
        observer.complete()                           /* Этот метод успешно завершает стрим */                     
      }, 1900)

      setTimeout(() => {                              /* Также у обсервера есть метод error() (аналог промисов - reject() ) */
        observer.error('Something went wrong')        /* Этот метод прекращает стрим и требует доп обработки в стриме */                     
      }, 2000)

      setTimeout(() => {
        observer.next(1)
      }, 2500)
    })
                                                      /* Далее работаем как с обычным стримом - создаем ответственную переменную, подписываемся, добавляем операторы */
    this.sub = stream$                                
      .subscribe(                                     /* Subscribe() принимает еще 2 аргумента помимо value - error и complete */
        value => console.log('Next: ', value),        
        error => console.log('Error: ', error),       /* аргумент error для обработки ошибок */
        () => console.log('Complete'))                /* аргумент complete (без аргументов) для успешного завершения стрима */
      
   }

  stop() {
      this.sub.unsubscribe()
  }

}
