<template>
  <div class="interval-bar-container">
    <div class="my-2">Data update intervals:</div>
    <div class="interval-list">
      <div :class="['interval-number', matchCurrentInterval(5000) ? 'active' : 'inactive']" @click="updateInterval(5000)">5s</div>
      <div :class="['interval-number', matchCurrentInterval(10000) ? 'active' : 'inactive']" @click="updateInterval(10000)">10s</div>
      <div :class="['interval-number', matchCurrentInterval(15000) ? 'active' : 'inactive']" @click="updateInterval(15000)">15s</div>
    </div>
  </div>
</template>

<style src="./IntervalBar.scss" lang="scss" scoped></style>

<script>

export default {
  name: 'IntervalBar',
  props: {
    currentInterval: {
      required: true,
      type: Number
    }
  },
  data: () => {
    return {
      active: false
    }
  },
  methods: {
    matchCurrentInterval (num) {
      if (this.currentInterval === num) {
        return true
      }
      return false
    },
    updateInterval (num) {
      this.$emit('update:refinterval', num)
    }
  }
}
</script>
