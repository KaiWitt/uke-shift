use std::str::FromStr;
use wasm_bindgen::prelude::*;

use ukebox::{Chord, Tuning, Voicing, VoicingConfig};

/// Fret position of a chord.
struct Fingering {
    g: u8,
    c: u8,
    e: u8,
    a: u8,
}
impl Fingering {
    /// Convert struct to a fret vector.
    fn vec(self) -> Vec<u8> {
        vec![self.g, self.c, self.e, self.a]
    }
}

impl From<Voicing> for Fingering {
    fn from(voicing: Voicing) -> Self {
        let mut frets = voicing.frets();
        Self {
            g: frets.next().unwrap(),
            c: frets.next().unwrap(),
            e: frets.next().unwrap(),
            a: frets.next().unwrap(),
        }
    }
}

impl PartialEq for Fingering {
    /// Equal if any fret on the same string is equal.
    fn eq(&self, other: &Self) -> bool {
        self.g == other.g || self.c == other.c || self.e == other.e || self.a == other.a
    }
}
impl Eq for Fingering {}

/// Returns unique fret positions of a chord as a slice of fret IDs.
/// Every four items are part of a chord.
#[wasm_bindgen]
pub fn chord_positions(chord: &str, flavour: &str) -> Box<[u8]> {
    if let Ok(chord) = Chord::from_str(&format!("{}{}", chord, flavour)) {
        let config = VoicingConfig {
            tuning: Tuning::C,
            min_fret: 0,
            max_fret: 17,
            max_span: 4,
        };
        let mut chords: Vec<Fingering> = Vec::with_capacity(4);
        chord.voicings(config).map(Fingering::from).for_each(|f| {
            if !chords.contains(&f) {
                chords.push(f)
            }
        });

        return chords
            .into_iter()
            .flat_map(Fingering::vec)
            .collect::<Vec<u8>>()
            .into_boxed_slice();
    }

    // Return empty slice if chord parsing fails
    Box::new([])
}

#[cfg(test)]
mod tests {
    use crate::chord_positions;

    #[test]
    fn get_c_chord() {
        let chord = "C";
        let flavour = "";

        let result = chord_positions(chord, flavour);

        assert_eq!(result[0..4], [0u8, 0, 0, 3]);
        assert_eq!(result.len(), 4 * 4);
    }

    #[test]
    fn get_cm_chord() {
        let chord = "C";
        let flavour = "m";

        let result = chord_positions(chord, flavour);

        assert_eq!(result[0..4], [0u8, 3, 3, 3]);
        assert_eq!(result.len(), 4 * 4);
    }
}
