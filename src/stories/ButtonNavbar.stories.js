import MyButtonNavbar from '../js/components/buttonNavbar/index.vue';

export default {
  title: 'Example/MyButtonNavbar',
  component: MyButtonNavbar,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButtonNavbar },
  template: '<my-button-navbar @onClick="onClick" v-bind="$props" />',
});

export const navbar = Template.bind({});
navbar.args = {
  navbar: true,
  label: 'نمونه متن دکمه',
};
