<template>
  <div class="form-text-field" dir="rtl">
    <label ref="textFeild"
           :class="classes">
  <span class="mdc-notched-outline">
  <span class="mdc-notched-outline__leading"></span>
  <span class="mdc-notched-outline__notch">
  <span class="mdc-floating-label"
        for="text-field-outlined">{{label}}</span>
  </span>
  <span class="mdc-notched-outline__trailing"></span>
  </span>
      <input class="mdc-text-field__input" type="text"
             aria-labelledby="my-label-id" :disabled="disabledInput">
    </label>
    <div class="mdc-text-field-helper-line" v-if="active">
      <p class="mdc-text-field-helper-text" id="my-helper-id"
         aria-hidden="true">{{guide}}</p>
    </div>

    <div class="mdc-text-field-helper-line" v-if="disabled">
      <p class="guid" id="my-helper-id1" aria-hidden="true"> {{guide}}</p>
    </div>
    <div class="mdc-text-field-helper-line" v-if="invalidValidation">
      <p id="username-helper-text"
         class=" mdc-text-field-helper-text--validation-msg	"
         aria-hidden="true">{{helperText}}
      </p>
    </div>
  </div>

</template>

<script>
  import {MDCTextField} from '@material/textfield';

  export default {
    name: 'textFeild',
    props: {
      helperText: {},
      active: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      invalidValidation: {
        type: Boolean,
        default: false,
      },
      guide: {},
      label: {},
    },
    data() {
      return {
        textField: null,
        parentError: null,
        disabledInput: false,
      };
    },
    mounted() {
      let textField = new MDCTextField(this.$refs.textFeild);
      if (this.disabled) {
        return this.disabledInput = true;
      }
    },
    computed: {
      classes() {
        return {
          'mdc-text-field ': true,
          'mdc-text-field--outlined': true,
          'mdc-text-field--disabled': this.disabledInput,
          'mdc-text-field--invalid': this.invalidValidation,
        };
      },

    },
  };


</script>