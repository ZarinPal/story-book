<template>
  <div class="row navbar" dir="rtl">
    <div class="col-lg-7 col-md-6 col-sm-6 col-xs-12 ">
      <div class="pull-right" @click="toggle" v-if="pullRight">
        <slot name="right-part"></slot>
        <div class="icon-store"></div>
        <span class="heading">{{ labelDropDown }}</span>
        <i class="icon-drop-down"></i>
      </div>
    </div>
    <div class="col-lg-5 col-md-6 col-sm-6 col-xs-12 ">
      <div class="pull-left">
        <slot name="left-part"></slot>
        <div class="avatar" @click="showProfileDropdown"><img :src="src"></div>
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

export default class navbar extends Vue {
  @Prop({type: String}) readonly src: string
  @Prop({type: Boolean, default: false}) readonly demo: Boolean
  @Prop({type: Boolean, default: true}) readonly pullRight: Boolean
  @Prop({type: String, default: 'نمای کلی'}) readonly labelDropDown: string


  public toggle(): void {
    this.$emit('openDropdown');


  }

  public showProfileDropdown(): void {
    this.$emit('showProfileDropdown');

  }

}
</script>

