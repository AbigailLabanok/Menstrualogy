<template>
    <div class="w-screen h-full mobile pt-20" id="about">
        <div class="h-full width flex justify-center items-center">
            <img class="w-[20rem] animate-bounce" src="~/assets/images/siths.png"/>
        </div>
        <div class="h-[50rem] width flex justify-center items-center flex-col fs">
            <sectionTitle text="About Us"/>
            <p class="font-[scholar]">
                Welcome to our website! Run by students at Staten Island Technical High School, here you will find information on MHM,
                the menstrual cycle, and social stigma as well as further online resources. To assist our menstruating students, we
                have altered floor plans of the school to create maps showing where menstrual products are available. There is also a 
                blog that will be updated with news and student submissions. All submissions can be sent through a google form link <a href=".">here</a>
            </p>
        </div>
    </div>
</template>

<style scoped>

.mobile{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.width{
    width: 50%;
}

.fs{
    font-size: 2rem;
    padding: 6rem;
}

@media (max-width: 1100px) {
    .mobile{
        flex-direction: column;
    }   

    .width{
        width: 100%;
    }

    .fs{
        font-size: 3vmin;
    }
}

</style>