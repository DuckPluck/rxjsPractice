import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { A1RxjsBasicsComponent } from './a1-rxjs-basics/a1-rxjs-basics.component';
import { A2RxjsOperatorsComponent } from './a2-rxjs-operators/a2-rxjs-operators.component';
import { A3RxjsStreamComponent } from './a3-rxjs-stream/a3-rxjs-stream.component';
import { A4RxjsSubjectComponent } from './a4-rxjs-subject/a4-rxjs-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    A1RxjsBasicsComponent,
    A2RxjsOperatorsComponent,
    A3RxjsStreamComponent,
    A4RxjsSubjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
