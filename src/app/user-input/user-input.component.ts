import { NgClass, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { output } from '@angular/core';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
 calculate = output<InvestmentInput>();
  entredInitialInvestment = signal('0');
  entredAnnualInterest = signal('0');
  entredExpectedReturn = signal('0');
  entredDuration = signal('0');
  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.entredInitialInvestment(),
      annualInvestment: +this.entredAnnualInterest(),
      expectedReturn: +this.entredExpectedReturn(),
      duration: +this.entredDuration()
    });
    this.entredInitialInvestment.set('0');
    this.entredAnnualInterest.set('0');
    this.entredExpectedReturn.set('0');
    this.entredDuration.set('0');
}
}
