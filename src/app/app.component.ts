import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  arr = ["pushkar", "punjab", "pahar"];
  markerInput = "";
  showNames = [];
  original = "";
  editorStyle = {
    height: "300px",
  };
  // onChangeEvent(event: any) {
  //   let names = [];
  //   let typedStr: string = event.target.value.toLowerCase();
  //   console.log(typedStr.includes("@"));
  //   if (typedStr.includes("@") && !typedStr.includes("@ ")) {
  //     let startIndex = typedStr.match("@");

  //     console.log("In IN In ", startIndex, typedStr);
  //     this.arr.forEach((name) => {
  //       if (name.toLowerCase().match(typedStr.slice(startIndex["index"] + 1))) {
  //         names.push(name);
  //       }
  //     });
  //     typedStr = typedStr.slice(startIndex["index"] + 1);
  //   } else {
  //     this.original = event.target.value;
  //   }
  //   this.showNames = [...names];
  // }

  showSuggestions(event) {
    this.showNames = event.markerVariables;
    this.original = event.original;
  }
}
