import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-notatarget',
  templateUrl: './notatarget.component.html',
  styleUrls: ['./notatarget.component.css']
})
export class NotatargetComponent implements OnInit {
  message = 'I am not a target of cyber attacks.';
  thirdForm: any;
  secondForm: any;
  firstForm: any;

  constructor() {
  }

  ngOnInit() {
  }

  onThirdSubmit() {

  }

  onSecondSubmit() {

  }

  onFirstSubmit() {

  }
}
