<template>
    <router-link :to="name">
        <div class="mx-3 text-lg border-b-2 text-black hover:text-blue border-yellow hover:border-teal transition ease-in-out duration-300"><b>{{name}}</b></div>
    </router-link>
</template>

<script>
export default {
    props: ['name']
}
</script>