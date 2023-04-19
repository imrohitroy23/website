import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills= [
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: '80',
    },
    {
      name: 'SpringBoot',
      level: 'Intermidiate',
      rating: '75',
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: '90',
    },
    {
      name: 'JAVA',
      level: 'Intermediate',
      rating: '80',
    },
    {
      name: 'SQL',
      level: 'Intermidiate',
      rating: '80',
    },
  ];
}
