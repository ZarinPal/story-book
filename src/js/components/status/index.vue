<template dir="rtl">

    <a :class="classes" @click="onClick">
      <span >{{ label }}</span>
      <i :class="icons"></i>

    </a>



</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component
export default class status extends Vue {
  @Prop({type: String, required: true}) readonly label: string
  @Prop({type: Boolean, default: false}) readonly Warning: Boolean
  @Prop({type: Boolean, default: false}) readonly success: Boolean
  @Prop({type: Boolean, default: false}) readonly danger: Boolean
  @Prop({type: Boolean, default: false}) readonly VERIFIED: Boolean
  @Prop({type: Boolean, default: false}) readonly REJECTED: Boolean
  @Prop({type: Boolean, default: false}) readonly FAILED: Boolean
  @Prop({type: Boolean, default: false}) readonly EXPIRED: Boolean
  @Prop({type: Boolean, default: false}) readonly INBANK: Boolean
  @Prop({type: Boolean, default: false}) readonly CONFLICTED: Boolean
  @Prop({type: Boolean, default: false}) readonly InPROGRESS: Boolean
  @Prop({type: Boolean, default: false}) readonly REVERSED: Boolean
  @Prop({type: Boolean, default: false}) readonly PAID: Boolean
  @Prop({type: Boolean, default: false}) readonly PENDING: Boolean
  @Prop({type: Boolean, default: false}) readonly ACTIVE: Boolean
  @Prop({type: Boolean, default: false}) readonly deACTIVE: Boolean
  @Prop({type: Boolean, default: false}) readonly ACTIVEProduct: Boolean
  @Prop({type: Boolean, default: false}) readonly CLOSED: Boolean
  @Prop({type: Boolean, default: false}) readonly SUPPORTRESPONSE: Boolean
  @Prop({type: Boolean, default: false}) readonly INPROGRESS: Boolean

  get classes() {
    return {
      'label': true,
      'danger': this.danger||this.REJECTED||this.FAILED||this.EXPIRED,
      'success': this.success||this.VERIFIED||this.PAID||this.ACTIVEProduct,
      'pending': this.Warning||this.INBANK||this.PENDING||this.INPROGRESS,
      'confilicted': this.CONFLICTED||this.InPROGRESS,
      'reversed': this.REVERSED||this.ACTIVE||this.SUPPORTRESPONSE,
      'deactive': this.deACTIVE||this.CLOSED,

    };
  }
  get icons() {
    return {
      'icon-badge':true,
      'icon-Difference-badge': this.CONFLICTED||this.InPROGRESS||this.REVERSED,
      'icon-Circle-arrow-badge': this.PENDING||this.ACTIVE,
      'icon-in-pay-badge': this.INBANK,
      'icon-Tick-badge': this.VERIFIED||this.PAID||this.ACTIVEProduct,
      'icon-multiplied-by-badge': this.REJECTED||this.FAILED||this.EXPIRED||this.deACTIVE,
    };
  }

  public onClick(): void {
    console.log('action')
    this.$emit('onClick');

  }
}
</script>

