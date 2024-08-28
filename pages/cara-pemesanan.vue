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
        <div class="bg-black" style="background-image: url('/cara-pemesanan.png'); background-size: cover; background-position: center; height: 380px;">
        </div>
        <!-- Breadcrumb Background -->
      </section>
        <!-- ...::: Breadcrumb Section End :::... -->
        
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
                    <h2 class="jos title-portfolio">
                        Kenapa harus memilih TB-PERCETAKAN
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
                    <h2 class="jos title-info">
                        FAQ (Frequently Asked Questions)
                    </h2>
                    <p class="mb-10 mt-6 text-lg leading-[1.4] md:mb-14 lg:text-[21px]">
                        Untuk membantu menjawab pertanyaan yang sering diajukan, kami telah menyediakan FAQ yang mencakup berbagai topik terkait proses pemesanan, pembayaran, produksi, dan pengiriman. Jika Anda memiliki pertanyaan lain, jangan ragu untuk menghubungi tim customer service kami.
                    </p>
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
                        Berapa lama waktu produksi untuk setiap jenis produk?
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
                    Apakah ada minimum order untuk layanan percetakan tertentu?
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
                        Apa saja metode pembayaran yang diterima?
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
                        Bagaimana cara mengirimkan desain saya?
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
                        Apakah ada biaya tambahan untuk revisi desain?
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
                        Apakah ada biaya tambahan untuk revisi desain?
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
      <!-- Main Wrapper End -->
  
      <!-- ...::: Team Section End :::... -->
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
    const activeIndex = ref<number | null>(0);
    const isContentLoaded = ref(false);

    const toggleAccordion = (index: number) => {
        activeIndex.value = activeIndex.value === index ? null : index;
    };
</script>
<style scoped>
  @media (min-width: 1400px) {
    .title-portfolio {
      font-size: 52px !important;
      margin-top: -100px;
    }
    .title-info {
        font-size: 52px !important;
    }
  }
</style>