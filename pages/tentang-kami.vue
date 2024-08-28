<!-- @format -->

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
        <div class="bg-black" style="background-image: url('/tentang-kami.png'); background-size: cover; background-position: center; height: 380px;">
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
                UMKM PERCETAKAN
              </h2>
              <div class="mx-auto mt-6 text-center">
                <p class="jos section-para">
                  <b>UMKM PERCETAKAN</b> didirikan dengan semangat untuk memberikan solusi percetakan berkualitas tinggi yang dapat diandalkan oleh pelanggan dari berbagai sektor. Sejak berdiri, kami telah berkembang menjadi salah satu penyedia jasa percetakan terkemuka di Jakarta, melayani klien dari skala kecil hingga besar dengan berbagai kebutuhan cetak. Dengan pengalaman bertahun-tahun di industri ini, kami terus berinovasi dan beradaptasi dengan teknologi terbaru untuk memastikan bahwa setiap produk yang kami hasilkan memenuhi standar tertinggi.
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
                <h4 class="mb-4">Visi</h4>
                <p>
                  <b>Menjadi pemimpin dalam industri percetakan di Indonesia, yang dikenal karena kualitas, inovasi, dan pelayanan terbaik kepada pelanggan.</b>
                </p>
                <br>
                <div class="horizontal-line bg-[#e6e6e6]"></div>
              </div>
              <div class="rich-text">
                <h4 class="mb-4">Misi</h4>
                <ul class="list-disc">
                  <li>Menyediakan solusi percetakan yang berkualitas tinggi dengan harga yang kompetitif.</li>
                  <li>Mengutamakan kepuasan pelanggan melalui layanan yang cepat, tepat, dan ramah.</li>
                  <li>Terus mengembangkan dan menerapkan teknologi cetak terbaru untuk memenuhi kebutuhan pasar yang terus berkembang.</li>
                  <li>Membina hubungan jangka panjang dengan pelanggan, berdasarkan kepercayaan dan profesionalisme.</li>
                </ul>
                <div class="horizontal-line bg-[#e6e6e6]"></div>
              </div>
              <div class="rich-text new-p">
                <h4 class="mb-4">Nilai & Filosofi</h4>
                <p>Kami di UMKM PERCETAKAN menjunjung tinggi nilai-nilai berikut dalam setiap aspek bisnis kami:</p>
                <ul class="list-disc">
                  <li><b>Kualitas:</b> Kami percaya bahwa kualitas adalah kunci keberhasilan. Oleh karena itu, kami selalu memastikan bahwa setiap cetakan yang keluar dari mesin kami memenuhi standar kualitas tertinggi.</li>
                  <li><b>Keandalan:</b> Kami berkomitmen untuk selalu memenuhi janji kami kepada pelanggan, baik dalam hal waktu pengerjaan maupun hasil cetak.</li>
                  <li><b>Inovasi:</b> Dalam dunia yang terus berubah, kami selalu berusaha untuk berinovasi dan memperbarui teknologi kami agar tetap relevan dan kompetitif.</li>
                  <li><b>Kolaborasi:</b> Kami menghargai kerjasama tim dan kemitraan dengan pelanggan, karena kami percaya bahwa hasil terbaik dicapai melalui kolaborasi yang erat.</li>
                </ul>
                <div class="horizontal-line bg-[#e6e6e6]"></div>
              </div>
              <div class="rich-text">
                <h4 class="mb-4">Keunggulan Kami</h4>
                <p>UMKM PERCETAKAN memiliki beberapa keunggulan kompetitif yang membuat kami menjadi pilihan utama untuk kebutuhan percetakan Anda:</p>
                <ul class="list-disc">
                  <li><b>Pengalaman dan Keahlian:</b> Dengan pengalaman bertahun-tahun di industri percetakan, kami memiliki pengetahuan mendalam dan keahlian untuk menangani berbagai jenis proyek dengan berbagai tingkat kompleksitas.</li>
                  <li><b>Teknologi Terbaru:</b> Kami selalu mengadopsi teknologi cetak terbaru untuk memastikan bahwa hasil cetak kami selalu tajam, akurat, dan sesuai dengan harapan pelanggan.</li>
                  <li><b>Harga Kompetitif:</b> Kami menawarkan harga yang bersaing tanpa mengorbankan kualitas, menjadikan kami pilihan yang terjangkau bagi bisnis dan individu.</li>
                  <li><b>Layanan Pelanggan yang Ramah:</b> Kami memahami bahwa setiap pelanggan memiliki kebutuhan unik, dan kami selalu siap mendengarkan dan memberikan solusi yang sesuai dengan kebutuhan tersebut.</li>
                  <li><b>Proses Pengujian yang Ketat:</b> Setiap produk yang kami hasilkan melewati serangkaian pengujian kualitas untuk memastikan bahwa hasil akhirnya sesuai dengan standar tertinggi.</li>
                </ul>
              </div>
              <div class="rich-text new-p-2">
                <a href="#" class="btn-outline-black mt-auto block text-center">
                  <p class="mb-10 mt-6 text-lg leading-[1.4] md:mb-14 lg:text-[21px]">Di <b>UMKM PERCETAKAN</b>, kami tidak hanya mencetak, tetapi juga memberikan nilai tambah bagi setiap proyek yang kami tangani, dengan dedikasi penuh untuk kepuasan pelanggan.</p>
                </a>
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
    .new-p {
      margin-top: -220px;
    }

    .new-p-2{
      margin-top: -290px;
    }
  }
</style>
