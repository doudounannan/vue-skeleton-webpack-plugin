<template>
    <div class="skeleton-wrapper">
        <header class="skeleton-header"></header>
        <section class="skeleton-block">
            Skeleton of Page1
        </section>
        <aa/>
    </div>
</template>

<script>
import aa from './aa.vue';

export default {
    name: 'skeleton',
    components: {
        aa
    },

    created() {
        console.log('debug-aa-created');
    }
};
</script>

<style scoped>

.skeleton-header {
    height: 52px;
    background: blue;
}

.skeleton-block {
    display: flex;
    flex-direction: column;
    padding-top: 8px;
}

</style>
