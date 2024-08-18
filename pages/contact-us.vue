<!-- @format -->

<template>
  <div class="page-wrapper">
    <!-- Header Section Start -->
    <HeaderComponent />
    <!-- Header Section End -->

    <!-- Main Wrapper Start -->
    <main class="main-wrapper">
      <!-- ...::: Breadcrumb Section Start :::... -->
      <section class="section-breadcrumb">
        <!-- Breadcrumb Background -->
        <div class="bg-black">
          <!-- Breadcrumb Space -->
          <div class="breadcrumb-space">
            <!-- Section Container -->
            <div class="container">
              <div class="breadcrumb-block">
                <h1>Contact Us</h1>
                <!-- Breadcrumb Nav -->
                <ul class="breadcrumb-nav">
                  <li>
                    <NuxtLink href="/">Home</NuxtLink>
                  </li>
                  <li>Contact Us</li>
                </ul>
                <!-- Breadcrumb Nav -->
              </div>
            </div>
            <!-- Section Container -->
          </div>
          <!-- Breadcrumb Space -->
        </div>
        <!-- Breadcrumb Background -->
      </section>
      <!-- ...::: Breadcrumb Section End :::... -->

      <!-- ...::: Contact Info Section Start :::... -->
      <section class="section-contact-info" style="margin-top: 40px">
        <!-- Section Space -->
        <div class="section-space-bottom">
          <!-- Section Container -->
          <div class="container">
            <!-- Contact Info List -->
            <ul class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              <!-- Contact Info Item -->
              <li
                class="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]"
              >
                <div class="h-auto w-10">
                  <NuxtImg
                    src="/icons/icon-buttery-white-phone.svg"
                    alt="icon-buttery-white-phone"
                    width="30"
                    height="30"
                    class="h-auto w-10"
                    loading="lazy"
                  />
                </div>
                <div class="flex-1">
                  <span
                    class="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl"
                    >Whatsapp/Telpon</span
                  >
                  <div
                    class="flex flex-col text-lg leading-[1.42] lg:text-[21px]"
                  >
                    <NuxtLink
                      href="https://wa.link/j9mvz1"
                      target="_BLANK"
                      class="text-colorButteryWhite hover:text-colorLightLime"
                      >+62 896-5248-3516
                    </NuxtLink>
                  </div>
                </div>
              </li>
              <!-- Contact Info Item -->
              <!-- Contact Info Item -->
              <li
                class="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]"
              >
                <div class="h-auto w-10">
                  <NuxtImg
                    src="/icons/icon-buttery-white-mail.svg"
                    alt="icon-buttery-white-mail"
                    width="40"
                    height="40"
                    class="h-auto w-10"
                  />
                </div>
                <div class="flex-1">
                  <span
                    class="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl"
                    >Email us</span
                  >
                  <div
                    class="flex flex-col text-lg leading-[1.42] lg:text-[21px]"
                  >
                    <NuxtLink
                      href="mailto:tukangbikin.web.id@gmail.com"
                      class="text-colorButteryWhite hover:text-colorLightLime"
                      >tukangbikin.web.id@gmail.com
                    </NuxtLink>
                  </div>
                </div>
              </li>
              <!-- Contact Info Item -->
              <!-- Contact Info Item -->
              <li
                class="jos flex gap-x-6 rounded-[10px] bg-black px-5 py-[30px] xl:px-8 xxl:px-[70px]"
              >
                <div class="h-auto w-10">
                  <NuxtImg
                    src="/icons/icon-buttery-white-location-marker.svg"
                    alt="icon-buttery-white-location-marker"
                    width="40"
                    height="40"
                    class="h-auto w-10"
                  />
                </div>
                <div class="flex-1">
                  <span
                    class="mb-3 block text-xl font-bold text-colorButteryWhite xl:text-2xl"
                    >Office address</span
                  >
                  <div
                    class="flex flex-col text-lg leading-[1.42] lg:text-[21px]"
                  >
                    <address class="not-italic text-colorButteryWhite">
                      Cikarang Utara, Indonesia
                    </address>
                  </div>
                </div>
              </li>
              <!-- Contact Info Item -->
            </ul>
            <!-- Contact Info List -->

            <!-- Location Map Block -->
            <div class="jos mt-10 md:mt-[60px] lg:mt-20">
              <div
                class="h-96 w-full overflow-hidden rounded-[20px] border-2 border-black lg:h-[600px] lg:rounded-[30px] lg:border-[5px]"
              >
                <iframe
                  class="h-full w-full"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
            <!-- Location Map Block -->
          </div>
          <!-- Section Container -->
        </div>
        <!-- Section Space -->
      </section>
      <!-- ...::: Contact Info Section End :::... -->

      <!-- Horizontal Line -->
      <div class="horizontal-line bg-[#e6e6e6]"></div>
      <!-- Horizontal Line -->

      <!-- ...::: FAQ Section Start :::... -->
      <section class="section-faq">
        <!-- Section Space -->
        <div class="section-space">
          <!-- Section Container -->
          <div class="container">
            <!-- Section Block -->
            <div
              class="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]"
            >
              <h2 class="jos title-faq">
                FAQ ini membantu klien memahami lebih banyak tentang kami.
              </h2>
            </div>
            <!-- Section Block -->

            <!-- FAQ Area -->
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
              <!-- FAQ List -->
              <ul class="flex flex-col gap-y-10">
                <!-- FAQ Item -->
                <li class="jos flex flex-col gap-y-4">
                  <!-- FAQ Header Block -->
                  <h4
                    class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]"
                  >
                    Bagaimana proses pemesanan produk atau jasa di
                    tukangbikin.web.id?
                  </h4>
                  <!-- FAQ Header Block -->
                  <!-- FAQ Body -->
                  <div class="ml-10 text-[#0C0C0C]">
                    <p>
                      Anda bisa menghubungi kami melalui WhatsApp, email, atau
                      formulir kontak di website kami. Setelah itu, kami akan
                      mendiskusikan kebutuhan Anda dan memberikan penawaran
                      serta estimasi waktu pengerjaan.
                    </p>
                  </div>
                  <!-- FAQ Body -->
                </li>
                <!-- FAQ Item -->
                <!-- FAQ Item -->
                <li class="jos flex flex-col gap-y-4">
                  <!-- FAQ Header Block -->
                  <h4
                    class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]"
                  >
                    Apakah tukangbikin.web.id menggunakan kode yang orisinal?
                  </h4>
                  <!-- FAQ Header Block -->
                  <!-- FAQ Body -->
                  <div class="ml-10 text-[#0C0C0C]">
                    <p>
                      Ya, kami selalu memastikan bahwa setiap proyek menggunakan
                      kode yang orisinal dan dikembangkan khusus untuk kebutuhan
                      Anda, sehingga tidak ada masalah dengan hak cipta atau
                      kode yang duplikat.
                    </p>
                  </div>
                  <!-- FAQ Body -->
                </li>
                <!-- FAQ Item -->
                <!-- FAQ Item -->
                <li class="jos flex flex-col gap-y-4">
                  <!-- FAQ Header Block -->
                  <h4
                    class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]"
                  >
                    Berapa lama waktu yang dibutuhkan untuk menyelesaikan sebuah
                    proyek?
                  </h4>
                  <!-- FAQ Header Block -->
                  <!-- FAQ Body -->
                  <div class="ml-10 text-[#0C0C0C]">
                    <p>
                      Waktu pengerjaan proyek bervariasi tergantung kompleksitas
                      dan skala proyek. Kami akan memberikan estimasi waktu
                      setelah memahami kebutuhan dan ruang lingkup proyek Anda.
                    </p>
                  </div>
                  <!-- FAQ Body -->
                </li>
                <!-- FAQ Item -->
              </ul>
              <!-- FAQ List -->

              <!-- FAQ List -->
              <ul class="flex flex-col gap-y-10">
                <!-- FAQ Item -->
                <li class="jos flex flex-col gap-y-4">
                  <!-- FAQ Header Block -->
                  <h4
                    class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]"
                  >
                    Apakah harga layanan di tukangbikin.web.id terjangkau?
                  </h4>
                  <!-- FAQ Header Block -->
                  <!-- FAQ Body -->
                  <div class="ml-10 text-[#0C0C0C]">
                    <p>
                      Kami menawarkan harga yang kompetitif dan terjangkau untuk
                      setiap layanan kami, dengan tetap mengutamakan kualitas
                      dan penggunaan teknologi terkini dalam setiap proyek.
                    </p>
                  </div>
                  <!-- FAQ Body -->
                </li>
                <!-- FAQ Item -->
                <!-- FAQ Item -->
                <li class="jos flex flex-col gap-y-4">
                  <!-- FAQ Header Block -->
                  <h4
                    class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]"
                  >
                    Bagaimana jika saya membutuhkan perubahan setelah proyek
                    selesai?
                  </h4>
                  <!-- FAQ Header Block -->
                  <!-- FAQ Body -->
                  <div class="ml-10 text-[#0C0C0C]">
                    <p>
                      Kami menyediakan layanan revisi sesuai dengan kesepakatan
                      awal. Setelah proyek selesai, Anda dapat meminta revisi
                      dalam batas waktu yang telah ditentukan.
                    </p>
                  </div>
                  <!-- FAQ Body -->
                </li>
                <!-- FAQ Item -->
                <!-- FAQ Item -->
                <li class="jos flex flex-col gap-y-4">
                  <!-- FAQ Header Block -->
                  <h4
                    class="relative pl-10 before:absolute before:left-0 before:top-1 before:h-[30px] before:w-[30px] before:bg-[url(../img/icons/icon-lightlime-question.svg)]"
                  >
                    Apakah produk IT tersedia di Marketplace?
                  </h4>
                  <!-- FAQ Header Block -->
                  <!-- FAQ Body -->
                  <div class="ml-10 text-[#0C0C0C]">
                    <p>
                      Ya, Anda dapat membeli produk IT kami melalui platform
                      Shopee, Tokopedia, dan TikTok. Kami menyediakan link resmi
                      ke toko kami di platform tersebut melalui website ini,
                      sehingga Anda dapat berbelanja dengan aman dan nyaman.
                    </p>
                  </div>
                  <!-- FAQ Body -->
                </li>
                <!-- FAQ Item -->
              </ul>
              <!-- FAQ List -->
            </div>
            <!-- FAQ Area -->
          </div>
          <!-- Section Container -->
        </div>
        <!-- Section Space -->
      </section>
      <!-- ...::: FAQ Section End :::... -->
    </main>
    <!--  Main Wrapper End -->

    <!-- Footer Section Start -->
    <FooterComponent />
    <!-- Footer Section End -->
  </div>
</template>

<style scoped>
@media (min-width: 1400px) {
  .title-faq {
    font-size: 48px !important;
  }
}
</style>
