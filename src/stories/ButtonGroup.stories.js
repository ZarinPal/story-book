import ButtonGroup from '../js/components/buttonGroup/index.vue';

export default {
  title: 'Example/ButtonGroup',
  component: ButtonGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonGroup },
  template: '<ButtonGroup @onClick="onClick" v-bind="$props" />',
});


export const active = Template.bind({});
active.args = {
  active: true,
  label:'خیلی مهم',
  label2:'مهم',
  label3:'عادی',

};



