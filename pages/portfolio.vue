<template>
    <div class="page-wrapper">
      <!-- Header Section Start -->
      <Header2Component />
      <!-- Header Section End -->
  
      <!-- Main Wrapper Start -->
      <main class="main-wrapper">
        <!-- ...::: Breadcrumb Section Start :::... -->
        <section class="section-breadcrumb">
        <!-- Breadcrumb Background -->
        <div class="bg-black" style="background-image: url('/portfolio.png'); background-size: cover; background-position: center; height: 380px;">
        </div>
        <!-- Breadcrumb Background -->
      </section>
        <!-- ...::: Breadcrumb Section End :::... -->
        <section class="section-portfolio">
          <!-- Section Space -->
          <div class="section-space">
            <!-- Section Container -->
            <div class="container">
              <!-- Section Block -->
              <div
                class="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]"
              >
                <h2 class="jos title-portfolio">
                  Portfolio UMKM PERCETAKAN
                </h2>
              </div>
              <!-- Section Block -->
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
                <a href="#" class="btn-outline-black mt-auto block text-center">Percetakan Digital</a>
                <a href="#" class="btn-outline-black mt-auto block text-center">Percetakan Offset</a>
                <a href="#" class="btn-outline-black mt-auto block text-center">Custom Printing</a>
                <a href="#" class="btn-outline-black mt-auto block text-center">Desain Grafis</a>
              </div>
              <br>
              <!-- Portfolio List -->
              <ul class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <li class="jos">
                  <div
                    class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]"
                  >
                    <!-- Thumbnail -->
                    <NuxtImg
                      src="/product/product-percetakan.png"
                      alt="project-thumbnail-1"
                      width="626"
                      height="390"
                      class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />

                    <!-- Thumbnail -->
  
                    <!-- Content -->
                    <div
                      class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0"
                    >
                      <div class="max-w-[520px] flex-1 text-colorButteryWhite">
                        <NuxtLink
                          class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl"
                          href="#"
                          >Product Design</NuxtLink
                        >
                        <p class="line-clamp-2">
                          Developing the look and feel of physical products,
                          aesthetics, and functionality.
                        </p>
                      </div>
                      <NuxtLink
                        class="relative hidden items-start justify-center overflow-hidden sm:inline-flex"
                        href="#"
                      >
                        <NuxtImg
                          src="/icons/icon-buttery-white-arrow-right.svg"
                          alt="icon-buttery-white-arrow-right"
                          width="34"
                          height="28"
                          class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"
                          loading="lazy"
                        />
                        <NuxtImg
                          src="/icons/icon-light-lime-arrow-right.svg"
                          alt="light-lime-arrow-right"
                          width="34"
                          height="28"
                          class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          loading="lazy"
                        />
                      </NuxtLink>
                    </div>
                    <!-- Content -->
  
                    <!-- Overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"
                    ></div>
                    <!-- Overlay -->
                  </div>
                </li>
                <li class="jos">
                  <div
                    class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]"
                  >
                    <!-- Thumbnail -->
                    <NuxtImg
                      src="/product/product-koperasi.png"
                      alt="project-thumbnail-2"
                      width="626"
                      height="390"
                      class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <!-- Thumbnail -->
  
                    <!-- Content -->
                    <div
                      class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0"
                    >
                      <div class="max-w-[520px] flex-1 text-colorButteryWhite">
                        <NuxtLink
                          class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl"
                          href="#"
                          >Logo and Branding
                        </NuxtLink>
                        <p class="line-clamp-2">
                          Creating or refreshing a company's logo and developing
                          a cohesive visual identity.
                        </p>
                      </div>
                      <NuxtLink
                        class="relative hidden items-start justify-center overflow-hidden sm:inline-flex"
                        href="#"
                      >
                        <NuxtImg
                          src="/icons/icon-buttery-white-arrow-right.svg"
                          alt="icon-buttery-white-arrow-right"
                          width="34"
                          height="28"
                          class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"
                          loading="lazy"
                        />
                        <NuxtImg
                          src="/icons/icon-light-lime-arrow-right.svg"
                          alt="light-lime-arrow-right"
                          width="34"
                          height="28"
                          class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          loading="lazy"
                        />
                      </NuxtLink>
                    </div>
                    <!-- Content -->
  
                    <!-- Overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"
                    ></div>
                    <!-- Overlay -->
                  </div>
                </li>
                <li class="jos">
                  <div
                    class="group relative overflow-hidden rounded-[25px] border-2 border-black lg:border-[5px]"
                  >
                    <!-- Thumbnail -->
                    <NuxtImg
                      src="/product/product-percetakan.png"
                      alt="project-thumbnail-1"
                      width="626"
                      height="390"
                      class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                      loading="lazy"
                    />

                    <!-- Thumbnail -->
  
                    <!-- Content -->
                    <div
                      class="absolute bottom-0 z-10 flex w-full flex-col items-start justify-between gap-x-7 gap-y-8 p-6 transition-all duration-300 sm:flex-row sm:items-center lg:translate-y-full lg:group-hover:translate-y-0"
                    >
                      <div class="max-w-[520px] flex-1 text-colorButteryWhite">
                        <NuxtLink
                          class="mb-[10px] block font-syne text-2xl font-bold leading-[1.4] hover:text-colorLightLime md:text-3xl"
                          href="#"
                          >Product Design</NuxtLink
                        >
                        <p class="line-clamp-2">
                          Developing the look and feel of physical products,
                          aesthetics, and functionality.
                        </p>
                      </div>
                      <NuxtLink
                        class="relative hidden items-start justify-center overflow-hidden sm:inline-flex"
                        href="#"
                      >
                        <NuxtImg
                          src="/icons/icon-buttery-white-arrow-right.svg"
                          alt="icon-buttery-white-arrow-right"
                          width="34"
                          height="28"
                          class="translate-x-0 opacity-100 transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0"
                          loading="lazy"
                        />
                        <NuxtImg
                          src="/icons/icon-light-lime-arrow-right.svg"
                          alt="light-lime-arrow-right"
                          width="34"
                          height="28"
                          class="absolute -translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          loading="lazy"
                        />
                      </NuxtLink>
                    </div>
                    <!-- Content -->
  
                    <!-- Overlay -->
                    <div
                      class="absolute inset-0 bg-gradient-to-t from-black to-black/35 transition-all ease-in-out lg:translate-y-full lg:group-hover:translate-y-0"
                    ></div>
                    <!-- Overlay -->
                  </div>
                </li>
              </ul>
              <!-- Portfolio List -->
            </div>
            <!-- Section Container -->
          </div>
          <!-- Section Space -->
        </section>
      </main>
      <!-- Main Wrapper End -->
  
      <!-- ...::: Team Section End :::... -->
      <!-- Footer Section Start -->
      <FooterComponent />
      <!-- Footer Section End -->
    </div>
  </template>
  
  <script lang="ts" setup>
  useHead({
    title: 'Jual Aplikasi Web Murah dan Berkualitas - Tukangbikin.web.id',
    meta: [
      { name: 'description', content: 'Mitra terbaik Anda dalam menciptakan solusi IT berkualitas dengan kode asli dan harga terjangkau. Kami selalu mengikuti tren teknologi terkini dan setiap bulan menghadirkan produk IT baru yang inovatif. Dapatkan solusi web dan mobile apps yang up-to-date dengan kebutuhan bisnis Anda bersama kami.' },
      { name: 'keywords', content: 'Nuxt, Node JS, Tailwind CSS, Laravel, Aplikasi Web, Aplikasi Mobile, Solusi IT, Tukangbikin.web.id, Tukang Bikin' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  })
</script>

<style scoped>
  @media (min-width: 1400px) {
    .title-portfolio {
      font-size: 42px !important;
      margin-top: -70px;
      margin-bottom: -35px;
    }
  }
</style>