<template>
    <div class="flex items-center justify-center gap-4 my-4 rounded-md border p-3">
        <div>
            <h4>Income</h4>
            <p class="font-bold text-green-400">+${{ income }}</p>
        </div>

        <div>
            <h4>Expense</h4>
            <p class="font-bold text-red-400">${{ expenses }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props =  defineProps({
    income: {
        type: Number,
        required: true,
    },

    expenses: {
        type: Number,
        required: true,
    },
});
</script>