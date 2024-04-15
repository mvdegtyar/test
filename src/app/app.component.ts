import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
 // standalone: true,
 // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'datetimepicker';

  group = new FormGroup({
    datetimeCtrl: new FormControl(''),
  });
}
