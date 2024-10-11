import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthName',
  standalone: true,
})
export class MonthNamePipe implements PipeTransform {

  private months: string[] = [
    'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu',
    'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'
  ];

  transform(value: number): string {
    if (value >= 1 && value <= 12) {
      return this.months[value - 1];
    }
    return 'Mese non valido';
  }

}
