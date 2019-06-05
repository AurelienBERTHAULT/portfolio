import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ab-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {

  public experiences;

  constructor() { }

  ngOnInit() {
    this.experiences = [
      {
        year: 2007
      },
      {
        type: "Fin du cursus Baccalauréat S \"Sciences de l'Ingénieur\"",
        place: "Lycée les Lombards, Troyes"
      },
      {
        type: "Début du cursus DUT Informatique",
        place: "IUT de Reims"
      },
      {
        year: 2008
      },
      {
        type: "Echec du cursus DUT Informatique",
        place: "IUT de Reims"
      },
      {
        type: "Début du cursus DUT \"Service et Réseaux de Communication\"",
        place: "IUT de Troyes"
      },
      {
        year: 2009
      },
      {
        year: 2010
      },
      {
        type: "Stage",
        place: "Bébé d'Amour",
        missions: [
          {
            label: "Développement du site vitrine d'un commerce",
            duration: "4 mois",
            details: "Bébé d'Amour, magasin d'articles de puériculture sur Troyes m'a proposé lors d'un stage de refaire leur site vitrine en PHP et d'intégrer une fonctionnalité de gestion de listes de naissance."
          }
        ]
      },
      {
        type: "Fin du cursus DUT \"Services et Réseaux de Communication\"",
        place: "IUT de Troyes"
      },
      {
        type: "Début du cursus ingénieur \"Informatique et Systèmes d'Information\"",
        place: "Université de Technologie de Troyes"
      },
      {
        year: 2011
      },
      {
        year: 2012
      },
      {
        type: "Stage",
        place: "Eco-Compteur",
        missions: [
          {
            label: "Développement d'une Application Web Flex",
            duration: "6 mois",
            details: "Eco-Compteur fournit aux municipalités, aux gestionnaires de parcs et autres structures accueillant du public un large éventail de capteurs permettant de calculer de façon précise la fréquentation d'un lieu, qu'il s'agisse de compter le nombre de piétons sur un trottoir, de vélos sur une piste cyclable ou bien de véhicules passant dans une rue. Afin que ses clients puissent consulter les statistiques remontées, Eco-Compteur met à leur disposition plusieurs interfaces web. C'est sur la principale d'entre elles : \"Eco-visio\" (développée en Flex) que j'ai été amené à apporter de nouvelles fonctionnalités."
          }
        ]
      },
      {
        year: 2013
      },
      {
        year: 2014
      },
      {
        type: "Stage",
        place: "Actimage Luxembourg",
        missions: [
          {
            label: "Développement d'une Application Web ZendFramework 2 dans le cadre d'un projet européen",
            duration: "3 mois",
            details: "Régulièrement l'union européenne lance des grands programmes d'appels à projets pour encourager et financer la recherche sur de grandes thématiques. Des consortiums européens rassemblant des universités et des entreprises sont ainsi invités à proposer des projets sur ces thématiques. L'une de ces thématiques était la santé et l'indépendance des personnes agées. Dans ce contexte, Actimage accompagné de 6 partenaires européens a proposé le projet \"M3W\", un site proposant des \"Smart Games\" aux personnes agées, l'idée étant qu'elles entretiennent leurs capacités cognitives (réflexes, mémoire, etc) par le biai de petits jeux mais également que ces capacités soient surveillées et qu'un professionnel de santé soit alerté en cas de détérioration. Ma mission était de développer le site (les jeux étaient développés par un autre partenaire) avec le framework PHP \"Zend Framework 2\"."
          },
          {
            label: "Développement d'une Application Web Symfony pour l'Armée de Terre Française",
            duration: "3 mois",
            details: "Dans le cadre d'un projet d'Application Web pour l'Armée de Terre Française, j'ai été ammené à aider l'équipe de la Business Unit de Paris (responsable du projet) à développer diverses fonctionnalités de cet applicatif PHP Symfony."
          }
        ] 
      },
      {
        type: "Fin du cursus ingénieur \"Informatique et Systèmes d'Information\"",
        place: "Université de Technologie de Troyes"
      },
      {
        type: "Début du CDI",
        place: "Interact-IV.com Lux"
      },
      {
        year: 2015
      },
      {
        year: 2016
      },
      {
        year: 2017
      },
      {
        year: 2018
      },
      {
        year: 2019
      },
      {
        type: "CDI en cours",
        place: "Interact-IV.com Lux",
        missions: [
          {
            label: "Développement et maintien en conditions opérationnelles d'Applications Web PHP et Zend Framework 2",
            duration: "30 mois",
            details: "Durant mes premières années chez Interact-IV.com Lux, notre activité se focalisait sur le développement de sites web à destination du grand public que nous monétisions soit par du paiement (\"One Shot\" ou abonnement) sur facture opérateur télécom (solutions de paiement Contact+ et Internet+), soit par de la publicité (Google AdSense, Taboola, Outbrain). Nous faisions de l'acquisition de trafic vers ces sites via des campagnes Google Adwords, Google Adsense, Outbrain, Taboola. Bien qu'étant essentiellement impliqué sur la conception et réalisation de ces sites (développés en PHP puis en Zend Framework 2), cette expérience m'a donc également permis de découvrir l'univers de l'acquisition de trafic et la monétisation de sites web."
          },
          {
            label: "Développement d'un CMS Angular 2+",
            duration: "30 mois (mission en cours)",
            details: "La Business Unit \"Printel\" est un acteur historique sur le marché de l'attribution des places pour le passage du permis de conduire, l'équipe du Luxembourg a désormais intégré cette Business Unit et dans une volonté de diversification de l'activité, nous développons un CMS Angular 2+ afin de fournir aux auto-écoles aujourd'hui et aux autres TPE/PME demain leur propre site web configurable en quelques clics."
          }
        ] 
      },
      {
        year: "Aujourd'hui"
      },
    ]
  }

}
