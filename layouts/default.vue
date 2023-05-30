<template>
  <main class="lg:flex lg:justify-between lg:flex-row-reverse">
    <CommonHeader />
    <div class="grid grid-cols-5 bg-white h-screen w-screen">
      <section class="col-span-3 col-start-2">
        <slot />
      </section>
    </div>
  </main>
</template>
