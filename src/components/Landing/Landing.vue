<template>
  <div class="landing-wrapper">
    <transition-group name="fadeUp">
      <div
      v-for="(item, index) in data" :key="'card-' + index"
      @click="() => setCurrentData(item, index)"
      >
        <Card :marketInfo="item" :index="index" :selectedIndex="selectedIndex"/>
      </div>
    </transition-group>
    <transition name="fade"
    enter-active-class="fadeInUp"
    leave-active-class="fadeOutDown">
      <IntervalBar v-if="toggleIntervalBar" :currentInterval="refreshInterval" :refinterval.sync="refreshInterval"/>
    </transition>
    <v-btn
      fixed
      dark
      fab
      top
      right
      ripple
      small
      color="#1D1E23"
      @click="toggleIntervalBar = !toggleIntervalBar"
    >
      <v-icon>settings</v-icon>
    </v-btn>
  </div>
</template>

<style src="./Landing.scss" lang="scss" scoped></style>

<script>
import axios from 'axios'
import Card from '../Cards/Card'
import IntervalBar from '../IntervalBar/IntervalBar'

export default {
  name: 'LandingPage',
  data: () => {
    return {
      refreshInterval: 10000,
      interval: null,
      data: null,
      selectedData: null,
      selectedIndex: null,
      toggleIntervalBar: false
    }
  },
  components: {
    Card,
    IntervalBar
  },
  created () {
    this.getDataEveryXSeconds(this.refreshInterval)
  },
  methods: {
    async getDataEveryXSeconds () {
      const url = 'https://liquality.io/swap/agent/api/swap/marketinfo'
      const options = {
        timeout: 5000
      }
      try {
        const res = await axios.get(url, options)
        if (res.data) {
          this.data = res.data
          // this.selectedData = res.data[0]
          this.interval = setTimeout(this.getDataEveryXSeconds, this.refreshInterval)
        }
      } catch (err) {
        console.log(err)
      }
    },
    stopInterval () {
      clearTimeout(this.interval)
    },
    setCurrentData (item, i) {
      this.selectedData = item
      this.selectedIndex = i
      this.modal = true
    },
    updateInterval (num) {
      this.refreshInterval = num
    }
  }
}
</script>
