<template>
    <Head title="Home" />
    <div class="relative bg-[#2869a1]">
        <Header :isOpen="isOpen" />
        <main ref="main" class="h-screen relative">
            <MobileHeader @toggle-header="toggleHeader" />
            <slot />
        </main>
    </div>
</template>
<script setup>
import { reactive, ref, watch } from "vue";
import gsap from "gsap";
import Header from "@/Components/Headers/MainHeader.vue";
import MobileHeader from "@/Components/Headers/MobileHeader.vue";
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
