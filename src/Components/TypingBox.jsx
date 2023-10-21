import React, { useState } from "react";

const loremIpsumArray = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet,",
  "consectetur",
  "adipiscing",
  "elit.",
  "Pellentesque",
  "auctor",
  "augue",
  "id",
  "neque",
  "iaculis",
  "sollicitudin.",
  "Proin",
  "ut",
  "leo",
  "eu",
  "lectus",
  "volutpat",
  "mollis.",
  "Phasellus",
  "sagittis",
  "nunc",
  "in",
  "lorem",
  "commodo,",
  "in",
  "scelerisque",
  "nisl",
  "tempor.",
  "Vivamus",
  "aliquet",
  "dolor",
  "non",
  "mattis",
  "tincidunt.",
  "Sed",
  "quis",
  "enim",
  "suscipit,",
  "fermentum",
  "ligula",
  "nec,",
  "vestibulum",
  "diam.",
  "Vestibulum",
  "et",
  "tincidunt",
  "diam.",
  "Fusce",
  "ullamcorper",
  "sollicitudin",
  "molestie.",
  "Quisque",
  "quis",
  "tortor",
  "eget",
  "nulla",
  "suscipit",
  "aliquet.",
  "In",
  "a",
  "lacinia",
  "odio.",
  "Etiam",
  "tincidunt",
  "mauris",
  "at",
  "leo",
  "egestas.",
  "Cras",
  "blandit",
  "eu",
  "neque",
  "vel",
  "fermentum.",
];

function TypingBox() {
  const [words, setWords] = useState(loremIpsumArray);

  return (
    <div className="typingBox">
      {words.map((item, index) => (
        <span className="untyped" key={index}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default TypingBox;
