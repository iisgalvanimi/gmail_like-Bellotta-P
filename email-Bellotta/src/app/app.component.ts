import { Component } from '@angular/core';
import { Email } from 'src/models/email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email : string = "";
  estratto : string = "";
  testo : string = "";
  vett_Email_Oggetto : Email[] = [];

  registrazione(email : HTMLInputElement, testo : HTMLInputElement,  oggetto : HTMLInputElement ) : boolean{
    console.log(email.value, oggetto.value, testo.value);
    let e = new Email(email.value, oggetto.value, testo.value);
    this.vett_Email_Oggetto.push(e);
    console.log(this.vett_Email_Oggetto);

    return false;
  }
}

LINK PER FINIRE TUTTI I PUNTI
https://w3schools.com/cssref/pr_class_visibility.asp
https://www.w3schools.com/cssref/tryit.asp?filename=trycss_visibility
https://stackoverflow.com/questions/35269179/angular-conditional-class-with-ngclass