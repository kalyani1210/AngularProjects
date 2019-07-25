import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div style="text-align:center">
  <h1>
  {{ title }}!
</h1>
<h2>
{{"Hiii"}}
</h2>
<h3>
{{title.toUpperCase()}}
{{no1*2}}
{{no1}}
{{fun()}}
{{addition()}}
{{"Welcomee"+title}}
</h3>`,
  styles: [`
  h2
{
  color:red
}
h1
{
  color:blue;
}
h3
{
  color:black;
}
`]
})
export class AppComponent {
  title = 'Kalyani Ingale';
  no1=20;
  no2=10;
 
  fun()
  {
    return "Hello";
  }
  addition()
  {
    return (this.no1+this.no2);
  }
 
}
