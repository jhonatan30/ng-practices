import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ICNDBResponseValue } from '../../models/icndb-api.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JokeComponent {

  @Input() joke: ICNDBResponseValue;

}
