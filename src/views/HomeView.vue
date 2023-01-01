<script setup>
  import Bubble from "../components/BubbleItems.vue"
</script>

<template>
  <!-- Desktop -->
  <div class="hidden lg:block mt-3">
    <!-- 3 Column Format -->
    <h1 class="font-extrabold text-3xl -mt-10">Inquisitive Researcher & <br> Interdisciplinary Engineer</h1>
    <div class="inline-flex w-full justify-center mt-10">
      <!-- Left Column -->
      <div class="flex-column w-1/3 my-auto text-left">
        <div class="w-3/5 ml-auto">
          <span>
            <h1 class="font-bold text-gray-400 text-lg text-right mr-2 border-b-2 border-yellow">RESEARCH INTERESTS</h1>
            <div  class="flex flex-wrap justify-end">
              <Bubble name='Next-Generation Batteries' bgcolor1='#75C9B7' bgcolor2='#ABD699' />
              <Bubble name='Carbon Nanomaterials' bgcolor1='#ABD699' bgcolor2='#75C9B7' />
              <Bubble name='Quantum Dots' bgcolor1='#75C9B7' bgcolor2='#ABD699' />
              <Bubble name='Supercapacitors' bgcolor1='#ABD699' bgcolor2='#75C9B7' />
            </div>
          </span>
          <span>
            <h1 class="font-bold text-gray-400 text-lg text-right mr-2 border-b-2 border-yellow">SKILLS</h1>
            <div  class="flex flex-wrap justify-end">
              <Bubble name='Python Programming' bgcolor1='#ABD699' bgcolor2='#75C9B7' />
              <Bubble name='Computational Chemistry' bgcolor1='#75C9B7' bgcolor2='#ABD699' />
              <Bubble name='Web Development' bgcolor1='#ABD699' bgcolor2='#75C9B7' />
              <Bubble name='Machine Learning' bgcolor1='#75C9B7' bgcolor2='#ABD699' />
            </div>
          </span>
        </div>
      </div>
      <!-- Center Column -->
      <div class="w-1/3 my-auto">
        <div class="flex-column justify-center">
          <img src="/src/assets/home/portrait.png" alt="" class="w-2/3 rounded-t-full mx-auto mb-10"  style="background: linear-gradient(#ABD699, #75C9B7)">
          <!-- Who am I? -->
          <div>
              <h1 class="text-lg font-semibold px-4 pb-2">Andrew stays on top of cutting-edge research in <b> nanomaterials </b> and is eager to use his engineering perspective to create more efficient and eco-friendly<b> battery and energy storage </b> technologies.</h1>
          </div>
        </div>
      </div>
      <!-- Right Column -->
      <div class="flex-column w-1/3 text-left my-auto">
        <div class="w-1/3">
          <span>
            <h1 class="font-bold text-gray-400 text-lg border-b-2 border-yellow">PUBLICATIONS</h1>
             <router-link to="/publications"><p class="font-bold text-7xl mb-5"> {{Object.keys(publications).length}} </p></router-link> 
          </span>
          <span>
            <h1 class="font-bold text-gray-400 text-lg border-b-2 border-yellow">ENGINEERING <br>PROJECTS</h1>
            <router-link to="/projects"><p class="font-bold text-6xl mb-5"> {{Object.keys(projects).length}} </p></router-link> 
          </span>
          <span>
            <h1 class="font-bold text-gray-400 text-lg border-b-2 border-yellow">AWARDS & <br>SCHOLARSHIPS</h1>
            <p class="font-bold text-4xl mb-5"> $29,000 </p>
          </span>
          <span>
            <h1 class="font-bold text-gray-400 text-lg border-b-2 border-yellow">Personality Type</h1>
            <p class="font-bold text-4xl mb-5"> ENTJ-A </p>
          </span>

        </div>
      </div>
    </div>
    <!-- Publishers -->
    <div class="flex justify-center">
      <div class="inline-flex items-center justify-between mx-auto">
        <img src="/src/assets/publishers/acs.png" alt="" class="h-12 mx-3 grayscale">
        <img src="/src/assets/publishers/elsevier.png" alt="" class="h-20 mx-3  grayscale">
        <img src="/src/assets/publishers/wiley.png" alt="" class="h-5 mx-3 grayscale">
        <img src="/src/assets/publishers/springer.png" alt="" class="h-10 mx-3 grayscale">
        <img src="/src/assets/publishers/mdpi.png" alt="" class="h-16 mx-3 grayscale">
        <img src="/src/assets/publishers/asme.png" alt="" class="h-12 mx-3 grayscale">
        <img src="/src/assets/publishers/IEEE.png" alt="" class="h-10 mx-3 grayscale">
      </div>
    </div>
  </div>
  
  <!-- Phone -->
  <div class="flex-column lg:hidden">
    <!-- Who am I? -->
      <h1 class="font-extrabold text-2xl mb-4 mx-2">Inquisitive Researcher & <br> Interdisciplinary Engineer</h1>

    <!-- Profile -->
    <div class="grid grid-cols-6 grid-rows-6 h-full lg:hidden">
        <!-- Center Image -->
        <div class="row-start-1 row-span-4 col-span-full mb-auto">
            <img src="/src/assets/home/portrait.png" alt="" class="w-5/6 rounded-t-full mx-auto" style="background: linear-gradient(#ABD699, #75C9B7);">
        </div>
        <!-- Publications -->
        <div class="flex-column col-start-1 col-span-2 row-start-1 row-span-1 mt-auto mx-2 text-center">
          <router-link to="/publications">
            <h1 class="text-lg font-bold border-black border-2 rounded-md text-gra">Publications</h1>
            <h2 class="text-4xl font-extrabold" >{{Object.keys(publications).length}}</h2>
          </router-link>
        </div>
        <!-- Projects -->
        <div class="flex-column row-start-1 row-span-1 col-span-2 col-start-5 mt-auto mx-2 text-center">
          <router-link to="/projects">
            <h1 class="text-lg font-bold border-black border-2 rounded-md text-gra">Projects</h1>
            <h2 class="text-4xl font-extrabold" >{{Object.keys(projects).length}}</h2>
          </router-link>
        </div>
        <!-- Publishers -->
        <div class="row-start-5 row-span-2 col-span-full w-ful inline-flex items-center justify-center flex-wrap">
          <img src="/src/assets/publishers/acs.png" alt="" class="h-10 mx-2 grayscale">
          <img src="/src/assets/publishers/elsevier.png" alt="" class="h-16 mx-2  grayscale">
          <img src="/src/assets/publishers/wiley.png" alt="" class="h-5 mx-2 grayscale">
          <img src="/src/assets/publishers/springer.png" alt="" class="h-8 mx-3 grayscale">
          <img src="/src/assets/publishers/mdpi.png" alt="" class="h-16 mx-2 grayscale">
          <img src="/src/assets/publishers/asme.png" alt="" class="h-10 mx-2 grayscale">
          <img src="/src/assets/publishers/IEEE.png" alt="" class="h-8 mx-2 grayscale">
          
        </div>
      </div>
      <!-- Bio -->
      <div>
        <h1 class="text-lg font-semibold px-4 pb-2">Andrew stays on top of cutting-edge research in <b> nanomaterials </b> and is eager to use his engineering perspective to create more efficient and eco-friendly<b> battery and energy storage </b> technologies.</h1>
      </div>
      <!-- Research Interets -->
      <div>
        <h1 class="text-2xl font-semibold ">Research Interests</h1>
        <div class="flex justify-center flex-wrap">
          <Bubble name='Next-Generation Batteries' bgcolor1='#75C9B7' bgcolor2='#ABD699' />
          <Bubble name='Carbon Nanomaterials' bgcolor1='#ABD699' bgcolor2='#75C9B7' />
          <Bubble name='Quantum Dots' bgcolor1='#75C9B7' bgcolor2='#ABD699' />
          <Bubble name='Supercapacitors' bgcolor1='#ABD699' bgcolor2='#75C9B7' />
        </div>
      </div>
      <!-- Skills -->
      <div>
        <h1 class="text-2xl font-semibold">Skills</h1>
        <div class="flex justify-center flex-wrap">
          <Bubble name='Python Programming' bgcolor1='#ABD699' bgcolor2='#75C9B7' />
          <Bubble name='Computational Chemistry' bgcolor1='#75C9B7' bgcolor2='#ABD699' />
          <Bubble name='Web Development' bgcolor1='#ABD699' bgcolor2='#75C9B7' />
          <Bubble name='Machine Learning' bgcolor1='#75C9B7' bgcolor2='#ABD699' />
        </div>
      </div>
    </div>
</template>

<script>
  import publications from '../information/publications.json'
  import projects from '../information/projects.json'

</script>