
export { createStrings, createFrets, createNut, createMarks, createNote }

function createStrings(width, height) {
    let strings = {
        color: 'black',
        size: 3,
        len: 0.98 * width,
        x1: 0.01 * width,
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

function createFrets(firstFretX, firstStringY, lastStringY, stringLen, fretCount) {
    let posX = [];
    for (let i = 0; i <= fretCount; i++) {
        let x = { x: firstFretX + (i / fretCount) * stringLen };
        posX.push(x);
    }
    let frets = {
        color: "grey",
        size: 2,
        x: posX,
        y1: firstStringY,
        y2: lastStringY,
    };
    console.log('Frets: ', frets);

    return frets;
}

function createNut(x, firstStringY, lastStringY, size) {
    let nut = {
        color: "black",
        size: size,
        y1: firstStringY,
        y2: lastStringY,
        x: x
    };
    console.log('Nut: ', nut);

    return nut;
}

function createMarks(nutX, lastFretX, fretCount, y, r) {
    let marks = [];
    let step = (lastFretX - nutX) / fretCount;
    for (let i = 0; i <= fretCount; i++) {
        if ([3, 5, 7, 10, 12, 15].includes(i)) {
            let x = { x: nutX + (i - 0.5) * step, y: y, r: r };
            marks.push(x);
        }
    }
    console.log('Marks: ', marks);

    return marks;
}

function createNote(fret, stringo, r, firstStringY, lastStringY, nutX, lastFretX, fretCount) {
    let fretStep = (lastFretX - nutX) / fretCount;

    // 4 Strings make 3 sections
    let stringStep = (lastStringY - firstStringY) / 3;

    let note = {
        fret: (fret - 0.5) * fretStep + nutX,
        stringo: stringo * stringStep + firstStringY,
        r: r,
    }
    console.log('Note: ', note);

    return note;
}