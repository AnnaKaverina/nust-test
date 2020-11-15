<template>
    <div class="wrapper">
        <div class="error">
            <h1 class="error__title">An error has occurred</h1>
            <span class="error__text">Please refresh the page</span>
            <button class="error__refresh-button button">Reload page</button>
        </div>
    </div>
</template>

<script>
import styleError from '@/assets/sass/error.sass';
import main from '@/assets/sass/main.sass';

export default {
    props: ['error'],
    middleware: [
        function({ redirect }) {
        return redirect(404, '/error');
        },
    ],
}
</script>