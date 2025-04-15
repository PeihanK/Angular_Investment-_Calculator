
import { Component, inject, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {
  private investmentService = inject(InvestmentService);

  results = computed(() => this.investmentService.resultData());
}

