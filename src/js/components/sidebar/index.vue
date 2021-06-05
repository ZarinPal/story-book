<template>
  <div class="row sidebar-box" dir="rtl">
    <div class="sidebar open-side toggle-side" id="sidebar-wrapper">
      <div class="logo-row">
        <span class="logo"></span>
        <span class="icon-menu open-toggle" @click="openNav()" id="openToggle"></span>
        <span class="icon-menu close-toggle" @click="closeNav()" id="closeToggle"></span>
      </div>
      <div class="user-info">
        <img class="avatar" :src="src">
        <div class="level-info" :class="classes">
          <span class="level-type">{{ levelName }}</span>
          <span class="zp-id">
              <span class="zp">ZP.</span>
              <span>{{ zpNumber }}</span>
            </span>

        </div>
        <p class="username">{{ username }}</p>
      </div>
      <div class="list-group">
        <router-link tag="li" v-for="(tab,key) in listItem" :key="key" :to="{ name: tab.link.name}" :id="tab.titleTransKey.replace('.','-')"
                     class="list-group-item" :class="tab.class" v-if="!tab.divider" >
          <a :href="tab.link.name">
            <i :class="tab.icon"></i>
            <span class="title-transKey"> {{ tab.titleTransKey}}</span>
          </a>

        </router-link>
        <a v-else>
          <li class="divider"></li>
        </a>
      </div>
    </div>
  </div>

</template>
<!--Typescript code-->
<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'


@Component
export default class sidebar extends Vue {
  @Prop({type: String}) readonly username: string
  @Prop({type: String}) readonly src: string
  @Prop({type: String}) readonly levelName: string
  @Prop() readonly zpNumber: number

  @Prop({type: Boolean, default: false}) readonly goldVip: Boolean
  @Prop({type: Boolean, default: false}) readonly silverVip: Boolean
  @Prop({type: Boolean, default: false}) readonly basicLevel: Boolean
  @Prop({type: Boolean, default: false}) readonly newLevel: Boolean
  @Prop({type: Boolean, default: false}) readonly silverLevel: Boolean
  @Prop({type: Boolean, default: false}) readonly goldLevel: Boolean
  @Prop({
    required: true, default: [
      {
        link: {name: 'dashboard.index'},
        icon: 'icon-all-dashboard',
        titleTransKey: 'نمای کلی',

      },
      {
        link: {name: 'home.index'},
        icon: 'icon-home',
        titleTransKey: 'پیشخوان',
        class: 'terminal-item',


      },
      {
        link: {name: 'session.index'},
        icon: 'icon-money',
        titleTransKey: 'تراکنش‌ها',
        group: 'terminal',
        class: 'terminal-item',

      },
      {
        link: {name: 'reconciliation.index'},

        icon: 'icon-outline-receipt',
        titleTransKey: 'تسویه‌حساب',
        group: 'terminal',
        class: 'terminal-item',

      },
      {
        link: {name: 'payout.index'},
        icon: 'icon-track',
        titleTransKey: 'تسهیم درآمد',
        group: 'terminal',
        class: 'terminal-item',

      },
      {
        link: {name: 'product.index'},
        icon: 'icon-product',
        titleTransKey: 'محصولات',
        group: 'terminal',
        class: 'terminal-item',

      },
      {
        divider: true,

      },
      {
        link: {name: 'bankAccount.index'},
        icon: 'icon-cards',
        titleTransKey: 'حساب‌های بانکی',
        group: 'normal',
      },
      {
        link: {name: 'ticket.index'},
        icon: 'icon-help',
        titleTransKey: 'تیکت‌ها',
        group: 'normal',
      },
    ]
  }) readonly listItem: Object


  get classes() {
    return {
      'gold': this.goldLevel || this.goldVip,
      'silver': this.silverLevel || this.silverVip,
      'basic': this.basicLevel || this.newLevel,

    };
  }



  public openNav(): void {
    document.getElementById("sidebar-wrapper").classList.add("toggle-sidebar")
    document.getElementById("sidebar-wrapper").classList.add("toggle-side")
    this.$emit('addNavbar');

  }

  public closeNav(): void {
    document.getElementById("sidebar-wrapper").classList.remove("toggle-sidebar")
    this.$emit('closeNavbar');

  }
}
</script>
