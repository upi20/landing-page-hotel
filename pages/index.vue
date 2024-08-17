<!-- @format -->

<template>
  <div class="page-wrapper">
    <!-- Header Section Start -->
    <HeaderComponent />
    <!-- Header Section End -->

    <!-- Main Wrapper Start -->
    <main class="main-wrapper">
      <section class="section-hero">
        <div class="bg-black">
          <div
            class="pb-20 pt-[150px] lg:pb-[100px] lg:pt-[196px] xl:pb-[130px]"
          >
            <div class="container">
              <div
                class="relative z-10 grid grid-cols-1 items-center justify-center gap-x-[90px] gap-y-16 lg:grid-cols-[1fr_minmax(0,0.6fr)]"
              >
                <div class="text-center text-colorButteryWhite lg:text-start">
                  <h1>
                    <span class="inline-flex items-center gap-5 title-page"
                      >TukangBikin
                      <img
                        src="@/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                        alt="shape-light-lime-5-arms-star"
                        width="74"
                        height="70"
                        class="w-12 h-auto md:w-14 lg:w-auto"
                    /></span>
                    <br />Fast Work & Affordable
                  </h1>
                  <p
                    class="mb-10 mt-6 text-lg leading-[1.4] md:mb-14 lg:text-[21px]"
                  >
                    Mitra terbaik Anda dalam menciptakan solusi IT berkualitas
                    dengan kode asli dan harga terjangkau. Kami selalu mengikuti
                    tren teknologi terkini dan setiap bulan menghadirkan produk
                    IT baru yang inovatif. Dapatkan solusi web dan mobile apps
                    yang up-to-date dengan kebutuhan bisnis Anda bersama kami.
                  </p>
                  <NuxtLink
                    class="btn-primary relative pr-20 md:pr-[118px]"
                    to="/contact-us"
                  >
                    Hubungi Kami
                    <span
                      class="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black"
                    >
                      <img
                        src="@/assets/img/icons/icon-buttery-white-phone.svg"
                        alt="icon-buttery-white-phone"
                        width="30"
                        height="30"
                      />
                    </span>
                  </NuxtLink>
                </div>
                <div
                  class="mx-auto inline-block max-w-[495px] overflow-hidden rounded-[25px] bg-colorButteryWhite p-[5px] lg:mx-0"
                >
                  <img
                    src="@/assets/img/images/th-1/hero-img-technology.png"
                    alt="hero-img"
                    width="485"
                    height="540"
                    class="h-full w-full rounded-[20px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <!-- Main Wrapper End -->

    <!-- ...::: Service Section Start :::... -->
    <section class="section-service">
      <!-- Section Background -->
      <div class="bg-colorIvory">
        <!-- Section Space -->
        <div class="section-space">
          <!-- Section Container -->
          <div class="container">
            <!-- Section Block -->
            <div
              class="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]"
            >
              <h2 class="jos title-tagline">
                Empowering Your Business with
                <span>
                  TukangBikin
                  <img
                    src="@/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width="74"
                    height="70"
                    class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                  />
                </span>
              </h2>
            </div>
            <!-- Section Block -->

            <!-- Service List -->
            <ul class="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
              <!-- Service Item -->
              <li class="jos group/team-item" data-jos_delay="0">
                <div class="h-full shadow-bg group">
                  <div
                    class="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime"
                  >
                    <img
                      src="@/assets/img/icons/th-1-service-icon-1.svg"
                      alt="th-1-service-icon-1"
                      width="64"
                      height="70"
                      class="h-[70px] w-auto"
                    />
                    <h4 class="mb-[15px] mt-[30px]">Original Code</h4>
                    <p class="mb-7">
                      Kami bangga menyajikan produk IT dengan kode asli yang
                      dirancang khusus untuk memastikan performa dan kualitas
                      optimal bagi bisnis Anda.
                    </p>
                  </div>
                </div>
              </li>
              <!-- Service Item -->
              <!-- Service Item -->
              <li class="jos" data-jos_delay="0.3">
                <div class="h-full shadow-bg group">
                  <div
                    class="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime"
                  >
                    <img
                      src="@/assets/img/icons/th-1-service-icon-2.svg"
                      alt="th-1-service-icon-2"
                      width="77"
                      height="70"
                      class="h-[70px] w-auto"
                    />

                    <h4 class="mb-[15px] mt-[30px]">Affordable</h4>
                    <p class="mb-7">
                      Solusi IT yang kami tawarkan tidak hanya terjangkau tetapi
                      juga tidak mengorbankan kualitas. Dapatkan produk yang
                      luar biasa tanpa perlu menguras kantong.
                    </p>
                  </div>
                </div>
              </li>
              <!-- Service Item -->
              <!-- Service Item -->
              <li class="jos" data-jos_delay="0.6">
                <div class="h-full shadow-bg group">
                  <div
                    class="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime"
                  >
                    <img
                      src="@/assets/img/icons/th-1-service-icon-3.svg"
                      alt="th-1-service-icon-3"
                      width="75"
                      height="70"
                      class="h-[70px] w-auto"
                    />
                    <h4 class="mb-[15px] mt-[30px]">Teknologi Terkini</h4>
                    <p class="mb-7">
                      Kami selalu up-to-date dengan tren teknologi terbaru,
                      sehingga solusi yang kami berikan selalu relevan dan mampu
                      bersaing di era digital.
                    </p>
                  </div>
                </div>
              </li>
              <!-- Service Item -->
              <!-- Service Item -->
              <li class="jos" data-jos_delay="0.9">
                <div class="h-full shadow-bg group">
                  <div
                    class="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime"
                  >
                    <img
                      src="@/assets/img/icons/th-1-service-icon-4.svg"
                      alt="th-1-service-icon-4"
                      width="55"
                      height="70"
                      class="h-[70px] w-auto"
                    />

                    <h4 class="mb-[15px] mt-[30px]">Inovasi Bulanan</h4>
                    <p class="mb-7">
                      Setiap bulan, kami merilis produk IT baru yang inovatif,
                      memastikan bisnis Anda selalu selangkah lebih maju dengan
                      teknologi terkini.
                    </p>
                  </div>
                </div>
              </li>
              <!-- Service Item -->
            </ul>
            <!-- Service List -->
          </div>
          <!-- Section Container -->
        </div>
        <!-- Section Space -->
      </div>
      <!-- Section Background -->
    </section>
    <!-- ...::: Service Section end :::... -->

    <!-- Horizontal Line -->
    <div class="horizontal-line bg-[#e6e6e6]"></div>
    <!-- Horizontal Line -->

    <!-- ...::: About Section Start :::... -->
    <section v-lazy-load="loadContent" class="section-about">
      <div v-if="isContentLoaded">
        <div class="section-space">
          <!-- Section Container -->
          <div class="container">
            <!-- Section Block -->
            <div class="section-block mb-10 md:mb-[60px] xl:mb-20">
              <div
                class="grid items-center gap-x-6 gap-y-10 text-center lg:grid-cols-[1fr_minmax(0,0.55fr)] lg:text-start xl:gap-x-[134px]"
              >
                <h2 class="jos">
                  Kami membuat bisnis Anda melaju pesat
                  <span>
                    <img
                      src="@/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                      alt="shape-light-lime-5-arms-star"
                      width="74"
                      height="70"
                      class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                    />
                  </span>
                </h2>
                <p class="jos section-para">
                  Kami bekerja erat dengan klien kami untuk mengetahui tujuan,
                  target audiens, kebutuhan unik, dan solusi desain praktis
                  mereka.
                </p>
              </div>
            </div>
            <!-- Section Block -->

            <!-- About Area -->
            <div
              class="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-[0.8fr_0.4fr]"
            >
              <!-- About Left Block - Video -->
              <div
                class="jos relative flex items-center justify-center overflow-hidden rounded-[25px] border-[5px] border-black"
              >
                <img
                  src="@/assets/img/images/th-1/about-img.jpg"
                  alt="about-img"
                  width="846"
                  height="476"
                  class="object-cover w-full h-full"
                />
              </div>
              <!-- About Left Block - Video -->

              <!-- About Right Block - Counter Up -->
              <div class="jos rounded-[25px] bg-black p-[30px]">
                <ul class="divide-y divide-[#333333]">
                  <li
                    class="py-6 text-center first-of-type:pt-0 last-of-type:pb-0"
                  >
                    <div
                      class="font-syne text-4xl font-bold leading-[1.07] -tracking-[1%] text-colorLightLime md:text-5xl xl:text-[70px]"
                      data-module="countup"
                    >
                      <span class="start-number" data-countup-number="15"
                        >6</span
                      >+
                    </div>
                    <span class="inline-block mt-2 text-colorButteryWhite"
                      >Years of experience</span
                    >
                  </li>
                  <li
                    class="py-6 text-center first-of-type:pt-0 last-of-type:pb-0"
                  >
                    <div
                      class="font-syne text-4xl font-bold leading-[1.07] -tracking-[1%] text-colorLightLime md:text-5xl xl:text-[70px]"
                      data-module="countup"
                    >
                      <span class="start-number" data-countup-number="120"
                        >90+</span
                      >
                    </div>
                    <span class="inline-block mt-2 text-colorButteryWhite"
                      >Successful projects</span
                    >
                  </li>
                  <li
                    class="py-6 text-center first-of-type:pt-0 last-of-type:pb-0"
                  >
                    <div
                      class="font-syne text-4xl font-bold leading-[1.07] -tracking-[1%] text-colorLightLime md:text-5xl xl:text-[70px]"
                      data-module="countup"
                    >
                      <span class="start-number" data-countup-number="100"
                        >100</span
                      >%
                    </div>
                    <span class="inline-block mt-2 text-colorButteryWhite"
                      >Client satisfaction rate</span
                    >
                  </li>
                </ul>
              </div>
              <!-- About Right Block - Counter Up -->
            </div>
            <!-- About Area -->
          </div>
          <!-- Section Container -->
        </div>
      </div>
      <!-- Section Space -->

      <!-- Section Space -->
    </section>
    <!-- ...::: About Section End :::... -->

    <!-- ...::: Process Section Start :::... -->
    <section class="section-process">
      <!-- Section Space -->
      <div class="section-space bg-colorIvory">
        <!-- Section Container -->
        <div class="container">
          <!-- Process Area -->
          <div
            class="grid grid-cols-1 items-center gap-y-10 lg:grid-cols-2 lg:gap-x-8 xl:grid-cols-[1fr_minmax(0,0.67fr)] xxl:gap-x-[72px]"
          >
            <!-- Process Area Left Block - Section Block -->
            <div class="text-center section-block lg:text-start">
              <h2 class="jos">
                <span>
                  Teknologi Terkini
                  <img
                    src="@/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                    alt="shape-light-lime-5-arms-star"
                    width="74"
                    height="70"
                    class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                  />
                </span>
                untuk Hasil Terbaik
              </h2>
              <div class="mt-6 jos">
                <p class="section-para">
                  Di tukangbikin.web.id, kami selalu mengikuti perkembangan
                  teknologi terbaru untuk memastikan setiap produk dan proyek
                  yang kami hasilkan tidak hanya sesuai dengan kebutuhan saat
                  ini, tetapi juga siap untuk masa depan. Kami menggabungkan
                  keahlian dalam teknologi modern seperti
                  <b>Nuxt JS, Express JS, Tailwind CSS, dan Laravel</b> dengan
                  praktik terbaik dalam pengembangan perangkat lunak.
                </p>
                <p class="section-para">
                  Kami juga menerapkan standar coding yang ketat dan original
                  code dalam setiap proyek, memastikan bahwa solusi yang kami
                  berikan unik, aman, dan efisien. Dengan fokus pada teknologi
                  yang mengikuti tren dan inovasi bulanan, kami berkomitmen
                  untuk memberikan layanan IT yang handal dan selalu up-to-date.
                </p>
              </div>
            </div>
            <!-- Process Area Left Block - Section Block -->

            <!-- Process Area Right Block - Accordion -->
            <!-- Accordion List -->
            <ul class="flex flex-col jos gap-y-6">
              <li
                class="accordion-item-style-1 accordion-item"
                :class="{ active: activeIndex === 0 }"
                @click="toggleAccordion(0)"
              >
                <div
                  class="flex items-center justify-between gap-6 text-xl font-semibold accordion-header text-ColorBlack"
                >
                  <button
                    class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl"
                  >
                    01/ Project Idea
                  </button>
                  <div class="accordion-icon">
                    <img
                      src="@/assets/img/icons/icon-black-arrow-less-down.svg"
                      alt="icon-black-arrow-less-down"
                    />
                  </div>
                </div>
                <div
                  class="accordion-body max-w-[826px] opacity-80"
                  v-if="activeIndex === 0"
                >
                  <p class="pt-5">
                    Kami memulai dengan menggali ide-ide kreatif yang sesuai
                    dengan kebutuhan dan tujuan Anda, memastikan setiap konsep
                    memiliki nilai yang jelas untuk proyek IT Anda.
                  </p>
                </div>
              </li>
              <li
                class="accordion-item-style-1 accordion-item"
                :class="{ active: activeIndex === 1 }"
                @click="toggleAccordion(1)"
              >
                <div
                  class="flex items-center justify-between gap-6 text-xl font-semibold accordion-header text-ColorBlack"
                >
                  <button
                    class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl"
                  >
                    02/ Brainstorming
                  </button>
                  <div class="accordion-icon">
                    <img
                      src="@/assets/img/icons/icon-black-arrow-less-down.svg"
                      alt="icon-black-arrow-less-down"
                    />
                  </div>
                </div>
                <div
                  class="accordion-body max-w-[826px] opacity-80"
                  v-if="activeIndex === 1"
                >
                  <p class="pt-5">
                    Bersama dengan tim dan klien, kami mengembangkan ide-ide
                    tersebut melalui sesi brainstorming, untuk menghasilkan
                    solusi inovatif yang siap diwujudkan.
                  </p>
                </div>
              </li>
              <li
                class="accordion-item-style-1 accordion-item"
                :class="{ active: activeIndex === 2 }"
                @click="toggleAccordion(2)"
              >
                <div
                  class="flex items-center justify-between gap-6 text-xl font-semibold accordion-header text-ColorBlack"
                >
                  <button
                    class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl"
                  >
                    03/ Testing
                  </button>
                  <div class="accordion-icon">
                    <img
                      src="@/assets/img/icons/icon-black-arrow-less-down.svg"
                      alt="icon-black-arrow-less-down"
                    />
                  </div>
                </div>
                <div
                  class="accordion-body max-w-[826px] opacity-80"
                  v-if="activeIndex === 2"
                >
                  <p class="pt-5">
                    Sebelum diluncurkan, setiap aspek dari proyek diuji secara
                    menyeluruh untuk memastikan fungsionalitas, keamanan, dan
                    kinerja optimal.
                  </p>
                </div>
              </li>
              <li
                class="accordion-item-style-1 accordion-item"
                :class="{ active: activeIndex === 3 }"
                @click="toggleAccordion(3)"
              >
                <div
                  class="flex items-center justify-between gap-6 text-xl font-semibold accordion-header text-ColorBlack"
                >
                  <button
                    class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-3xl"
                  >
                    04/ Launch
                  </button>
                  <div class="accordion-icon">
                    <img
                      src="@/assets/img/icons/icon-black-arrow-less-down.svg"
                      alt="icon-black-arrow-less-down"
                    />
                  </div>
                </div>
                <div
                  class="accordion-body max-w-[826px] opacity-80"
                  v-if="activeIndex === 3"
                >
                  <p class="pt-5">
                    Setelah pengujian berhasil, kami meluncurkan proyek dengan
                    percaya diri, memastikan semuanya berjalan lancar dan sesuai
                    dengan ekspektasi Anda.
                  </p>
                </div>
              </li>
            </ul>
            <!-- Accordion List -->
            <!-- Process Area Right Block - Accordion -->
          </div>
          <!-- Process Area -->
        </div>
        <!-- Section Container -->
      </div>
      <!-- Section Space -->
    </section>
    <!-- ...::: Process Section End :::... -->

    <!-- Horizontal Line -->
    <div class="horizontal-line bg-[#e6e6e6]"></div>
    <!-- Horizontal Line -->

    <!-- ...::: Testimonial Section Start :::... -->
    <section class="section-testimonial">
      <!-- Section Space -->
      <div class="section-space">
        <!-- Section Container -->
        <div class="container">
          <!-- Section Block -->
          <div
            class="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]"
          >
            <h2 class="jos">
              Kepuasan Klien Selalu Menjadi
              <span>
                Prioritas Kami
                <img
                  src="@/assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                  alt="shape-light-lime-5-arms-star"
                  width="74"
                  height="70"
                  class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                />
              </span>
            </h2>
          </div>
          <!-- Section Block -->

          <!-- Testimonial List -->
          <ul class="grid grid-cols-1 gap-x-6 gap-y-[30px] md:grid-cols-2">
            <!-- Testimonial Item -->
            <li class="jos" data-jos_delay="0">
              <div
                class="flex h-full flex-col rounded-[20px] border-2 border-black px-[30px] py-6 transition-all duration-300 hover:shadow-[5px_5px_0_0] hover:shadow-black"
              >
                <div class="flex mb-8 gap-x-2">
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                </div>
                <h4 class="mb-5">Layanan Profesional dan Tepat Waktu</h4>
                <p class="mb-[30px]">
                  Layanan yang sangat memuaskan! Tim tukangbikin.web.id
                  benar-benar profesional dan hasilnya sesuai dengan yang saya
                  harapkan. Proyek web aplikasi kami selesai tepat waktu dan
                  dengan kualitas yang sangat baik.
                </p>
                <div class="flex items-center gap-3 mt-auto">
                  <div
                    class="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black"
                  >
                    <img
                      src="@/assets/img/images/th-1/testimonial-user-img-1.png"
                      alt="testimonial-user-img-1"
                      width="64"
                      height="64"
                      class="object-cover w-full h-full"
                    />
                  </div>

                  <div
                    class="flex-1 font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]"
                  >
                    Andi,
                    <span class="font-normal">Pengembang Aplikasi</span>
                  </div>
                </div>
              </div>
            </li>
            <!-- Testimonial Item -->
            <!-- Testimonial Item -->
            <li class="jos" data-jos_delay="0.3">
              <div
                class="flex h-full flex-col rounded-[20px] border-2 border-black px-[30px] py-6 transition-all duration-300 hover:shadow-[5px_5px_0_0] hover:shadow-black"
              >
                <div class="flex mb-8 gap-x-2">
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                </div>
                <h4 class="mb-5">Teknologi Terkini dan Desain Modern</h4>
                <p class="mb-[30px]">
                  Kami sangat terkesan dengan kemampuan mereka dalam mengikuti
                  perkembangan teknologi terkini. Website kami kini jauh lebih
                  cepat dan responsif, dan desainnya sangat modern!
                </p>
                <div class="flex items-center gap-3 mt-auto">
                  <div
                    class="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black"
                  >
                    <img
                      src="@/assets/img/images/th-1/testimonial-user-img-2.png"
                      alt="testimonial-user-img-2"
                      width="64"
                      height="64"
                      class="object-cover w-full h-full"
                    />
                  </div>

                  <div
                    class="flex-1 font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]"
                  >
                    Rizki,
                    <span class="font-normal">Pemilik Toko Online</span>
                  </div>
                </div>
              </div>
            </li>
            <!-- Testimonial Item -->
            <!-- Testimonial Item -->
            <li class="jos" data-jos_delay="0.6">
              <div
                class="flex h-full flex-col rounded-[20px] border-2 border-black px-[30px] py-6 transition-all duration-300 hover:shadow-[5px_5px_0_0] hover:shadow-black"
              >
                <div class="flex mb-8 gap-x-2">
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                </div>
                <h4 class="mb-5">Komunikatif dan Terbuka terhadap Revisi</h4>
                <p class="mb-[30px]">
                  Pengalaman kerja dengan tukangbikin.web.id sungguh luar biasa.
                  Mereka sangat komunikatif dan terbuka terhadap revisi, membuat
                  kami merasa dilibatkan penuh dalam proyek ini.
                </p>
                <div class="flex items-center gap-3 mt-auto">
                  <div
                    class="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black"
                  >
                    <img
                      src="@/assets/img/images/th-1/testimonial-user-img-3.png"
                      alt="testimonial-user-img-3"
                      width="64"
                      height="64"
                      class="object-cover w-full h-full"
                    />
                  </div>

                  <div
                    class="text- leading-nonelg flex-1 font-syne font-bold -tracking-[0.5px] lg:text-[21px]"
                  >
                    Fajar,
                    <span class="font-normal">Manajer Proyek IT</span>
                  </div>
                </div>
              </div>
            </li>
            <!-- Testimonial Item -->
            <!-- Testimonial Item -->
            <li class="jos" data-jos_delay="0.9">
              <div
                class="flex h-full flex-col rounded-[20px] border-2 border-black px-[30px] py-6 transition-all duration-300 hover:shadow-[5px_5px_0_0] hover:shadow-black"
              >
                <div class="flex mb-8 gap-x-2">
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                  <img
                    src="@/assets/img/icons/icon-black-star.svg"
                    alt="icon-black-star"
                    width="37"
                    height="35"
                  />
                </div>
                <h4 class="mb-5">
                  Produk IT Berkualitas dengan Harga Kompetitif
                </h4>
                <p class="mb-[30px]">
                  Produk IT yang kami beli dari mereka sangat membantu dalam
                  meningkatkan efisiensi bisnis kami. Harga yang ditawarkan juga
                  sangat kompetitif dibandingkan dengan kualitas yang diberikan.
                </p>
                <div class="flex items-center gap-3 mt-auto">
                  <div
                    class="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black"
                  >
                    <img
                      src="@/assets/img/images/th-1/testimonial-user-img-4.png"
                      alt="testimonial-user-img-4"
                      width="64"
                      height="64"
                      class="object-cover w-full h-full"
                    />
                  </div>

                  <div
                    class="flex-1 font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]"
                  >
                    Yamar,
                    <span class="font-normal">Pengusaha UMKM</span>
                  </div>
                </div>
              </div>
            </li>
            <!-- Testimonial Item -->
          </ul>
          <!-- Testimonial List -->
        </div>
        <!-- Section Container -->
      </div>
      <!-- Section Space -->
    </section>

    <!-- Footer Section Start -->
    <FooterComponent />
    <!-- Footer Section End -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  directives: {
    "lazy-load": {
      mounted(el, binding) {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            binding.value();
            observer.disconnect();
          }
        });
        observer.observe(el);
      },
    },
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
  setup() {
    // This ref will hold the index of the active accordion item
    const activeIndex = ref(0);

    // This method toggles the accordion item
    const toggleAccordion = (index) => {
      activeIndex.value = activeIndex.value === index ? null : index;
    };
    const isContentLoaded = ref(false);

    const loadContent = () => {
      isContentLoaded.value = true;
    };

    return {
      isContentLoaded,
      loadContent,
      activeIndex,
      toggleAccordion,
    };
  },
};
</script>

<style scoped>
.accordion-item.active .accordion-body {
  display: block;
}

.accordion-item .accordion-body {
  display: none;
}
.lazy-content {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.lazy-content.loaded {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 1400px) {
  h1 {
    font-size: 64px !important;
  }
  .title-page {
    font-size: 102px !important;
  }
  .title-tagline {
    font-size: 64px !important;
  }
}
</style>
