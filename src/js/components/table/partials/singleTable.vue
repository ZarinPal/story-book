<template>
  <tr role="row">
    <td class="">{{ dataKey.index }}</td>
    <td class="">{{ dataKey.id }}</td>
    <td class="">{{ dataKey.amount }}</td>
    <td class="">{{ dataKey.description }}</td>
    <td> {{ dataKey.rrn }}</td>
    <td class="">{{ dataKey.craeteAt }}</td>
    <td >
      <status :label="dataKey.status "   :class="dataKey.class" ></status>

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
