<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n({ useScope: "global" });
// import components
import MovieTab from "./MovieTab.vue";
import SerieTab from "./SerieTab.vue";
import BookTab from "./BookTab.vue";

const navigationTab = ref("ITEM ONE");
const tabItems = [
  {
    title: t("AdviceTab.movies"),
    icon: "mdi-account-box-outline",
    component: MovieTab,
    id: 1,
  },
  {
    title: t("AdviceTab.series"),
    icon: "mdi-account-box-outline",
    component: SerieTab,
    id: 2,
  },
  {
    title: t("AdviceTab.books"),
    icon: "mdi-account-box-outline",
    component: BookTab,
    id: 3,
  },
];
</script>
<template>
  <v-row>
    <v-col md="12" cols="12">
      <v-card
        elevation="5"
        class="d-flex flex-column align-space-between justify-center gap-y-3 mx-5 my-5 px-5 py-5"
      >
        <v-tabs v-model="navigationTab">
          <v-tab
            v-for="item in tabItems"
            :key="item.title"
            :value="item.title"
            :id="item.id"
            exact
          >
            <div>
              <div class="d-flex align-center justify-start gap-x-3">
                <span class="d-flex align-center justify-start gap-x-3">
                  <VIcon size="1.6rem" :icon="item.icon" />
                </span>
                <span class="d-none align-center d-md-flex">{{
                  item.title
                }}</span>
              </div>
            </div>
          </v-tab>
        </v-tabs>

        <v-window v-model="navigationTab">
          <v-windowItem
            class="py-5"
            v-for="item in tabItems"
            :key="item.title"
            :value="item.title"
          >
            <div>
              <suspense>
                <component :is="item.component"></component>
              </suspense>
            </div>
          </v-windowItem>
        </v-window>
      </v-card>
    </v-col>
  </v-row>
</template>
<style lang="scss">
.blue {
  background-color: blue;
}
.red {
  background-color: red;
}
.yellow {
  background-color: yellow;
}
</style>
