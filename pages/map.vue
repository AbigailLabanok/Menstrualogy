<template>
    <div>
        <div class="w-screen h-screen bg-no-repeat bg-cover bg-center" :style="{ 'background-image': 'url(' + getPath() + ')',  }">
            <img v-for="coord in currentFloor.positions" src="~/assets/images/mark.png" class="w-[15%] relative cursor-pointer" :style="{top: `${coord.top}%`, left: `${coord.left}%`}" onclick="alert('Meow')">
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return {
            f0: {
                imagePath: "/floorplans/0.svg",
                positions: [
                    {top: 30, left: 34.5}
                ]
            },
            f1: {
                imagePath: "/floorplans/1.svg",
                positions: [
                    {top: 31, left: 24.5},
                    {top: 22, left: 70},
                    {top: 1, left: 50.5},
                    {top: -70, left: 57},
                ]
            },
            f2: {
                imagePath: "/floorplans/2.svg",
                positions: [

                ]
            },
            f3: {
                imagePath: "/floorplans/3.svg",
                positions: [

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
        if (this.$route.query.floor) this.currentFloor = this[`f${this.$route.query.floor}`]
    },
    methods:{
        getPath(){
            return this.currentFloor.imagePath
        }
    }
}

</script>