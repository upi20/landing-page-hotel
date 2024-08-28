<template>
  <div class="page-wrapper">
    <!-- Header Section Start -->
    <Header2Component />
    <!-- Header Section End -->

    <!-- Main Wrapper Start -->
    <main class="main-wrapper">
      <section class="section-hero" id="beranda">
        <div class="relative h-full">
          <!-- Background Image Layer 1 -->
          <div
            class="absolute inset-0 transition-opacity duration-1000"
            :style="{
              backgroundImage: `url(${currentBackgroundImage1})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: isLayer1Active ? 1 : 0,
            }"
          ></div>

          <!-- Background Image Layer 2 -->
          <div
            class="absolute inset-0 transition-opacity duration-1000"
            :style="{
              backgroundImage: `url(${currentBackgroundImage2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: isLayer1Active ? 0 : 1,
            }"
          ></div>

          <div class="relative z-10 pb-20 pt-[150px] lg:pb-[100px] lg:pt-[196px] xl:pb-[130px]">
            <div style="margin-bottom: -50px; margin-top: -50px" class="container">
              <div
                class=""
              >
                <div class="text-center">
                  <h1 style="background-color: #00000094; color: white; padding: 10px 10px; display: inline-block;" class="title-slider font-clashGrotesk text-5xl font-semibold text-[#1B1B1B] sm:text-6xl md:text-7xl xl:text-8xl xxl:text-[120px]">
                    Hotel Grand Malabar Bandung
                  </h1>
                  <p class="mt-6 text-lg leading-[1.42] lg:text-[21px]" style="background-color: #00000094; color: white; padding: 10px 10px; display: inline-block;">
                    Urbanview Hotel Grand Malabar Bandung by RedDoorz merupakan hotel rekomendasi untuk Anda, seorang backpacker yang tak hanya mengutamakan bujet, tapi juga kenyamanan saat beristirahat setelah menempuh petualangan seharian penuh.
                  </p>
                </div>
              </div>
            </div>
            <!-- Hero Image Block -->
            <ul class="hidden px-5 sm:flex sm:-space-x-[60px] lg:mt-20 lg:px-[60px] xl:px-[90px] xxl:mt-24">
              <!-- Hero Image Item -->
              <li class="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade-left" data-jos_delay="0.5">
                  <img src="/hero/hero-1.png" alt="hero-img-1" width="488" height="319" class="h-auto max-w-full rounded-[10px]" />
              </li>
              <!-- Hero Image Item -->
              <!-- Hero Image Item -->
              <li class="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade-left" data-jos_delay="0.3">
                  <img src="/hero/hero-2.png" alt="hero-img-2" width="488" height="319" class="h-auto max-w-full rounded-[10px]" />
              </li>
              <!-- Hero Image Item -->
              <!-- Hero Image Item -->
              <li class="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade" data-jos_delay="0">
                  <img src="/hero/hero-3.png" alt="hero-img-3" width="488" height="319" class="h-auto max-w-full rounded-[10px]" />
              </li>
              <!-- Hero Image Item -->
              <!-- Hero Image Item -->
              <li class="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade-right" data-jos_delay="0.3">
                  <img src="/hero/hero-4.png" alt="hero-img-4" width="488" height="319" class="h-auto max-w-full rounded-[10px]" />
              </li>
                <!-- Hero Image Item -->
                <!-- Hero Image Item -->
                <li class="jos inline-block rounded-[10px] bg-white p-[10px] odd:-rotate-6 even:translate-y-[50px] even:rotate-6" data-jos_animation="fade-right" data-jos_delay="0.5">
                    <img src="/hero/hero-5.png" alt="hero-img-5" width="488" height="319" class="h-auto max-w-full rounded-[10px]" />
                </li>
                <!-- Hero Image Item -->
            </ul>
            <!-- Hero Image Block -->

            <!-- Background Element -->
            <div class="absolute left-0 top-[352px] -z-10 hidden xxxl:inline-block">
                <img src="/elemnts/element-light-lime-curve-arrow-2.svg" alt="element-light-lime-curve-arrow-2" width="504" height="454" class="max-w-full" />
            </div>
            <div class="absolute right-[246px] top-[167px] -z-10 hidden xxxl:inline-block">
                <img src="/elemnts/shape-light-lime-blinking-star.svg" alt="shape-light-lime-blinking-star" width="109" height="106" class="max-w-full" />
            </div>
            <!-- Background Element -->
          </div>
        </div>
        
      </section>

      
      <section class="section-team" id="tipe-kamar">
        <!-- Section Space -->
        <div class="section-space">
            <!-- Section Container -->
            <div class="container">
                <div class="mb-10 flex flex-wrap items-center justify-between md:mb-[60px] lg:mb-20">
                    <div class="section-block max-w-2xl">
                      <div class="text-center">
                        <h2 class="title-slider jos mb-6 font-familjenGrotesk text-4xl font-bold leading-none text-black md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
                            Tipe Kamar
                        </h2>
                      </div>
                    </div>
                </div>
                <!-- Team List -->
                <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                  <li class="jos flex rounded-[10px] border border-black p-5" data-jos_animation="flip-left">
                      <div class="w-1/2 overflow-hidden rounded-[10px]" style="width: 50%;">
                          <img src="/images/suite.png" alt="team-img-1" width="376" height="400" class="h-full w-full object-cover" />
                      </div>
                      <div class="w-1/2 mt-6 pl-6 flex flex-col justify-center" style="width: 50%;">
                        <a class='mb-[10px] block font-familjenGrotesk text-2xl font-bold' href='#'>Suite</a>
                        <span class="para-lg">Nikmati kenyamanan modern di kamar Suite kami, yang dirancang dengan elegan dan dilengkapi dengan semua yang Anda butuhkan untuk menginap yang menyenangkan. Kamar ini menawarkan suasana yang hangat dengan sentuhan desain kontemporer, cocok untuk pelancong bisnis maupun liburan.</span>
                        <br>
                        <span class="para-lg font-bold">Fasilitas:</span>
                        <ul class="list-disc" style="margin-left: 18px;">
                          <li>Tempat tidur ukuran queen atau twin</li>
                          <li>TV layar datar dengan saluran internasional</li>
                          <li>Wi-Fi gratis berkecepatan tinggi</li>
                          <li>Meja kerja dengan pencahayaan yang baik</li>
                          <li>Minibar dan fasilitas pembuat kopi/teh</li>
                          <li>Kamar mandi pribadi dengan shower dan perlengkapan mandi premium</li>
                        </ul>
                        <br>
                        <span class="para-lg font-bold">Harga:</span>
                        <span class="para-lg">
                          Mulai dari Rp 1.200.000,- per malam (termasuk sarapan untuk 2 orang)
                        </span>
                      </div>
                  </li>
                  <li class="jos flex rounded-[10px] border border-black p-5" data-jos_animation="flip-left">
                      <div class="w-1/2 overflow-hidden rounded-[10px]" style="width: 50%;">
                          <img src="/images/single.png" alt="team-img-2" width="376" height="400" class="h-full w-full object-cover" />
                        </div>
                      <div class="w-1/2 mt-6 pl-6 flex flex-col justify-center" style="width: 50%;">
                        <a class='mb-[10px] block font-familjenGrotesk text-2xl font-bold' href='#'>Executive Suite</a>
                        <span class="para-lg">Rasakan kemewahan sejati di Executive Suite kami, yang dirancang untuk memberikan ruang dan kenyamanan maksimal. Suite ini menampilkan area ruang tamu yang terpisah, ideal untuk bersantai atau bekerja, dengan pemandangan kota Bandung yang menawan.</span>
                        <br>
                        <span class="para-lg font-bold">Fasilitas:</span>
                        <ul class="list-disc" style="margin-left: 18px;">
                          <li>Tempat tidur king size dengan linen berkualitas tinggi</li>
                          <li>Ruang tamu terpisah dengan sofa nyaman</li>
                          <li>TV layar datar 55 inci dengan saluran premium</li>
                          <li>Wi-Fi gratis super cepat</li>
                          <li>Minibar lengkap dan fasilitas pembuat kopi/teh</li>
                          <li>Kamar mandi mewah dengan bathtub, shower, dan perlengkapan mandi eksklusif</li>
                          <li>Layanan kamar 24 jam</li>
                        </ul>
                        <br>
                        <span class="para-lg font-bold">Harga:</span>
                        <span class="para-lg">
                          Mulai dari Rp 2.500.000,- per malam (termasuk sarapan untuk 2 orang dan akses ke Executive Lounge)
                        </span>
                      </div>
                  </li>
              </ul>
            </div>
            <!-- Section Container -->
        </div>
        <!-- Section Space -->
      </section>
      <section class="section-team" id="fasilitas">
          <!-- Section Space -->
          <div class="section-space">
              <!-- Section Container -->
              <div class="container">
                  <div class="mb-10 flex flex-wrap items-center justify-between md:mb-[60px] lg:mb-20">
                      <div class="section-block max-w-2xl">
                          <h2 class="jos mb-6 font-familjenGrotesk text-4xl font-bold leading-none text-black md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
                            Fasilitas
                          </h2>
                      </div>
                  </div>

                  <!-- Team List -->
                  <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      <!-- Team Item -->
                      <li class="jos rounded-[10px] border border-black p-5" data-jos_animation="flip-left">
                          <div class="overflow-hidden rounded-[10px]">
                              <img src="/fasilitas/1.png" alt="team-img-1" width="376" height="400" class="h-full w-full object-cover" />
                          </div>
                      </li>
                      <!-- Team Item -->
                      <!-- Team Item -->
                      <li class="jos rounded-[10px] border border-black p-5" data-jos_animation="flip-left">
                          <div class="overflow-hidden rounded-[10px]">
                              <img src="/fasilitas/2.png" alt="team-img-2" width="376" height="400" class="h-full w-full object-cover" />
                          </div>
                      </li>
                      <!-- Team Item -->
                      <!-- Team Item -->
                      <li class="jos rounded-[10px] border border-black p-5" data-jos_animation="flip-left">
                          <div class="overflow-hidden rounded-[10px]">
                              <img src="/fasilitas/3.png" alt="team-img-3" width="376" height="400" class="h-full w-full object-cover" />
                          </div>
                      </li>
                      <li class="jos rounded-[10px] border border-black p-5" data-jos_animation="flip-left">
                          <div class="overflow-hidden rounded-[10px]">
                              <img src="/fasilitas/4.png" alt="team-img-3" width="376" height="400" class="h-full w-full object-cover" />
                          </div>
                      </li>
                      <!-- Team Item -->
                  </ul>
                  <!-- Team List -->
              </div>
              <!-- Section Container -->
          </div>
          <!-- Section Space -->
      </section>
      <!-- ...::: Content Section Start :::... -->
      <section class="section-content" id="tentang-kami">
        <!-- Section Space -->
        <div class="section-space">
            <!-- Section Container -->
            <div class="container">
                <!-- Content Area -->
                <div class="grid grid-cols-1 items-center gap-x-20 gap-y-10 lg:grid-cols-[minmax(0,0.85fr)_1fr] xl:gap-x-28 xxl:gap-x-32">
                    <!-- Content Left Block -->
                    <div class="jos relative order-2 mx-auto md:order-1 lg:mx-0" data-jos_animation="fade-left">
                        <img src="/hero/bangungan.jpeg" alt="content-img-1" width="532" height="484" class="max-w-full" />
                        <!-- Image Shape -->
                        <img src="assets/img/images/th-3/content-shape-1.png" alt="content-shape-1" width="313" height="312" class="absolute -left-32 bottom-0 hidden sm:inline-block" />
                        <!-- Image Shape -->
                    </div>
                    <!-- Content Left Block -->
                    <!-- Content Right Block -->
                    <div class="jos order-1 md:order-2" data-jos_animation="fade-right">
                        <div class="section-block">
                            <h2 class="mb-6 title-slider font-clashGrotesk text-5xl font-semibold text-[#1B1B1B] sm:text-6xl md:text-7xl xl:text-8xl xxl:text-[120px]">
                              Tentang Urbanview Hotel Grand Malabar Bandung
                            </h2>
                            <p class="section-para">
                              Urbanview Hotel Grand Malabar Bandung by RedDoorz merupakan hotel rekomendasi untuk Anda, seorang backpacker yang tak hanya mengutamakan bujet, tapi juga kenyamanan saat beristirahat setelah menempuh petualangan seharian penuh.
                            </p>

                            <p class="section-para">
                              Bagi Anda yang menginginkan kualitas pelayanan oke dengan harga yang ramah di kantong, Urbanview Hotel Grand Malabar Bandung by RedDoorz adalah pilihan yang tepat. Karena meski murah, akomodasi ini menyediakan fasilitas memadai dan pelayanan yang tetap terjaga mutunya.
                            </p>
                        </div>
                    </div>
                    <!-- Content Right Block -->
                </div>
                <!-- Content Area -->
            </div>
            <!-- Section Container -->
        </div>
        <!-- Section Space -->
      </section>
      <!-- ...::: Testimonial Section Start :::... -->
      <section class="section-testimonial" id="testimoni">
        <!-- Section Space -->
        <div class="section-space">
          <!-- Section Container -->
          <div class="container">
            <!-- Section Block -->
            <div
              class="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]"
            >
              <h2 class="jos title-info">
                Kepuasan Klien Selalu Menjadi Prioritas Kami
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
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                  </div>
                  <h4 class="mb-5">Layanan Hotel</h4>
                  <p class="mb-[30px]">
                    Saya sangat puas dengan Layanan Hotel dari Hotel. Hasil cetaknya tajam dan warnanya sangat akurat. Prosesnya cepat dan hasilnya selalu memuaskan. Sangat direkomendasikan bagi siapa saja yang membutuhkan cetakan berkualitas dalam waktu singkat!
                  </p>
                  <div class="flex items-center gap-3 mt-auto">
                    <div
                      class="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black"
                    >
                      <NuxtImg
                        src="/images/th-1/testimonial-user-img-1.png"
                        alt="testimonial-user-img-1"
                        width="64"
                        height="64"
                        class="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
  
                    <div
                      class="flex-1 font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]"
                    >
                      Rizky, 
                      <span class="font-normal">Pemilik Toko Online</span>
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
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                  </div>
                  <h4 class="mb-5">Layanan hotel</h4>
                  <p class="mb-[30px]">
                    Hotel benar-benar ahli dalam hotel. Saya memesan ribuan brosur dan hasilnya sempurna! Kualitas cetaknya konsisten, dan harganya sangat bersaing. Terima kasih atas layanan yang profesional dan hasil yang luar biasa.
                  </p>
                  <div class="flex items-center gap-3 mt-auto">
                    <div
                      class="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black"
                    >
                      <NuxtImg
                        src="/images/th-1/testimonial-user-img-2.png"
                        alt="testimonial-user-img-2"
                        width="64"
                        height="64"
                        class="object-cover w-full h-full"
                        loading="lazy"
                        />
                    </div>
  
                    <div
                      class="flex-1 font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]"
                    >
                      Zem,
                      <span class="font-normal">Marketing Manager</span>
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
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                      />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                      />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                      />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                      />
                  </div>
                  <h4 class="mb-5">Layanan Custom Printing</h4>
                  <p class="mb-[30px]">
                    Layanan custom printing dari Hotel sangat memuaskan. Saya memesan mug dengan desain khusus untuk acara kantor, dan hasilnya luar biasa. Desainnya sesuai dengan yang saya inginkan, dan kualitas cetaknya benar-benar premium. Saya pasti akan kembali untuk proyek berikutnya!
                  </p>
                  <div class="flex items-center gap-3 mt-auto">
                    <div
                      class="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black"
                    >
                      <NuxtImg
                        src="/images/th-1/testimonial-user-img-3.png"
                        alt="testimonial-user-img-3"
                        width="64"
                        height="64"
                        class="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
  
                    <div
                      class="text- leading-nonelg flex-1 font-syne font-bold -tracking-[0.5px] lg:text-[21px]"
                    >
                      Andi,
                      <span class="font-normal">Event Organizer</span>
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
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                    />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                      />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                      />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                      />
                    <NuxtImg
                      src="/icons/icon-black-star.svg"
                      alt="icon-black-star"
                      width="37"
                      height="35"
                      loading="lazy"
                      />
                  </div>
                  <h4 class="mb-5">
                    Semua Layanan
                  </h4>
                  <p class="mb-[30px]">
                    Saya telah menggunakan berbagai layanan dari Hotel, mulai dari percetakan digital, offset, hingga custom printing. Setiap kali, hasilnya tidak pernah mengecewakan. Prosesnya mudah, komunikasinya lancar, dan hasilnya selalu sesuai dengan harapan. Hotel adalah pilihan utama saya untuk semua kebutuhan percetakan.
                  </p>
                  <div class="flex items-center gap-3 mt-auto">
                    <div
                      class="h-[70px] w-[70px] overflow-hidden rounded-[50%] border-2 border-black"
                    >
                      <NuxtImg
                        src="/images/th-1/testimonial-user-img-4.png"
                        alt="testimonial-user-img-4"
                        width="64"
                        height="64"
                        class="object-cover w-full h-full"
                        loading="lazy"
                      />
                    </div>
  
                    <div
                      class="flex-1 font-syne text-lg font-bold leading-none -tracking-[0.5px] lg:text-[21px]"
                    >
                      Andre,
                      <span class="font-normal">Pemilik Bisnis</span>
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
    <!-- ...::: Content Section End :::... -->
    </main>
    <!-- Main Wrapper End -->

    <!-- Footer Section Start -->
    <FooterComponent />
    <!-- Footer Section End -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

useHead({
  title: 'Jual Aplikasi Web Murah dan Berkualitas - Tukangbikin.web.id',
  meta: [
    { name: 'description', content: 'Mitra terbaik Anda dalam menciptakan solusi IT berkualitas dengan kode asli dan harga terjangkau. Kami selalu mengikuti tren teknologi terkini dan setiap bulan menghadirkan produk IT baru yang inovatif. Dapatkan solusi web dan mobile apps yang up-to-date dengan kebutuhan bisnis Anda bersama kami.' },
    { name: 'keywords', content: 'Nuxt, Node JS, Tailwind CSS, Laravel, Aplikasi Web, Aplikasi Mobile, Solusi IT, Tukangbikin.web.id, Tukang Bikin' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
});

const backgroundImages = ref([
  '/hero/slider-1.jpg?random=1',
  '/hero/slider-2.jpg?random=2',
  '/hero/slider-3.jpg?random=3'
]);

const currentBackgroundImage1 = ref(backgroundImages.value[0]);
const currentBackgroundImage2 = ref(backgroundImages.value[1]);
const isLayer1Active = ref(true);
let imageChangeInterval;

const changeBackgroundImage = () => {
  const currentIndex = isLayer1Active.value
    ? backgroundImages.value.indexOf(currentBackgroundImage1.value)
    : backgroundImages.value.indexOf(currentBackgroundImage2.value);
  const nextIndex = (currentIndex + 1) % backgroundImages.value.length;

  if (isLayer1Active.value) {
    currentBackgroundImage2.value = backgroundImages.value[nextIndex];
  } else {
    currentBackgroundImage1.value = backgroundImages.value[nextIndex];
  }

  isLayer1Active.value = !isLayer1Active.value;
};

onMounted(() => {
  imageChangeInterval = setInterval(changeBackgroundImage, 5000);
});

onUnmounted(() => {
  clearInterval(imageChangeInterval);
});
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

.transition-opacity {
  transition: opacity 1s ease-in-out;
}

@media (min-width: 1400px) {
  h1 {
    font-size: 64px !important;
  }
  .title-page {
    font-size: 102px !important;
  }
  .title-tagline {
    font-size: 52px !important;
  }
  .title-info {
    font-size: 52px !important;
  }

  .title-slider{
    font-size: 52px!important;
  }
}
</style>
