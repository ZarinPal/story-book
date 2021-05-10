<template>
  <div dir="rtl">
    <p>
      <a :class="iconClass" @click="onClick">{{ label }}</a>
    </p>
  </div>

</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component
export default class myButtonIcon extends Vue {
  @Prop({type: String, required: true}) readonly label: string
  @Prop({type: Boolean, default: false}) readonly primary: Boolean
  @Prop({type: Boolean, default: false}) readonly primaryOpacity: Boolean
  @Prop({type: Boolean, default: false}) readonly disable: Boolean
  @Prop({type: String}) readonly backgroundColor: string

  get iconClass() {
    return {
      'icon-notification-outline': true,
      'btn': true,
      'disable': this.disable,
      'btn-primary': this.primary,
      'btn-secondary': !this.primary,

    };
  }

  public onClick(): void {
    console.log('aza');
    console.log(this.primary)
    this.$emit('onClick');
  }
}
</script>

