<template>
  <div class="form-text-area" dir="rtl">
    <label ref="textArea" :class="classes">
        <span class="mdc-notched-outline">
          <span class="mdc-notched-outline__leading"></span>
          <span class="mdc-notched-outline__notch">
            <span class="mdc-floating-label">{{label}}</span>
          </span>
        <span class="mdc-notched-outline__trailing"></span>
        </span>
      <textarea class="mdc-text-field__input" rows="5"
                aria-label="Label" :disabled="disabledTexrArea"></textarea>
    </label>
    <div class="mdc-text-field-helper-line" v-if="active">
      <p class="mdc-text-field-helper-text" id="my-helper-id"
         aria-hidden="true">{{guide}}</p>
    </div>
    <div class="mdc-text-field-helper-line" v-if="disabled">
      <p class="guid" id="my-helper-id1" aria-hidden="true">{{guide}}</p>
    </div>
    <div class="mdc-text-field-helper-line" v-if="invalidValidation">
      <p id="username-helper-text"
         class=" mdc-text-field-helper-text--validation-msg	"
         aria-hidden="true">
        {{helperText}}
      </p>
    </div>
  </div>
</template>
<script>
  import {MDCTextField} from '@material/textfield';

  export default {
    name: 'textArea',
    props: {
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
      label: {},
      helperText: {},
      guide: {},
    },
    data() {
      return {
        textField: null,
        parentError: null,
        disabledTexrArea: false,
      };
    },
    mounted() {
      let textField = new MDCTextField(this.$refs.textArea);
      if (this.disabled) {
        return this.disabledTexrArea = true;
      }
    },
    computed: {
      classes() {
        return {
          'mdc-text-field ': true,
          'textarea ': true,
          'mdc-text-field--outlined': true,
          'mdc-text-field--textarea': true,
          'mdc-text-field--disabled': this.disabledTexrArea,
          'mdc-text-field--invalid': this.invalidValidation,
        };
      },

    },
  };


</script>