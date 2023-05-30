<template>
  <main>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main>
</template>
<style>
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
  transform: all 2s linear;
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
