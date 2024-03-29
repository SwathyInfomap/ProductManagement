import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatInputModule,MatButtonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  @Output() search=new EventEmitter<string>();


  onSearch(){
    console.log("on Search Called");
    this.search.emit(this.text);
  }
  text="";
  inputChanged(event:any){
    console.log("input Changed Called",event.target.value);
    this.text=event.target.value;
  }
  onTyping(event:any){
    console.log("on typing called",event.target.value);
  }
}
