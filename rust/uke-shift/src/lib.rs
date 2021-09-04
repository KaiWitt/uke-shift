use std::str::FromStr;

use ukebox::{Chord, FretID, Note, Tuning, VoicingConfig};

pub fn chord_positions<S: AsRef<str>>(chord: S, flavour: S) -> Vec<Vec<u8>> {
    let chord_result = Chord::from_str(&format!("{}{}", chord.as_ref(), flavour.as_ref()));
    if chord_result.is_err() {
        println!("error");
        return Vec::new();
    }

    let chord = chord_result.unwrap();
    let config = VoicingConfig {
        tuning: Tuning::C,
        min_fret: 0,
        max_fret: 16,
        max_span: 4,
    };

    // TODO: Filter voicings for unique notes
    chord
        .voicings(config)
        .map(|v| v.frets().collect())
        .collect()
}

#[cfg(test)]
mod tests {
    use crate::chord_positions;

    #[test]
    fn get_c_chord() {
        let chord = "C";
        let flavour = "";

        let result = chord_positions(chord, flavour);

        assert!(result.contains(&vec![0u8, 0, 0, 3]));
    }
}
