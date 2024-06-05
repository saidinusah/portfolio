<template>
  <main class="bg-[#10132D] p-6">
    <div class="space-y-6 py-4">
      <div class=" space-y-1.5">
        <h1 class="text-[2rem] leading-10 font-fraunces-bold">Said <span class="text-alt-heading">Inusah</span></h1>
        <p class="text-sm leading-4 font-fraunces-regular"> Software engineer at <span class="text-alt-heading">
            <NuxtLink to="https://affinityafrica.com" external>
              Affinity Labs.
            </NuxtLink>
          </span></p>
      </div>

      <div class="space-y-1">
        <p class="text-about  text-sm font-avenir-medium "> I'm a software engineer who loves building web products
          from end to end. </p>
        <p class="text-about  text-sm font-avenir-medium"> All I
          need is an <span class="text-white"> idea</span> with my <span class="text-white">laptop </span> and I become
          the modern day <span>
            <NuxtLink to="https://simple.wikipedia.org/wiki/Hecate" external class="text-white underline">
              Hecate.
            </NuxtLink>
          </span></p>
      </div>
      <div class="flex items-center space-x-4 pt-2">
        <NuxtLink to="https://www.linkedin.com/in/saidinusah" external target="_blank">
          <IconsLinkedin2 class="w-6 h-6" />
        </NuxtLink>

        <NuxtLink to="https://github.com/saidinusah" external target="_blank">
          <IconsGithub2 />
        </NuxtLink>
      </div>


    </div>



    <LazySectionsAbout />
    <LazySectionsExperience />
    <LazySectionsExperiments />
  </main>
</template>
