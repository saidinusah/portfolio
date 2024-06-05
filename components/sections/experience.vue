<script setup lang="ts">

</script>

<template>

  <section>
    <div class="py-6">
      <div class="pb-8">
        <h2 class="text-white underline !text-lg  font-fraunces-regular leading-6">Experience</h2>
      </div>

      <div class="space-y-10">
        <div v-for="experience in experiences" :key="`${experience.role}-${experience.timeline}`">
          <p class="text-sm text-primary font-avenir-medium">{{ experience.timeline }}</p>
          <h5 class="text-base text-white  font-avenir-black leading-7">{{ experience.role }} | {{
            experience.employerName }}<sup v-if="experience.isContract" class="inline-flex">*</sup></h5>
          <p class="text-sm font-medium text-primary">{{ experience.summary }}</p>
        </div>

        <div>
          <small class="font-fraunces-regular"><sup class="font-fraunces-bold">*</sup> implies that the role was a
            contract </small>
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
