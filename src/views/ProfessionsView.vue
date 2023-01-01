<script setup>
  import Slide from "../components/ProfessionsSlide.vue"
</script>

<template>
    <div class="flex-col w-full mx-auto">
      <div class="text-3xl font-extrabold border-b-2 border-yellow lg:border-none pb-4 lg:pb-0">Professions</div>
      <div :key="profession" v-for="profession in myJson.filter(profession => profession.pin == true)">
        <Slide :title=profession.title :date=profession.date :image=
        profession.image :description=profession.description :keywords=profession.keywords :company=profession.company :companyLink=profession.companyLink />
        <div class="w-full lg:w-1/6 border-b-2 mx-auto border-teal -my-6"></div>
      </div>
      <div :key="profession" v-for="profession in myJson.filter(profession => profession.pin == false)">
        <Slide :title=profession.title :date=profession.date :image=profession.image :description=profession.description :keywords=profession.keywords :company=profession.company :companyLink=profession.companyLink :link=profession.link />
        <div class="w-full lg:w-1/6 border-b-2 mx-auto border-teal -my-6"></div>
      </div>
    </div>
  
</template>
<script>
  import professions from '../information/professions.json'
  export default{
          data(){
              return{
                  myJson: professions
              }
          }
      }
</script>

