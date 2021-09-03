<script lang="ts">
    import {
        createStrings,
        createFrets,
        createNut,
        createMarks,
        createNote,
        createChord,
    } from "./uke";

    export let width = 1500;
    export let height = 250;
    export let fretCount = 17;

    // Uke strings
    let strings = createStrings(width, height);

    // Frets
    let frets = createFrets(strings, fretCount);

    // Nut
    let nut = createNut(frets);

    // Marks
    let marks = createMarks(frets, 10);

    let exampleNote = createNote(strings, frets, 15, 1, 20);

    let exampleChord = createChord(strings, frets, [2, 3, 2, 4], 20);
</script>

<div>
    <svg {height} {width}>
        <!-- Frets -->
        {#each frets.x as x}
            <line
                x1={x}
                y1={frets.y1}
                x2={x}
                y2={frets.y2}
                style="stroke:{frets.color};stroke-width:{frets.size}"
            />
        {/each}

        <!-- Nut -->
        <line
            x1={nut.x}
            y1={nut.y1}
            x2={nut.x}
            y2={nut.y2}
            style="stroke:{nut.color};stroke-width:{nut.size}"
        />

        <!-- 4 Uke Strings -->
        {#each strings.y as y}
            <line
                x1={strings.x1}
                y1={y}
                x2={strings.x1 + strings.len}
                y2={y}
                style="stroke:{strings.color};stroke-width:{strings.size}"
            />
        {/each}

        <!-- Fret marker -->
        {#each marks as { x, y, r }}
            <circle cx={x} cy={y} {r} fill="lightgrey" />
        {/each}

        <!-- Note -->
        <circle
            cx={exampleNote.fret}
            cy={exampleNote.stringo}
            r={exampleNote.r}
            fill={exampleNote.color}
        />
    </svg>
</div>

<style>
    /* div for debugging */
    div {
        width: max-content;
        height: max-content;
        border: 1px solid black;
    }
</style>
