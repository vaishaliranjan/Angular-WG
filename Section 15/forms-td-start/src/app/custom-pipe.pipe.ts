import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, upto:number): unknown {
    return value.slice(0,upto)
  }

}
