<template>
  <tr role="row">
    <td class="">{{ dataKey.index }}</td>
    <td class="">{{ dataKey.id }}</td>
    <td class="">{{ dataKey.amount }}</td>
    <td class="">{{ dataKey.description }}</td>
    <td> {{ dataKey.rrn }}</td>
    <td class="">{{ dataKey.craeteAt }}</td>
    <td >
      <div class="label" :class="dataKey.class">
        <i :class="dataKey.icon" ></i>
        <span >{{ dataKey.status }}</span>
      </div>
     </td>
  </tr>
</template>
<script>
import status from '../../status/index';

export default {
  name: 'single-table',
  props: {
    index: {
      type: '',
    },
    dataKey: {
      type: Object,
    },
  },

  components: {
    status
  }
}
</script>
