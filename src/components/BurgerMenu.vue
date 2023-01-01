<script>
    import { Slide } from 'vue3-burger-menu';
    import NavBarContact from "../components/NavBarContact.vue";
    export default {
        components: {
            Slide
        }
    }
</script>

<template>
<div class="mx-7">
    <Slide :closeOnNavigation="true">
        <router-link id="home" to="/">
            <span>Home</span>
        </router-link>
        <router-link id="publications" to="/publications">
            <span>Publications</span>
        </router-link>
        <router-link id="projects" to="/projects">
            <span>Projects</span>
        </router-link>
        <router-link id="professions" to="/professions">
            <span>Professions</span>
        </router-link>
        <router-link id="about" to="/about">
            <span>About</span>
        </router-link>
        <hr class="mt-10 border-yellow border-t-2">
        <span class="inline-flex">
            <a href="https://www.linkedin.com/in/andrewtaehonkim/" target=blank><font-awesome-icon icon="fa-brands fa-linkedin" class="mr-3 h-8 text-black hover:text-yellow transition duration-300 ease-in-out" /></a>
            <a href="https://github.com/AndrewTaehonKim" target=blank><font-awesome-icon icon="fa-brands fa-orcid" class="mr-3 h-8 text-black hover:text-yellow transition duration-300 ease-in-out" /></a>
            <a href="https://orcid.org/0000-0003-2379-1178" target=blank><font-awesome-icon icon="fa-brands fa-github" class="mr-3 h-8 text-black  hover:text-yellow transition duration-300 ease-in-out" /></a>
            <a href="../src/assets/resume.pdf" target=blank><font-awesome-icon icon="fa-solid fa-id-card" class="mr-3 h-8 text-black  hover:text-yellow transition duration-300 ease-in-out" /></a>
        </span>
    </Slide>
</div>
    
</template>

<style>
     .bm-burger-button {
        width: 30px;
        height: 25px;
        margin-top: -10px;
        margin-left: -10px;
        cursor: pointer;
    }
    .bm-burger-bars {
      background-color: black;
    }
    .bm-cross {
      background: white;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    .bm-menu {
        background: linear-gradient(#ABD699, #75C9B7);
    }
    .bm-item-list > * > span {
      margin-left: 10%;
    }
</style>