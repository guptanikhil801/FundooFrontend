import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
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