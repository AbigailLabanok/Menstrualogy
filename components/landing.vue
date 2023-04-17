<template>
    <div class="w-screen h-full bg-accent-3 flex justify-center items-center flex-row">
        <div class="h-[50rem] w-1/2 flex justify-center items-center">
            <p class="font-[montserrat] text-accent-1 text-3xl pl-24">
                Menstrual Hygiene Management (MHM) includes access to period products such as pads and tampons, water, soap, space, and privacy.
                Inadequate MHM can cause physical, emotional, and social dysfunction, resulting in a decline in school attendance and performance
                (Sebert Kuhlman et al., 2020).
            </p>
        </div>
        <div class="h-[50rem] w-1/2 flex justify-center items-center" ref="spin">
            <img ref="1" class="w-[15rem]" src="~/assets/images/pad.png"/>
            <img ref="2" class="w-[15rem]" src="~/assets/images/tampon.png"/>
            <img ref="3" class="w-[15rem]" src="~/assets/images/underwear.png"/>
            <img ref="4" class="w-[15rem]" src="~/assets/images/wtf.png"/>
        </div>
    </div>
</template>

<script>
export default{
    mounted(){
        
    },
    methods:{
        addpath(reference){
            const r = 100;
            this.$gsap.to(reference, {
            motionPath: {
                path: `M ${-r}, 0
                    a ${r},${r} 0 1,0 ${r * 2},0
                    a ${r},${r} 0 1,0 -${r * 2},0z`
            },
            duration: 5,
            repeat: -1,
            ease: "none"
            });
        }
    }
}

</script>