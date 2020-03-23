import { Component, Input } from '@angular/core';

@Component({
  selector: 'legends',
  template: `<h1>Legends: {{topic}}</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class TopicComponent  {
  @Input() topic: string;
}
