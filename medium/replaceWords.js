var replaceWords = function(dictionary, sentence) {
    const sortedDictionary = dictionary.sort((a, b) => a.length > b.length ? 1 : -1);
    const sentenceArr = sentence.split(" ");

    for (let i = 0; i < sentenceArr.length; i++) {
        if (sentenceArr[i].length <= sortedDictionary[0].length) continue;

        for (let j = 1; j < sentenceArr[i].length; j++) {
            const root = sentenceArr[i].slice(0, j);

            if (root.length > sortedDictionary[sortedDictionary.length - 1].length) break;

            const indexOf = sortedDictionary.indexOf(root);
            if (indexOf !== -1) {
                sentenceArr[i] = sortedDictionary[indexOf];
                break;
            }
        }
    }

    return sentenceArr.join(" ");
};

console.log(replaceWords(["cat","bat","rat"], "the cattle was rattled by the battery"));
console.log(replaceWords(["a","b","c"], "aadsfasf absbs bbab cadsfafs"));
