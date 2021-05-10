import textArea from '../js/components/form/text-area';

export default {
  title: 'Example/textArea',
  component: textArea,
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {textArea},
  template: '<textArea  v-bind="$props" />',
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



