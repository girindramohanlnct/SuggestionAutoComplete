import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[appSuggestion]",
})
export class SuggestionDirective {
  @Input() items: string[];
  @Input() var: string;
  original: string = "";
  @Output() variableEvent = new EventEmitter<any>();
  constructor(private el: ElementRef) {}

  @HostListener("input") onKeyPress() {
    let names = [];
    let typedStr: string = this.el.nativeElement.value;

    // console.log(typeof this.var, " ", typedStr.includes(this.var));
    if (typedStr.includes(this.var) && !typedStr.includes(this.var + " ")) {
      let startIndex = typedStr.match(this.var);
      this.items.forEach((name) => {
        if (name.toLowerCase().match(typedStr.slice(startIndex["index"] + 1))) {
          names.push(name);
        }
      });
      // console.log(typedStr);
      // typedStr = typedStr.slice(startIndex["index"] + 1);
      // // this.original = typedStr;
      // console.log(typedStr);
    } else {
      this.original = this.el.nativeElement.value;
    }

    const result = { markerVariables: [...names], original: this.original };
    this.variableEvent.emit(result);
    // this.el.nativeElement.style.color = "red";
  }
}
