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
          class="q-py-md"
        />

        <q-toolbar-title>
          Table kids
        </q-toolbar-title>

        <div class="q-mr-lg q-gutter-md" v-if="this.$route.path != '/'">
          <q-btn color="grey" label="Accueil " to="/" />
          <q-btn
            color="grey"
            label="Retour "
            @click="hasHistory() ? $router.go(-1) : $router.push('/')"
          />
        </div>
        <div class="q-gutter-md">
          <q-btn
            v-for="item in this.getMenuJson"
            :key="item.title"
            color="accent"
            :label="item.label"
            style="width: 280px;"
            default-opened
          >
            <q-menu fit>
              <q-list
                style="min-width: 100px"
                v-for="item in item.tab"
                v-bind:key="item.title"
                default-opened
              >
                <q-item
                  default-opened
                  clickable
                  v-if="item.to.length"
                  :to="item.to"
                >
                  <q-item-section avatar>
                    <q-icon :name="item.icon" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ item.title }} </q-item-label>
                  </q-item-section>
                </q-item>
                <q-expansion-item
                  default-opened
                  v-else
                  :label="item.title"
                  :icon="item.icon"
                >
                  <q-list
                    v-for="tiroir in item.multi"
                    v-bind:key="tiroir.title"
                    class="q-pl-lg"
                  >
                    <q-item :to="tiroir.to" class="q-pl-lg">
                      <q-item-section avatar>
                        <q-icon :name="tiroir.icon" />
                      </q-item-section>
                      <q-item-section>
                        <q-item-label>{{ tiroir.title }} </q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-expansion-item>
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
    //console.log(this.getPage[0]);
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
