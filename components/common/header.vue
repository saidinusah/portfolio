<template>
  <nav class="grid lg:grid-cols-6 lg:py-4 py-6 grid-cols-7">
    <ul
      class="lg:col-span-4 lg:col-start-2 col-span-5 col-start-2 flex items-center justify-between lg:px-4"
    >
      <li class="font-bold text-xl">
        <NuxtLink to="/" class="lg:hidden"> said </NuxtLink>
      </li>
      <li class="flex items-center space-x-2 lg:flex-col lg:space-y-2">
        <NuxtLink to="https://github.com/1nusah" target="_blank"
          ><IconsGithub class="links" />
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/saidinusah/" target="_blank"
          ><IconsLinkedin class="links" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .links {
    @apply lg:w-8 lg:h-8   hover:scale-125 hover:transition-transform hover:delay-150;
  }
</style>
