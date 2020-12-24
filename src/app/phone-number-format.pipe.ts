import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phoneNumberFormat"
})
export class PhoneNumberFormatPipe implements PipeTransform {
  transform(value: string, phone?: string): string {
    let regex = /^(\d{3})(\d{3})(\d{4})$/;
    let matchedNumber = value.match(regex);
    if (matchedNumber) {
      return (
        "(" +
        matchedNumber[1] +
        ") " +
        matchedNumber[2] +
        " - " +
        matchedNumber[3]
      );
    } else return "wrong number!";
  }
}
