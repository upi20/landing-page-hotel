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
                <h1>About Us</h1>
                <!-- Breadcrumb Nav -->
                <ul class="breadcrumb-nav">
                  <li>
                    <NuxtLink href="/">Home</NuxtLink>
                  </li>
                  <li>About Us</li>
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
      <!-- ...::: About Gallery Section Start :::... -->
      <section class="section-about-gallery">
        <!-- Section Space -->
        <div class="section-space">
          <!-- Section Container -->
          <div class="container">
            <!-- Section Block -->
            <div class="section-block mb-10 md:mb-[60px] xl:mb-20">
              <h2 class="jos mx-auto max-w-[966px] text-center">
                Tukangbikin.web.id
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
              <div class="mx-auto mt-6 max-w-[813px] text-center">
                <p class="jos section-para">
                  Perusahaan IT yang berkomitmen untuk menyediakan solusi
                  digital yang jujur, transparan, dan berkualitas tinggi. Kami
                  percaya bahwa kejujuran adalah fondasi dari setiap hubungan
                  bisnis yang sukses, dan kepuasan pelanggan adalah prioritas
                  utama kami. Dengan pengalaman yang luas dan dedikasi terhadap
                  teknologi terkini, kami hadir untuk membantu bisnis Anda
                  tumbuh dan berkembang di dunia digital.
                </p>
                <p class="jos section-para">
                  Selain itu, kami beroperasi di bawah badan hukum CV dengan
                  nama CV. Adikarya Infinit, yang memberikan Anda kepastian
                  bahwa kami adalah perusahaan yang terpercaya dan memiliki
                  legalitas yang sah. Dengan fondasi hukum yang kuat, kami siap
                  mendukung setiap kebutuhan digital bisnis Anda dengan
                  integritas dan profesionalisme.
                </p>
              </div>
            </div>
            <!-- Section Block -->

            <!-- About Gallery Image List -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <!-- About Galley Image Item -->
              <NuxtLink
                data-fslightbox="gallery"
                class="group block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black md:col-span-1 lg:col-span-2"
              >
                <NuxtImg
                  src="/images/th-1/about-gallery-img-1.jpg"
                  alt="about-gallery-img-1"
                  width="846"
                  height="392"
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </NuxtLink>
              <!-- About Galley Image Item -->
              <!-- About Galley Image Item -->
              <NuxtLink
                data-fslightbox="gallery"
                class="group col-span-1 block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black"
              >
                <NuxtImg
                  src="/images/th-1/about-gallery-img-2.jpg"
                  alt="about-gallery-img-2"
                  width="408"
                  height="392"
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </NuxtLink>
              <!-- About Galley Image Item -->
              <!-- About Galley Image Item -->
              <NuxtLink
                data-fslightbox="gallery"
                class="group col-span-1 block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black"
              >
                <NuxtImg
                  src="/images/th-1/about-gallery-img-3.jpg"
                  alt="about-gallery-img-3"
                  width="408"
                  height="392"
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </NuxtLink>
              <!-- About Galley Image Item -->
              <!-- About Galley Image Item -->
              <NuxtLink
                data-fslightbox="gallery"
                class="group block cursor-pointer overflow-hidden rounded-[25px] border-2 border-black md:col-span-1 lg:col-span-2"
              >
                <NuxtImg
                  src="/images/th-1/about-gallery-img-4.jpg"
                  alt="about-gallery-img-4"
                  width="846"
                  height="392"
                  class="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </NuxtLink>
              <!-- About Galley Image Item -->
            </div>
            <!-- About Gallery Image List -->

            <div class="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 lg:grid-cols-2">
              <div class="rich-text">
                <h4 class="mb-4">Our core vision</h4>
                <p>
                  <b>Membangun Kepercayaan Melalui Kejujuran dan Kualitas</b>
                </p>

                <p style="margin-top: -25px">
                  Kami bercita-cita menjadi mitra terpercaya dalam dunia
                  teknologi, yang selalu menempatkan kejujuran dan kepuasan
                  pelanggan di garis depan setiap proyek yang kami kerjakan.
                  Visi kami adalah menciptakan solusi digital yang tidak hanya
                  memenuhi kebutuhan, tetapi juga melampaui harapan dengan
                  integritas yang tak tergoyahkan.
                </p>
                <div class="horizontal-line bg-[#e6e6e6]"></div>
              </div>
              <div class="rich-text">
                <h4 class="mb-4">Our main mission</h4>
                <p>
                  <b
                    >1. Menghadirkan Solusi IT dengan Kejujuran dan
                    Transparansi</b
                  ><br />
                  Kami berkomitmen untuk memberikan layanan yang jujur dan
                  transparan, memastikan bahwa setiap klien mendapatkan solusi
                  yang tepat tanpa kompromi.<br /><br />

                  <b>2. Menjamin Kepuasan Pelanggan di Setiap Langkah</b><br />
                  Kepuasan Anda adalah prioritas kami. Kami terus bekerja untuk
                  memberikan hasil yang tidak hanya memuaskan, tetapi juga
                  memberikan nilai tambah bagi bisnis Anda.<br /><br />

                  <b>3. Mengembangkan Produk IT yang Inovatif dan Relevan</b
                  ><br />
                  Dengan mengikuti perkembangan teknologi terkini, kami terus
                  merilis produk IT baru yang dirancang untuk memenuhi kebutuhan
                  bisnis Anda dan memastikan keberhasilan jangka panjang.
                </p>
              </div>
              <div class="rich-text new-p">
                <p>
                  <b>4. Menawarkan Layanan dengan Harga yang Kompetitif</b
                  ><br />
                  Kami menyediakan solusi IT berkualitas tinggi dengan harga
                  yang bersahabat, memungkinkan Anda mendapatkan yang terbaik
                  tanpa mengorbankan anggaran.<br />
                </p>
              </div>
            </div>
          </div>
          <!-- Section Container -->
        </div>
        <!-- Section Space -->
      </section>
      <!-- ...::: About Gallery Section End :::... -->
    </main>
    <!-- Main Wrapper End -->

    <!-- ...::: Team Section End :::... -->
    <!-- Footer Section Start -->
    <FooterComponent />
    <!-- Footer Section End -->
  </div>
</template>

<style scoped>
@media (min-width: 1400px) {
  .new-p {
    margin-top: -150px;
  }
}
</style>
