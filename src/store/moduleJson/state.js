export default function () {
  return {
    //

    MenuJson : [
      {
        label: "Montage de plaque",
        icon: "pages",
        to: "",
        color:"red",
        tab: [
          {
            title: "Materiels",
            icon: "mail",
            to: "/materiels"
          },
          {
            title: "Plaques & cables",
            icon: "check",
            to: "/cables"
          },
          {
            title: "Fixation des câbles et mini PC",
            icon: "check",
            to: "/fixationCables"
          },
          {
            title: "Positionnement adhésif",
            icon: "check",
            to: "/positionAdhésif"
          },
          {
            title: "Collage alimentation de l'écran",
            icon: "check",
            to: "/collage"
          },
          {
            title: "Adhésif de protection",
            icon: "check",
            to: "/adhésifDeProtection"
            
          },
          {
            title: "Vérification cablages du mini PC",
            icon: "check",
            to: "/verificationCables"
          },
          {
            title: "Mise en place | Accroche des câbles",
            icon: "check",
            to: "/miseEnPlace"
          }
        ]
      },
      {
        label: "Configuration Mini pc ",
        icon: "pages",
        to: "",
        color:"primary",
        tab: [
          {
            title: "Configuration de base",
            icon: "check",
            to: "/configBase"
          },
          {
            title: "Contrôle parental",
            icon: "check",
            to: "",
            multi: [
              {
                title: "Mot de passe ",
                icon: "check",
                to: "/motdepasse"
              },
              {
                title: "Lier le compte kiddoware",
                icon: "check",
                to: "/compteKiddoware"
              },
              {
                title: "Autorisation et bloquage",
                icon: "check",
                to: "/autorisation"
              }
            ]
          },
          {
            title: "Sauvegarde et restauration",
            icon: "check",
            to: "/save"
          },
          {
            title: "Paramètres",
            icon: "check",
            to: "",
            multi: [
              {
                title: "Paramètres Contrôle parental",
                icon: "check",
                to: "/parametres"
              },
              {
                title: "Paramètre avancés",
                icon: "check",
                to: "/parametreAvances"
              },
              {
                title: "Paramètre interface",
                icon: "check",
                to: "/parametreInterface"
              }
            ]
          },
          {
            title: "Gestion Utilisateur",
            icon: "check",
            to: "/gestionutilisateur"
          },
          {
            title: "Extinction",
            icon: "check",
            to: "/extinction"
          },
          {
            title: "Verfication configuration",
            icon: "check",
            to: "/verification"
          }
        ]
      }
    ],
    
  }
}
