<template>
  <div> <table class="table">
    <thead @click="onClick">
    <tr>
      <th scope="col" class="index-thead">ردیف</th>
      <th scope="col">شناسه‌ی پرداخت</th>
      <th scope="col">مبلغ (به ریال)</th>
      <th scope="col">توضیحات</th>
      <th scope="col">شناسه‌ی ارجاع</th>
      <th scope="col">تاریخ و ساعت</th>
      <th scope="col">وضعیت</th>
    </tr>
    </thead>
    <tbody>
      <singleTable v-for="(dataKey,index) in dataSample" :dataKey="dataKey" :key="dataKey.id" ></singleTable>
    </tbody>
  </table>
  </div>

</template>
<script>
import singleTable from './partials/singleTable';

export default {
  name: 'Table',

  props: {
    demo: {
      type: Boolean,
      default: false,
    },


  },
  data(){
    return{
      dataSample: [
        {index:"1",name:"مهدی محمدی",class:"success",icon:"icon-Tick-badge",id:"25667",amount: "47,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه فروردین 1400",status:"پرداخت موفق", rrn: "564677"},
        {index:"2",name:"رامین ضیایی",class:"pending",icon:"icon-in-pay-badge",id:"256300",amount: "10,765,654", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه اسفند ماه 1399",status:"در حال پرداخت", rrn: "--"},
        {index:"3",name:"علی امیری",class:"danger",icon:"icon-multiplied-by-badge",id:"6543",amount: "678,450", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "تست درگاه توسط پشتیبان",status:"ردشده", rrn: "537257"},
        {index:"4",name:"محمد رامینی",class:"confilicted",icon:"icon-Difference-badge",id:"256349",amount: "876", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:"ارسال شده به شاپرک", rrn: "98076"},
        {index:"5",name:"ضیا ضیایی",class:"reversed",icon:"icon-Difference-badge",id:"241569",amount: "12,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "تست درگاه توسط پشتیبان",status:"بازگردانی شده", rrn: "254987"},
        {index:"6",name:"علی امیری",class:"success",icon:"icon-Tick-badge",id:"56341569",amount: "60,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:"تسویه‌ شده", rrn: "1345"},
        {index:"7",name:"رامین سوسن آبادی فراهانی",class:"pending",icon:"icon-Circle-arrow-badge",id:"256341569",amount: "987,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "درخواست پرداخت شماره: دامنه :",status:" در حال پردازش", rrn: "537257"},
        {index:"8",name:"علی امیری",class:"deactive",icon:"icon-multiplied-by-badge",id:"23569",amount: "76,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:"بسته", rrn: "98765"},
        {index:"9",name:"علی فراهانی",class:"success",icon:"icon-Tick-badge",id:"25634569",amount: "870,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:"فعال", rrn: "--"},
        {index:"10",name:" امیری",class:"reversed",icon:"icon-Circle-arrow-badge",id:"2564569",amount: "60,876", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:" درانتظار تسویه", rrn: "126543"},
        {index:"11",name:"محمد محمدی",class:"deactive",icon:"icon-multiplied-by-badge",id:"2341569",amount: "7,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:" غیرفعال", rrn: "700987"},
        {index:"12",name:"علی امیری",class:"danger",icon:"icon-multiplied-by-badge",id:"345",amount: "564,876", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "تست درگاه توسط پشتیبان",status:"منقضی شده", rrn: "67546"},
        {index:"13",name:"سوسن فراهانی",class:"confilicted",icon:"icon-Difference-badge ",id:"65432",amount: "670,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:"مغیارت تراکنش", rrn: "245367"},
        {index:"14",name:"عامر امیری",class:"reversed",id:"2345",amount: "60,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:"پاسخِ پشتیبان", rrn: "87695"},
        {index:"15",name:"علی آبادی",class:"pending",icon:"icon-Difference-badge",id:"269",amount: "897,656,980", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه بهمن 1399",status:"در حالِ بررسی", rrn: "09865"},
        {index:"16",name:"مصطفی امیری",class:"danger",icon:"icon-multiplied-by-badge",id:"25630",amount: "1,876,000", craeteAt: "۱۳۹۹/۱۲/۱۱-۱۲:۲۰:۵۸", description: "بابت تسویه ماه اسفند ماه 1399",status:"تکمیل نشده", rrn: "129876"},

      ]
    }
  },



  methods: {
    onClick() {
      this.$emit('onClick');
    },
  },
  components:{
    singleTable
  }
};
</script>
