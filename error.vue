<template>
    <NuxtLayout>
        <div class="w-screen h-screen flex justify-center items-center flex-col">
            <div class="w-full flex justify-center items-center">
                <img src="~/assets/images/error-404.png" alt="404 error" class="w-[50vmin]"/>
            </div>
            <h1 class="pt-20 font-[lemon-bold] text-[4vmin]">Page not found!</h1>
        </div>
    </NuxtLayout>
</template>

<script>
export default {
  layout: 'default', // you can set a custom layout for the error page
}
</script>