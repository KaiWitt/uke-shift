<script lang="ts">
	import Uke from "./components/Uke.svelte";
	import ChordPicker from "./components/ChordPicker.svelte";
	import Logo from "./components/Logo.svelte";
	import Footer from "./components/Footer.svelte";
</script>

<main>
	<Logo />
	<ChordPicker />
	<Uke />
	<Footer />
</main>

<style>
	main {
		text-align: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
