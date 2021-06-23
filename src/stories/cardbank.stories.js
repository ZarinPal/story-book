import cardBank from '../js/components/cardBank/index.vue';

export default {
  title: 'Example/cardBank',
  component: cardBank,
  argTypes: {
    logo: {
      control: {
        type: 'select',
        options: [
          'saman',
          'pasargad',
          'ayandeh',
          'refah',
          'dey',
          'hekmat',
          'agriculture',
          'melal',
          'tosetavon',
          'sanatmadan',
          'khavarmiane',
          'mellat',
          'eghtesadnovin',
          'melli',
          'parsian',
          'kosar',
          'sepah',
          'cbi',
          'iranzamin',
          'mehr',
          'tourismbank',
          'zarincard',
          'karafarin',
          'postbank',
          'sina',
          'citybank',
          'ansar',
          'tejarat',
          'sarmayeh',
          'saderat',
          'ghavamin',
          'maskan',
          'resalat',
          'noor',
          'toseetebari',
          'tosesaderat'],
      },
    },
  },
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {cardBank},
  template: '<cardBank @onClick="onClick" v-bind="$props" />',
});
export const saman = Template.bind({});
saman.args = {
  logo: 'saman',
  saman: true,
  bankName: 'بانک سامان',
  rrn: '892938820001277640002746',
  amount: '544000',
  iban: 'IR130570028780010957775103',
};

export const pasargad = Template.bind({});
pasargad.args = {
  logo: 'pasargad',
  pasargad: true,
  bankName: 'بانک پاسارگاد',
  rrn: '892938820001277640002746',
  amount: '654000',
  iban: 'IR130570028780010957775103',
};
export const ayandeh = Template.bind({});
ayandeh.args = {
  logo: 'ayandeh',
  ayandeh: true,
  bankName: 'بانک آینده ',
  rrn: '892938820001277640002746',
  amount: '345678',
  iban: 'IR130570028780010957775103',
};

export const refah = Template.bind({});
refah.args = {
  logo: 'refah',
  ayandeh: true,
  bankName: 'بانک رفاه کارگران',
  rrn: '892938820001277640002746',
  amount: '345678',
  iban: 'IR130570028780010957775103',
};
export const dey = Template.bind({});
dey.args = {
  logo: 'dey',
  dey: true,
  bankName: 'بانک دی',
  rrn: '892938820001277640002746',
  amount: '6598765',
  iban: 'IR130570028780010957775103',
};
export const hekmat = Template.bind({});
hekmat.args = {
  logo: 'hekmat',
  hekmat: true,
  bankName: 'بانک حکمت',
  rrn: '892938820001277640002746',
  amount: '76545',
  iban: 'IR130570028780010957775103',
};
export const agriculture = Template.bind({});
agriculture.args = {
  logo: 'agriculture',
  agriculture: true,
  bankName: 'بانک کشاورزی',
  rrn: '892938820001277640002746',
  amount: '7658845',
  iban: 'IR130570028780010957775103',
};
export const melal = Template.bind({});
melal.args = {
  logo: 'melal',
  melal: true,
  bankName: 'موسسه مالی اعتباری ملل',
  rrn: '892938820001277640002746',
  amount: '77655',
  iban: 'IR930577668780010957774535',
};
export const sanatmadan = Template.bind({});
sanatmadan.args = {
  logo: 'sanatmadan',
  sanatmadan: true,
  bankName: 'بانک صنعت و معدن',
  rrn: '892938820001277640002746',
  amount: '234655',
  iban: 'IR930577668780010957774535',
};
export const tosetavon = Template.bind({});
tosetavon.args = {
  logo: 'tosetavon',
  tosetavon: true,
  bankName: 'بانک توسعه و تعاون',
  rrn: '892938820001277640002746',
  amount: '234655',
  iban: 'IR930577668780010957774535',
};
export const khavarmiane = Template.bind({});
khavarmiane.args = {
  logo: 'khavarmiane',
  khavarmiane: true,
  bankName: 'بانک خاورمیانه',
  rrn: '892938820001277640002746',
  amount: '234655',
  iban: 'IR930577668780010957774535',
};
export const mellat = Template.bind({});
mellat.args = {
  logo: 'mellat',
  mellat: true,
  bankName: 'بانک ملت',
  rrn: '892938820001277640002746',
  amount: '8765455',
  iban: 'IR930577668780010957774535',
};
export const eghtesadnovin = Template.bind({});
eghtesadnovin.args = {
  logo: 'eghtesadnovin',
  eghtesadnovin: true,
  bankName: 'بانک اقتصادنوین',
  rrn: '892938820001277640002746',
  amount: '23456',
  iban: 'IR930577668780010957774535',
};
export const melli = Template.bind({});
melli.args = {
  logo: 'melli',
  melli: true,
  bankName: 'بانک ملی ایران',
  rrn: '892938820001277640002746',
  amount: '23456',
  iban: 'IR930577668780010957774535',
};
export const parsian = Template.bind({});
parsian.args = {
  logo: 'parsian',
  parsian: true,
  bankName: 'بانک پارسیان',
  rrn: '892938820001277640002746',
  amount: '987654',
  iban: 'IR930577668780010957774535',
};
export const kosar = Template.bind({});
kosar.args = {
  logo: 'kosar',
  kosar: true,
  bankName: 'بانک کوثر',
  rrn: '892938820001277640002746',
  amount: '76543',
  iban: 'IR930577668780010957774535',
};
export const sepah = Template.bind({});
sepah.args = {
  logo: 'sepah',
  sepah: true,
  bankName: 'بانک سپه',
  rrn: '892938820001277640002746',
  amount: '45678',
  iban: 'IR930577668780010957774535',
};
export const cbi = Template.bind({});
cbi.args = {
  logo: 'cbi',
  cbi: true,
  bankName: 'بانک مرکزی',
  rrn: '892938820001277640002746',
  amount: '7489600',
  iban: 'IR930577668780010957774535',
};
export const iranzamin = Template.bind({});
iranzamin.args = {
  logo: 'iranzamin',
  iranzamin: true,
  bankName: 'بانک ایران زمین',
  rrn: '892938820001277640002746',
  amount: '45678',
  iban: 'IR930577668780010957774535',
};
export const mehr = Template.bind({});
mehr.args = {
  logo: 'mehr',
  iranzamin: true,
  bankName: ' بانک قرض الحسنه مهر ایران',
  rrn: '892938820001277640002746',
  amount: '45678',
  iban: 'IR930577668780010957774535',
};
export const tourismbank = Template.bind({});
tourismbank.args = {
  logo: 'tourismbank',
  tourismbank: true,
  bankName: ' بانک گردشگری',
  rrn: '892938820001277640002746',
  amount: '234567',
  iban: 'IR930577668780010957774535',
};
export const zarincard = Template.bind({});
zarincard.args = {
  logo: 'zarincard',
  zarincard: true,
  bankName: ' بانک زرین کارت',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const karafarin = Template.bind({});
karafarin.args = {
  logo: 'karafarin',
  karafarin: true,
  bankName: 'بانک کارآفرین',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const postbank = Template.bind({});
postbank.args = {
  logo: 'postbank',
  postbank: true,
  bankName: 'پست بانک ',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};

export const sina = Template.bind({});
sina.args = {
  logo: 'sina',
  sina: true,
  bankName: ' بانک سینا',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const citybank = Template.bind({});
citybank.args = {
  logo: 'citybank',
  citybank: true,
  bankName: 'بانک شهر',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};

export const ansar = Template.bind({});
ansar.args = {
  logo: 'ansar',
  ansar: true,
  bankName: 'بانک انصار',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const tejarat = Template.bind({});
tejarat.args = {
  logo: 'tejarat',
  tejarat: true,
  bankName: 'بانک تجارت',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const sarmayeh = Template.bind({});
sarmayeh.args = {
  logo: 'sarmayeh',
  sarmayeh: true,
  bankName: 'بانک سرمایه ',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const saderat = Template.bind({});
saderat.args = {
  logo: 'saderat',
  saderat: true,
  bankName: 'بانک صادرات',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const ghavamin = Template.bind({});
ghavamin.args = {
  logo: 'ghavamin',
  ghavamin: true,
  bankName: 'بانک قوامین',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const maskan = Template.bind({});
maskan.args = {
  logo: 'maskan',
  maskan: true,
  bankName: 'بانک مسکن',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const resalat = Template.bind({});
resalat.args = {
  logo: 'resalat',
  resalat: true,
  bankName: 'بانک رسالت',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const noor = Template.bind({});
noor.args = {
  logo: 'noor',
  noor: true,
  bankName: 'موسسه اعتباری طوس',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const toseetebari = Template.bind({});
toseetebari.args = {
  logo: 'toseetebari',
  toseetebari: true,
  bankName: 'بانک توسعه ',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};
export const tosesaderat = Template.bind({});
tosesaderat.args = {
  logo: 'tosesaderat',
  tosesaderat: true,
  bankName: 'بانک توسعه صادرات',
  rrn: '892938820001277640002746',
  amount: '65433456',
  iban: 'IR930577668780010957774535',
};

