<template>
    <a :href="'https://doi.org/'+DOI"  target=blank>
    <!-- Computer -->
        <div class="slide hidden lg:grid grid-cols-7 grid-rows-1 h-1/4 align-middle justify-center my-10">
            <!-- Image Side -->
            <div class="flex justify-end col-start-2 col-span-2">
                <img :src="'/src/assets/publications/'+image" alt="" class="max-h-56 my-auto">
            </div>
            <!-- Content Side -->
            <div class="flex-col col-start-4 col-span-3 rounded-md pl-8 place align-middle">
                <div class="grid grid-cols-5 grid-rows-6">
                    <!-- Heading -->
                    <div class="hline h-full inline-flex col-start-1 row-start-1 col-span-6 row-span-2 border-b-2 border-blue w-full">
                        <h1 class="font-bold text-xl text-left mt-auto">{{title}}</h1>
                    </div>
                    <!-- Description -->
                    <p class="text-left text-lg col-start-1 row-start-3 col-span-6 row-span-2 ">{{description}}</p>
                    <!-- Key Words -->
                    <div class="inline-flex text-md col-start-1 row-start-5 col-span-6 row-span-1 justify-self-center my-auto">
                        <p :key="word" v-for="word in keywords" class="mx-2"><font-awesome-icon icon="fa-regular fa-star" class="text-green mr-1" />{{word}}</p>
                    </div>
                    <!-- Meta Data -->
                    <div class="grid grid-cols-5 mt-2 col-start-1 row-start-6 col-span-6 row-span-1">
                        <p class="font-semibold text-sm col-span-4 text-left">{{journal}}</p>
                        <h2 class="text-sm col-start-5 text-right">{{date}}</h2>
                    </div>
                </div>
            </div>
        </div>
    <!-- Phone -->
    <div class="slide flex-col lg:hidden w-screen h-1/4 align-middle justify-center my-10 px-4">
        <!-- Image Side -->
        <img :src="'/src/assets/publications/'+image" alt="" class="max-h-56 my-auto mx-auto">
        <!-- Content Side -->
        <div class="flex-col col-start-4 col-span-3 rounded-mdplace align-middle">
                <!-- Heading -->
                <div class="hline inline-flex border-b-2 border-blue">
                    <h1 class="font-bold text-xl text-left mt-auto">{{title}}</h1>
                </div>
                <!-- Description -->
                <p class="text-left text-md mt-2">{{description}}</p>
                <!-- Key Words -->
                <div class="inline-flex justify-self-center my-4">
                    <div :key="word" v-for="word in keywords" class="mx-2 inline-flex">
                        <font-awesome-icon icon="fa-regular fa-star" class="text-green mr-1 my-auto" />
                        <div class="text-left break-normal text-xs my-auto">{{word}}</div>
                    </div>
                </div>
                <!-- Meta Data -->
                <div class="grid grid-cols-5 mt-2">
                    <p class="font-semibold text-sm col-span-4 text-left">{{journal}}</p>
                    <h2 class="text-sm col-start-5 text-right">{{date}}</h2>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        props: ['title', 'date', 'journal', 'publisher', 'DOI', 'image', 'description', 'firstAuthor', 'type', 'keywords']
    }
</script>

<style scoped>
    .slide:hover .hline {
        border-color: #FFE26A;
    }
    .hline {
        transition: 0.3s;
        transition-timing-function: ease-in-out;
    }
</style>