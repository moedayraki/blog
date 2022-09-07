<template layout="base">
  <MainContainer grid>
    <TheSidebar />
    <div class="grid">
      <div class="prose min-w-0">
        <slot />
      </div>
      <PageFooter />
    </div>
    <TheRightSidebar />
  </MainContainer>
</template>
