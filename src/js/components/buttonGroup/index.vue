<template>
  <div class="button-group">
    <ul class="btn-group" role="group">
      <li v-for="(tab,key) in listItem" :id="tab.filter" :class="{'active':activeItem===tab.filter}" :key="key"
          class="list-item" @click="change(tab.filter)">{{ tab.label }}
      </li>
    </ul>
  </div>
</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'

@Component
export default class ButtonGroup extends Vue {
  private activeItem: string = ""
  @Prop({type: Boolean}) readonly active: Boolean
  @Prop({type: String}) readonly backgroundColor: string
  @Prop({type: String, default: 'TRASH'}) filterLoad: string
  @Prop({
    required: true, default: [
      {
        label: 'غیرفعال',
        filter: 'TRASH',
      },
      {
        label: 'فعال',
        filter: 'ACTIVE',
      },
      {
        label: 'همه',
        filter: 'ALL',
      },

    ]
  }) readonly listItem: Object

  created() {
    this.activeItem = this.filterLoad
  }

  public change(filter): void {
    this.activeItem = filter;
    this.$emit('change',filter);

  }


}
</script>

