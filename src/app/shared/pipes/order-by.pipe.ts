import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(arr: Array<{}>, key: string, ascending: boolean): any {
    if (!arr || arr.length < 2) {
      return arr;
    }

    const length = arr.length;
    for (let i = 1; i < length; i++) {
      const arrayItem = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j][key] > arrayItem[key]) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = arrayItem;
    }

    console.log(arr);
    return ascending ? arr : arr.reverse();
  }
}
