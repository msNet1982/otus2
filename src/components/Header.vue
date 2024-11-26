<template>
    <div class="row justify-end q-gutter-md">
        <q-btn color="primary" label="Добавить товар" class="btn" no-caps @click="isShowAddProduct = true" />
        <q-btn color="primary" label="Оформить доставку" class="btn" no-caps @click="isShowSendOrder = true" />
        <Input text="Поиск по названию" customType="text" v-model="searchTitle" />
        <Input text="Максимальная цена" customType="number" v-model="searchMaxPrice" />
    </div>

    <ModalSendOrder v-if="isShowSendOrder" :isShowSendOrder="isShowSendOrder" @closeModal="isShowSendOrder=false" />
    <ModalAddProduct v-if="isShowAddProduct" :isShowAddProduct="isShowAddProduct" @closeModal="isShowAddProduct=false" @addProduct="addProduct" />
</template>

<script setup>
    import { ref } from 'vue' 
    import Input from './Input.vue'
    import ModalSendOrder from './ModalSendOrder.vue'
    import ModalAddProduct from './ModalAddProduct.vue';

    const emit = defineEmits(['addProduct'])

    const searchTitle = defineModel('searchTitle')
    const searchMaxPrice = defineModel('searchMaxPrice')
    const isShowSendOrder = ref(false)
    const isShowAddProduct = ref(false)

    const addProduct = (newProduct) => {
        emit("addProduct", newProduct)
    }
</script>

<style lang="css" scoped>
    .btn {
        width: 175px;
    }
</style>