<script setup>
    import NavBarLink from "../components/NavBarLink.vue"
    import NavBarContact from "../components/NavBarContact.vue"
    import BurgerMenu from "../components/BurgerMenu.vue"
    import Bubble from "../components/BubbleItems.vue"
</script>

<template>
    <!-- For Desktop -->
    <div class="hidden lg:inline-flex w-full h-full mb-12 justify-center">
        <!-- Links -->
        <div class="sm:w-1/2 xl:w-1/3 inline-flex h-full my-auto">
            <NavBarLink name='Publications'/>
            <NavBarLink name='Projects'/>
            <NavBarLink name='Professions'/>
            <NavBarLink name='About'/>
        </div>
        <!-- Home Icon -->
        <router-link to="/">
            <div class="w-1/2 inline-flex justify-center ">
                <div class="text-3xl my-auto mr-3 font-extrabold">Andrew</div>
                <img src="/src/assets/logo_home.png" alt="logo" class="mx-auto h-20 rounded-lg">
                <div class="text-3xl my-auto ml-3 font-extrabold">Kim</div>
            </div>
        </router-link>

        <!-- Contact Linkss -->
        <div class="w-1/3 h-full my-auto justify-end">
            <div class="inline-flex justify-end w-3/4">
                <NavBarContact name='linkedIn' link='https://www.linkedin.com/in/andrewtaehonkim/'/>
                <NavBarContact name='github' link='https://github.com/AndrewTaehonKim' />
                <NavBarContact name='ORCID' link='https://orcid.org/0000-0003-2379-1178' />
                <NavBarContact name='resume' link='../src/assets/resume.pdf'/>
            </div>
        </div>
    </div>
    <!-- For Phone -->
    <div class="inline-flex w-full lg:hidden mb-4">
        <!-- Menu -->
        <BurgerMenu />
        <!-- Home Icon -->
        <div class="inline-flex justify-center mx-auto">
            <div class="text-3xl my-auto mr-3 font-extrabold">Andrew</div>
            <router-link to="/"><img src="/src/assets/logo_home_small.png" alt="logo" class="mx-auto h-10 rounded-lg"></router-link>
            <div class="text-3xl my-auto ml-3 font-extrabold">Kim</div>
        </div>
    </div>
</template>