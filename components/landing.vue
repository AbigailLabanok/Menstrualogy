<template>
    <div class="w-screen h-full bg-accent-3 mobile">
        <div class="h-[50rem] width flex justify-center items-center fs">
            <p class="font-[scholar] text-accent-1">
                Menstrual Hygiene Management (MHM) includes access to period products such as pads and tampons, water, soap, space, and privacy.
                Inadequate MHM can cause physical, emotional, and social dysfunction, resulting in a decline in school attendance and performance
                (Sebert Kuhlman et al., <span class="font-[sans-serif]">2020</span>).
            </p>
        </div>
        <div class="h-[50rem] width flex justify-center items-center flex-wrap" ref="spin">
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

<style scoped>

    .mobile{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .width{
        width: 50%;
    }

    .fs{
    font-size: 2rem;
    padding: 6rem;
}


    @media (max-width: 1550px) {
        .mobile{
            flex-direction: column;
        }

        .width{
            width: 100%;
        }

        .fs{
        font-size: 5vmin;
    }
    }
</style>