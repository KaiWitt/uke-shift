<script>
    export let height = 250;
    export let width = 1500;
    // TODO: fret count

    // Uke strings
    let stringos = {
        color: "black",
        size: 3,
        len: 0.87 * width,
        x1: 0.1 * width,
        y: [
            { y: 0.1 * height },
            { y: 0.366 * height },
            { y: 0.633 * height },
            { y: 0.9 * height },
        ],
    };

    // Frets
    let frets = {
        color: "grey",
        size: 2,
        len: 1.13 * (stringos.y.slice(-1)[0].y - stringos.y[0].y),
        y1: 0.5 * stringos.y[0].y,
        x: [
            { x: stringos.x1 },
            { x: stringos.x1 + (1 / 16) * stringos.len },
            { x: stringos.x1 + (2 / 16) * stringos.len },
            { x: stringos.x1 + (3 / 16) * stringos.len },
            { x: stringos.x1 + (4 / 16) * stringos.len },
            { x: stringos.x1 + (5 / 16) * stringos.len },
            { x: stringos.x1 + (6 / 16) * stringos.len },
            { x: stringos.x1 + (7 / 16) * stringos.len },
            { x: stringos.x1 + (8 / 16) * stringos.len },
            { x: stringos.x1 + (9 / 16) * stringos.len },
            { x: stringos.x1 + (10 / 16) * stringos.len },
            { x: stringos.x1 + (11 / 16) * stringos.len },
            { x: stringos.x1 + (12 / 16) * stringos.len },
            { x: stringos.x1 + (13 / 16) * stringos.len },
            { x: stringos.x1 + (14 / 16) * stringos.len },
            { x: stringos.x1 + (15 / 16) * stringos.len },
            { x: stringos.x1 + (16 / 16) * stringos.len },
        ],
    };
</script>

<div>
    <svg {height} {width}>
        <!-- Frets -->
        {#each frets.x as { x }}
            <line
                x1={x}
                y1={frets.y1}
                x2={x}
                y2={frets.y1 + frets.len}
                style="stroke:{frets.color};stroke-width:{frets.size}"
            />
        {/each}

        <!-- 4 Uke Strings -->
        {#each stringos.y as { y }}
            <line
                x1={stringos.x1}
                y1={y}
                x2={stringos.x1 + stringos.len}
                y2={y}
                style="stroke:{stringos.color};stroke-width:{stringos.size}"
            />
        {/each}

        <!-- Fret marker -->
        <!-- <svg height={diameter} width={diameter}>
            <circle cx={radius} cy={radius} r={radius} fill="lightgrey" />
            <text x={radius} y={radius} text-anchor="middle" fill="white">{number}</text
            >
        </svg> -->

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
