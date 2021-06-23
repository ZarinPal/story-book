<template>
  <div class="button-group">
    <ul class="btn-group" role="group">
      <li v-for="(tab,key) in listItem" :id="tab.value" :class="{'active':activeItem===tab.value}" :key="key"
          class="list-item" @click="change(tab.value)">{{ tab.label }}
      </li>
    </ul>
  </div>
</template>
<!--Typescript code-->
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Prop} from 'vue-property-decorator'


export  interface buttonGroupList{
  value:string|boolean;
  label:string;
}
@Component
export default class ButtonGroup extends Vue {
  private activeItem:  string|Boolean = ""
  @Prop({type: Boolean}) readonly active: Boolean
  @Prop({type: String}) readonly backgroundColor: string
  @Prop() filterLoad: string|Boolean
  @Prop({
    required: true, default: [
      {
        label: 'غیرفعال',
        value: 'TRASH',
      },
      {
        label: 'فعال',
        value: 'ACTIVE',
      },
      {
        label: 'همه',
        value: 'ALL',
      },

    ]
  }) readonly listItem: buttonGroupList[]



  created() {
    this.activeItem = this.filterLoad
  }

  public change(value): void {
    this.activeItem = value;
    console.log(value)
    this.$emit('change',value);

  }


}
</script>

