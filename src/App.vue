<template>
  <div>
    
    <Header />

    <div class="container max-w-xl mx-auto">
      <Balance :balance="+totalBalance" />

      <IncomeExpenses :income="+income" :expenses="+expenses" />

      <TransactionList :transactions="transactions" @transactionRemoved="handleDelete" />

      <AddTransaction @newTransaction="handleTransaction" />
    </div>
  
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Balance from './components/Balance.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';

import { ref , computed , onMounted } from 'vue';

import { useToast } from "vue-toastification";
const toast = useToast();

/*const transactions = ref([
  { id: 1, title: 'Flower', amount: -19.99 },
  { id: 2, title: 'Education', amount: -199.99 },
  { id: 3, title: 'Work', amount: 2119.99 },
  { id: 4, title: 'Freelance', amount: -1239.10 },
]);*/

const transactions = ref([]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if ( savedTransactions ) {
    transactions.value = savedTransactions;
  }
})

// Get balance
const totalBalance = computed(() => {
  return transactions.value.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0).toFixed(2);
});

// Get income
const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => {
      return total + transaction.amount;
  }, 0)
  .toFixed(2);
});

// Get expenses
const expenses = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => {
      return total + transaction.amount;
  }, 0)
  .toFixed(2);
});

// Add transaction
const handleTransaction = (transactionData) => {
  transactions.value.push({
    id: generateId(),
    title: transactionData.title,
    amount: transactionData.amount
  });

  saveToStorage();

  toast.success('Transaction added!')
};

// Generate ID
const generateId = () => {
  return Math.floor(Math.random() * 1000);
};

// Delete transaction
const handleDelete = (id) => {
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);

  saveToStorage();

  toast.success('Transaction deleted!');
};

// Save to localstorage
const saveToStorage = () => {
  localStorage.setItem('transactions' , JSON.stringify(transactions.value));
}
</script>