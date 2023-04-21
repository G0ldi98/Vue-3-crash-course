<script setup>
    import {defineProps, defineEmits} from 'vue'

    const emit = defineEmits(['selectOption'])

    const {question} = defineProps(['question'])

    const emitSelectedOption = (isCorrect) => {
        emit('selectOption', isCorrect)
    }
</script>


<template>
    <div class="question-container">
        <h1 class="question">
            {{ question.text }}
        </h1>
    </div>
    <div class="options-container">
        <div v-for="opt in question.options" :key="opt.id" class="option" @click="emitSelectedOption(opt.isCorrect)">
            <p class="option-label">{{ opt.label }}</p>
            <div class="option-value">
                <p>{{ opt.text }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    background-color: bisque;
    width: 60px;
    height: 60px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    background-color: rgb(233, 233, 233);
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 30px;
}
</style>
