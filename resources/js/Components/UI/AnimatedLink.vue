<template>
    <div @mouseenter="enterAnimation" @mouseleave="exitAnimation" ref="link">
        <a :href="href"><slot /></a>
    </div>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
defineProps({
    href: String,
});
const link = ref(null);
function enterAnimation() {
    gsap.to(link.value, { y: -10, duration: 0.4, ease: "power3.inOut" });
}
function exitAnimation() {
    gsap.to(link.value, { y: 0, duration: 0.4, ease: "power3.inOut" });
}
</script>

<style lang="scss" scoped></style>
