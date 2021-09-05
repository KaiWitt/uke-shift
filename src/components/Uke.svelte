<script lang="ts">
    import {
        createStrings,
        createFrets,
        createNut,
        createMarks,
        createChords,
    } from "../uke";

    export let width: number = 0;
    export let height: number = 0;
    export let chords: number[][] = [];
    export let radius: number = 0;

    const fretCount = 17;
    $: markRadius = 0.4 * radius;
    $: strings = createStrings(width, height);
    $: frets = createFrets(strings, fretCount);
    $: nut = createNut(frets);
    $: marks = createMarks(frets, markRadius);
    $: notes = createChords(strings, frets, chords, radius);
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

        <!-- Chords -->
        {#each notes as note}
            <circle
                cx={note.fret}
                cy={note.stringo}
                r={note.r}
                fill={note.color}
            />
        {/each}
    </svg>
</div>
