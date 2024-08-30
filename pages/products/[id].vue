<template>
    <div>
hello{{ id }}
    </div>
</template>

<script setup>
     const route = useRoute();
      const id = route.params.id;
</script>

<style  scoped>

</style>