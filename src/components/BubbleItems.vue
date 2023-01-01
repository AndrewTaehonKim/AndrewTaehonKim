<template>
    <div class="flex justify-end place-items-center text-center lg:text-right w-36 rounded-3xl m-2 text-lg lg:text-md font-bold text-black" >
        {{name}}
    </div>
</template>

<script>
    export default {
        props: ['name', 'bgcolor1', 'bgcolor2']
    }
</script>

<style scoped>
    div {
        position: relative;
        width: 150px;
        height: 100px;
        margin: 10px;
    }

    div:hover:after  {
        display: block;
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        top: -5px;
        right: -5px;
        border-top: 3px solid #FFE26A;
        border-right: 3px solid #FFE26A;
    }
    div:hover:before  {
        display: block;
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: -5px;
        left: -5px;
        border-bottom: 3px solid #FFE26A;
        border-left: 3px solid #FFE26A;
        transition: 0.2s;
        transition-timing-function: ease-in-out;
    }
    div:after {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        top: -5px;
        right: -5px;
        border-top: 3px solid #ABD699;
        border-right: 3px solid #75C9B7;
        transition: 0.2s;
        transition-timing-function: ease-in-out;
    }
    div:before {
        display: block;
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        bottom: -5px;
        left: -5px;
        border-bottom: 3px solid #75C9B7;
        border-left: 3px solid #ABD699;
        transition: 0.2s;
        transition-timing-function: ease-in-out;
    }

    @media (min-width: 1024px) {
        div {
            position: relative;
            width: 100%;
            height: 40px;
            padding: 4px;
        }
        div:before {
            display: none;
        }

        div:hover:before{
            display: none;
        }
    }
</style>