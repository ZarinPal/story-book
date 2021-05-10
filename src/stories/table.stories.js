import Table from '../js/components/table/index.vue';

export default {
  title: 'Example/Table',
  component: Table,

};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Table },
  template: '<Table @onClick="onClick" v-bind="$props" />',
});

export const demo = Template.bind({});
demo.args = {
  demo: true,
};



