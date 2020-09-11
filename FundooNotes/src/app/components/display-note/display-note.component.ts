import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent implements OnInit {
  @Input() listOfNotes: Object[];
  @Output() data: EventEmitter<string> = new EventEmitter();

  constructor(private service: NoteService, private snackBar: MatSnackBar
  ) { }

  archivefun(id: string) {
    let data = {
      isArchived: true,
      noteIdList: [id]
    }
    this.service.archiveapi(data).subscribe(
      response => {
        this.snackBar.open("Successfull:", "Note Archived", {
          duration: 2500
        });
      },
      error => {
        this.snackBar.open("Failed:", "something went wrong", {
          duration: 2500
        });
      }
    );
  }

  colorchangefun(id: string, newcolor: string) {
    let data = {
      color: newcolor,
      noteIdList: [id]
    }
    this.service.colorchangeapi(data).subscribe();
    this.data.emit('getallnote');
  }

  trashnotefun(id: string) {
    let data = {
      isDeleted: true,
      noteIdList: [id]
    }
    this.service.trashnoteapi(data).subscribe(
      response => {
        this.snackBar.open("Successfull:", "Note trashed", {
          duration: 2500
        });
      },
      error => {
        this.snackBar.open("Failed:", "something went wrong", {
          duration: 2500
        });
      }
    );
    console.log(data);
  }

  ngOnInit() {
  }

}
