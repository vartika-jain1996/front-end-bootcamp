import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ShowcaseComponent } from './Components/showcase/showcase.component';
import { NewsletterComponent } from './Components/newsletter/newsletter.component';
import { LearnSectionsComponent } from './Components/learn-sections/learn-sections.component';
import { LearnReactSectionComponent } from './Components/learn-react-section/learn-react-section.component';
import { QuestionAccordionSectionComponent } from './Components/question-accordion-section/question-accordion-section.component';
import { ContactAndMapComponent } from './Components/contact-and-map/contact-and-map.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ModalComponent } from './Components/modal/modal.component';
import { InstructorsComponent } from './Components/instructors/instructors.component';

@NgModule({
  declarations: [ AppComponent, 
    NavbarComponent, 
    ShowcaseComponent, 
    NewsletterComponent, 
    InstructorsComponent,
    LearnSectionsComponent, 
    LearnReactSectionComponent, 
    QuestionAccordionSectionComponent, 
    ContactAndMapComponent, 
    FooterComponent, 
    ModalComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent]
})
export class AppModule { }
