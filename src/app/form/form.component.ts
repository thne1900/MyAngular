import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  //Method for displaying alert box.
  sendMessage(){
    alert ("Tack! Dina synpunkter har skickats")
  }

}
