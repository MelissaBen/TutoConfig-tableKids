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
          class="q-py-sm"
        />

        <q-toolbar-title class="toolbarTitle">
          Table kids
        </q-toolbar-title>
        <!-- Navigation Tabs -->

        <div
          class=" button q-pa-sm q-gutter-lg row"
          v-if="this.$route.path != '/'"
        >
          <q-btn color="grey" label="Accueil " to="/" />
          <q-btn
            color="grey"
            label="Retour "
            @click="hasHistory() ? $router.go(-1) : $router.push('/')"
          />
        </div>
        <div class="menuButton flex flex-center q-pa-sm q-gutter-lg row">
          <q-btn
            v-for="item in this.getMenuJson"
            :key="item.label"
            style="min-width: 280px"
            color="accent"
            :label="item.label"
            icon="keyboard_arrow_down"
          >
            <q-menu transition-show="flip-right" transition-hide="flip-left">
              <q-list
                v-for="item in item.children"
                v-bind:key="item.title"
                style="min-width: 280px"
              >
                <q-item v-if="item.to" :to="item.to" clickable>
                  <q-item-section>{{ item.label }}</q-item-section>
                </q-item>

                <q-item v-else :label="item.label" :icon="item.icon">
                  <q-item-section>
                    {{ item.label }}
                    <q-menu
                      transition-show="flip-right"
                      transition-hide="flip-left"
                      class=""
                      clickable
                    >
                      <q-list
                        v-for="tiroir in item.children"
                        v-bind:key="tiroir.label"
                        sclass="q-pa-lg "
                        style="min-width: 200px "
                      >
                        <q-item :to="tiroir.to" clickable>
                          <q-item-section>{{ tiroir.label }}</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>

      <br />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <MenuComponents
        v-for="link in this.getMenuJson"
        :key="link.label"
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
  },
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    ...mapGetters("moduleJson", ["getMenuJson"])
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
    }
  }
};
</script>

<style scoped>
@media screen and (max-width: 1024px) {
  .menuButton {
    display: none;
  }
}
@media screen and (max-width: 320px) {
  .toolbarTitle {
    display: none;
  }
  .button {
    padding: 0;
    margin: 0;
  }
}
@media screen and (max-width: 375px) {
  .toolbarTitle {
    font-size: 17px;
    margin: 0;
  }
  .button {
    padding: 0;
  }
}
</style>