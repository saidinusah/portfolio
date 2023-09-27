<template>
  <main
    class="lg:flex lg:justify-between lg:flex-row-reverse lg:max-w-4xl mx-auto"
  >
    <CommonHeader />
    <div
      class="grid lg:grid-cols-5 grid-cols-7 bg-white lg:h-[90vh] h-[80vh] w-screen"
    >
      <section class="lg:col-span-3 lg:col-start-2 col-span-5 col-start-2">
        <slot />
      </section>
    </div>
  </main>
  <footer
    class="grid lg:grid-cols-5 grid-cols-7 bg-white w-screen lg:max-w-4xl mx-auto"
  >
    <CommonFooter />
  </footer>
</template>

<style>
  .page-left-enter-active,
  .page-right-enter-active,
  .page-left-leave-active,
  .page-right-leave-active {
    @apply transform duration-[2000] transition-transform bg-text-secondary animate-bounce;
  }

  .page-left-enter-from,
  .page-right-leave-to {
    transform: translateX(100%);
  }

  .page-right-enter-from,
  .page-left-leave-to {
    transform: translateX(-100%);
  }
  .page-right-enter-to,
  .page-left-enter-to {
    transform: translateX(0%);
  }
</style>
