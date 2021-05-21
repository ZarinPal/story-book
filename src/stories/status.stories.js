import status from '../js/components/status/index.vue';

export default {
  title: 'Example/status',
  component: status,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { status },
  template: '<status @onClick="onClick" v-bind="$props" />',
});

export const success = Template.bind({});
success.args = {
  success: true,
  label: 'نمونه متن لیبل',
};
export const Warning = Template.bind({});
Warning.args = {
  Warning: true,
  label: 'نمونه متن لیبل',
};
export const danger = Template.bind({});
danger.args = {
  danger: true,
  label: 'نمونه متن لیبل',
};
export const VERIFIED = Template.bind({});
VERIFIED.args = {
  VERIFIED: true,
  label: 'پرداخت موفق',
};

export const FAILED = Template.bind({});
FAILED.args = {
  FAILED: true,
  label: 'تکمیل نشده',
};
export const EXPIRED = Template.bind({});
EXPIRED.args = {
  EXPIRED: true,
  label: 'منقضی شده',
};
export const INBANK = Template.bind({});
INBANK.args = {
  INBANK: true,
  label: 'در حال پرداخت',
};
export const CONFLICTED = Template.bind({});
CONFLICTED.args = {
  CONFLICTED: true,
  label: ' مغیارت تراکنش',
};
export const REJECTED = Template.bind({});
REJECTED.args = {
  REJECTED: true,
  label: 'رد شده',
};
export const InPROGRESS = Template.bind({});
InPROGRESS.args = {
  InPROGRESS: true,
  label: 'ارسال شده به شاپرک',
};
export const REVERSED = Template.bind({});
REVERSED.args = {
  REVERSED: true,
  label: 'بازگردانی شده',
};
export const PAID = Template.bind({});
PAID.args = {
  PAID: true,
  label: 'تسویه‌ شده',
};

export const PENDING = Template.bind({});
PENDING.args = {
  PENDING: true,
  label: 'در حال پردازش',
};
export const ACTIVE = Template.bind({});
ACTIVE.args = {
  ACTIVE: true,
  label: 'درانتظار تسویه',
};
export const deACTIVE = Template.bind({});
deACTIVE.args = {
  deACTIVE: true,
  label: 'غیرفعال',
};
export const ACTIVEProduct = Template.bind({});
ACTIVEProduct.args = {
  ACTIVEProduct: true,
  label: 'فعال',
};
export const CLOSED = Template.bind({});
CLOSED.args = {
  CLOSED: true,
  label: 'بسته',
};
export const SUPPORTRESPONSE = Template.bind({});
SUPPORTRESPONSE.args = {
  SUPPORTRESPONSE: true,
  label: 'پاسخِ پشتیبان',
};
export const INPROGRESS = Template.bind({});
INPROGRESS.args = {
  INPROGRESS: true,
  label: 'در حالِ بررسی',
};
export const singlePaid = Template.bind({});
singlePaid.args = {
  singlePaid: true,
};
export const singleChecked = Template.bind({});
singleChecked.args = {
  singleChecked: true,
};

