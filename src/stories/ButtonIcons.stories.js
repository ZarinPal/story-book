import MyButtonIcon from '../js/components/buttonIcons/index.vue';

export default {
  title: 'Example/MyButtonIcons',
  component: MyButtonIcon,
    argTypes: {
      iconsName: {
        control: {
          type: 'select',
          options: [
            'chevron-right-Pagination',
            'chevron-left-Pagination',
            'Circle-arrow-badge',
            'Difference-badge',
            'in-pay-badge',
            'multiplied-by-badge',
            'sent-to-shapparak-badge',
            'Tick-badge',
            'info-line',
            'phonelink',
            'account_tree',
            'logout',
            'setting-line',
            'all-dashboard',
            'export',
            'arrow-down-sort',
            'arrow-up-sort',
            'filter',
            'html',
            'pdf',
            'coupon_border',
            'money-24px',
            'receipt',
            'check-nopadding',
            'tasviye-shaparak-nopadding',
            'outline-receipt-noborder',
            'product',
            'tour-guide',
            'handle',
            'cancel',
            'add-round',
            'list',
            'notification-outline',
            'store',
            'back',
            'back-long',
            'arrow-drop-down',
            'round-link-24px',
            'warning',
            'info',
            'error',
            'terminal',
            'upload',
            'current',
            'done',
            'double-arrow',
            'pending',
            'check',
            'up',
            'down',
            'sync',
            'shetabi',
            'cards2',
            'coupon',
            'zarinlink',
            'power',
            'session',
            'setting',
            'today',
            'track',
            'outline-receipt',
            'email',
            'arrow-down',
            'print',
            'add',
            'close',
            'excel',
            'attach',
            'mail',
            'mail-open',
            'copy',
            'delete',
            'edit',
            'code',
            'view',
            'card',
            'doc',
            'invite',
            'link',
            'telegram',
            'arrow-right',
            'cards',
            'logo',
            'mobile',
            'document',
            'qr',
            'home',
            'money',
            'knowledge',
            'drop-down',
            'menu',
            'notification',
            'search',
            'help',
            'user-outline'
           ],
        },
    },
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
  iconsName:'notification-outline',
  label: 'نمونه متن دکمه',
};

export const Secondary = Template.bind({});
Secondary.args = {
  iconsName:'sync',
  label: 'نمونه متن دکمه',
};
export const disable = Template.bind({});
disable.args = {
  disable: true,
  iconsName:'notification-outline',
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
