import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert',
  imports: [FormsModule],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})
export class ConvertComponent {

//Picture of a calculator.
imgLink:string="images/calculator-8495_256.gif";

meters:number=0;
feet:number=0;
convert1:number=0;
convert2:number=0;

//Converts meters -> feet. 
metersToFeet():void {
this.convert1=this.meters * 3.28084;
}

//Converts feet -> meters.
feetToMeters():void {
  this.convert2= this.feet * 0.3048;
}

celsius:number=0;
fahrenheit:number=0;
convert3:number=0;
convert4:number=0;


//Converts celsius -> fahrenheit.
celsiusToFahrenheit():void {
  this.convert3= (this.celsius*9/5) + 32;
}

//Converts fahrenheit -> celsius.
fahrenheitToCelsius():void {
  this.convert4= (this.fahrenheit-32)*5/9;
}

}
