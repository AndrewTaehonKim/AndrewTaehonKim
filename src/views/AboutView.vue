<template>
  <div class="about">
    <!-- PC -->
    <div class="hidden lg:block">
      <!-- Quote -->
      <div class="w-2/3 mx-auto flex-col mb-14">
        <h1 class="text-xl font-bold w-2/3 mx-auto">"The problem is not the problem. <br> The problem is your attitude about the problem."</h1>
        <div class="text-center text-lg font-semibold">- Captain Jack Sparrow</div>
      </div>
      <!-- Main Content -->
      <div class="inline-flex w-2/3">
        <!-- Text -->
          <div class="w-2/3 flex-col mr-4 my-auto">
            <p class="text-xl text-left"> <b>Andrew </b> is an <b class="text-blue font-semibold">inquisitive researcher</b> who analyzes serious problems with <span class="highlight"> optimism </span> and never takes "good enough" as an answer. He is excited for the potential of <b class="text-green font-semibold"> nanomaterials </b> like quantum dots and carbon nanocomposites to advance current technologies and <span class="highlight">inspire </span> our <b class="text-green font-semibold"> limitless inginuity</b>.  </p>
            <p class="text-xl text-left mt-2"> <b>Andrew </b> is an <b class="text-blue font-semibold"> interdisciplinary engineer </b> who <span class="highlight"> supercharged </span> his education with advanced courses in Chemical, Mechanical, and Electrical Engineering & Computer Science. He believes that having various perspectives from different fields is critical when designing effective solutions to <b class="text-green font-semibold"> energy storage</b> and <b class="text-green font-semibold">  renewable energy conversion</b>, which are interdisciplinary by nature. </p>
            <p class="text-xl text-left mt-2"> <b>Andrew </b> is a <b class="text-blue font-semibold">natural leader</b> who has taken leadership roles in various acadmic societies, engineering clubs, and sports teams. His ability to <span class="highlight"> organize </span> large projects, <span class="highlight"> communicate </span> complex ideas, and <span class="highlight"> perservere</span> through crises has allowed him to publish <b class="text-green font-semibold"> numerous papers </b> and create <b class="text-green font-semibold"> multiple tools</b>. </p>
          </div>
        <!-- Image -->
        <div class="w-1/3 my-auto">
          <img src="src/assets/about/profile.jpg" alt="" class="rounded-xl">
        </div>
      </div>
    </div>

    <!-- Phone -->
    <div class="block lg:hidden">
    <!-- Quote -->
    <div class="mx-auto flex-col mt-3 mb-4">
      <h1 class="text-xl font-bold mx-auto">"The problem is not the problem. <br> The problem is your attitude about the problem."</h1>
      <div class="text-center text-lg font-semibold">- Captain Jack Sparrow</div>
    </div>
    <!-- Main Content -->
    <div class="flex-col mb-4">
      <!-- Image -->
        <div class="mx-auto">
          <img src="src/assets/about/profile.jpg" alt="" class="w-1/2 rounded-xl mx-auto">
        </div>
        <!-- Text -->
          <div class="flex-col px-4 mt-2">
            <p class="text-md text-left"> <b>Andrew </b> is an <b class="text-blue font-semibold">inquisitive researcher</b> who analyzes serious problems with <span class="highlight"> optimism </span> and never takes "good enough" as an answer. He is excited for the potential of <b class="text-green font-semibold"> nanomaterials </b> like quantum dots and carbon nanocomposites to advance current technologies and <span class="highlight">inspire </span> our <b class="text-green font-semibold"> limitless inginuity</b>.  </p>
            <p class="text-md text-left mt-2"> <b>Andrew </b> is an <b class="text-blue font-semibold"> interdisciplinary engineer </b> who <span class="highlight"> supercharged </span> his education with advanced courses in Chemical, Mechanical, and Electrical Engineering & Computer Science. He believes that having various perspectives from different fields is critical when designing effective solutions to <b class="text-green font-semibold"> energy storage</b> and <b class="text-green font-semibold">  renewable energy conversion</b>, which are interdisciplinary by nature. </p>
            <p class="text-md text-left mt-2"> <b>Andrew </b> is a <b class="text-blue font-semibold">natural leader</b> who has taken leadership roles in various acadmic societies, engineering clubs, and sports teams. His ability to <span class="highlight"> organize </span> large projects, <span class="highlight"> communicate </span> complex ideas, and <span class="highlight"> perservere</span> through crises has allowed him to publish <b class="text-green font-semibold"> numerous papers </b> and create <b class="text-green font-semibold"> multiple tools</b>. </p>
          </div>
      </div>
    </div>
    
  </div>
</template>

<style scoped>
    .highlight {
        background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=ffe26a);
        margin: -2px -6px;
        padding:  2px  6px;
    }
</style>