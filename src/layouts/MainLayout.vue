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
      <MenuComponents
        v-for="link in this.getMenuJson"
        :key="link.title"
        v-bind="link"
      />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import MenuComponents from "components/Menu.vue";
import { mapGetters } from "vuex";

export default {
  name: "MainLayout",
  components: {
    MenuComponents
  },
  mounted() {
    //A effacer si vide en fin de projet
    // console.log(getMenuJson);
    console.log(this.getPage[0]);
  },
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    ...mapGetters("moduleJson", ["getMenuJson", "getPage"])
  }
};
</script>
