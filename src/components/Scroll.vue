<template>
	<div>
		<div class="s1 addScroll">
			<div class="s2">dsafas</div>
		</div>
		<div class="s1 addScroll">
			<div class="s2">fadsfasdfadsf</div>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        mounted: function () {
            this.setScroll();
        },
        methods: {
            setScroll() {
                const container = document.querySelectorAll('.addScroll');
                for (var i = 0; i < container.length; i++) {
                    new this.$PerfectScrollbar(container[i], {}).update();
                }
            }
        }
    }
</script>
<style>
	.s1 {
		width: 500px;
		position: relative;
		height: 200px;
		border: 1px solid #ccc;
		overflow: hidden
	}

	.s2 {
		height: 2000px;
		background: #1c8de0;
		color: #fff;
	}
</style>
