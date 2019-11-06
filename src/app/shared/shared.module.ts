import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimeService } from "./services/time.service";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

@NgModule({
  imports: [CommonModule],
  declarations: [PageNotFoundComponent],
  providers: [TimeService],
  exports: [PageNotFoundComponent]
})
export class SharedModule {}
