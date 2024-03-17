<template>
    <header ref="menu" class="-left-40 fixed h-screen bg-[#51acfb]">
        <div class="text-center px-10">
            <div>
                <application-logo></application-logo>
                {{ isOpen }}
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Plumbing</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
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
            gsap.to(menu.value, {
                duration: 1,
                opacity: 1,
                css: { left: "20%" },
            });
        }
    }
);
</script>

<style lang="scss" scoped></style>
