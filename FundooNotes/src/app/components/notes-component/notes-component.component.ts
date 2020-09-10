import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes-component',
  templateUrl: './notes-component.component.html',
  styleUrls: ['./notes-component.component.css']
})
export class NotesComponentComponent implements OnInit {
  listOfNotes: Object[];
  constructor(private noteservice:NoteService) { }

  apiCallGetAllNote()
  {
    this.noteservice.getallnotesapi().subscribe
    ( 
    response=>{
      this.listOfNotes = response['data']['data'];
        console.log(response['data']['data']);
    }
    );
  }
  ngOnInit(): void {
   this.apiCallGetAllNote();
  }

}
