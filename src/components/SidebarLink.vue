<script setup lang="ts">
import type { PropType } from "vue";
import type { SideBarItem, SideBarGroup } from "~/logic/config";

const props = defineProps({
  item: {
    type: Object as PropType<SideBarItem>,
    required: true,
  },
});

let children = $computed(() => (props.item as SideBarGroup).children);
</script>

<template>
  <li>
    <SidebarLinkItem :item="item" :header="true" />
    <ul v-if="children" class="mb-2">
      <li v-for="child in children" :key="child.id">
        <SidebarLinkItem :item="child" />
      </li>
    </ul>
  </li>
</template>
