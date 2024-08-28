<!-- @format -->

<template>
  <footer class="section-footer">
    <div class="bg-black">

      <!-- Footer Bottom -->
      <div class="py-[35px]">
        <!-- Section Container -->
        <div class="container">
          <div
            class="flex flex-wrap justify-center gap-x-[30px] gap-y-4 lg:justify-between"
          >
            <NuxtLink href="/">
              <img
                src="/tukangbikin.svg"
                alt="logo-buttery-white"
                width="121"
                height="24"
                loading="lazy"
              />
            </NuxtLink>

            <!-- Copyright Text -->
            <div class="text-colorButteryWhite">
              &copy; GRAND HOTEL MALABAR
            </div>
            <!-- Copyright Text -->
          </div>
        </div>
        <!-- Section Container -->
      </div>
      <!-- Footer Bottom -->
    </div>
  </footer>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useToast } from "vue-toastification";

const contact = ref({
  name: "",
  email: "",
  phone_number: "",
  message: "",
});

const toast = useToast();

const handleSubmit = async () => {
  try {
    await axios.post(
      "http://localhost:4000/api/contacts/submit",
      contact.value
    );

    toast.success("Message sent successfully!");
    // Reset form input fields
    contact.value = {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    };
  } catch (error) {
    console.error("Error sending message:", error);
    if (error.response) {
      console.log("Response data:", error.response.data);
      console.log("Response status:", error.response.status);
      console.log("Response headers:", error.response.headers);
    }

    toast.error("Failed to send message.");
  }
};
</script>

<style scoped>
  @media (min-width: 1400px) {
    .title-footer {
      font-size: 52px !important;
    }
  }
</style>