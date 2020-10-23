
<template>
  <q-page>
    <div class=" q-pa-lg q-gutter-sm ">
      <q-tree
        :nodes="this.getMenuJson"
        default-expand-all
        node-key="label"
        class="itemTree"
      >
        <template v-slot:default-header="item">
          <div class="row items-center">
            <q-icon
              :name="item.node.icon || 'share'"
              color="blue"
              size="28px"
              class="q-mr-sm"
            />
            <div class="text-black" @click="hasHistory(item.node.to)">
              {{ item.node.label }}
            </div>
          </div>
        </template>
      </q-tree>

      <!--
    <div class="q-pa-md test">
      <q-list
        v-for="item in this.getMenuJson"
        :key="item.label"
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
          <q-list v-for="item in item.children" v-bind:key="item.label">
            <q-item
              v-if="item.to"
              :to="item.to"
              :header-inset-level="1"
              :content-inset-level="1"
              expand-separator
              icon="schedule"
              :label="item.label"
              default-opened
            >
              <q-item-section avatar>
                <q-icon :name="item.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ item.label }} </q-item-label>
              </q-item-section>
            </q-item>

            <q-expansion-item
              v-else
              :header-inset-level="1"
              expand-separator
              icon="receipt"
              :label="item.label"
              default-opened
            >
              <q-expansion-item
                v-for="tiroir in item.children"
                v-bind:key="tiroir.label"
                switch-toggle-side
                dense-toggle
                :label="tiroir.label"
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
    </div>-->

      <!-- <q-img class="img" alt="logo" src="~assets/tableKids.jpg" />-->
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
    ...mapGetters("moduleJson", ["getMenuJson"])
  },
  methods: {
    hasHistory(link) {
      if (link !== "undefined" && link) {
        this.$router.push(link);
      }
    }
  }
};
</script>

