<script>
    import { createStrings, createFrets, createNut, createMarks } from "./uke";
    export let width = 1850;
    export let height = 250;
    export let fretCount = 18;

    // Uke strings
    let strings = createStrings(width, height);

    // Frets
    let frets = createFrets(
        strings.x1,
        strings.y[0].y,
        strings.y.slice(-1)[0].y,
        strings.len,
        fretCount
    );

    // Nut
    let nut = createNut(
        strings.x1,
        strings.y[0].y,
        strings.y.slice(-1)[0].y,
        4 * frets.size
    );

    // Marks
    let marks = createMarks(
        nut.x,
        frets.x.slice(-1)[0].x,
        height / 2,
        fretCount,
        10
    );
</script>

<div>
    <svg {height} {width}>
        <!-- Frets -->
        {#each frets.x as { x }}
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
        {#each strings.y as { y }}
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
        <!-- <svg height={diameter} width={diameter}>
            <circle cx={radius} cy={radius} r={radius} fill={color} />
            <text x={radius} y={radius} text-anchor="middle" fill="white"
                >{number}</text
            >
        </svg> -->
    </svg>
</div>

<style>
    /* div for debugging */
    div {
        background-color: wheat;
        width: max-content;
        height: max-content;
        border: 1px solid black;
    }
</style>
