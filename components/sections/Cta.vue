<template>
  <section py24>
    <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
      <div
        class="w-full relative py8 md-py10 px6 md-px8 rd-2xl bg-gradient-to-tr from-neutral-1 to-neutral-2 dark-from-neutral-9 overflow-hidden"
      >
        <div class="absolute right-0 top-0 h-full w-full flex justify-end">
          <div class="w28 h28 overflow-hidden flex rd-xl relative blur-2xl">
            <span
              class="absolute w16 h16 -top-1 -right-1 bg-[#00d400] rd-md rotate-45"
            ></span>
            <span
              class="absolute w16 h16 -bottom-1 -right-1 bg-[#00d400] rd-md rotate-45"
            ></span>
            <span
              class="absolute w16 h16 -bottom-1 -left-1 bg-[#00d400] rd-md rotate-45"
            ></span>
          </div>
        </div>

        <div class="absolute left-0 bottom-0 h-full w-full flex items-end">
          <div class="w28 h28 overflow-hidden flex rd-xl relative blur-2xl">
            <span
              class="absolute w16 h16 -top-1 -right-1 bg-[#00d400] rd-md rotate-45"
            ></span>
            <span
              class="absolute w16 h16 -bottom-1 -right-1 bg-[#00d400] rd-md rotate-45"
            ></span>
            <span
              class="absolute w16 h16 -bottom-1 -left-1 bg-[#00d400] rd-md rotate-45"
            ></span>
          </div>
        </div>
        <div
          class="mx-auto text-center max-w-xl md-max-w-2xl relative space-y-8"
        >
          <h1
            text="3xl/tight sm:4xl/tight md:5xl/tight emerald-950 dark:white"
            class="font-bold"
          >
            Não perca tempo e comece a lucrar na
            <span class="text-transparent bg-clip-text bg-[#00d400]">
              GriloBet
            </span>
          </h1>

          <p text="neutral-7 dark:neutral-3">
            Venha conosco e nos ajude a revolucionar o mercado de entretenimento
            online!
          </p>
          <div class="mx-auto max-w-md sm-max-w-xl flex justify-center">
            <nuxt-link
              to="https://afiliados.grilo7.bet/register"
              border="~ transparent hover:[#00d400]"
              un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[#00d400] hover:op-100 hover:scale-[2.5]"
              class="outline-none h12 px6 rd-3xl bg-[#00d400] text-white flex items-center overflow-hidden wmax relative"
            >
              <span relative z10> Quero participar </span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
