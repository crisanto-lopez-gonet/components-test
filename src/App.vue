<template>
  <v-app>
   <palace-title-bar/>

    <v-main>
      <palace-vcomponents-sample />
    </v-main>

    <palace-text-edit/>
  </v-app>
</template>

<script>
import { PalaceVcomponentsSample, PalaceTitleBar, PalaceTextEdit } from 'palace-vcomponents';

export default {
  name: 'App',

  components: {
    PalaceVcomponentsSample,
    PalaceTitleBar,
    PalaceTextEdit,
  },

  data: () => ({
    //
  }),
};
</script>
