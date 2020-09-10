import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {
  @Input() listOfNotes: Object[];
  constructor() { }

  ngOnInit() {
  }

}
