<template>
  <div dir="rtl">
    <a :class="iconClass" @click="onClick">{{ label }}</a>
  </div>
</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'
@Component
export default class myButton extends Vue {
  @Prop({type: String, required: true}) readonly label: string
  @Prop({type: Boolean, default: false}) readonly navbar: Boolean
  get iconClass() {
    return {
      'icon-notification-outline': true,
      'btn': true,
      'btn-navbar': true,
    };
  }
  public onClick(): void {
    console.log('aza');
    this.$emit('onClick');
  }
}
</script>

