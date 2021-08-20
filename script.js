text = document.getElementById("texto-entrada").textContent.toLowerCase();

function searchLetters(text) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
  results = [];

  for (i = 0; i < alphabet.length; i++) {
    resultHtml = document.getElementById("resultados1");
    let letter = alphabet[i];
    let n = text.split(letter).length - 1;
    results.push(`${letter} ${n}`);
    resultHtml.innerHTML =
      resultHtml.innerHTML + `<p><strong>${letter} ${n}</strong></p?<br>`;
  }
  return results;
}

function searchWords(text) {
  let textTwo = text.replace(/[0-9.,:\r\s]/gm, " ").split(" ");
  let uniq = [...new Set(textTwo)];
  results = [];
  for (i = 1; i < uniq.length; i++) {
    resultHtml = document.getElementById("resultados2");
    let word = uniq[i];
    let n = text.split(word).length - 1;
    results.push(`${word} ${n}`);
    resultHtml.innerHTML =
      resultHtml.innerHTML + `<p><strong>${word} ${n}</strong></p?<br>`;
  }
  return results;
}
searchLetters(text);
searchWords(text);
