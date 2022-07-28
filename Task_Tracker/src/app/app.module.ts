import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { RouterModule,Routes } from "@angular/router";

const appRouts: Routes = [
  {path:'', component: TaskAddComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonsComponent,
    TasksComponent,
    TaskItemComponent,
    TaskAddComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule, 
    FormsModule,
    FormsModule,
    RouterModule.forRoot(appRouts,{enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
