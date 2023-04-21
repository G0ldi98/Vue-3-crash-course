<script setup>
import {defineProps} from 'vue'
import { RouterLink } from 'vue-router';

const {quiz, numberOfCorrectAnswers} = defineProps(['quiz', 'numberOfCorrectAnswers'])

</script>

<template>
    <div class="results">
        <h1>Result</h1>
        <p>You got {{ numberOfCorrectAnswers }} out of {{ quiz.questions.length }} correct</p>
        <RouterLink to="/">Go back</RouterLink>
    </div>
</template>

<style scoped>
.results {
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 30px;
}

h1 {
    font-size: 80px;
}
</style>