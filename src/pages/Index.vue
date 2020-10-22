
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

    <div class="q-pa-md test" style="min-width: 800px">
      <q-list
        v-for="item in this.getMenuJson"
        :key="item.title"
        bordered
        class="rounded-border test "
      >
        <q-expansion-item
          class="q-pa-md ok"
          expand-separator
          icon="mail"
          :label="item.label"
          caption="5 unread emails"
          default-opened
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
      Menu: this.getMenuJson
    };
  },
  computed: {
    ...mapGetters("moduleJson", ["getMenuJson"])
  }
};
</script>

<style lang="sass" scoped>
.test
  display: flex
  justify-content: space-around
  width: 100%
</style>