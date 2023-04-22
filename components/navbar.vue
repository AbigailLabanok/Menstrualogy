<template>
    <div>
        <div class="h-36 w-screen bg-primary flex justify-between px-7">
            <div class="h-full flex items-center">
                <img alt="Logo image" src="~/assets/images/logo.png" class="h-[15vmin] p-0 m-0 cursor-pointer" @click="home()"/>
                <div>
                    <h2 class="text-accent-3 font-[lemon-bold] text-[4vmin]">MENSTRUALOGY</h2>
                </div>
            </div>
            <div class="flex justify-center flex-col gap-3 cursor-pointer z-30" @click="menu">
                <div ref="top" class="h-1.5 w-16 bg-accent-2 rounded-lg"></div>
                <div ref="middle" class="h-1.5 w-16 bg-accent-2 rounded-lg"></div>
                <div ref="bottom" class="h-1.5 w-16 bg-accent-2 rounded-lg"></div>
            </div>
            <div class="h-screen w-[25rem] bg-accent-1 absolute right-0 flex justify-center items-center flex-col gap-10 z-20" :style="{transform: 'translateX(100%)'}" ref="menu">
                <a href="." class="text-white font-[lemond-bold]">Home</a>
                <a href="/map?floor=0" class="text-white font-[lemond-bold]">Map</a>
                <a href="/info" class="text-white font-[lemond-bold]">Info</a>
                <a href="/#about" class="text-white font-[lemond-bold]">About</a>
                <a href="/resources" class="text-white font-[lemond-bold]">Resources</a>
                <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" class="text-white font-[lemond-bold]">Blog</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "navbar",
    data(){
        return {
            open: false
        }
    },
    mounted(){
        
    },
    methods:{
        menu(){
            this.$gsap.to(this.$refs['bottom'],{
                rotate: 45 * !this.open,
                y: -17.5 * !this.open,
                duration: 0.25
            })
            this.$gsap.to(this.$refs['middle'],{
                width: `${100 * this.open}%`
            })
            this.$gsap.to(this.$refs['top'],{
                rotate: -45 * !this.open,
                y: 17.5 * !this.open,
                duration: 0.25
            })
            this.$gsap.to(this.$refs['menu'],{
                x: this.$refs['menu'].offsetWidth * this.open
            })
            this.open = !this.open
        },
        home(){
            this.$router.push('/')
        }
    }
}

</script>