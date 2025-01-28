import { NgClass, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  entredInitialInvestment = signal('0');
  entredAnnualInterest = signal('0');
  entredExpectedReturn = signal('0');
  entredDuration = signal('0');

  constructor(private investmentService: InvestmentService ) {}

  onSubmit(){
    this.investmentService.calculateInvestmentResults(
      {
        initialInvestment: +this.entredInitialInvestment(),
        duration: +this.entredDuration(),
        expectedReturn: +this.entredExpectedReturn(),
        annualInvestment: +this.entredAnnualInterest()
      }
    );
    this.entredInitialInvestment.set('0');
    this.entredAnnualInterest.set('0');
    this.entredExpectedReturn.set('0');
    this.entredDuration.set('0');
}
}
