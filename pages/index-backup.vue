<!-- @format -->

<template>
    <div class="page-wrapper">
      <!-- Header Section Start -->
      <Header2Component />
      <!-- Header Section End -->
  
      <!-- Main Wrapper Start -->
      <main class="main-wrapper">
        <section class="section-hero">
          <div 
            class="bg-black" 
            style="background-color: #89a4d0;"
          >
            <div
              class="pb-20 pt-[150px] lg:pb-[100px] lg:pt-[196px] xl:pb-[130px]"
            >
              <div class="container">
                <div
                  class="relative z-10 grid grid-cols-1 items-center justify-center gap-x-[90px] gap-y-16 lg:grid-cols-[1fr_minmax(0,0.6fr)]"
                >
                  <div class="text-center text-colorButteryBlack lg:text-start">
                    <h1>UMKM PERCETAKAN
                    </h1>
                    <p
                      class="mb-10 mt-6 text-lg leading-[1.4] md:mb-14 lg:text-[21px]"
                    >
                      Penyedia jasa percetakan terkemuka di Jakarta yang menawarkan layanan percetakan berkualitas tinggi dengan harga paling terjangkau. Kami memahami kebutuhan Anda akan kecepatan dan hasil cetak yang sempurna, sehingga kami selalu berkomitmen untuk memberikan layanan yang cepat, tepat waktu, dan sesuai dengan standar kualitas terbaik. 
                    </p>
                    <NuxtLink
                      class="btn-primary relative pr-20 md:pr-[118px]"
                      to="/contact-us"
                    >
                      Hubungi Kami
                      <span
                        class="absolute right-[5px] inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] bg-black"
                      >
                        <NuxtImg
                          src="/icons/icon-buttery-white-phone.svg"
                          alt="icon-buttery-white-phone"
                          width="30"
                          height="30"
                          loading="lazy"
                        />
                      </span>
                    </NuxtLink>
                  </div>
                  <div
                    class="mx-auto inline-block max-w-[495px] overflow-hidden rounded-[25px] bg-colorButteryWhite p-[5px] lg:mx-0"
                  >
                    <NuxtImg
                      src="/hero-umkm.png"
                      alt="hero-img"
                      width="485"
                      height="540"
                      class="h-full w-full rounded-[20px] object-cover"
                      loading="lazy"
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
                  Layanan Unggulan
                  <span>
                    PERCETAKAN
                  </span>
                </h2>
              </div>
              <!-- Section Block -->
  
              <!-- Service List -->
              <ul class="grid grid-cols-1 gap-[30px] lg:grid-cols-3">
                <!-- Service Item -->
                <li class="jos group/team-item" data-jos_delay="0">
                  <div class="h-full shadow-bg group">
                    <div
                      class="flex h-full flex-col items-start overflow-hidden rounded-[20px] border-2 border-black bg-colorIvory p-[30px] transition duration-300 group-hover:bg-colorLightLime"
                    >
                      <h4 class="mb-[15px] mt-[30px]">Percetakan Digital</h4>
                      <p class="mb-7">
                        Layanan percetakan digital menyediakan cetak cepat dan berkualitas untuk berbagai kebutuhan, seperti brosur, kartu nama, dan poster. Dengan teknologi modern, kami menawarkan hasil tajam dan personalisasi cetakan sesuai keinginan Anda, ideal untuk pesanan dalam jumlah kecil hingga menengah.
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
                      <h4 class="mb-[15px] mt-[30px]">Percetakan Offset</h4>
                      <p class="mb-7">
                        Layanan percetakan offset adalah solusi ideal untuk cetakan dalam jumlah besar dengan kualitas yang konsisten. Menggunakan teknologi offset, kami mencetak dengan presisi tinggi pada berbagai media, seperti buku, majalah, dan flyer. Layanan ini menawarkan hasil cetak yang tajam, warna yang akurat, dan efisiensi biaya untuk volume besar.
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
                      <h4 class="mb-[15px] mt-[30px]">Custom Printing</h4>
                      <p class="mb-7">
                        Layanan custom printing memungkinkan Anda mencetak produk unik dan personal sesuai kebutuhan, seperti merchandise, pakaian, mug, dan lainnya. Dengan layanan ini, Anda bisa menciptakan desain khusus yang mencerminkan identitas atau merek Anda, memberikan hasil cetak berkualitas tinggi yang sesuai dengan keinginan Anda.
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
                <h2 class="jos title-info">
                  Kenapa harus memilih Kami
                </h2>
                <div class="mt-6 jos">
                  <p class="section-para">
                    <b>UMKM PERCETAKAN</b> mengandalkan pengalaman bertahun-tahun dalam industri percetakan untuk memberikan hasil cetak terbaik bagi pelanggan. Kami mengutamakan kualitas di setiap tahap proses, didukung oleh teknologi cetak terbaru yang memastikan akurasi dan ketajaman hasil. Untuk menjamin kepuasan Anda, setiap produk melalui mekanisme pengujian ketat, dari pemilihan bahan hingga inspeksi akhir, sehingga kami dapat memberikan hasil yang sesuai dengan standar tertinggi.
                  </p>
                  <p class="section-para">
                    Selain itu, <b>UMKM PERCETAKAN</b> menawarkan fleksibilitas dan efisiensi dalam memenuhi kebutuhan cetak Anda, baik untuk jumlah kecil maupun besar. Dengan harga yang kompetitif dan layanan cepat, kami berkomitmen untuk memberikan solusi cetak yang tepat waktu tanpa mengorbankan kualitas. Kami selalu siap memberikan dukungan penuh, mulai dari konsultasi desain hingga pengiriman, sehingga Anda dapat merasa yakin setiap proyek akan dikerjakan secara profesional dan sesuai ekspektasi.
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
                      class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-2xl"
                    >
                      01/ Konsultasi
                    </button>
                    <div class="accordion-icon">
                      <NuxtImg
                        src="/icons/icon-black-arrow-less-down.svg"
                        alt="icon-black-arrow-less-down"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    class="accordion-body max-w-[826px] opacity-80"
                    v-if="activeIndex === 0"
                  >
                    <p class="pt-5">
                      Di mana Anda dapat berdiskusi dengan tim kami tentang kebutuhan cetak Anda, termasuk jenis produk, desain, jumlah, dan spesifikasi lainnya. Kami akan memberikan saran dan solusi terbaik yang sesuai dengan kebutuhan Anda.
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
                      class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-2xl"
                    >
                      02/ Buat Orderan
                    </button>
                    <div class="accordion-icon">
                      <NuxtImg
                        src="/icons/icon-black-arrow-less-down.svg"
                        alt="icon-black-arrow-less-down"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    class="accordion-body max-w-[826px] opacity-80"
                    v-if="activeIndex === 1"
                  >
                    <p class="pt-5">
                      Setelah konsultasi dan mencapai kesepakatan, kami akan membuatkan orderan resmi dan klien dapat melihat formulir pemesanan yang mencakup detail produk yang diinginkan.
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
                      class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-2xl"
                    >
                      03/ Produksi
                    </button>
                    <div class="accordion-icon">
                      <NuxtImg
                        src="/icons/icon-black-arrow-less-down.svg"
                        alt="icon-black-arrow-less-down"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    class="accordion-body max-w-[826px] opacity-80"
                    v-if="activeIndex === 2"
                  >
                    <p class="pt-5">
                      Setelah orderan dibuat, tim produksi kami akan segera memulai proses cetak sesuai spesifikasi yang telah disepakati. Kami menggunakan teknologi terbaru untuk memastikan hasil cetak berkualitas tinggi dan sesuai dengan ekspektasi Anda.
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
                      class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-2xl"
                    >
                      04/ Konfirmasi & Pembayaran
                    </button>
                    <div class="accordion-icon">
                      <NuxtImg
                        src="/icons/icon-black-arrow-less-down.svg"
                        alt="icon-black-arrow-less-down"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    class="accordion-body max-w-[826px] opacity-80"
                    v-if="activeIndex === 3"
                  >
                    <p class="pt-5">
                      Sebelum proses produksi dimulai,  kami akan mengirimkan konfirmasi pesanan beserta detail pembayaran. Anda dapat melakukan pembayaran DP (Down Payment) atau pelunasan sesuai kesepakatan. Kami menerima berbagai metode pembayaran untuk kenyamanan Anda.
                    </p>
                  </div>
                </li>
                <li
                  class="accordion-item-style-1 accordion-item"
                  :class="{ active: activeIndex === 4 }"
                  @click="toggleAccordion(4)"
                >
                  <div
                    class="flex items-center justify-between gap-6 text-xl font-semibold accordion-header text-ColorBlack"
                  >
                    <button
                      class="flex-1 text-left font-syne text-2xl font-bold leading-[1.4] md:text-2xl"
                    >
                      05/ Pengiriman
                    </button>
                    <div class="accordion-icon">
                      <NuxtImg
                        src="/icons/icon-black-arrow-less-down.svg"
                        alt="icon-black-arrow-less-down"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    class="accordion-body max-w-[826px] opacity-80"
                    v-if="activeIndex === 4"
                  >
                    <p class="pt-5">
                      Setelah pembayaran dilunasi, produk yang sudah selesai dicetak akan dikemas dengan rapi dan dikirim ke alamat Anda. Kami memastikan pengiriman tepat waktu dan produk tiba dalam kondisi sempurna
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
                  <h4 class="mb-5">Layanan Percetakan Digital</h4>
                  <p class="mb-[30px]">
                    Saya sangat puas dengan layanan percetakan digital dari UMKM PERCETAKAN. Hasil cetaknya tajam dan warnanya sangat akurat. Prosesnya cepat dan hasilnya selalu memuaskan. Sangat direkomendasikan bagi siapa saja yang membutuhkan cetakan berkualitas dalam waktu singkat!
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
                  <h4 class="mb-5">Layanan Percetakan Offset</h4>
                  <p class="mb-[30px]">
                    UMKM PERCETAKAN benar-benar ahli dalam percetakan offset. Saya memesan ribuan brosur dan hasilnya sempurna! Kualitas cetaknya konsisten, dan harganya sangat bersaing. Terima kasih atas layanan yang profesional dan hasil yang luar biasa.
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
                    Layanan custom printing dari UMKM PERCETAKAN sangat memuaskan. Saya memesan mug dengan desain khusus untuk acara kantor, dan hasilnya luar biasa. Desainnya sesuai dengan yang saya inginkan, dan kualitas cetaknya benar-benar premium. Saya pasti akan kembali untuk proyek berikutnya!
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
                    Saya telah menggunakan berbagai layanan dari UMKM PERCETAKAN, mulai dari percetakan digital, offset, hingga custom printing. Setiap kali, hasilnya tidak pernah mengecewakan. Prosesnya mudah, komunikasinya lancar, dan hasilnya selalu sesuai dengan harapan. UMKM PERCETAKAN adalah pilihan utama saya untuk semua kebutuhan percetakan.
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
  
      <!-- Footer Section Start -->
      <FooterComponent />
      <!-- Footer Section End -->
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  
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
  
  // Reactive references
  const menuOpen = ref(false);
  const activeIndex = ref<number | null>(0);
  const isContentLoaded = ref(false);
  
  // Methods
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  
  const toggleAccordion = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index;
  };
  
  const loadContent = () => {
    isContentLoaded.value = true;
  };
  
  // Directive definition
  const lazyLoadDirective = {
    mounted(el: HTMLElement, binding: any) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          binding.value();
          observer.disconnect();
        }
      });
      observer.observe(el);
    },
  };
  
  // Register the directive
  onMounted(() => {
    // Register the directive globally if needed, or you can include it locally in the setup() return
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
  }
  </style>
  