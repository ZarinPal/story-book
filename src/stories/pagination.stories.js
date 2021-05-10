import Pagination from '../js/components/pagination/index.vue';

export default {
  title: 'Example/Pagination',
  component: Pagination,

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Pagination },
  template: '<pagination @onClick="onClick" v-bind="$props" />',
});

export const demoPaginate = Template.bind({});
demoPaginate.args = {
  demoPaginate: true,
};
