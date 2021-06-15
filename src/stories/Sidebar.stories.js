import sidebar from '../js/components/sidebar/index.vue';

export default {
  title: 'Example/Sidebar',
  component: sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { sidebar },
  template: '<sidebar v-bind="$props" />',
});




export const goldLevel = Template.bind({});
goldLevel.args = {
  goldLevel: true,
  levelName: 'طلایی',
  zpNumber: '4567',
  username: 'سیده آزاده میرنظامی',
  sidebarParams:()=> {
  }
};
export const goldVip = Template.bind({});
goldVip.args = {
  goldVip: true,
  levelName: 'طلایی VIP',
  username: 'مسعودامینی',
};
export const silverVip = Template.bind({});
silverVip.args = {
  silverVip: true,
  levelName: 'نقره‌ای VIP',
  username:'نیما نورافشان'

};
export const silverLevel = Template.bind({});
silverLevel.args = {
  silverLevel: true,
  levelName:'نقره‌ای',
  username:'محمد حسین افضلی'
};
export const basicLevel = Template.bind({});
basicLevel.args = {
  basicLevel: true,
  levelName:'تایید اولیه',
  username:' سید مرتضی طباطبایی'
};
export const newLevel = Template.bind({});
newLevel.args = {
  newLevel: true,
  levelName:'کاربر جدید',
  username:'مهدی مهره‌چی'

};
