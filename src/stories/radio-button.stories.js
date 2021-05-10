import radioButton from '../js/components/form/radio-button';

export default {
  title: 'Example/radioButton',
  component: radioButton,
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {radioButton},
  template: '<radioButton  v-bind="$props" />',
});

export const active = Template.bind({});
active.args = {
  active: true,
  label: 'Radio button ',

};
export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  label: 'Radio button ',

};

