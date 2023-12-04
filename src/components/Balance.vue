<template>
    <div>
        <h4 class="font-bold">Your balance</h4>
        <p>${{ balance}}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    balance: {
        type: Number,
        required: true,
    },
});
</script>