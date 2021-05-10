import checkbox from '../js/components/form/checkbox';

export default {
  title: 'Example/checkbox',
  component: checkbox,
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {checkbox},
  template: '<checkbox  v-bind="$props" />',
});

export const active = Template.bind({});
active.args = {
  active: true,
  labelUnChecked: ' UnChecked ',
  labelChecked: ' checked ',

};
export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  labelUnChecked: ' disabled UnChecked ',
  labelChecked: ' disabled checked ',

};

