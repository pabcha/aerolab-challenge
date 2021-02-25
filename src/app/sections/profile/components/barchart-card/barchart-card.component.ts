import { Redeem } from './../../../../interfaces/Redeem';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'barchart-card',
  templateUrl: './barchart-card.component.html',
  styleUrls: ['./barchart-card.component.css']
})
export class BarchartCardComponent {
  @Input() redeems: Redeem[];
  data;
  options = {
    scales: { xAxes: [{ ticks: { beginAtZero: true } }] },
    responsive: true,
  };

  ngOnInit() {
    const categoriesSet = new Set(this.redeems.map(obj => obj.category));
    const categories = Array.from(categoriesSet);

    const totalProductsByCategory = categories.map(category => {
      let count = 0;
      this.redeems.map((redeem) => {
        if (redeem.category === category) count++;
      });
      return { category, count };
    });

    totalProductsByCategory.sort((a, b) => b.count - a.count);

    const labels = [];
    const dataDataset = [];
    totalProductsByCategory.forEach((group) => {
      labels.push(group.category);
      dataDataset.push(group.count);
    });

    this.data = {
      labels: labels,
      datasets: [{
        label: 'Redeems',
        data: dataDataset,
        backgroundColor: 'rgba(54, 162, 235)',

      }]
    };
  }
}
