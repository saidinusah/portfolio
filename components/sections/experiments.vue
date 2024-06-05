<script setup lang="ts">

</script>
<template>
  <section>
    <div class="py-6">
      <div class="pb-8">
        <h2 class="text-white underline !text-lg  font-fraunces-regular leading-6 underline-offset-2">
          Projects</h2>
      </div>

      <div class="space-y-10 ">
        <div v-for="experiment in experiments" :key="experiment.id" class="space-y-2">
          <p class="text-sm text-primary font-avenir-medium">{{ experiment.name }}</p>
          <p class=" text-white  text-lg font-fraunces-semibold">{{ experiment.summary }}</p>

          <div class="flex space-x-4 items-center pb-2">
            <span v-for="stack in experiment?.stack" :key="stack"
              class="text-primary text-sm font-avenir-medium leading-6">
              #{{ stack?.toLowerCase() }}
            </span>
          </div>
          <NuxtLink
            class="text-white flex items-center bg-[#353856] px-[0.875rem] py-[0.625rem] w-fit rounded-full text-sm font-fraunces-regular">
            <span>
              See project
            </span>
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.08333 10.4167L9.91667 4.58337M9.91667 4.58337H4.66667M9.91667 4.58337V9.83337" stroke="white"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div class="pt-12 flex itms-center justify-center">
        <svg width="89" height="1" viewBox="0 0 89 1" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="88.5" y2="0.5" stroke="#9597B1" />
        </svg>
      </div>
    </div>
  </section>
</template>
