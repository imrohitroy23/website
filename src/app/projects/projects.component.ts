import { Component } from '@angular/core'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Online Test Application',
      technologies:
        'Angular, SpringBoot, MySql Database',
link:'https://github.com/imrohitroy23/onlineFrontend',
button:'View on Github',
      description: [
        'A complete full stack Website build using Angular, SpringBoot and Sql. The Web app has the function to register as a new user and has login functionalities as well as Admin has all the access to perform CRUD operations on the quiz and categories.',
      ],
    },
    {
      title: "Shoeswala.com",
      technologies:
      'HTML,SpringBoot,Bootstrap',
      link:'https://github.com/imrohitroy23/E-commerce-Website',
      button:'View on Github',
      description: [
        'A complete full stack e-commerce website to order shoes. The Website has the functionality to signUp and login a user. The user can also order products listed on the website. The admin can create, read, update, delete the data and see the list of users.  ',
      ],
    },

  ]
}
