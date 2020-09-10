import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {
  @Input() listOfNotes: Object[];
  breakpoint: number;
  constructor() { }
  disp() {
    console.log(this.listOfNotes);
  }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 3;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 600) ? 1 : 3;
  }

}
