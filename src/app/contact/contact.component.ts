import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) {}

  contactProfile = {
    profile: [
      {
        name: 'Facebook',
        url: 'https://facebook.com/deyRitwick',
        iconUrl: './assets/icons/facebook.svg'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/dey_ritwick',
        iconUrl: './assets/icons/twitter.svg'
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/girichippada/',
        iconUrl: './assets/icons/instagram.svg'
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/girichippada',
        iconUrl: './assets/icons/linkedin.svg'
      }
    ],
    work: [
      {
        name: 'GitHub',
        url: 'https://github.com/girichippada',
        iconUrl: './assets/icons/github.svg'
      },
      {
        name: 'Hackerrank',
        url: 'https://hackerrank.com/girichippada',
        iconUrl: './assets/icons/hackerrank.svg'
      },
      {
        name: 'Stackoverflow',
        url: 'https://stackoverflow.com/story/girichippada',
        iconUrl: './assets/icons/stackoverflow.svg'
      },
      {
        name: 'Pluralsight',
        url: 'https://www.pluralsight.com/profile/girichippada',
        iconUrl: './assets/icons/pluralsight.svg'
      }
    ]
  };

  email = {
    name: 'Email',
    url: 'mailto:giri.chippada@gmail.com',
    iconUrl: './assets/icons/email.svg'
  };

  vscodeMarketplace = {
    name: 'VSCode Extension Publisher',
    url: 'https://marketplace.visualstudio.com/publishers/girichippada',
    iconUrl: './assets/icons/vscode.svg'
  };
  ngOnInit() {}

  onBackClick() {
    this.router.navigateByUrl('/');
  }
}
