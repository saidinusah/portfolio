<template>
  <section
    class="flex justify-center w-full lg:space-y-12 space-y-6 flex-col h-full overflow-hidden"
  >
    <p
      class="lg:text-4xl text-2xl text-primary font-medium leading-tight lg:w-4/5 w-full"
    >
      Hi I'm <span class="text-text-secondary hover:underline font-semibold">Saïd</span>,
      a web engineer who provides digital solutions😉.
    </p>
    <section>
      Stack

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
