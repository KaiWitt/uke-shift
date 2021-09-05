<script lang="ts">
    const chords: string[] = ["A", "B", "C", "D", "E", "F", "G"];
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
    <div class="flavours">
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
    .flavours {
        display: flex;
        justify-content: center;
    }

    button {
        margin: 1px 2px;
    }

    .active {
        background-color: #ff3e00;
        color: white;
    }
</style>
