import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Item } from "../shared/models/item";
import { ItemsService } from "../shared/services/items-service.service";

export function trackByFunction(index, item) {
  return item.id;
}

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
})
export class ListComponent implements OnInit, OnDestroy {
  public itemsList: Array<Item> = [];
  private readonly _onDestroy$ = new Subject<void>();

  public trackBy = trackByFunction;

  constructor(private itemsService: ItemsService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.itemsService
      .getItems()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(
        (items: Item[]) => {
          this.itemsList = items;
          console.table(this.itemsList);
        },
        (error: any) => {
          console.error(error);
        }
      );
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
