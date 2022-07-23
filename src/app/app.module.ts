import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/material.module';
import { WinnersYearComponent } from './pages/dashboard/winners-year/winners-year.component';
import { TopStudiosComponent } from './pages/dashboard/top-studios/top-studios.component';
import { ProducersComponent } from './pages/dashboard/producers/producers.component';
import { ListMoviesYearComponent } from './pages/dashboard/list-movies-year/list-movies-year.component';
import { IntervalProducerComponent } from './pages/dashboard/producers/interval-producer/interval-producer.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    DashboardComponent,
    ListMoviesComponent,
    HeaderComponent,
    MenuComponent,
    WinnersYearComponent,
    TopStudiosComponent,
    ProducersComponent,
    ListMoviesYearComponent,
    IntervalProducerComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
