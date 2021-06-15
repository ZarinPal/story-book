<template>
  <div class="button-group">
    <ul class="btn-group" role="group">
      <li :class="classes"  @click="onClick">{{ label }}</li>
      <li :class="classes"  @click="active">{{ label2 }}</li>
      <li :class="classes" @click="deActive">{{ label3 }}</li>
    </ul>

  </div>
</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {  Prop } from 'vue-property-decorator'
@Component
export default class ButtonGroup extends Vue {
  private activeItem: Boolean =false
  @Prop({type: String,  required: true})readonly label: string
  @Prop({type: String,  required: true})readonly label2: string
  @Prop({type: String,  required: true})readonly label3: string
  @Prop({type: Boolean,  default: false}) readonly active: Boolean
  @Prop({type: String}) readonly backgroundColor: string
  get classes() {
    return {
      'list-item': true,
      'active': !this.activeItem,
    };
  }
  public onClick(): void {
    this.$emit('onClick');
  }
  public activeFilter(): void {
    this.$emit('activeFilter');
  }
  public deActiveFilter(): void {
    this.$emit('deActiveFilter');
  }
}
</script>

