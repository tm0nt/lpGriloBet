<script setup>
const logos = [
  {
    id: 1,
    label: "GriloBet",
    logo: "/logos/grilobet.webp",
    url: "https://grilo7.bet", // URL para redirecionamento
  },
];
</script>
<template>
  <section class="py20" id="services">
    <div class="max-w-7xl mx-auto px5 sm-px10 md-px12 lg-px5 space-y-10">
      <div class="text-center space-y-6 max-w-2xl mx-auto">
        <h1 class="text-3xl font-bold text-gray9 dark-text-white capitalize">
          Nossa plataforma oficial
        </h1>
      </div>
      <div
        class="flex justify-center flex-wrap gap4 children:flex children:items-center children:justify-center"
      >
        <div
          v-for="logo in logos"
          :key="logo.id"
          class="p4 sm-p5 rd-lg border border-gray-1 dark-border-gray-9 group min-wmax"
        >
          <a :href="logo.url" target="_blank" rel="noopener noreferrer">
            <NuxtImg
              :src="logo.logo"
              height="60"
              :alt="logo.label"
              class="h7 sm-h10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover-scale-105"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
