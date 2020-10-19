<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          v-on:click="leftDrawerOpen = !leftDrawerOpen"
          class="q-pa-md"
        />

        <q-toolbar-title>
          Table kids
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-expansion-item class="q-pt-lg" icon="pages" label="Montage de plaque">
        <q-list class="q-pl-lg">
          <MontagePlaqueComponents
            v-for="link in menuJsonMontageDePlaque"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-expansion-item>

      <q-expansion-item
        class="q-pt-lg"
        icon="pages"
        label="Configuration Mini PC"
      >
        <q-list class="q-pl-lg">
          <ConfigurationComponents
            v-for="link in menuJsonConfiguration"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </q-expansion-item>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import ConfigurationComponents from "components/MenuConfiguration.vue";
import MontagePlaqueComponents from "components/MenuMontagePlaque.vue";

const montageDePlaque = [
  {
    title: "Materiels",
    icon: "check",
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
];
const configuration = [
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
        title: "Contrôle parental",
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
];

export default {
  name: "MainLayout",
  components: { MontagePlaqueComponents, ConfigurationComponents },
  data() {
    return {
      leftDrawerOpen: false,
      menuJsonMontageDePlaque: montageDePlaque,
      menuJsonConfiguration: configuration
    };
  }
};
</script>
