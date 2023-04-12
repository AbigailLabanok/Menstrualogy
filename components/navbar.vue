<template>
    <div>
        <div class="h-36 w-screen bg-primary flex justify-between px-7">
            <div class="h-full flex items-center">
                <img alt="Logo image" src="~/assets/images/logo.png" class="h-40 p-0 m-0"/>
                <div>
                    <h2 class="text-accent-3 font-[lemon-bold] text-5xl">MENSTRUAL</h2>
                    <h2 class="text-accent-3 font-[lemon-bold] text-2xl">Hygiene Management</h2>
                </div>
            </div>
            <div class="flex justify-center flex-col gap-3 cursor-pointer z-20" @click="menu">
                <div ref="top" class="h-1.5 w-16 bg-accent-2 rounded-lg"></div>
                <div ref="middle" class="h-1.5 w-16 bg-accent-2 rounded-lg"></div>
                <div ref="bottom" class="h-1.5 w-16 bg-accent-2 rounded-lg"></div>
            </div>
            <div class="h-screen w-1/6 bg-accent-3 absolute right-0">
    
            </div>
        </div>
    </div>
</template>

<script>

import { gsap } from "gsap";

export default {
    name: "navbar",
    data(){
        return {
            open: false
        }
    },
    methods:{
        menu(){
            gsap.to(this.$refs['bottom'],{
                rotate: 45 * !this.open,
                y: -17.5 * !this.open,
                duration: 0.25
            })
            gsap.to(this.$refs['middle'],{
                width: `${100 * this.open}%`
            })
            gsap.to(this.$refs['top'],{
                rotate: -45 * !this.open,
                y: 17.5 * !this.open,
                duration: 0.25
            })
            this.open = !this.open
        }
    }
}

</script>