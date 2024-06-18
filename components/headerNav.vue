<template>
	<div>
		<nav>
			<ul>
				<li>
					Home
				</li>
				<li>
					Javasparrow
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
	export default {
		components: {}
	};
</script>
<style lang="scss" scoped>
nav {
	color: #fff;
	ul {
		display: flex;
		justify-content: flex-end;
		li {
			list-style-type: none;
			margin-left: 15px;
			a {
				color: #fff;
			}
		}
	}
}
</style>