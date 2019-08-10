import { Component, OnInit, style, state, animate, transition, trigger } from '@angular/core';
import {Portfolio} from '../models/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate(400, style({opacity: 1}))
      ]),
      transition(':leave', [
        animate(400, style({opacity: 0}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  public portfolio: Portfolio;
  public logOpen: boolean = true;
  public updateOpen: boolean = true;
  public bioOpen: boolean = true;
  ngOnInit(): void{
    this.portfolio = {
      firstName: 'Jeb',
      middleName: 'Stuart',
      lastName: 'Sumeracki',
      subHeading: 'Coder',
      socialMedia: [
        {
          icon: 'fa fa-linkedin fa-2x',
          link: 'https://www.linkedin.com/in/jeb-sumeracki',
          color: '#0077B5'
        },
        {
          icon: 'fa fa-github fa-2x',
          link: 'https://github.com/jebbss',
          color: '#6e5494'
        },
        {
          icon: 'fa fa-codepen fa-2x',
          link: 'https://codepen.io/jebbss/',
          color: '#ffffff'
        },
        {
          icon: 'fa fa-free-code-camp fa-2x',
          link: 'https://www.freecodecamp.org/jebbss',
          color: '#006400'
        }
      ],
      introduction: 'Hi, I\'m Jeb',
      changeLog: [
        {
          color: "#f56310",
          month: "June",
          year: 2019,
          highlight: "Joined Accenture as a Software Artisan for Industry X.0",
          details: "Continiously uplifts team and clients while delievering thin slices."
        },
        {
          color: "#eb4888",
          month: "June",
          year: 2018,
          highlight: "Started new role as Software Developer at FedEx",
          details: "Develops large scale enterprise applications in a scrum team."
        },
        {
          color: "#10a2f5",
          month: "May",
          year: 2018,
          highlight: "Graduated from Univesity of Wisconsin-Madison!",
          details: "Graduated with a focus on Computer Science, Chinese and East Asian studies."
        },
        {
          color: "#24d05a",
          month: "December",
          year: 2017,
          highlight: "Completed FreeCodeCamp Front-end certificate",
          details: "Completed 200 hours of HTML, CSS and Javascript projects. Examples can be found on my codepen."
        },
        {
          color: "#eb4888",
          month: "September",
          year: 2017,
          highlight: "Started new role as Resident Advisor",
          details: "Leads a community of 50 residents in university housing."
        },
        {
          color: "#f56310",
          month: "September",
          year: 2016,
          highlight: "Started new role as Student Assistant at College Library",
          details: "Assists in the circulation and maintance of Laptops & media hardware and provides first level technical support."
        }
      ],
      updates: [
        {
          description: "Idea notebook",
          link: 'https://jeb-vidjot.herokuapp.com/'
        },
        {
          description: "File meta data microservice",
          link: 'https://jeb-filemetadata.herokuapp.com/'
        },
        {
          description: "Simon game",
          link: 'https://codepen.io/jebbss/full/ppwyJq/'
        },
        {
          description: "Weather app",
          link: 'https://codepen.io/jebbss/full/EXgbKw/'
        }
      ],
      speakerBio: "Jeb is currently a Software Artisan as part of Industry X.0 at Accenture. Currently he works to continuously uplift team, clients and self while delivering thin slices of software. His past experience includes creating, upgrading and maintaining distributed java applications as part of a scrum team.  During his time at university his focuses included Computer Science and Chinese language and culture. Jeb has exposure to Operating Systems, Database management and Computer Networks, completing team projects in each area. In his free time, Jeb studies various technologies, their applications and gets outdoors."
    };
  }

  public toggleOpen(valueToToggle: string): void {
    switch(valueToToggle) {
      case 'logOpen':
      this.logOpen = !this.logOpen
      break;
      case 'updateOpen':
      this.updateOpen = !this.updateOpen
      break;
      case 'bioOpen':
      this.bioOpen = !this.bioOpen
      break;
    }
  }
}
