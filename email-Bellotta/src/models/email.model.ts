export class Email {
    textEmail: string;
    textObject: string;
    textContext: string;
  
    constructor(textEmail: string, textObject: string, textContext: string, votes?: number) {
      this.textEmail = textEmail;
      this.textObject = textObject;
      this.textContext = textContext;
    }
}