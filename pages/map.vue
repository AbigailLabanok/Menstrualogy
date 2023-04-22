<template>
    <div class="relative z-0 flex justify-center items-center flex-col">
        <div class="flex flex-row h-full">
            <button class="p-5 border-[#e8b6c3] border-2" ref="0" @click="nextPage('0')">Basement</button>
            <button class="p-5 border-[#e8b6c3] border-2" ref="1" @click="nextPage('1')">First Floor</button>
        </div>
        <div class="w-[75%] h-auto aspect-[6/5] bg-no-repeat bg-center bg-contain" alt="Loading" :style="{ 'background-image': 'url(' + getPath() + ')',  }">
            <img v-for="coord in currentFloor.positions" src="~/assets/images/mark.png" class="w-[15%] absolute cursor-pointer" :style="{transform: `translate(${coord.left}%, ${coord.top}%)`}" onclick="alert('Pads and tampons available at this location!')">
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
            f0: {
                imagePath: "/floorplans/basement.svg",
                positions: [
                    {top: 185, left: 250}
                ]
            },
            f1: {
                imagePath: "/floorplans/floor1.svg",
                positions: [
                    {top: 340, left: 90},
                    {top: 170, left: 270},
                    {top: 125, left: 138},
                    {top: 130, left: 52},
                ]
            },
            currentFloor: {
                imagePath: "",
                positions: [

                ]
            }
        }
    },
    mounted(){
        if (this.$route.query.floor) {
            if (this[`f${this.$route.query.floor}`]) {
                this.currentFloor = this[`f${this.$route.query.floor}`]
                this.$refs[`${this.$route.query.floor}`].classList.toggle("selected")
            }
            else window.location.replace("/404")
        }
    },
    methods:{
        getPath(){
            return this.currentFloor.imagePath
        },
        nextPage(page){
            window.location.replace(`map?floor=${page}`)
        }
    }
}

</script>

<style>

.selected{
    background-color: rgb(232 182 195);
}

</style>