import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventEmitter, Output } from '@angular/core';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();
  entredInitialInvestment = '0';
  entredAnnualInterest = '0';
  entredExpectedReturn = '5';
  entredDuration = '10';
  onSubmit(){
    this.calculate.emit({
      initialInvestment: +this.entredInitialInvestment,
      annualInvestment: +this.entredAnnualInterest,
      expectedReturn: +this.entredExpectedReturn,
      duration: +this.entredDuration
    });
}
}
