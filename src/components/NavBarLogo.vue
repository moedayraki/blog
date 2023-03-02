<script setup lang="ts">
import { isDark } from "~/logic/dark";
</script>
<template>
  <a
    class="inline-flex items-center text-xl"
    href="https://moedayraki.github.io/blog/"
    :aria-label="`${$site.title}, back to the main page`"
  >
    <IconAppLogodark v-if="isDark" class="inline-flex mr-2 h-7 md:h-8" />
    <IconAppLogo v-else class="inline-flex mr-2 h-7 md:h-8" />
    <span class="font-mono">The Moe Blog</span>
    <!-- <IconAppText
      class="inline-flex fill-intense stroke-intense stroke-2 h-9 md:h-10 mb-1"
    /> -->
  </a>
</template>
