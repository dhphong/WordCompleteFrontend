<template>

  <div>
    <b>#{{ item.id }}</b>
    <span> {{ item.name }}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemTemplate',
  props: {
    item: { required: true }
  }
}
</script>

<style scoped>

</style>
