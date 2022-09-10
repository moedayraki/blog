<script setup lang="ts">
import { isDark, toggleDark } from "~/logic/dark";
</script>
<template>
  <form
    action="https://send.pageclip.co/i0ojHfQY1B6kgtFnSkjtrxbpno0BXsC0"
    class="pageclip-form"
    method="post"
  >
    <div class="flex flex-col w-100 items-center md:flex-row md:justify-evenly">
      <div class="relative z-0 w-60 pb-2">
        <input
          type="email"
          name="email"
          class="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm dark:text-white text-gray-900 focus:border-cyan-500 focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label
          class="absolute left-0 top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-cyan-500 peer-focus:dark:text-cyan-500"
          >Email</label
        >
      </div>
      <AppButton class="pageclip-form__submit" type="submit">
        <span>{{ $frontmatter.actionText }}</span>
      </AppButton>
    </div>
  </form>
</template>
