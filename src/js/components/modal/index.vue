<template>
  <div class="modal-component" ref="Modal">
    <transition v-if="showModal" ref="Modal" name="modal">
      <div class="modal-mask" @keydown.esc="close()">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <span class="icon-close" @click="close()"></span>
              <span class="modal-title">
                 <span :class="classIcon"  class=" icon-title">
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
  </div>

</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import MyButton from '../buttonIcons/index';
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component({
  components: {
    MyButton,
  }

})
export default class Modal extends Vue {
  @Prop({type: String}) readonly title: string
  @Prop({type: String}) readonly content: string
  @Prop({type: String}) readonly buttonAction: string
  @Prop({type: String, default: 'btn-primary'}) readonly classButton: string
  @Prop({type: String}) readonly buttonSecondaryAction: string
  @Prop({type: Boolean, default: false}) readonly blue: Boolean
  @Prop({type: Boolean, default: false}) readonly remove: Boolean
  @Prop({type: Boolean, default: false}) readonly green: Boolean
  @Prop({type: String}) readonly iconsName: string

  private showModal: boolean = false
  $refs!: {
    Modal: Modal
  }
  get classIcon() {
    return {
      [`icon-${this.iconsName}`]: true,

      'blue-bg': this.blue,
      'red-bg': this.remove,
      'green-bg': this.green,
    };
  }


  public close(): void {
    this.showModal = false;
  }
  public open(): void {
    this.showModal = true;
  }



}
</script>

