import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoanService } from './loan.service';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component'; // Import du service

@NgModule({
  declarations: [
    AppComponent,
    LoanCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [LoanService], // Added LoanService to providers
  bootstrap: [AppComponent]
})
export class AppModule { }
