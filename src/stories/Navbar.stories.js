import navbar from '../js/components/navbar/index.vue';

export default {
  title: 'Example/navbar',
  component: navbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { navbar },
  template: '<navbar @onClick="onClick" v-bind="$props" />',
});

export const demo = Template.bind({});
demo.args = {
  demo:true,

};


