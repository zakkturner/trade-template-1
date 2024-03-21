<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { reactive, ref, watch } from "vue";
import gsap from "gsap";
import MainHeader from "@/Components/Headers/MainHeader.vue";
import MobileHeader from "@/Components/Headers/MobileHeader.vue";
import Hero from "@/Components/Hero.vue";
defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

const isOpen = ref(false);
const main = ref(null);
function toggleHeader() {
    isOpen.value = !isOpen.value;
}
watch(
    () => isOpen.value,
    (newValue, oldValue) => {
        if (newValue) {
            gsap.fromTo(
                main.value,
                {
                    x: 0,
                },
                { x: 160, duration: 1.5, ease: "power3.inOut" }
            );
        }
    }
);
</script>

<template>
    <Head title="Home" />
    <div class="relative bg-[#2869a1]">
        <main-header :isOpen="isOpen"></main-header>
        <main ref="main" class="h-screen relative">
            <mobile-header @toggle-header="toggleHeader"></mobile-header>
            <div></div>
            <hero></hero>
        </main>
    </div>
</template>

<style>
.bg-dots-darker {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
    .dark\:bg-dots-lighter {
        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
    }
}
</style>
