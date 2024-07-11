<script setup></script>
<template>
  <footer pt="16 md:20" bg="neutral-1 dark:neutral-9">
    <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
      <div
        border-t="~ neutral-2 dark:neutral-8"
        un-text="neutral-7 dark:neutral-3"
        class="w-full flex flex-col md-flex-row gap-4 items-center sm-justify-between py3"
      >
        <div text="center sm:left" class="flex sm-min-w-max">
          <p>&copy; 2024 GriloBet. Todos os direitos reservados</p>
        </div>
        <div class="flex justify-center sm-justify-end w-full gap-3">
          <nuxt-link to="#" aria-label="social link">
            <span i-carbon-logo-facebook text-2xl flex></span>
          </nuxt-link>
          <nuxt-link to="#" aria-label="social link">
            <span i-carbon-logo-linkedin text-2xl flex></span>
          </nuxt-link>
          <nuxt-link to="#" aria-label="social link">
            <span i-carbon-logo-twitter text-2xl flex></span>
          </nuxt-link>
          <nuxt-link to="#" aria-label="social link">
            <span i-carbon-logo-instagram text-2xl flex></span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>
