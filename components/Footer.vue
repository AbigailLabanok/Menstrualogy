<template>
    <div class="w-full bg-primary">
        <div class="w-full h-[80%] flex justify-center items-center flex-col">
            <h2 class="font-[lemon-bold] text-white text-[5vmin] pb-12">Creators</h2>
            <div class="w-full flex justify-evenly mobile">
                <div class="font-[montserrat] text-white">
                    <h3 class="text-[3vmin]">Desiree Yang</h3>
                    <p class="text-[2vmin]">Hi! I’m Desiree, a research student from Staten Island Tech. I entered the science field through high school extracurriculars, namely SERP (Science Engineering Research Program) and Science Olympiad. In my free time, I enjoy cooking and baking. You can sometimes find me at a Starbucks with my laptop out and an earbud in. </p>
                </div>
                <div class="font-[montserrat] text-white">
                    <h3 class="text-[3vmin]">Mariel Silber</h3>
                    <p class="text-[2vmin]">I’m Mariel and I’m a student at Staten Island Technical High School. Science has always been a major part of my life, and through SERP I have been able to explore it to an even greater extent. Some of my hobbies include both playing and listening to music, playing tennis, and watching old sitcoms. </p>
                </div>
                <div class="font-[montserrat] text-white">
                    <h3 class="text-[3vmin]">Tasnim Ghoniem</h3>
                    <p class="text-[2vmin]">Hello! I am Tasnim, a student at Staten Island Technical High School. I first became interested in science when I was in middle school, and this passion carried over into my highschool career. Now, I am a research student part of SERP, where my passions have been able to blossom into many other STEM fields. When I am not researching away, I enjoy running, dancing, and writing calligraphy.</p>
                </div>
                <div class="font-[montserrat] text-white">
                    <h3 class="text-[3vmin]">Youwei Zhen</h3>
                    <p class="text-[2vmin]">I code:</p>
                    <a href="https://youweizhen.com/" class="underline">https://youweizhen.com/</a>
                </div>
            </div>
            <h2 class="font-[lemon-bold] text-sm text-white p-10">
                ALL RIGHTS RESERVED © MENSTRUALOGY
            </h2>
        </div>
        <div class="w-full bg-secondary h-[3rem] flex justify-evenly items-center">
            <a class="font-[lemon-light] text-accent-3" href="/resources">Resources</a>
            <a class="font-[lemon-light] text-accent-3" href="/map?floor=0">Map</a>
            <a class="font-[lemon-light] text-accent-3" href=".">Blog</a>
        </div>
    </div>
</template>

<style scoped>

.mobile{
    flex-direction: row;
}

.mobile > div{
    width: 20%;
}

@media (max-width: 1100px) {
    .mobile{
        flex-direction: column;
    }   

    .mobile > div{
        /* display: flex; */
        /* padding: 0 5% 0 5%; */
        /* display: none; */
        width: 100%;
        padding: 2.5% 5% 2.5% 5%;
    }
}


</style>