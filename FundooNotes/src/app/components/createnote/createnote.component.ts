import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})

export class CreatenoteComponent implements OnInit {
  isShow = false;
  ishidden = false;
  notecolor = 'white';
  toggleDisplay() {
    this.isShow = !this.isShow;
    this.ishidden = !this.ishidden;
  }

  inputValue(inputElement: any) {
    return this.note.get(inputElement).value;
  }

  changecolor(colorname: string) {
    this.notecolor = colorname;
  }

  note: FormGroup;
  constructor(private service: NoteService
  ) { }

  ngOnInit(): void {
    this.note = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
    });
  }

  onSubmit(): void {
    let data = {
      title: this.inputValue('title'),
      description: this.inputValue('description'),
       color: this.notecolor
    }
    this.service.createnoteapi(data).subscribe();
    console.log(data);
     this.notecolor = 'white';
    this.toggleDisplay();
  }


}
