import { null_to_empty } from "svelte/internal";

export { createStrings, createFrets, createNut, createMarks }

function createStrings(width, height) {
    let strings = {
        color: 'black',
        size: 3,
        len: 0.925 * width,
        x1: 0.05 * width,
        y: [
            { y: 0.1 * height },
            { y: (0.1 + 8 / 30) * height },
            { y: (0.1 + (2 * 8) / 30) * height },
            { y: 0.9 * height },
        ],
    };
    console.log('Strings: ', strings);

    return strings;
}

function createFrets(firstX, stringY1, stringY2, stringLen, count) {
    let posX = [];
    for (let i = 0; i <= count; i++) {
        let x = { x: firstX + (i / count) * stringLen };
        posX.push(x);
    }
    let frets = {
        color: "grey",
        size: 2,
        x: posX,
        y1: stringY1,
        y2: stringY2,
    };
    console.log('Frets: ', frets);

    return frets;
}

function createNut(x, y1, y2, size) {
    let nut = {
        color: "black",
        size: size,
        y1: y1,
        y2: y2,
        x: x
    };
    console.log('Nut: ', nut);

    return nut;
}

function createMarks(x1, x2, y, fretCount, r) {
    let marks = [];
    let step = (x2 - x1) / fretCount;
    for (let i = 0; i <= fretCount; i++) {
        if ([3, 5, 7, 10, 12, 15].includes(i)) {
            let x = { x: x1 + (i - 0.5) * step, y: y, r: r };
            marks.push(x);
        }
    }
    console.log('Marks: ', marks);
    console.log('Step: ', step);

    return marks;
}