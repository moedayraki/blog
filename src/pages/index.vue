<page>
actionText: Subscribe
actionLink: /guide/introduction
heroAlt: blog logo
</page>

<script setup lang="ts">
import { onMounted } from "vue";
import { getPosts } from "~/logic/posts";
let posts = $(getPosts());
onMounted(() => {
  let pageclip = document.createElement("script");
  pageclip.setAttribute("src", "https://s.pageclip.co/v1/pageclip.js");
  pageclip.setAttribute("charset", "utf-8");
  document.head.appendChild(pageclip);
});
</script>

<template layout="home">
  <ul class="divide-y divide-gray-200">
    <li v-for="post of posts" :key="post.href" class="py-12">
      <article class="space-y-2 xl:(grid grid-cols-4 space-y-0 items-baseline">
        <PostDate :date="post.date" />
        <div class="space-y-5 xl:col-span-3">
          <div class="space-y-6">
            <h2 class="text-2xl leading-8 font-bold tracking-tight">
              <a class="colored" :href="post.href">{{ post.title }}</a>
            </h2>
            <div class="prose max-w-none text-gray-500">
              <component :is="post" excerpt />
            </div>
          </div>
          <div class="text-base leading-6 font-medium">
            <a class="link" aria-label="read more" :href="post.href"
              >Read more →</a
            >
          </div>
        </div>
      </article>
    </li>
  </ul>
</template>
