<template>
  <div>
    <q-expansion-item
      :label="label"
      default-opened
      class="q-pt-lg"
      :icon="icon"
    >
      <q-list v-for="item in tab" v-bind:key="item.title" class="q-pl-lg">
        <q-item v-if="item.to.length" :to="item.to">
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
    </q-expansion-item>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    label: {
      type: String,
      required: true
    },
    title: {
      type: String
    },
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: ""
    },
    multi: {
      type: Array
    },
    tab: {
      type: Array
    }
  }
};
</script>