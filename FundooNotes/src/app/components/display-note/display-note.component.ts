import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {
  @Input() listOfNotes: Object[];

  constructor(private service: NoteService
  ) { }

  archivefun(id: string) {
    let data = {
      isArchived: true,
      noteIdList: [id]
    }
    this.service.archiveapi(data).subscribe();
  }

  trashnotefun(id: string) {
    let data = {
      isDeleted: true,
      noteIdList: [id]
    }
    this.service.trashnoteapi(data).subscribe();
    console.log(data);
  }

  //sDeleted
  ngOnInit() {
  }

}
