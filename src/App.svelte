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
	export let logo: string;

	let width: number;

	let chord: string = "";
	let flavour: string = "";
	let chords: number[][] = [];

	async function run(c: string, f: string) {
		init();
		chords = arrayToChords(chord_positions(c, f));
	}

	$: run(chord, flavour);
</script>

<main>
	<div bind:clientWidth={width}>
		<Logo {logo} />
		<ChordPicker
			bind:selectedChord={chord}
			bind:selectedFlavour={flavour}
		/>
		<Uke
			width={0.9 * width}
			height={(1 / 6) * 0.95 * width}
			radius={0.013 * 0.95 * width}
			{chords}
		/>
		<Footer {name} {website} {github} />
	</div>
</main>

<style>
	main {
		text-align: center;
	}
</style>
