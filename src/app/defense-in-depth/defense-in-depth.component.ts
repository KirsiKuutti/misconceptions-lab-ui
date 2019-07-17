import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defense-in-depth',
  templateUrl: './defense-in-depth.component.html',
  styleUrls: ['./defense-in-depth.component.css']
})
export class DefenseInDepthComponent implements OnInit {
  message = 'Defense in depth is not necessary.';
  constructor() { }

  ngOnInit() {
  }

}