
export { createStrings, createFrets, createNut, createMarks, createNote, createChord }

interface UkeStrings {
    color: string;
    size: number;
    len: number;
    x1: number;
    y: number[];
}

function createStrings(width: number, height: number): UkeStrings {
    const strings = {
        color: 'black',
        size: 3,
        len: 0.948 * width,
        x1: 0.05 * width,
        y: [
            0.1 * height,
            (0.1 + 8 / 30) * height,
            (0.1 + (2 * 8) / 30) * height,
            0.9 * height,
        ],
    };
    console.log('Strings: ', strings);

    return strings;
}


interface Frets {
    color: string;
    size: number;
    x: number[];
    y1: number;
    y2: number;
}

function createFrets(ukeStrings: UkeStrings, fretCount: number): Frets {
    var posX = [];
    for (var i = 0; i <= fretCount; i++) {
        posX.push(ukeStrings.x1 + (i / fretCount) * ukeStrings.len);
    }
    const frets = {
        color: "grey",
        size: 2,
        x: posX,
        y1: ukeStrings.y[0],
        y2: ukeStrings.y.slice(-1)[0],
    };
    console.log('Frets: ', frets);

    return frets;
}

interface Nut {
    color: string;
    size: number;
    x: number;
    y1: number;
    y2: number;
}

function createNut(frets: Frets): Nut {
    const nut = {
        color: "black",
        size: 4 * frets.size,
        x: frets.x[0],
        y1: frets.y1,
        y2: frets.y2,
    };
    console.log('Nut: ', nut);

    return nut;
}

interface Mark {
    x: number;
    y: number;
    r: number;
}

function createMarks(frets: Frets, r: number): Mark[] {
    const step = (frets.x.slice(-1)[0] - frets.x[0]) / frets.x.length;
    var marks = [];
    for (var i = 0; i <= frets.x.length; i++) {
        if ([3, 5, 7, 10, 12, 15].includes(i)) {
            const height = (frets.y2 + frets.y1) / 2 + frets.y1;
            const x = { x: frets.x[0] + (i - 0.5) * step, y: height, r: r };
            marks.push(x);
        }
    }
    console.log('Marks: ', marks);

    return marks;
}


interface Note {
    color: string;
    fret: number;
    stringo: number;
    r: number;
}
function createNote(ukeStrings: UkeStrings, frets: Frets, fret: number, stringo: number, r: number): Note {
    // 4 Strings make 3 sections
    const stringStep = (ukeStrings.y.slice(-1)[0] - ukeStrings.y[0]) / (ukeStrings.y.length - 1);
    const fretStep = (frets.x.slice(-1)[0] - frets.x[0]) / frets.x.length;

    const note = {
        color: "lightgreen",
        fret: (fret - 0.5) * fretStep + frets.x[0],
        stringo: stringo * stringStep + ukeStrings.y[0],
        r: r,
    }
    console.log('Note: ', note);

    return note;
}

function createChord(ukeStrings: UkeStrings, frets: Frets, chord: number[], r: number): Note[] {
    // 4 Strings make 3 sections
    const stringStep = (ukeStrings.y.slice(-1)[0] - ukeStrings.y[0]) / (ukeStrings.y.length - 1);
    const fretStep = (frets.x.slice(-1)[0] - frets.x[0]) / frets.x.length;

    var notes = [];
    for (var i = 0; i < chord.length; i++) {
        const note = {
            colors: "lightgreen",
            fret: (chord[i] - 0.5) * fretStep + frets.x[0],
            stringo: i * stringStep + ukeStrings.y[0],
            r: r,
        }
        notes.push(note);
    }
    console.log('Chord: ', notes);

    return notes;
}