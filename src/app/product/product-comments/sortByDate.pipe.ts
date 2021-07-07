import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { Reply } from "./state/product-comments.reducer";

@Pipe({name: 'sortByDate'})
export class SortByDatePipe implements PipeTransform {
    transform(array: Reply[]): Reply[] {
        return array.sort((a: any, b: any) => {
          if (a.date > b.date) {
            return -1;
          } else if (a.date < b.date) {
            return 1;
          } else {
            return 0;
          }
        });
      }
}