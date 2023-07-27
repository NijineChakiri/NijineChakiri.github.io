function convertAccidential(inputString) {
  if (inputString) {
    return inputString.replace("#", "\u266F").replace("b", "\u266D");
  } else {
    return "";
  }
}
function parseChord(inputString) {
  const pattern =
    /^([ABCDEFG])(#|b)?(m|aug|dim|m7|M7|7|mM7|m7b5|aug7|augM7|dim7|dimM7|sus4|sus2|7sus4|7sus2|add9|6|m6)?(?:\(((?:b5|#5|b9|9|#9|11|#11|b13|13)(?:,(?:b5|#5|b9|9|#9|11|#11|b13|13))*)\))?(?:omit(?:\(((?:root|3|5|7|9|11|)(?:,(?:root|3|5|7|9|11))*)\)))?(?:\/([ABCDEFG]))?(#|b)?$/;
  const result = pattern.exec(inputString.replace(/\s/g, ""));

  if (result) {
    const [
      chord,
      root,
      rootAccidental,
      construction,
      extensions,
      omit,
      bass,
      bassAccidental,
    ] = result;

    return {
      chord,
      root,
      rootAccidental: rootAccidental || "",
      rootAccidentalUnc: convertAccidential(rootAccidental),
      construction: construction || "",
      extensions: extensions || "",
      omit: omit || "",
      bass: bass || "",
      bassAccidental: bassAccidental || "",
      bassAccidentalUnc: convertAccidential(bassAccidental),
    };
  } else {
    return null;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  let chordSpan = document.querySelectorAll(".chord");
  chordSpan.forEach((span) => {
    console.log(span.innerHTML);
    let chord = parseChord(span.innerHTML);
    console.log(chord);
    if (chord === null) {
      span.innerHTML = "Undefined_Chord";
    } else {
      let chordString =
        '<span class="root">' + chord.root + "</span>" +
        '<span class="rootAccidental">' + chord.rootAccidentalUnc + "</span>" +
        '<span class="construction">' + chord.construction + "</span>" +
        '<span class="extensions">' + chord.extensions + "</span>" +
        '<span class="omit">' + chord.omit + "</span>" +
        '<span class="bass">' + chord.bass + "</span>" +
        '<span class="bassAccidental">' + chord.bassAccidentalUnc + "</span>";
      span.innerHTML = chordString;
      span.setAttribute("root", chord.root + chord.rootAccidental);

      if (chord.construction === "") {
        let rootAccidentalSpan = span.querySelector(".rootAccidental");
        rootAccidentalSpan.style.fontSize = "80%";
      }
    }
  });
});
