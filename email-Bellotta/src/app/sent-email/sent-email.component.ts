import { Component, OnInit, Input } from '@angular/core';
import { Email } from 'src/models/email.model';

@Component({
  selector: 'app-sent-email',
  templateUrl: './sent-email.component.html',
  styleUrls: ['./sent-email.component.css']
})
export class SentEmailComponent implements OnInit {
  @Input() inputEmail:Email = undefined!;

  constructor() {
    
  }
  ngOnInit() {}
}
