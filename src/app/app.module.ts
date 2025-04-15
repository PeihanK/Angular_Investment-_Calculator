import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentsResultsComponent } from "./investments-results/investments-results.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserInputComponent, InvestmentsResultsComponent],
    imports: [FormsModule, BrowserModule],
})

export class AppModule {}