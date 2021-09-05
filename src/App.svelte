<script lang="ts">
	import Uke from "./components/Uke.svelte";
	import ChordPicker from "./components/ChordPicker.svelte";
	import Logo from "./components/Logo.svelte";
	import Footer from "./components/Footer.svelte";

	export let name: string;
	export let website: string;
	export let github: string;

	let chord: string = "";
	let flavour: string = "";
	let chordPositions: number[][] = [];
	console.log(chordPositions);
</script>

<main>
	<Logo />
	<ChordPicker bind:selectedChord={chord} bind:selectedFlavour={flavour} />
	<Uke chords={chordPositions} />
	<Footer {name} {website} {github} />
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
