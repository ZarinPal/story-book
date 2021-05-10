<template>
  <div class="mdc-form-field" ref="mdcRadio" >
    <div :class="classes"  >
      <input class="mdc-radio__native-control" type="radio" id="radio"
             name="radios" checked :disabled="disabledRadioButton">
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
      <div class="mdc-radio__ripple"></div>
    </div>
    <label for="radio">{{label}}</label>
    <div :class="classes">
      <input class="mdc-radio__native-control" type="radio" id="radio-check"
             name="radios" >
      <div class="mdc-radio__background">
        <div class="mdc-radio__outer-circle"></div>
        <div class="mdc-radio__inner-circle"></div>
      </div>
      <div class="mdc-radio__ripple"></div>
    </div>
    <label for="radio-check">{{label}}</label>
  </div>

</template>
<script>
  import {MDCRadio} from '@material/radio';

  export default {
    name: 'radioButton',
    props: {
      active: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },

      label: {},
    },
    data() {
      return {
        disabledRadioButton: false,
      };
    },
    mounted() {
      let radio = new MDCRadio(this.$refs.mdcRadio);
      if (this.disabled) {
        return this.disabledRadioButton = true;
      }
    },
    computed: {
      classes() {
        return {
          'mdc-radio':true,
          'mdc-radio--disabled':this.disabledRadioButton
        };
      },

    },
  };


</script>