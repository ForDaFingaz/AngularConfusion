import { importType }               from '@angular/compiler/src/output/output_ast';

import { BrowserModule }            from '@angular/platform-browser';
import { BrowserAnimationsModule }  from '@angular/platform-browser/animations';

import { NgModule }                 from '@angular/core';

import { AppRoutingModule }         from './app-routing/app-routing.module';

import { AppComponent }             from './app.component';

import { FlexLayoutModule }         from '@angular/flex-layout';

import { MatButtonModule }          from '@angular/material/button';
import { MatCardModule }            from '@angular/material/card';
import { MatCheckboxModule }        from '@angular/material/checkbox';
import { MatDialogModule }          from '@angular/material/dialog';
import { MatFormFieldModule }       from '@angular/material/form-field';
import { MatGridListModule }        from '@angular/material/grid-list';
import { MatInputModule }           from '@angular/material/input';
import { MatListModule }            from '@angular/material/list';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule }          from "@angular/material/select";
import { MatSlideToggleModule }     from "@angular/material/slide-toggle";
import { MatToolbarModule }         from '@angular/material/toolbar';

import { FormsModule }              from '@angular/forms';
import { ReactiveFormsModule }      from "@angular/forms";

import { DishService }              from './services/dish.service';
import { PromotionService}          from './services/promotion.service';
import { LeaderService}             from './services/leader.service';

import 'hammerjs';

import { MenuComponent }            from './menu/menu.component';
import { DishdetailComponent }      from './dishdetail/dishdetail.component';
import { HeaderComponent }          from './header/header.component';
import { FooterComponent }          from './footer/footer.component';
import { AboutComponent }           from './about/about.component';
import { HomeComponent }            from './home/home.component';
import { ContactComponent }         from './contact/contact.component';
import { LoginComponent }           from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [
    DishService,
    LeaderService,
    PromotionService
  ],
  entryComponents: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
