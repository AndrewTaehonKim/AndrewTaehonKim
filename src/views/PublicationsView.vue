<script setup>
  import Slide from "../components/PublicationSlide.vue"
</script>

<template>
    <div class="flex-col w-full mx-auto">
      <div class="text-3xl font-extrabold border-b-2 border-yellow lg:border-none pb-4 lg:pb-0">Publications</div>
      <div :key="publication" v-for="publication in myJson.filter(publication => publication.pin == true)">
        <Slide :title=publication.title :date=publication.date :journal=publication.journal :publisher=publication.publisher :DOI=publication.DOI :image=publication.image :description=publication.description :firstAuthor=publication.firstAuthor :type=publication.type :keywords=publication.keywords />
        <div class="w-full lg:w-1/6 border-b-2 mx-auto border-teal -my-6"></div>
      </div>
      <div :key="publication" v-for="publication in myJson.filter(publication => publication.pin == false)">
        <Slide :title=publication.title :date=publication.date :journal=publication.journal :publisher=publication.publisher :DOI=publication.DOI :image=publication.image :description=publication.description :firstAuthor=publication.firstAuthor :type=publication.type :keywords=publication.keywords />
        <div class="w-full lg:w-1/6 border-b-2 mx-auto border-teal -my-6"></div>
      </div>
    </div>
  
</template>
<script>
  import publications from '../information/publications.json'
  export default{
          data(){
              return{
                  myJson: publications
              }
          }
      }
</script>

