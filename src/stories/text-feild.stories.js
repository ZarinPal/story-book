import textFeild from '../js/components/form/text-field';

export default {
  title: 'Example/textFeild',
  component: textFeild,
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {textFeild},
  template: '<textFeild  v-bind="$props" />',
});

export const active = Template.bind({});
active.args = {
  active: true,
  label: 'نمونه متن دکمه',
  guide: 'متن راهنمایی ',

};
export const disabled = Template.bind({});
disabled.args = {
  disabled: true,
  label: 'نمونه متن دکمه',
  guide: 'متن راهنمایی ',

};
export const invalidValidation = Template.bind({});
invalidValidation.args = {
  invalidValidation: true,
  label: 'نمونه متن دکمه',
  helperText: 'کامل کردن این فیلد اجباری می‌باشد',

};



