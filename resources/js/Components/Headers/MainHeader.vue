<template>
    <header
        ref="menu"
        class="-left-44 fixed md:absolute md:w-full md:left-0 h-screen md:h-full md:p-5 bg-[#51acfb] md:bg-transparent z-999"
    >
        <div
            class="text-center px-10 md:bg-[rgba(255,255,255,.2)] md:flex md:justify-between md:items-center md:p-5 md:shadow-lg md:rounded"
        >
            <div class="md:w-10">
                <application-logo></application-logo>
            </div>
            <nav>
                <ul class="md:flex">
                    <li>
                        <a class="text-white" href="#">Home</a>
                    </li>
                    <li>
                        <a class="text-white" href="#">Plumbing</a>
                    </li>
                    <li>
                        <a class="text-white" href="#">About Us</a>
                    </li>

                    <li>
                        <a class="text-white" href="#">Book Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { watch, ref, onMounted } from "vue";
import gsap from "gsap";
import ApplicationLogo from "../ApplicationLogo.vue";

const props = defineProps({
    isOpen: Boolean,
});
const isOpen = ref(null);

const menu = ref(null);
watch(
    () => props.isOpen,
    (newValue, oldValue) => {
        if (newValue) {
            gsap.fromTo(
                menu.value,
                {
                    x: 0,
                },
                { x: "100%", duration: 1.5, ease: "power3.inOut" }
            );
        }
    }
);
</script>

<style lang="scss" scoped></style>
