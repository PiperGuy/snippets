import { Component, OnInit  } from '@angular/core';
import {EncrDecrServiceService} from './encr-decr-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'encdecExample';
  nam
  constructor(private EncrDecr: EncrDecrServiceService) {}
  ngOnInit() {
    const encrypted = this.EncrDecr.set('123456$#@$^@1ERF', 'password@123456');
    const decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);

    console.log('Encrypted :' + encrypted);
    console.log('Encrypted :' + decrypted);
}
}
