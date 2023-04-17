<template>
    <div class="w-full mb-5 overflow-y-hidden" ref="container">
        <h2 class="font-[lemon-bold] text-5xl relative" ref="text">{{text}}</h2>
    </div>
</template>

<script>
export default{
    props:{
        text: {
            default: "placeholder",
            type: String
        }
    },
    mounted(){
        this.$gsap.set(this.$refs['text'], {
            y: this.$refs['text'].offsetHeight
        })

        this.$gsap.to(this.$refs['text'], {
            y:0,
            duration: 0.5,
            scrollTrigger: {
                trigger: this.$refs['container'],
                start: 'top bottom', // or use '20% bottom' to start the animation when the top of the element is 20% from the bottom of the viewport
                end: 'bottom center', // or use '80% center' to end the animation when the bottom of the element is 80% from the top of the viewport
                toggleActions: 'play none none none', // play the animation when the element enters the viewport, and don't reverse it when the element leaves the viewport
                // markers: true
            },
        });
    }
}
</script>