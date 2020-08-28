<template>
  <div :class="['card-wrapper', expanded ? 'expanded' : '']">
    <div :class="[isActiveStyle, 'elevation-2', expanded ? 'expanded' : '']"></div>
    <div class="left">
      <div class="ticker-header">{{marketInfo.from}}</div>
    </div>
    <div class="rate">
      1
      <div>
        <v-icon>mdi-swap-horizontal</v-icon>
      </div>
      {{animatedRate}}
    </div>
    <div class="right">
      <div class="ticker-header">{{marketInfo.to}}</div>
    </div>
    <div v-if="expanded" class="expanded-main">
      <v-divider/>
      <div class="details-grid">
        <div>
          <div class="info-title text-body-2">Minimum {{marketInfo.from}} bid</div>
          <div class="text-caption">{{abbreviateNumber(marketInfo.min)}}</div>
        </div>
        <div>
          <div class="info-title text-body-2">Maximum {{marketInfo.from}} bid</div>
          <div class="text-caption">{{abbreviateNumber(marketInfo.max)}}</div>
        </div>
        <div>
          <div class="info-title text-body-2">Order expires in</div>
          <div class="text-caption">{{marketInfo.orderExpiresIn/1000/60}} minutes</div>
        </div>
        <div>
          <div class="info-title text-body-2">Created on</div>
          <div class="text-caption">{{dateFormatter(marketInfo.createdAt)}}</div>
        </div>
        <div>
          <div class="info-title text-body-2">Last Updated</div>
          <div class="text-caption">{{dateFormatter(marketInfo.updatedAt)}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Card.scss" lang="scss" scoped></style>

<script>
import moment from 'moment'
import { abbreviateNumber } from '../../utils'
import { gsap } from 'gsap'

export default {
  name: 'DataCard',
  props: {
    marketInfo: {
      required: true,
      type: Object
    },
    selectedIndex: {
      required: false,
      type: Number
    },
    index: {
      required: true,
      type: Number
    }
  },
  components: {
  },
  data: () => {
    return {
      moreInfo: false,
      abbreviateNumber,
      tweenedRatio: 0
    }
  },
  computed: {
    animatedRate () {
      return this.tweenedRatio.toFixed(8)
    },
    isActiveStyle () {
      return this.marketInfo.status === 'ACTIVE' ? 'ind active' : 'ind inactive'
    },
    expanded () {
      return this.selectedIndex === this.index
    }
  },
  watch: {
    marketInfo: function (newVal) {
      if (newVal) {
        gsap.to(this.$data, { duration: 1.5, tweenedRatio: newVal.rate })
      }
    }
  },
  created () {
    if (this.marketInfo) {
      this.tweenedRatio = this.marketInfo.rate
    }
  },
  mounted () {
  },
  methods: {
    dateFormatter (str) {
      return moment(str).format('LLL')
    }
  }
}
</script>
