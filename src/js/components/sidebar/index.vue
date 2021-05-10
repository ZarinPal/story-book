<template>
    <div class="row sidebar-box" dir="rtl"   >
      <div class="sidebar" id="sidebar-wrapper">
          <div class="logo-row">
            <img class="logo" src="../../../images/ZarinPal-Logo.svg">
            <span class="icon-menu open-toggle" @click="openNav()" id="openToggle"></span>
            <span class="icon-menu close-toggle" @click="closeNav()" id="closeToggle"></span>
          </div>
        <div class="user-info">
          <img class="avatar" src="../../../images/avatar.jpeg">
          <div class="level-info" :class="classes">
            <span class="level-type" >{{levelName}}</span>
            <span class="zp-id">
              <span class="zp">ZP.</span>
              <span>356089</span>
            </span>

          </div>
          <p class="username" >{{ username }}</p>
        </div>
        <div class="list-group">
          <a v-for="(tab,key) in sidebarTabs" :key="key"  :to="tab.link" :href="tab.link" class="list-group-item" :class="tab.class"  >
            <i :class="tab.icon"></i>
            <span class="title-transKey"> {{tab.titleTransKey}}</span>

          </a>
        </div>
      </div>
  </div>

</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {  Prop } from 'vue-property-decorator'
@Component
export default class sidebar extends Vue {
  @Prop({type: String, required: true}) readonly username: string
  @Prop({type: String, required: true}) readonly levelName: string
  @Prop({type: Boolean, default: false}) readonly goldVip: Boolean
  @Prop({type: Boolean, default: false}) readonly silverVip: Boolean
  @Prop({type: Boolean, default: false}) readonly basicLevel: Boolean
  @Prop({type: Boolean, default: false}) readonly newLevel: Boolean
  @Prop({type: Boolean, default: false}) readonly silverLevel: Boolean
  @Prop({type: Boolean,  default: false}) readonly goldLevel: Boolean
  private sidebarTabs: Array<object> = [
    {
      link: 'dashboard.index',
      icon: 'icon-all-dashboard',
      titleTransKey: 'نمای کلی',

    },
    {
      link:'home.index',
      icon: 'icon-home',
      titleTransKey: 'پیشخوان',
      class:'active',

    },
    {
      link:'session.index',
      icon: 'icon-money',
      titleTransKey: 'تراکنش‌ها',
      group:'terminal',

    },
    {
      link:  'reconciliation.index',
      icon: 'icon-outline-receipt',
      titleTransKey: 'تسویه‌حساب',
      group:'terminal',

    },
    {
      link:  'payout.index',
      icon: 'icon-track',
      titleTransKey: 'تسهیم درآمد',
      group:'terminal',

    },
    {
      link:  'product.index',
      icon: 'icon-product',
      titleTransKey: 'محصولات',
      group:'terminal',

    },
    {
      divider:true,

    },
    {
      link:  'bankAccount.index',
      icon: 'icon-cards',
      titleTransKey: 'حساب‌های بانکی',
      group:'normal',
    },
    {
      link:  'ticket.index',
      icon: 'icon-help',
      titleTransKey: 'تیکت‌ها',
      group:'normal',
    },
  ]
  get classes() {
    return {
      'gold': this.goldLevel||this.goldVip,
      'silver': this.silverLevel||this.silverVip,
      'basic': this.basicLevel||this.newLevel,

    };
  }
  public openNav(): void {
    document.getElementById("sidebar-wrapper").classList.add("toggle-sidebar")
  }
  public closeNav(): void {
    document.getElementById("sidebar-wrapper").classList.remove("toggle-sidebar")
  }
}
</script>
.activated{
background: rgba(40, 69, 123, 0.06);
color: #28457B;
p{
color: #28457B !important;

}
}
