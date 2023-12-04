<template>
    <div>
        <h4 class="font-bold mb-2">Add new transaction</h4>

        <form action="#" class="flex flex-col gap-3" @submit.prevent="addTransaction">
            <div>
                <label>Title</label>
                <input type="text" placeholder="Enter title" class="border w-full h-10 pl-2 rounded-md" v-model="title">
            </div>
            <div>
                <label>Amount</label>
                <input type="text" placeholder="Enter amount" class="border w-full h-10 pl-2 rounded-md" v-model="amount">
            </div>
            <button type="submit" class="rounded-md bg-blue-700 text-white px-4 py-3">Add transaction</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from "vue-toastification";
const toast = useToast();

const title = ref('');
const amount = ref('');

const emit = defineEmits(['newTransaction']);

const addTransaction = () => {
    if ( !title.value || !amount.value ) {
        toast.error('Please fill the fileds!');
        return;
    }
    
    const transactionData = {
        title: title.value,
        amount: parseFloat(amount.value)
    }

    emit('newTransaction', transactionData);

    title.value = '';
    amount.value = '';
}
</script>