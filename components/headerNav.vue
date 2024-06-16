<template>
	<div>
		<nav>
			<ul>
				<li>
					リンク1
				</li>
				<li>
					リンク2
				</li>
				<li>
					リンク3
				</li>
				<li>
					リンク4
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