<script setup>
    import {defineProps} from 'vue'

    const {questionStatus, barPercentage} = defineProps(['questionStatus', 'barPercentage'])
</script>

<template>
    <header>
        <h4>Question {{ questionStatus }}</h4>
        <div class="bar">
            <div class="progress" :style="{width: barPercentage}"></div>
        </div>
    </header>
</template>

<style scoped>
header {
    margin-top: 20px;
}

header h4 {
    font-size: 30px;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}

.progress {
    width: 0%;
    height: 100%;
    background-color: bisque;
}
</style>