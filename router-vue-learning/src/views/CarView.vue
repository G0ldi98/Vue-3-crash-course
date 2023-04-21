<script setup>
    import {useRoute, RouterView, useRouter} from 'vue-router'
    import cars from '../data/cars.json'

    import ContactView from './ContactView.vue';

    const route = useRoute()
    const router = useRouter()

    const car = cars.find(car => car.id === parseInt(route.params.id))

    const showContact = () => {
        if (car.id === 3) return;
        
        return router.push(`/cars/${car.id}/contact`)
    }
</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <button @click="showContact">Click me for Contact</button>
        <RouterView />
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>