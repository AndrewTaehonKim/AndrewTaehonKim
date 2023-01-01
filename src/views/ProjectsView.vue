<script setup>
  import Slide from "../components/ProjectsSlide.vue"
</script>

<template>
    <div class="flex-col w-full mx-auto">
      <div class="text-3xl font-extrabold border-b-2 border-yellow lg:border-none pb-4 lg:pb-0">Projects</div>
      <div :key="project" v-for="project in myJson.filter(project => project.pin == true)">
        <Slide :title=project.title :date=project.date :image=project.image :description=project.description :keywords=project.keywords :company=project.company :companyLink=project.companyLink :link=project.link />
        <div class="w-full lg:w-1/6 border-b-2 mx-auto border-teal -my-6"></div>
      </div>
      <div :key="project" v-for="project in myJson.filter(project => project.pin == false)">
        <Slide :title=project.title :date=project.date :image=project.image :description=project.description :keywords=project.keywords :company=project.company :companyLink=project.companyLink :link=project.link />
        <div class="w-full lg:w-1/6 border-b-2 mx-auto border-teal -my-6"></div>
      </div>
    </div>
  
</template>
<script>
  import projects from '../information/projects.json'
  export default{
          data(){
              return{
                  myJson: projects
              }
          }
      }
</script>

