import { Component } from '@angular/core';
import { CoronaService } from './services/corona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  countries:any
  country:any
  confirmed:any
  recovered:any
  death:any


  constructor(private corona:CoronaService){

  }

  ngOnInit(){
    this.corona.getCountries().subscribe((data)=>{
      //console.log(data);
      this.countries=data;
    })
  }
 

  getCountry(country:any){
    this.country = country;
    //console.log(country);
  }

  // getCoronaData(){
  //   alert(this.country);
  // }

  getCoronaData() {
    this.corona.getCoronaRealtimeData(this.country).subscribe((data)=>{
      console.log(data);
      var index = data.length - 1;
      this.confirmed = data[index].Confirmed
      this.recovered = data[index].Recovered
      this.death = data[index].Deaths
    })
  }

}
