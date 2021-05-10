<template>
  <div>
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
                    <p v-if="remove">{{ content }}</p>
                    <div v-if="blue" class="row">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <textFeild label="نام"></textFeild>
                        <textFeild label="نام  و نام‌خانوادگی"></textFeild>
                        <textArea label="توضیحات"></textArea>
                      </div>
                    </div>
                  </slot>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <a class=" btn  btn-secondary modal-default-button ">{{ buttonSecondaryAction }}</a>
                <a class=" btn btn-primary  modal-default-button ">{{ buttonAction }}</a>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <a id="show-modal" class=" btn btn-secondary" @click="onClick">نمایش مودال</a>
  </div>

</template>
<!--Typescript code-->
<script lang="ts">
import textFeild from '../form/text-field';
import textArea from '../form/text-area';
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component({
  components: {
    textFeild,
    textArea

  }
})
export default class Modal extends Vue {
  @Prop({type: String, required: true}) readonly title: string
  @Prop({type: String, required: true}) readonly content: string
  @Prop({type: String, required: true}) readonly buttonAction: string
  @Prop({type: String, required: true, default: 'btn-primary'}) readonly classButton: string
  @Prop({type: String, required: true}) readonly buttonSecondaryAction: string
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
    console.log('aza')
    this.showModal = true;
  }
}
</script>

