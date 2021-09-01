<script lang="ts">
	import Uke from "./Uke.svelte";
	export let name: string;
</script>

<main>
	<h1>Hello {name}, welcome to UkeShift!</h1>
	<Uke />
	<p>Made with Svelte and WebAssembly</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
