<template>
    <div>
        <h3 class="text-xl">History</h3>

        <ul class="flex flex-col gap-10" v-for="item in transactions" :key="item.id">
            <li class="flex items-center justify-between my-3">
                <span class="w-1/3" :class="item.amount < 0 ? 'text-red-300' : 'text-green-400'">{{ item.title }}</span>
                <span class="w-1/3" :class="item.amount < 0 ? 'text-red-300' : 'text-green-400'">{{ item.amount }}</span>
                <button type="button" class="rounded-md border border-blue-100 px-4 py-3" @click="editTransaction(item)">Edit</button>
                <button type="button" class="rounded-md bg-blue-100 px-4 py-3" @click="deleteTransaction(item.id)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const emit = defineEmits(['transactionRemoved' , 'transactionEdit']);

const props = defineProps({
    transactions: {
        type: Array,
        required: true,
    }
});

// Delete transaction
const deleteTransaction = (id) => {
    emit('transactionRemoved', id);
}

// Edit transaction
const editTransaction = (item) => {
    emit('transactionEdit', item);
}
</script>