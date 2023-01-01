<template>
    <!-- LinkedIn -->
    <a :href="link" target=blank v-if="name == 'linkedIn'"><font-awesome-icon icon="fa-brands fa-linkedin" class="mr-3 h-8 hover:text-yellow transition duration-300 ease-in-out" /></a>
    <!-- ORCID -->
    <a :href="link" target=blank v-if="name == 'ORCID'"><font-awesome-icon icon="fa-brands fa-orcid" class="mr-3 h-8 hover:text-yellow transition duration-300 ease-in-out" /></a>
    <!-- Github -->
    <a :href="link" target=blank v-if="name == 'github'"><font-awesome-icon icon="fa-brands fa-github" class="mr-3 h-8 hover:text-yellow transition duration-300 ease-in-out" /></a>
    <!-- CV -->
    <a :href="link" target=blank v-if="name == 'resume'"><font-awesome-icon icon="fa-solid fa-id-card" class="mr-3 h-8 hover:text-yellow transition duration-300 ease-in-out" /></a>
</template>

<script>
export default {
    props: ['name', 'link']
}
</script>