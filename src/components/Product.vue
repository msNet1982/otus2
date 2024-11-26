<template>
    <q-card class="my-card">
        <q-card-section>
            <div class="text-subtitle2 text-weight-bold text-center">{{ product_info.title }}</div>
        </q-card-section>

        <img :src="product_info.image" class="q-pa-md">

        <q-card-section>
            <div class="text-subtitle2"><span class="text-weight-bold">Description:</span> {{ product_info.description }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <span class="text-weight-bold">Category:</span> {{ product_info.category }}
        </q-card-section>

        <q-card-section class="q-pt-none">
            <span class="text-weight-bold">Price:</span> {{ product_info.price }}
        </q-card-section>

        <q-card-section class="q-pt-none">
            <span class="text-weight-bold">Rating:</span> {{ product_info.rating.rate }}
        </q-card-section>

        <q-card-section class="q-pt-none">
            <span class="text-weight-bold">Count:</span> {{ product_info.rating.count }}
        </q-card-section>
    </q-card>
</template>


<script setup>
    const props = defineProps(['product_info'])
</script>


<style scoped>
.my-card {
    width: 100%;
    max-width: 250px;
}
</style>