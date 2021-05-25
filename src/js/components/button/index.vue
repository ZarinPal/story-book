<template>
  <div>
    <p>
      <a :class="classes" @click="modalAction" >{{ label }}</a>
    </p>
  </div>
</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {  Prop } from 'vue-property-decorator'
@Component
export default class myButton extends Vue {
  @Prop({type: String,  required: true})readonly label: string
  @Prop({type: Boolean,  default: false}) readonly primary: Boolean
  @Prop({type: Boolean,  default: false}) readonly disable: Boolean
  @Prop({type: String}) readonly backgroundColor: string
  get classes() {
    return {
      'btn': true,
      'disable': this.disable,
      'btn-primary': this.primary,
      'btn-secondary': !this.primary,
    };
  }
  get iconClass(){
    return {
      'icon-after-notification-outline': true,
      'btn': true,
      'disable': this.disable,
      'btn-primary': this.primary,
      'btn-secondary': !this.primary,
    };
  }
  public onClick(): void {
    console.log('azaD');
  }
  public modalAction(): void {
    console.log('modalAction');
    this.$emit('eventSubmit');

  }
}
</script>

