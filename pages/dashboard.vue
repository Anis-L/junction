<template>
    <div>
        <div class="dashboard">
            <div class="menu"></div>
            <div class="content"><NuxtPage></NuxtPage></div>
        </div>
    </div>
</template>

<style scoped>
.dashboard {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    gap: 4rem;
}

.menu {
    width: 20rem;
}
</style>