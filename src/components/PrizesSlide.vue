<template>
    <a :href="link"  target=blank>
    <!-- Computer -->
        <div class="slide hidden lg:grid grid-cols-7 grid-rows-1 h-1/4 align-middle justify-center mb-10">
            <!-- Image Side -->
            <div class="flex justify-end col-start-2 col-span-2">
                <img :src="'/prizes/'+image" alt="" class="max-h-56 my-auto">
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
                        <p class="mx-2"><font-awesome-icon icon="fa-regular fa-star" class="text-green mr-1" />${{amount}}</p>
                    </div>
                    <!-- Meta Data -->
                    <div class="grid grid-cols-5 mt-2 col-start-1 row-start-6 col-span-6 row-span-1">
                        <a :href="companyLink" target=blank class=" col-start-1 col-span-4 "><h2 class="text-sm font-semibold text-left">{{company}}</h2></a>
                        <h2 class="text-sm col-start-5 text-right">{{date}}</h2>
                    </div>
                </div>
            </div>
        </div>
    <!-- Phone -->
    <div class="slide flex-col lg:hidden w-screen h-1/4 align-middle justify-center my-10 px-4">
        <!-- Image Side -->
        <img :src="'/prizes/'+image" alt="" class="max-h-56 my-auto mx-auto">
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
                    <div class="mx-2 inline-flex">
                        <font-awesome-icon icon="fa-regular fa-star" class="text-green mr-1 my-auto" />
                        <div class="text-left break-normal text-xs my-auto">${{amount}}</div>
                    </div>
                </div>
                <!-- Meta Data -->
                <div class="grid grid-cols-5 mt-2">
                    <a :href="companyLink" target=blank class=" col-start-1 col-span-4"><h2 class="text-sm font-semibold text-left">{{company}}</h2></a>
                    <h2 class="text-sm col-start-5 text-right">{{date}}</h2>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        props: ['title', 'date', 'link', 'image', 'description', 'company', 'companyLink', 'amount']
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