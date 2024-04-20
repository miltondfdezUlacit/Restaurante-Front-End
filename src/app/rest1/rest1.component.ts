import { Component, NgModule, Renderer2 } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


//import { MesasGridComponent } from '../mesas-grid/mesas-grid.component';

@Component({
  selector: 'app-rest1',
  standalone: true,
  imports: [CommonModule, /**MesaGridComponent */],
  templateUrl: './rest1.component.html',
  styleUrl: './rest1.component.css'
})

export class Rest1Component implements OnInit {

  
  constructor(private renderer: Renderer2) { }



ngOnInit() {
  const script = this.renderer.createElement('script');
  script.src = './rest1/rest1.js'; 
  this.renderer.appendChild(document.body, script);
}

}


@NgModule({
imports: [CommonModule, BrowserModule, NgbModule],
//bootstrap: [AppComponent]
})
export class Rest1Module {}
