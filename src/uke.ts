
export { createStrings, createFrets, createNut, createMarks, createChords };
export type { Note };

interface UkeStrings {
    color: string;
    size: number;
    len: number;
    x1: number;
    y: number[];
}

function createStrings(width: number, height: number): UkeStrings {
    const strings: UkeStrings = {
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
    const frets: Frets = {
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
    const nut: Nut = {
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
    const fretStep = (frets.x.slice(-1)[0] - frets.x[0]) / (frets.x.length - 1);
    var marks: Mark[] = [];
    for (var i = 0; i <= frets.x.length; i++) {
        if ([3, 5, 7, 10, 12, 15].includes(i)) {
            const height = (frets.y2 + frets.y1) / 2;
            const x = { x: frets.x[0] + (i - 0.5) * fretStep, y: height, r: r };
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

function createChords(ukeStrings: UkeStrings, frets: Frets, chords: number[][], r: number): Note[] {
    let colors = ["lightgreen", "lightblue", "lightred", "wheat"];
    var notes: Note[][] = [];

    for (var i = 0; i < chords.length; i++) {
        notes.push(createChord(ukeStrings, frets, chords[i], 20, colors[i]));
    }

    return notes.flat()
}

function createChord(ukeStrings: UkeStrings, frets: Frets, chord: number[], r: number, color: string): Note[] {
    // 4 Strings make 3 sections
    const stringStep = (ukeStrings.y.slice(-1)[0] - ukeStrings.y[0]) / (ukeStrings.y.length - 1);
    const fretStep = (frets.x.slice(-1)[0] - frets.x[0]) / (frets.x.length - 1);

    var notes: Note[] = [];
    for (var i = 0; i < chord.length; i++) {
        const note = {
            color: color,
            fret: (chord[i] - 0.5) * fretStep + frets.x[0],
            stringo: (chord.length - 1 - i) * stringStep + ukeStrings.y[0],
            r: r,
        }
        notes.push(note);
    }
    console.log('Chord: ', notes);

    return notes;
}


