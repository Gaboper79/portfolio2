import { Component, Input, OnInit } from "@angular/core";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { SkillI } from "src/app/model/skill";

import { SkillService } from "src/app/servicios/skill.service";
import { UserDataService } from "src/app/servicios/user-data.service";

@Component({
  selector: "app-itemskill",
  templateUrl: "./itemskill.component.html",
  styleUrls: ["./itemskill.component.scss"],
})
export class ItemskillComponent implements OnInit {
  @Input() skill!: SkillI;
  @Input() item!: number;
  modifico = false;
  faEdit = faEdit;
  faDelete = faTrash;

  current!: number;
  max = 100;
  radius = 80;
  background = "'#eaeaea'";
  color = "#479c4e";

  constructor(
    public skillSVC: SkillService,
    public userService: UserDataService
  ) {}

  ngOnInit(): void {
    this.current = this.skill.valor;
  }
  CambioModifico() {
    this.modifico = !this.modifico;
  }
  evento(data: String) {
    if (this.modifico == true) {
    }
    this.modifico = !this.modifico;
  }
  eliminarSkill() {
    this.skillSVC.deleteSkill(this.skill, this.item);
  }
}