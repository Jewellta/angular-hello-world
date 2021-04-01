import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "hello-world-angular?";
  name:string ="Tyler Jewell";

myText:string="Default my Text string";

  changeName():void{
    this.name="tyler";
  }
}
