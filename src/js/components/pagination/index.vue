<template>
  <ul class="pagination">
    <li class="first-page" @click="onClick"><a class="page-link btn btn-secondary" href="#">صفحه‌ی اول</a></li>
    <li class="prev-button "><a class="icon-chevron-right-Pagination" href="#"></a></li>
    <li v-for="link in paginateList" :key="link.id" :dataKey="link" class="page-item">
      <a :class="link.class" class="page-link" href="#">{{ link.page }}</a></li>
    <li class="next-button "><a class="icon-chevron-left-Pagination" href="#"></a></li>
    <li class="last-page"><a class="page-link btn btn-secondary" href="#">آخرین صفحه</a></li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component
export default class pagination extends Vue {
  @Prop({type: Boolean, default: false}) readonly demoPaginate: Boolean
  private paginateList: Array<object> = [
    {page: 1},
    {page: 2},
    {page: 3, class: 'active'},
    {page: 4},
    {page: 5}
  ]

  public onClick(): void {
    console.log('firstPage')
    this.$emit('onClick');

  }


};
</script>
