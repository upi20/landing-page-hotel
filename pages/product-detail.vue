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
                <h1>Our Product</h1>
                <!-- Breadcrumb Nav -->
                <ul class="breadcrumb-nav">
                  <li>
                    <NuxtLink href="/">Home</NuxtLink>
                  </li>
                  <li>Our Product</li>
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
      <!-- ...::: Portfolio Details Section Start :::... -->
      <section class="section-portfolio">
        <!-- Section Space -->
        <div class="section-space">
          <!-- Section Container -->
          <div class="container">
            <!-- Portfolio Hero Image Block -->
            <div
              class="overflow-hidden rounded-[31px] border-[5px] border-black"
            >
              <NuxtImg
                src="/images/th-1/project-details-hero-img.jpg"
                alt="project-details-hero-img"
                class="w-full h-auto"
                loading="lazy"
              />
            </div>
            <!-- Portfolio Hero Image Block -->

            <!-- Project Details Info List -->
            <ul
              class="mb-10 mt-10 flex flex-wrap justify-between gap-x-5 gap-y-2 md:mb-[60px] lg:mb-20"
            >
              <li class="flex items-center gap-x-4">
                <h4>Client:</h4>
                <span>Alfado Company,UK</span>
              </li>
              <li class="flex items-center gap-x-4">
                <h4>Date:</h4>
                <span>June 16, 2024</span>
              </li>
              <li class="flex items-center gap-x-4">
                <h4>Duration:</h4>
                <span>Two Months</span>
              </li>
              <li class="flex items-center gap-x-4">
                <h4>Cost:</h4>
                <span>50k USD</span>
              </li>
            </ul>
            <!-- Project Details Info List -->

            <!-- Content Block -->
            <div
              class="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_minmax(0,440px)]"
            >
              <!-- Content Left Block -->
              <div>
                <!-- Section Block -->
                <div class="mb-10 section-block">
                  <h2 class="mb-6 jos">
                    How we initiate and resolve the project
                    <span>
                      <NuxtImg
                        src="/elemnts/shape-light-lime-5-arms-star.svg"
                        alt="shape-light-lime-5-arms-star"
                        width="74"
                        height="70"
                        class="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                        loading="lazy"
                      />
                    </span>
                  </h2>

                  <p class="section-para">
                    The project began when a leading technology identified a
                    market need for an innovative and energy-efficient smart
                    home thermostat.
                  </p>
                </div>
                <!-- Section Block -->

                <!-- Text List -->
                <ul class="flex flex-col gap-y-8">
                  <li>
                    <h4 class="mb-4">Concept Development:</h4>
                    <p>
                      Based on the market research findings, the design team
                      began developing conceptual designs for the smart
                      thermostat. They brainstormed ideas, created mood boards,
                      and explored various design directions.
                    </p>
                  </li>
                  <li>
                    <h4 class="mb-4">Manufacturing and Production:</h4>
                    <p>
                      Once the design was finalized, the project transitioned to
                      the manufacturing phase. Materials, suppliers, and
                      production processes were carefully selected to ensure
                      quality and cost-effectiveness.
                    </p>
                  </li>
                  <li>
                    <h4 class="mb-4">Success and Impact:</h4>
                    <p>
                      The smart home thermostat quickly gained popularity and
                      was well-received in the market. The project was a
                      success, benefiting both the company and the environment.
                    </p>
                  </li>
                </ul>
                <!-- Text List -->
              </div>
              <!-- Content Left Block -->
              <!-- Content Right Block -->
              <div
                class="mx-auto max-w-[450px] overflow-hidden rounded-[23px] border-[5px] border-black lg:mx-0 lg:max-w-full"
              >
                <NuxtImg
                  src="/images/th-1/portfolio-content-img.jpg"
                  alt="portfolio-content-img"
                  width="456"
                  height="736"
                  class="object-cover w-full h-auto lg:h-full"
                  loading="lazy"
                />
              </div>
              <!-- Content Right Block -->
            </div>
            <!-- Content Block -->
          </div>
          <!-- Section Container -->
        </div>
        <!-- Section Space -->
      </section>
      <!-- ...::: Portfolio Details Section End :::... -->
    </main>
    <!-- Main Wrapper End -->

    <!-- ...::: Team Section End :::... -->
    <!-- Footer Section Start -->
    <FooterComponent />
    <!-- Footer Section End -->
  </div>
</template>
