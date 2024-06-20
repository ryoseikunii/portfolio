<template>
    <div>
        <header>
            <h1 class="text-2xl leading-7 font-semibold">Ryosei Kunii's Portfolio</h1>
            <HeaderNav />
        </header>
    </div>
</template>
<script>
import HeaderNav from "@/components/headerNav.vue";
export default {
    components: {
        HeaderNav
    }
};
</script>
<style lang="scss" scoped>
header {
color: #fff;
padding: 20px;
background-color: #527b8e;
}
</style>