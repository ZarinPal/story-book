<template>
    <div class="row navbar" dir="rtl">
      <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 " >
        <div class="pull-right">
          <div class="icon-store"></div>
          <span class="heading">نمای کلی</span>
          <i class="icon-drop-down"></i>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 " >
        <div class="pull-left">
          <my-button-navbar label="تنظیمات درگاه"  class="button-component"></my-button-navbar>
          <my-button-navbar label="اعلانات" class="button-component"></my-button-navbar>
          <div class="avatar"  ><img src="../../../images/avatar.jpeg"></div>

        </div>

      </div>
  </div>

</template>
<!--Typescript code-->
<script lang="ts">
import MyButtonNavbar from '../buttonNavbar';
import Vue from 'vue'
import Component from 'vue-class-component'
import {  Prop } from 'vue-property-decorator'
@Component({
  components: {
    MyButtonNavbar
  }
})
export default class myButton extends Vue {
  @Prop({type: String,  required: true})readonly label: string
  @Prop({type: Boolean,  default: false}) readonly demo: Boolean
  public onClick(): void {
    console.log('aza');
    this.$emit('onClick');
  }
}
</script>

