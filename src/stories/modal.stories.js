import Modal from '../js/components/modal/index.vue';

export default {
  title: 'Example/Modal',
  component: Modal,

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: '<Modal   v-bind="$props" />',
});

export const blue = Template.bind({});
blue.args = {
  blue: true,
  title: 'نمونه متن برای عنوان ',
  buttonAction: 'ذخیره ',
  headingModal: 'نمایش مودال ',
  buttonSecondaryAction: 'پاک کردن ',

};
export const remove = Template.bind({});
remove.args = {
  remove: true,
  title: 'حذف زرین‌لینک ',
  headingModal: 'نمایش مودال حذف ',
  buttonAction: 'حذف ',
  buttonSecondaryAction: 'انصراف ',
  content: 'ازحذف این آیتم مطمینید؟  ',

};
export const green = Template.bind({});
green.args = {
  green: true,
  title: 'نمونه متن برای عنوان ',
  buttonAction: 'ذخیره ',
  headingModal: 'نمایش مودال ',
  buttonSecondaryAction: 'پاک کردن ',

};

