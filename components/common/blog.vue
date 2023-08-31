<template>
  <NuxtLink
    :to="url"
    target="_blank"
    class="border rounded-md border-text-secondary space-y-1 p-2"
  >
    <img
      :src="image"
      class="rounded-md object-cover"
      :alt="`Cover image for ${heading}`"
    />
    <h5 class="text-lg text-text-primary font-bold">{{ heading }}</h5>

    <p class="text-base text-text-secondary font-semibold">{{ description }}</p>
    <p class="text-sm text-text-secondary py-0.5">{{ publishDate }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  image: string;
  url: string;
  heading: string;
  description: string;
  publishDate: string;
}

const props = defineProps<Props>();

const { image, url, heading, description, publishDate } = toRefs(props);
</script>
