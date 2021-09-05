<script lang="ts">
	import { arrayToChords } from "./uke";
	import Uke from "./components/Uke.svelte";
	import ChordPicker from "./components/ChordPicker.svelte";
	import Logo from "./components/Logo.svelte";
	import Footer from "./components/Footer.svelte";
	import init, { chord_positions } from "../rust/uke-shift/pkg/uke_shift.js";

	export let name: string;
	export let website: string;
	export let github: string;

	let chord: string = "";
	let flavour: string = "";
	let chordPositions: number[][] = [];

	async function run(c: string, f: string) {
		init();
		chordPositions = arrayToChords(chord_positions(c, f));
	}

	$: run(chord, flavour);
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
