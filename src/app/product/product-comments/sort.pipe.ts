import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { Reply } from "./state/product-comments.reducer";

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {
    transform(array: Reply[]): Reply[] {
        return array.sort((a: any, b: any) => {
          if (a.likesUsers.length > b.likesUsers.length) {
            return -1;
          } else if (a.likesUsers.length < b.likesUsers.length) {
            return 1;
          } else {
            return 0;
          }
        });
      }
}