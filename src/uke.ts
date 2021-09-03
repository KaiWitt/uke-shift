
export { createStrings, createFrets, createNut, createMarks, createNote, createChord }

function createStrings(width: number, height: number) {
    const strings = {
        color: 'black',
        size: 3,
        len: 0.948 * width,
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

function createFrets(firstFretX: number, firstStringY: number, lastStringY: number, stringLen: number, fretCount: number) {
    var posX = [];
    for (var i = 0; i <= fretCount; i++) {
        const x = { x: firstFretX + (i / fretCount) * stringLen };
        posX.push(x);
    }
    const frets = {
        color: "grey",
        size: 2,
        x: posX,
        y1: firstStringY,
        y2: lastStringY,
    };
    console.log('Frets: ', frets);

    return frets;
}

function createNut(x: number, firstStringY: number, lastStringY: number, size: number) {
    const nut = {
        color: "black",
        size: size,
        y1: firstStringY,
        y2: lastStringY,
        x: x
    };
    console.log('Nut: ', nut);

    return nut;
}

function createMarks(nutX: number, lastFretX: number, fretCount: number, y: number, r: number) {
    const step = (lastFretX - nutX) / fretCount;
    var marks = [];
    for (var i = 0; i <= fretCount; i++) {
        if ([3, 5, 7, 10, 12, 15].includes(i)) {
            const x = { x: nutX + (i - 0.5) * step, y: y, r: r };
            marks.push(x);
        }
    }
    console.log('Marks: ', marks);

    return marks;
}

function createNote(fret: number, stringo: number, r: number, firstStringY: number, lastStringY: number, nutX: number, lastFretX: number, fretCount: number) {
    const fretStep = (lastFretX - nutX) / fretCount;

    // 4 Strings make 3 sections
    const stringStep = (lastStringY - firstStringY) / 3;

    const note = {
        color: "lightgreen",
        fret: (fret - 0.5) * fretStep + nutX,
        stringo: stringo * stringStep + firstStringY,
        r: r,
    }
    console.log('Note: ', note);

    return note;
}

function createChord(chord: number[], r: number, firstStringY: number, lastStringY: number, nutX: number, lastFretX: number, fretCount: number) {
    // 4 Strings make 3 sections
    const stringStep = (lastStringY - firstStringY) / 3;
    const fretStep = (lastFretX - nutX) / fretCount;


    var notes = [];
    for (var i = 0; i < chord.length; i++) {
        const note = {
            color: "lightgreen",
            fret: (chord[i] - 0.5) * fretStep + nutX,
            stringo: i * stringStep + firstStringY,
            r: r,
        }
        notes.push(note);
    }
    console.log('Chord: ', notes);

    return notes;
}