import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import competitionJson from "../../assets/competitions.json";
import { ICompetition } from "../model/ICompetition.interface";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  competitions: ICompetition[] = competitionJson.competitions;

  firstNameDelegate: string = '';
  lastNameDelegate: string = '';
  selectedCompetition: string = '';
  addition: string = '';

  competitionForm: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.competitionForm = this.fb.group({
      competitionControl: [''],
      additionControl: ['']
    });

    console.log(this.competitions)

  }

}
