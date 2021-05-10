<!--<template>-->
<!--  <a :class="classes" @click="onClick">{{ label }}</a>-->
<!--  <a :class="iconClass" @click="onClick">{{ label }}</a>-->
<!--</template>-->
<!--<script>-->

<!--export default {-->
<!--  name: 'MyButtonIcon',-->

<!--  props: {-->
<!--    label: {-->
<!--      type: String,-->
<!--      required: true,-->
<!--    },-->
<!--    primary: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->

<!--    disable: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--    size: {-->
<!--      type: String,-->
<!--      default: 'medium',-->
<!--      validator: function (value) {-->
<!--        return ['small', 'medium', 'large'].indexOf(value) !== -1;-->
<!--      },-->
<!--    },-->
<!--    backgroundColor: {-->
<!--      type: String,-->
<!--    },-->
<!--  },-->

<!--  computed: {-->
<!--    classes() {-->
<!--      return {-->
<!--        'btn': true,-->
<!--        'disable': this.disable,-->
<!--        'btn-primary': this.primary,-->
<!--        'btn-secondary': !this.primary,-->

<!--      };-->
<!--    },-->
<!--    iconClass() {-->
<!--      return {-->
<!--        'icon-notification-outline': true,-->
<!--        'btn': true,-->
<!--        'disable': this.disable,-->
<!--        'btn-primary': this.primary,-->
<!--        'btn-secondary': !this.primary,-->

<!--      };-->
<!--    },-->

<!--  },-->

<!--  methods: {-->
<!--    onClick() {-->
<!--      console.log('aza')-->
<!--      this.$emit('onClick');-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->
