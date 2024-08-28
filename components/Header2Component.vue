<template>
  <header
    :class="['section-header', 'site-header', 'fixed', 'top-0', 'z-30', 'w-full', 'py-2', { 'is-black': !isScrolled }, { 'bg-black': isScrolled }]"
  >
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-x-10">
          <!-- Header Logo -->
          <NuxtLink to="/" class="h-auto w-auto">
            <img
              :src="isScrolled ? '/tukangbikin.svg' : '/tukangbikin.svg'"
              alt="logo-buttery-white"
              width="121"
              height="24"
            />
          </NuxtLink>
        </div>
        <!-- Hamburger Icon for Mobile -->
        <button
          @click="toggleMenu"
          class="lg:hidden absolute right-0 px-3 py-2 border rounded text-white border-white z-50"
          style="
            margin-top: 0px;
            height: 28px;
            font-size: 10px;
            margin-right: 10px;
          "
        >
          X
        </button>
        <!-- Mobile Menu -->
        <div
          :class="menuOpen ? 'flex' : 'hidden'"
          class="lg:hidden flex-col items-center justify-center absolute top-14 left-0 w-full bg-black text-white py-5"
          style="margin-top: 250px"
        >
          <NuxtLink 
            class="block py-2" 
            style="margin-top: -10px" 
            to="/"
          >
            Beranda
          </NuxtLink>
          <NuxtLink 
            class="block py-2" 
            style="margin-top: -10px" 
            to="/layanan"
          >
            Layanan
          </NuxtLink>
          <NuxtLink 
            class="block py-2" 
            style="margin-top: -10px" 
            to="/portfolio"
          >
            Portfolio
          </NuxtLink>
          <NuxtLink 
            class="block py-2" 
            style="margin-top: -10px" 
            to="/cara-pemesanan"
          >
            Cara Pemesanan
          </NuxtLink>
          <NuxtLink
            class="block py-2"
            style="margin-top: -10px"
            to="/tentang-kami"
          >
            Tentang Kami
          </NuxtLink>
        </div>
        <!-- Header Right Block -->
        <div class="lg:flex items-center gap-x-6">
          <div class="menu-block-wrapper">
            <nav class="menu-block" id="append-menu-header">
              <ul class="site-menu-main flex flex-col lg:flex-row">
                <li
                  :class="['nav-link-item', 'drop-trigger', 'text-colorDark', 'rounded-none', 'border', 'border-transparent', { 'lg:text-black': !isScrolled }, { 'lg:text-white': isScrolled }]"
                >
                  <NuxtLink to="#beranda">Beranda</NuxtLink>
                </li>
                <li
                  :class="['nav-link-item', 'drop-trigger', 'text-colorDark', 'rounded-none', 'border', 'border-transparent', { 'lg:text-black': !isScrolled }, { 'lg:text-white': isScrolled }]"
                >
                  <NuxtLink to="#tipe-kamar">Tipe Kamar</NuxtLink>
                </li>
                <li
                  :class="['nav-link-item', 'drop-trigger', 'text-colorDark', 'rounded-none', 'border', 'border-transparent', { 'lg:text-black': !isScrolled }, { 'lg:text-white': isScrolled }]"
                >
                  <NuxtLink to="#fasilitas">Fasilitas</NuxtLink>
                </li>
                <li
                  :class="['nav-link-item', 'drop-trigger', 'text-colorDark', 'rounded-none', 'border', 'border-transparent', { 'lg:text-black': !isScrolled }, { 'lg:text-white': isScrolled }]"
                >
                  <NuxtLink to="#tentang-kami">Tentang Kami</NuxtLink>
                </li>
                <li
                  :class="['nav-link-item', 'drop-trigger', 'text-colorDark', 'rounded-none', 'border', 'border-transparent', { 'lg:text-black': !isScrolled }, { 'lg:text-white': isScrolled }]"
                >
                  <NuxtLink to="#testimoni">Testimoni</NuxtLink>
                </li>
              </ul>
            </nav>
          </div>
          <NuxtLink
            class="btn-primary relative hidden px-[30px] py-[10px] sm:inline-flex"
            to="/contact-us"
            >Reservasi Online</NuxtLink
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      isScrolled: false, // Track if the page is scrolled
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    handleScroll() {
      // Detect if the scroll position is past a certain point
      this.isScrolled = window.scrollY > 50;
    },
  },
  mounted() {
    // Add scroll event listener when the component is mounted
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // Remove scroll event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
.is-black {
  background-color: transparent !important;
}

.bg-black {
  background-color: black !important;
  transition: background-color 0.3s ease;
}
</style>
