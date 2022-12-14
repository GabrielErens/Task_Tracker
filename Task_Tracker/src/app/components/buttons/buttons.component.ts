import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
@Input() text!: string;
@Input() color!: string;
@Output() bntClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.bntClick.emit();
  }
}
