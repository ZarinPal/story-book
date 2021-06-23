<template>
  <div class="card-bank">
    <div :class="classes">
      <div class="first-row">
        <p class="right-align">
          <span class="bank-name">{{ bankName }}</span>
          <span :class="logos"></span>
        </p>
        <p class="left-align">
        <span class="currency">ریال</span>
        <span class="amount">{{ amount }} </span>
        </p>
      </div>

      <div class="center-align">
        <p class="name">{{ userName }} </p>
      </div>
      <div class="iban">
        <p>{{ iban }}</p>
      </div>
      <div class="rrn" v-if="showTrackingNumber">
        <span>شناسه واریز پایا</span>
        <span>{{ rrn }}</span>
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
  @Prop({type: String})  bankName: string
  @Prop({type: String})  logo: string
  @Prop({type: String})  userName: string
  @Prop({type: Boolean,default:true})  showTrackingNumber: boolean
  @Prop()  rrn
  @Prop()  amount
  @Prop()  iban

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

