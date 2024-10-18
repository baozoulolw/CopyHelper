<template>
  <div class="flex">
    <div>
      <v-treeview
          :items="items"
          :opened="initiallyOpen"
          item-value="title"
          activatable
          open-on-click
      >
        <template v-slot:prepend="{ item, isOpen }">
          <v-icon v-if="!item.file">
            {{ isOpen ? 'mdi-folder-open' : 'mdi-folder' }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>

    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
})
</script>

<style scoped lang='scss'>
</style>
