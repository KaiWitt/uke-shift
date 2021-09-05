<script lang="ts">
    const chords: string[] = [
        "A",
        "Ab",
        "B",
        "Bb",
        "C",
        "D",
        "Db",
        "E",
        "Eb",
        "F",
        "G",
        "Gb",
    ];

    // All types that the ukebox crate recognizes
    const flavours: string[] = [
        "m",
        "sus2",
        "sus4",
        "aug",
        "dim",
        "7",
        "m7",
        "maj7",
        "mMaj7",
        "aug7",
        "augMaj7",
        "dim7",
        "m7b5",
    ].sort();

    export let selectedChord: string = "";
    export let selectedFlavour: string = "";

    function setChord(chord: string) {
        if (selectedChord === chord) {
            selectedChord = "";
            selectedFlavour = "";
        } else {
            selectedChord = chord;
        }
    }

    function setFlavour(flavour: string) {
        if (selectedChord === "") {
            return;
        }
        if (selectedFlavour === flavour) {
            selectedFlavour = "";
        } else {
            selectedFlavour = flavour;
        }
    }
</script>

<div class="outer">
    <!-- Chords -->
    <div class="chords">
        {#each chords as chord}
            <button
                class:active={selectedChord === chord}
                on:click={() => setChord(chord)}>{chord}</button
            >
        {/each}
    </div>

    <!-- Flavours -->
    <div class="flavours">
        {#each flavours as flavour}
            <button
                class:active={selectedFlavour === flavour}
                on:click={() => setFlavour(flavour)}>{flavour}</button
            >
        {/each}
    </div>
</div>

<style>
    .outer {
        width: 100%;
    }
    .chords {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .flavours {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    button {
        margin: 1px 2px;
    }

    .active {
        background-color: #ff3e00;
        color: white;
    }
</style>
