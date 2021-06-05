<template>
    <div class="row navbar" dir="rtl">
      <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 " >
        <div class="pull-right" @click="toggle">
          <div class="icon-store"></div>
          <span class="heading">{{labelDropDown}}</span>
          <i class="icon-drop-down"></i>
        </div>
      </div>
      <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 " >
        <div class="pull-left">
          <my-button-navbar label="تنظیمات درگاه"  class="button-component"></my-button-navbar>
          <my-button-navbar label="اعلانات" class="button-component"></my-button-navbar>
          <div class="avatar"  ><img :src="src"></div>

        </div>

      </div>
<!--      <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 " >-->
<!--        <div class="pull-left">-->
<!--          <Modal title="kjhgfdfghjkl"  icons="export" headingModal="اعلانات" >-->
<!--            <p slot="body">-->
<!--              <my-button label="مم" class="button-component" @onClick="test"></my-button>-->
<!--            </p>-->
<!--          </Modal>-->
<!--        </div>-->
      </div>
<!--      <sidebar style="background: darkred" :list-item="sidebarTab":zpNumber="345" :goldVip="true" levelName="طلایی" :sidebarParams="trx(tab)"></sidebar>-->


</template>
<!--Typescript code-->
<script lang="ts">
import sidebar from '../sidebar/index';
import Modal from '../modal/index';
import MyButtonNavbar from '../buttonNavbar/index';
import Vue from 'vue'
import Component from 'vue-class-component'
import {  Prop } from 'vue-property-decorator'
import MyButton from '../buttonIcons/index';

@Component({
  components: {
    MyButtonNavbar,
    MyButton,
    sidebar,
    Modal
  }
})
export default class navbar extends Vue {
  @Prop({type: String}) readonly src: string

  @Prop({type: String})readonly label: string
  @Prop({type: String, default:'نمای کلی'})readonly labelDropDown: string

get sidebarTab(){
    return  [
      {
        link: {name: 'home.index'},
        icon: 'icon-home',
        titleTransKey: 'پیشخوان',
        class:'terminal-item',

      },

      {
        link: {name: 'reconciliation.index'},

        icon: 'icon-outline-receipt',
        titleTransKey: 'تسویه‌حساب',
        group:'terminal',
        class:'terminal-item',

      },
      {
        link: {name: 'payout.index'},
        icon: 'icon-track',
        titleTransKey: 'تسهیم درآمد',
        group:'terminal',
        class:'terminal-item',

      },
      {
        link: {name: 'product.index'},
        icon: 'icon-product',
        titleTransKey: 'محصولات',
        group:'terminal',
        class:'terminal-item',

      }
    ]
}

  public onClick(): void {
    this.$emit('onClick');
  }
  public test(): void {
    console.log('test');
  }
  public toggle(): void {
    this.$emit('openDropdown');

  }
}
</script>

