<template>
   <el-menu
    class="custom-nav"
    mode="horizontal"
    text-color="#ffff"
    background-color="#027eaa"
    active-text-color="#ffff"
    :ellipsis="false"
  >
    <nuxt-link to="/" class="links"><el-menu-item index="0">Inicio</el-menu-item></nuxt-link>
    <nuxt-link to="/checklist" class="links"><el-menu-item index="3">Checklist</el-menu-item></nuxt-link>
    <nuxt-link to="/calculadora" class="links"><el-menu-item index="3">Calculadora</el-menu-item></nuxt-link>
  </el-menu>
</template>

<script>
export default {
  // Otras configuraciones del componente
}
</script>

<style lang="scss" scoped>
.links {
  color:white; 
  text-decoration: none;
}

</style>
