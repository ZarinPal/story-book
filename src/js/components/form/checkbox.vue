<template>
  <div class="mdc-form-field" ref="checkBox">
    <div :class="classes" >
      <!--html checked checkbox-->
      <input type="checkbox" :disabled="disabledCheckBox"
             class="mdc-checkbox__native-control"
             id="checkbox"/>
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark"
             viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
      <div class="mdc-checkbox__ripple"></div>
    </div>
    <label for="checkbox">{{labelUnChecked}}</label>

    <div :class="classes" >
      <!--html checked checkbox-->
      <input type="checkbox" checked :disabled="disabledCheckBox"
             class="mdc-checkbox__native-control"
             id="checkbox2"/>
      <div class="mdc-checkbox__background">
        <svg class="mdc-checkbox__checkmark"
             viewBox="0 0 24 24">
          <path class="mdc-checkbox__checkmark-path"
                fill="none"
                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
        </svg>
        <div class="mdc-checkbox__mixedmark"></div>
      </div>
      <div class="mdc-checkbox__ripple"></div>
    </div>
    <label for="checkbox">{{labelChecked}}</label>

  </div>

</template>
<!--Typescript code-->
<script lang="ts">
import {MDCCheckbox} from '@material/checkbox';
import Vue from 'vue'
import Component from 'vue-class-component'
import {  Prop } from 'vue-property-decorator'
@Component({
  components: {
    MDCCheckbox
  }
})
export default class checkbox extends Vue {
  @Prop({type: Boolean,  default: false}) readonly active: Boolean
  @Prop({type: Boolean,  default: false}) readonly disabled: Boolean
  @Prop() readonly labelChecked
  @Prop()readonly  labelUnChecked
  private disabledCheckBox: Boolean =false

  get classes() {
    return {
      'mdc-checkbox':true,
      'mdc-checkbox--disabled':this.disabledCheckBox
    };
  }
  mounted() {
    let checkbox = new MDCCheckbox(this.$refs.checkBox);
    if (this.disabled) {
      return this.disabledCheckBox = true;
    }
  }
  public onClick(): void {
    console.log('aza');
    this.$emit('onClick');
  }
}
</script>
