import { Component } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent {
  request = {
    MontantAchat: 120000,
    FraisAchat: 12000,
    FondsPropres: 20000,
    DureeMois: 240,
    TauxInteret: 5.0
  };

  result: any = null;
  error: string | null = null;

  constructor(private loanService: LoanService) { }

  calculateLoan(): void {
    this.loanService.calculateLoan(this.request).subscribe(
      data => {
        this.result = data;
        this.error = null;
      },
      error => {
        this.error = 'Erreur lors de la communication avec l’API.';
        console.error(error);
      }
    );
  }
}
