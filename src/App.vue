<template>
	<div id="app">
		<div class="main ">
			<router-view/>
		</div>

	</div>
</template>

<script>
    export default {
        name: 'App',
        mounted: function () {
            this.setScroll();
        },
		methods:{
            setScroll() {
                const container = document.querySelectorAll('.addScroll');
                for (var i = 0; i < container.length; i++) {
                    new this.$PerfectScrollbar(container[i], {}).update();
                }
            }
		}
    }
</script>

<style scoped="">
	#app {
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		overflow: auto;
		background: #f4f4f4;
	}

	.main {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 0px;
		min-width: 1280px;

	}
</style>
