<template>
  <div class="card-bank">
    <div :class="classes">
      <div class="right-align">
        <span class="bank-name">{{ bankName }}</span>
        <span :class="logos"></span>
      </div>
      <div class="center-align">
        <p class="currency">ریال</p>
        <p class="amount">{{ amount }} </p>
      </div>
      <div class="iban">
        <p>{{ iban }}</p>
      </div>
      <div class="rrn">
        <p>شناسه واریز پایا</p>
        <p>{{ rrn }}</p>
      </div>
    </div>
  </div>
</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'
@Component
export default class cardBank extends Vue {
  @Prop({type: String, required: true}) readonly bankName: string
  @Prop({type: String, default: 'saman'}) readonly logo: string
  @Prop() readonly rrn
  @Prop() readonly amount
  @Prop() readonly iban

  get classes() {
    return {
      [`top-border-${this.logo}`]: true,
      [`${this.logo}-card`]: true,

    };
  }

  get logos() {
    return {
      [`logo-${this.logo}`]: true,
    };
  }

  public onClick(): void {
    console.log('aza');
    this.$emit('onClick');
  }
}
</script>

