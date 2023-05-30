<template>
  <nav class="grid grid-cols-6 py-4">
    <ul class="col-span-4 col-start-2 flex items-center justify-between">
      <li class="font-bold text-xl">
        <NuxtLink to="/" class="lg:hidden"> said </NuxtLink>
      </li>
      <li
        class="flex items-center space-x-2 lg:flex-col lg:space-y-2 lg:hover:scale-125 lg:hover:transition-transform lg:hover:delay-150"
      >
        <NuxtLink to="https://github.com/1nusah" target="_blank"
          ><IconsGithub class="lg:w-8 lg:h-8" />
        </NuxtLink>
        <NuxtLink to="https://www.linkedin.com/in/saidinusah/" target="_blank"
          ><IconsLinkedin class="lg:w-8 lg:h-8" />
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
