import {Component} from '@angular/core';
import {NbMenuItem} from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuItems: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: 'home',
      home: true,
    },
    {
      title: 'LABS',
      group: true,
    },
    {
      title: 'EnCRAPter',
      link: 'encrapter',
    },
    {
      title: 'Anonymized-data',
      link: 'anonymized',
    },
    {
      title: 'CompletelyAnonymous',
      link: 'completelyanonymous',
    },
    {
      title: 'defenseindepth',
      link: 'defenseindepth',
    },
    {
      title: 'encryptionautointegrity',
      link: 'encryptionautointegrity',
    },
    {
      title: 'goodpasswords',
      link: 'goodpasswords',
    },
    {
      title: 'humansarerational',
      link: 'humansarerational',
    },
    {
      title: 'notatarget',
      link: 'notatarget',
    },
    {
      title: 'physicalsecruity',
      link: 'ephysicalsecruity',
    },
    {
      title: 'privacynotimportant',
      link: 'privacynotimportant',
    },
    {
      title: 'securitybyobscurity',
      link: 'securitybyobscurity',
    },
    {
      title: 'securityinmind',
      link: 'securityinmind',
    },
    {
      title: 'secruityproduct',
      link: 'secruityproduct',
    },
    {
      title: 'trustusers',
      link: 'trustusers',
    },
    {
      title: 'twofa',
      link: 'twofa',
    },
  ];

}
