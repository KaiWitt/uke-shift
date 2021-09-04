<script lang="ts">
    const chords: string[] = ["A", "B", "C", "D", "E", "F", "G"];
    const flavours: string[] = [
        "6",
        "7",
        "9",
        "aug",
        "b",
        "b6",
        "b7",
        "b9",
        "baug",
        "bdim",
        "bm",
        "bm7",
        "bmaj7",
        "dim",
        "m",
        "m7",
        "maj7",
    ].sort();
    const restrictedChords: string[] = ["C", "F"];
    const restrictedFlavours: string[] = [
        "7",
        "m",
        "m7",
        "dim",
        "aug",
        "6",
        "maj7",
        "9",
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

        // Reset selected flavour if it doesnt fit with chord
        if (
            restrictedChords.includes(selectedChord) &&
            !restrictedFlavours.includes(selectedFlavour)
        ) {
            selectedFlavour = "";
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
        {#if restrictedChords.includes(selectedChord)}
            {#each restrictedFlavours as flavour}
                <button
                    class:active={selectedFlavour === flavour}
                    on:click={() => setFlavour(flavour)}>{flavour}</button
                >
            {/each}
        {:else}
            {#each flavours as flavour}
                <button
                    class:active={selectedFlavour === flavour}
                    on:click={() => setFlavour(flavour)}>{flavour}</button
                >
            {/each}
        {/if}
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
