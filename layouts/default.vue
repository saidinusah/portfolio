<template>
  <main class="lg:flex lg:justify-between lg:flex-row-reverse">
    <CommonHeader />
    <div class="grid lg:grid-cols-5 grid-cols-7 bg-white lg:h-screen h-[80vh] w-screen">
      <section class="lg:col-span-3 lg:col-start-2 col-span-5 col-start-2">
        <slot />
      </section>
    </div>
  </main>
  <footer>
    <CommonFooter />
  </footer>
</template>
