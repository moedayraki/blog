<template>
  <footer
    class="mx-auto bg-subtle leading-loose text-center text-soft text-sm py-10"
  >
    <p>Released under the MIT License.</p>
    <p>
      Copyright © 2021–{{ $site.year }}
      <a
        class="text-intense hover:(underline text-primary-soft)"
        :href="$site.authorUrl"
        target="_blank"
        >{{ $site.author }}</a
      >
    </p>
  </footer>
</template>

<style scoped>
html.dark footer {
  background: none;
  border-top: 1px solid var(--br-normal);
}
</style>
