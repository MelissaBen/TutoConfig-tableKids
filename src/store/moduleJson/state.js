export default function () {
  return {
    //

    MenuJson : [
      {
        label: "Montage de plaque",
        icon: "pages",
        
        color:"red",
        children: [
          {
            label: "Materiels",
            icon: "check",
            to: "/materiels"
          },
          {
            label: "Plaques & cables",
            icon: "check",
            to: "/cables"
          },
          {
            label: "Fixation des câbles et mini PC",
            icon: "check",
            to: "/fixationCables"
          },
          {
            label: "Positionnement adhésif",
            icon: "check",
            to: "/positionAdhésif"
          },
          {
            label: "Collage alimentation de l'écran",
            icon: "check",
            to: "/collage"
          },
          {
            label: "Adhésif de protection",
            icon: "check",
            to: "/adhésifDeProtection"
            
          },
          {
            label: "Vérification cablages du mini PC",
            icon: "check",
            to: "/verificationCables"
          },
          {
            label: "Mise en place | Accroche des câbles",
            icon: "check",
            to: "/miseEnPlace"
          }
        ]
      },
      {
        label: "Configuration Mini pc ",
        icon: "pages",
        
        color:"primary",
        children: [
          {
            label: "Configuration de base",
            icon: "check",
            to: "/configBase"
          },
          {
            label: "Contrôle parental",
            icon: "check",
            
            children: [
              {
                label: "Mot de passe ",
                icon: "check",
                to: "/motdepasse"
              },
              {
                label: "Lier le compte kiddoware",
                icon: "check",
                to: "/compteKiddoware"
              },
              {
                label: "Autorisation et bloquage",
                icon: "check",
                to: "/autorisation"
              }
            ]
          },
          {
            label: "Sauvegarde et restauration",
            icon: "check",
            to: "/save"
          },
          {
            label: "Paramètres",
            icon: "check",
            
            children: [
              {
                label: "Paramètres Contrôle parental",
                icon: "check",
                to: "/parametres"
              },
              {
                label: "Paramètre avancés",
                icon: "check",
                to: "/parametreAvances"
              },
              {
                label: "Paramètre interface",
                icon: "check",
                to: "/parametreInterface"
              }
            ]
          },
          {
            label: "Gestion Utilisateur",
            icon: "check",
            to: "/gestionutilisateur"
          },
          {
            label: "Extinction",
            icon: "check",
            to: "/extinction"
          },
          {
            label: "Verfication configuration",
            icon: "check",
            to: "/verification"
          }
        ]
      }
    ],
    
  }
}
