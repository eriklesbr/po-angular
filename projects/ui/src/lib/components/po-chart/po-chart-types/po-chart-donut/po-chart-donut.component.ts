import { Component, ElementRef, NgZone, Renderer2 } from '@angular/core';

import { PoChartCircular } from '../po-chart-circular/po-chart-circular';
import { poChartStartAngle } from '../po-chart-circular/po-chart-circular.constant';

@Component({
  selector: 'po-chart-donut',
  templateUrl: '../po-chart-dynamic-type.component.html'
})
export class PoChartDonutComponent extends PoChartCircular {
  chartItemStartAngle: number = poChartStartAngle;

  constructor(el: ElementRef, ngZone: NgZone, renderer: Renderer2) {
    super(el, ngZone, renderer);
  }
}
