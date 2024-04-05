<template>
    <section
        class="before:bg-[url('assets/images/cross_grid.png')] before:w-full before:h-32 my-4 before:absolute no-repeat"
    >
        <div class="py-20 flex flex-col max-w-screen-xl mx-auto">
            <div class="relative h-96 mb-10 -top-50">
                <service-image-blocks
                    :services="services"
                ></service-image-blocks>
            </div>
            <service-slider></service-slider>
        </div>
    </section>
</template>

<script setup>
import ServiceImageBlocks from "./ServiceImageBlocks.vue";
import ServiceSlider from "./ServiceSlider.vue";

defineProps({ services: Object });
</script>

<style lang="scss" scoped></style>
