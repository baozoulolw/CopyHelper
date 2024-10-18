<template>
  <div>
    <v-tabs
        v-model="tab"
        align-tabs="title"
    >
      <v-tab
          v-for="item in items"
          :key="item.key"
          :text="item.name"
          :value="item.key"
      ></v-tab>
    </v-tabs>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'

const tab = ref()
const items = ref([
  {
    name:'历史剪切记录',
    key:'history',
  },
  {
    name:'收藏',
    key:'collect'
  }
])

onMounted(() => {
})
</script>

<style scoped lang='scss'>
</style>
