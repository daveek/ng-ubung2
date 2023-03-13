import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.scss"],
})
export class ItemComponent implements OnInit {
  @Input() label: string;
  @Input() description: string;
  @Input() category: string;
  @Input() done: boolean;

  constructor() {}

  ngOnInit(): void {}
}
