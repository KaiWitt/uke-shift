<script lang="ts">
    const a = [
        "A",
        "A7",
        "Am",
        "Am7",
        "Adim",
        "Aaug",
        "A6",
        "Amaj7",
        "A9",
        "Ab",
        "Ab7",
        "Abm",
        "Abm7",
        "Abdim",
        "Abaug",
        "Ab6",
        "Abmaj7",
        "Ab9",
    ].sort();

    const b = [
        "Bb",
        "Bb7",
        "Bbm",
        "Bbm7",
        "Bbdim",
        "Bbaug",
        "Bb6",
        "Bbmaj7",
        "Bb9",
        "B",
        "B7",
        "Bm",
        "Bm7",
        "Bdim",
        "Baug",
        "B6",
        "Bmaj7",
        "B9",
    ].sort();

    const c = [
        "C",
        "C7",
        "Cm",
        "Cm7",
        "Cdim",
        "Caug",
        "C6",
        "Cmaj7",
        "C9",
    ].sort();

    const d = [
        "D",
        "D7",
        "Dm",
        "Dm7",
        "Ddim",
        "Daug",
        "D6",
        "Dmaj7",
        "D9",
        "Db",
        "Db7",
        "Dbm",
        "Dbm7",
        "Dbdim",
        "Dbaug",
        "Db6",
        "Dbmaj7",
        "Db9",
    ].sort();

    const e = [
        "E",
        "E7",
        "Em",
        "Em7",
        "Edim",
        "Eaug",
        "E6",
        "Emaj7",
        "E9",
        "Eb",
        "Eb7",
        "Ebm",
        "Ebm7",
        "Ebdim",
        "Ebaug",
        "Eb6",
        "Ebmaj7",
        "Eb9",
    ].sort();

    const f = [
        "F",
        "F7",
        "Fm",
        "Fm7",
        "Fdim",
        "Faug",
        "F6",
        "Fmaj7",
        "F9",
    ].sort();

    const g = [
        "G",
        "G7",
        "Gm",
        "Gm7",
        "Gdim",
        "Gaug",
        "G6",
        "Gmaj7",
        "G9",
        "Gb",
        "Gb7",
        "Gbm",
        "Gbm7",
        "Gbdim",
        "Gbaug",
        "Gb6",
        "Gbmaj7",
        "Gb9",
    ].sort();

    const allChords = [a, b, c, d, e, f, g];

    let selected = "";

    function set(name: string) {
        if (selected === name) {
            selected = "";
        } else {
            selected = name;
        }
    }
</script>

<div class="outer">
    <!-- Buttons -->
    {#each allChords as chord}
        <div class="inner">
            {#each chord as chordName}
                <button
                    class:active={selected === chordName}
                    on:click={() => set(chordName)}>{chordName}</button
                >
            {/each}
        </div>
    {/each}
</div>

<style>
    .outer {
        display: flex;
    }
    .inner {
        border: 1px solid black;
        margin: 1px 1px;
    }
    button {
        align-items: center;
    }

    .active {
        background-color: #ff3e00;
        color: white;
    }
</style>
