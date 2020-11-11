import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1><p>Help</p>`,
  styles: [`
  h1 { font-family: Lato; }
  p {color: red}
  `]
})
export class HelloComponent  {
  @Input() name: string;
}
