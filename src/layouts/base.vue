<script client:load lang="ts">
if (import.meta.env.PROD)
  console.log(
    "Hello dev! Moe's blog for you!",
    "https://www.moe.dayrakiarts.com"
  );
</script>

<template>
  <MetaTags />
  <TheNavBar />
  <slot />
  <!-- <ReloadPrompt /> -->
</template>
