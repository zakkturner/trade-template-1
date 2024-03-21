<template>
    <div class="bg-[rgba(255,255,255,.2)] w-full shadow-lg md:hidden">
        <div class="flex items-center px-6">
            <div class="mr-2">
                <div @click="$emit('toggleHeader')" class="w-6">
                    <div class="h-1 bg-white my-1"></div>
                    <div class="h-1 bg-white my-1"></div>
                    <div class="h-1 bg-white my-1"></div>
                </div>
            </div>
            <div class="w-20">
                <img
                    src="http://prohauz.local/wp-content/uploads/2018/09/logo-white.png"
                    alt="Logo"
                    srcset=""
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from "gsap";
</script>

<style lang="scss" scoped></style>
