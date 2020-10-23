
<template>
  <q-page>
    <!-- <div class=" flex flex-center q-pa-lg">
      <div class="q-gutter-md">
        <q-btn
          v-for="item in this.getMenuJson"
          :key="item.title"
          color="accent"
          :label="item.label"
          style="width: 580px;"
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
    </div>-->

    <div class="q-pa-md q-gutter-sm">
      <div>
        <div class="q-gutter-sm">
          <q-btn size="sm" color="primary" label="Select 'Good service'" />
          <q-btn v-if="selected" size="sm" color="red" label="Unselect node" />
        </div>
      </div>
      {{ this.getMenuJson[0].label }}
      <q-tree
        :nodes="this.getMenuJson[0].tab"
        default-expand-all
        :selected.sync="selected"
        label-key="title"
        node-key="title"
        children-key="multi"
      />
      <q-tree
        :nodes="this.getMenuJson[1].tab"
        default-expand-all
        :selected.sync="selected"
        label-key="title"
        node-key="title"
        children-key="multi"
      />
    </div>

    <div class="q-pa-md">
      <div class=" flex flex-center q-pa-lg q-gutter-lg row">
        <q-btn
          v-for="item in this.getMenuJson"
          :key="item.title"
          style="min-width: 400px"
          :color="item.color"
          :label="item.label"
          icon="keyboard_arrow_down"
        >
          <q-menu transition-show="flip-right" transition-hide="flip-left">
            <q-list
              v-for="item in item.tab"
              v-bind:key="item.title"
              style="min-width: 400px"
            >
              <q-item v-if="item.to.length" :to="item.to" clickable>
                <q-item-section>{{ item.title }}</q-item-section>
              </q-item>

              <q-item v-else :label="item.title" :icon="item.icon">
                <q-item-section side>
                  {{ item.title }}
                  <q-menu
                    transition-show="flip-right"
                    transition-hide="flip-left"
                    class=""
                    clickable
                  >
                    <q-list
                      v-for="tiroir in item.multi"
                      v-bind:key="tiroir.title"
                      sclass="q-pa-lg "
                      style="min-width: 200px "
                    >
                      <q-item :to="tiroir.to" clickable>
                        <q-item-section>{{ tiroir.title }}</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </div>
    </div>

    <div class="q-pa-md test">
      <q-list
        v-for="item in this.getMenuJson"
        :key="item.title"
        bordered
        class="rounded-border test "
      >
        <q-expansion-item
          class="q-pa-md "
          expand-separator
          icon="mail"
          :label="item.label"
          caption="5 unread emails"
          header-class="text-primary"
        >
          <q-list v-for="item in item.tab" v-bind:key="item.title">
            <q-item
              v-if="item.to.length"
              :to="item.to"
              :header-inset-level="1"
              :content-inset-level="1"
              expand-separator
              icon="schedule"
              :label="item.title"
              default-opened
            >
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ item.title }} </q-item-label>
              </q-item-section>
            </q-item>

            <q-expansion-item
              v-else
              :header-inset-level="1"
              expand-separator
              icon="receipt"
              :label="item.title"
              default-opened
            >
              <q-expansion-item
                v-for="tiroir in item.multi"
                v-bind:key="tiroir.title"
                switch-toggle-side
                dense-toggle
                :label="tiroir.title"
                :header-inset-level="1"
                :content-inset-level="2"
              >
                <q-card>
                  <q-card-section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quidem, eius reprehenderit eos corrupti commodi magni
                    quaerat ex numquam, dolorum officiis modi facere maiores
                    architecto suscipit iste eveniet doloribus ullam aliquid.
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </q-expansion-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </div>
    <div>
      <q-img alt=" logo" src="~assets/tableKids.jpg" />
    </div>
  </q-page>
</template>

<script>
import MenuComponents from "components/Menu.vue";
import { mapGetters } from "vuex";
export default {
  name: "PageIndex",
  data() {
    return {
      Menu: this.getMenuJson,
      selected: null
    };
  },
  computed: {
    ...mapGetters("moduleJson", ["getMenuJson", "getTree"])
  }
};
</script>

<style lang="sass" scoped>
.ok
  border : 1px solid black
  margin-left: 100px
</style>