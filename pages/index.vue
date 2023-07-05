<template>
  <section
    class="flex justify-center w-full lg:space-y-12 space-y-6 flex-col h-full overflow-hidden"
  >
    <p
      class="lg:text-4xl text-2xl text-primary font-medium leading-tight lg:w-4/5 w-full"
      data-aos="fade-down"
      data-aos-delay="500"
      data-aos-easing="linear"
    >
      Hi I'm
      <span class="text-text-secondary hover:underline font-semibold" data-aos="fade-down"
        >Said</span
      >, a web engineer who provides digital solutions😉.
    </p>
    <section data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-delay="1000">
      <span> Stack </span>

      <div
        class="flex space-x-2 items-center border-b border-b-text-secondary/50 py-4 rounded-md max-w-md"
      >
        <IconsTypescript class="icon" />
        <IconsJavascript class="icon" />
        <IconsReact class="icon" />
        <IconsVue class="icon" />
        <IconsHtml class="icon" />
        <IconsTailwind class="icon" />
        <IconsCss class="icon" />
        <IconsNode class="icon" />
      </div>
    </section>
  </section>
</template>

<style scoped>
.icon {
  @apply w-10 h-10 hover:fill-primary cursor-pointer hover:scale-150;
}
</style>
