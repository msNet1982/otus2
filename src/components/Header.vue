<template>
    <div class="row justify-end q-gutter-md">
        <q-btn color="primary" label="Оформить доставку" class="btn" no-caps @click="isShowSendOrder = true" />
        <Input text="Поиск по названию" customType="text" v-model="searchTitle" />
        <Input text="Максимальная цена" customType="number" v-model="searchMaxPrice" />
    </div>

    <ModalSendOrder v-if="isShowSendOrder" :isShowSendOrder="isShowSendOrder" @closeModal="isShowSendOrder=false" />
</template>

<script setup>
    import { ref } from 'vue' 
    import Input from './Input.vue'
    import ModalSendOrder from './ModalSendOrder.vue'

    const searchTitle = defineModel('searchTitle')
    const searchMaxPrice = defineModel('searchMaxPrice')
    const isShowSendOrder = ref(false)
</script>

<style lang="css" scoped>
    .btn {
        width: 175px;
    }
</style>