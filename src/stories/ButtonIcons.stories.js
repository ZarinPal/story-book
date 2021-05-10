import MyButtonIcon from '../js/components/buttonIcons/index.vue';

export default {
  title: 'Example/MyButtonIcons',
  component: MyButtonIcon,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButtonIcon },
  template: '<my-button-icon @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'نمونه متن دکمه',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'نمونه متن دکمه',
};
export const disable = Template.bind({});
disable.args = {
  disable: true,
  label: 'نمونه متن دکمه',
};

//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
