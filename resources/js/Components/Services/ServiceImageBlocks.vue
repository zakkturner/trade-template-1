<template>
    <ul class="flex absolute -top-48">
        <service-block
            v-for="service in services"
            :key="service.id"
            :service="service"
        ></service-block>
    </ul>
</template>

<script setup>
import ServiceBlock from "./ServiceBlock.vue";
defineProps({
    services: Array,
});
</script>

<style></style>
