import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./list/item/item.component";

@NgModule({
  declarations: [AppComponent, ListComponent, ItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
