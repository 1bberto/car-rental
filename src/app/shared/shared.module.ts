import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { TimeService } from "./services/time.service";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthService } from './services/auth.service';
import { AuthGuard } from './security/auth.guard';
import { RandomGeneratorService } from './services/random-generator.service';

@NgModule({
  imports: [
    CommonModule,  
    HttpClientModule
  ],
  declarations: [PageNotFoundComponent],
  providers: [
    TimeService, 
    AuthService,
    AuthGuard,
    RandomGeneratorService],
  exports: [
    PageNotFoundComponent]
})
export class SharedModule {}
