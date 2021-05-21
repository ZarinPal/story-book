<template>
  <div class="modal-component">
    <transition v-if="showModal" name="modal">
      <div class="modal-mask" @keydown.esc="close()">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <span class="icon-close" @click="close()"></span>
              <span class="modal-title">
                 <span :class="classIcon" class=" icon-title">
              </span>
                <slot name="title">{{ title }}</slot>
              </span>
              <div class="modal-body">
                <div class="contains">
                  <slot name="body">
                    <p>{{ content }}</p>
                  </slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <my-button id="show-modal" :label="headingModal" class="button-component"  :iconsName="icons"  @click="onClick"></my-button>
  </div>

</template>
<!--Typescript code-->
<script lang="ts">
import MyButton from '../buttonIcons';

import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component({
  components: {
    MyButton
  }

})
export default class Modal extends Vue {
  @Prop({type: String}) readonly headingModal: string
  @Prop({type: String}) readonly title: string
  @Prop({type: String}) readonly content: string
  @Prop({type: String}) readonly buttonAction: string
  @Prop({type: String, default: 'btn-primary'}) readonly classButton: string
  @Prop({type: String}) readonly icons: string
  @Prop({type: String}) readonly buttonSecondaryAction: string
  @Prop({type: Boolean, default: false}) readonly blue: Boolean
  @Prop({type: Boolean, default: false}) readonly remove: Boolean
  @Prop({type: Boolean, default: false}) readonly green: Boolean
  private showModal: boolean = false

  get classIcon() {
    return {
      'blue-bg': this.blue,
      'icon-outline-receipt-noborder': this.blue,
      'red-bg': this.remove,
      'icon-delete': this.remove,
      'green-bg': this.green,
      'icon-add': this.green,

    };
  }

  public close(): void {
    console.log('close')
    this.showModal = false;
  }

  public onClick(): void {
    this.showModal = true;
    this.$emit('onClick');
  }

}
</script>

