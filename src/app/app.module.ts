import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MatToolbarModule, MatCardModule, MatTableModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatDividerModule, MatIconModule, MatButtonModule, MatTabsModule } from "@angular/material";
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { SuiModule } from 'ng2-semantic-ui';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { Observable } from "rxjs";

import {MovieService} from "./movie.service";

const routes: Routes = [
  { path: 'add', component: AddComponent},
  { path: 'edit/:id', component: EditComponent  },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatFormFieldModule,MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    LazyLoadImageModule,
    SuiModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
