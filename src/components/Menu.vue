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

        <q-expansion-item v-else :label="item.title" icon="check">
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
    <!--  <q-expansion-item
      v-if="label.length"
      :label="label"
      default-opened
      class="q-pt-lg"
      :icon="icon"
    >
      <q-item v-if="to.length" :to="to">
        <q-item-section avatar>
          <q-icon :name="icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ title }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-expansion-item default-opened v-else :label="title" icon="check">
        <q-list
          v-for="tiroir in multi"
          v-bind:key="tiroir.title"
          class="q-pl-lg"
        >
          <q-item :to="tiroir.to" class="q-pl-lg">
            <q-item-section avatar>
              <q-icon :name="tiroir.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ tiroir.title }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item>
    </q-expansion-item>
    <q-expansion-item v-else>
      <q-list class="q-pl-lg">
        <q-item v-if="to.length" :to="to">
          <q-item-section avatar>
            <q-icon :name="icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item default-opened v-else :label="title" icon="check">
          <q-list
            v-for="tiroir in multi"
            v-bind:key="tiroir.title"
            class="q-pl-lg"
          >
            <q-item :to="tiroir.to" class="q-pl-lg">
              <q-item-section avatar>
                <q-icon :name="tiroir.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ tiroir.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </q-expansion-item>-->

    <!-- <q-expansion-item
      default-opened
      class="q-pt-lg"
      :icon="icon"
      :label="title"
    >
      <q-list class="q-pl-lg">
        <q-item v-if="to.length" :to="to">
          <q-item-section avatar>
            <q-icon :name="icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ title }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-expansion-item default-opened v-else :label="title" icon="check">
          <q-list
            v-for="tiroir in multi"
            v-bind:key="tiroir.title"
            class="q-pl-lg"
          >
            <q-item :to="tiroir.to" class="q-pl-lg">
              <q-item-section avatar>
                <q-icon :name="tiroir.icon" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ tiroir.title }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </q-expansion-item>-->

    <!--config-->
  </div>
</template>

<script>
export default {
  name: "menu",
  props: {
    label: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
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
      type: Object
    },
    tab: {
      type: Object
    }
  }
};
</script>