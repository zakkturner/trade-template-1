<template>
    <li
        class="odd:bg-company-blue-default odd:text-company-blue-light even:text-company-blue-default even:bg-company-blue-light"
    >
        <div>
            <img :src="`/storage/${service.img_url}`" />
        </div>
        <div class="relative px-6">
            <div class="absolute bg-white w-20 h-20 -top-10"></div>
            <div class="pt-16 pb-10">
                <div class="p">
                    <h4 class="text-xl text-white">{{ service.name }}</h4>
                </div>
                <div class="mb-10">
                    <p class="font-bold">
                        {{ service.description }}
                    </p>
                </div>
                <animated-link href="/services">Read More ></animated-link>
            </div>
        </div>
    </li>
</template>

<script setup>
import AnimatedLink from "../UI/AnimatedLink.vue";

defineProps({
    service: {
        Object,
    },
});
</script>

<style lang="scss" scoped></style>
