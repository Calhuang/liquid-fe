<template>
  <v-dialog :value="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="#333">
        <v-card-title class="text-right">
          <v-btn icon @click="closeDialog">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        Hi
      </v-card>
    </v-dialog>
</template>

<style src="./InfoDisplay.scss" lang="scss" scoped></style>

<script>

export default {
  name: 'InfoDisplay',
  props: {
    marketInfo: {
      required: true,
      type: Object
    },
    dialog: {
      required: true,
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      active: false
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    closeDialog () {
      this.$emit('close-dialog')
    }
  }
}
</script>
