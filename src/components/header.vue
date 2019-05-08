<template>
    <div class="header">
        <b-navbar toggleable="md" type="light" variant="white" fixed="top">
            <div class="container">
                <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

                <b-navbar-brand href="#">HUBMART</b-navbar-brand>

                <b-collapse is-nav id="nav_collapse">

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                            <!-- <b-nav-item href="#">Home</b-nav-item> -->
                            <router-link class="nav-link" to="/">Home</router-link>
                            <router-link class="nav-link" to="/about">About</router-link>
                            <!-- <b-nav-item href="#">About</b-nav-item> -->
                            <!-- <b-nav-item href="#">Cart</b-nav-item> -->
                            <b-button class="nav-btn" href="#" variant="primary">Log In</b-button>
                    </b-navbar-nav>

                </b-collapse>
            </div>
            
        </b-navbar>

        <!-- navbar-1.vue -->

    </div>
</template>


<script>
export default {
    name: 'Header'
}
</script>


<style scoped>
    .nav-btn{
        padding: 0.5 rem 1 rem;
        margin-left: 20px;
    }
    /* nav{
        margin-bottom: 20px;
    } */
</style>
