var partitionLabels = function(s) {
    const dict = {};
    const output = [];

    let round = 1;
    for (let index = 0; index < s.length; index++) {
        const letter = s[index];
        if (letter in dict) {
            const newRound = dict[letter];
            for (let letter in dict) {
                if (dict[letter] > newRound) {
                    dict[letter] = newRound;
                }
            }
        } else {
            dict[letter] = round;
        }
        round += 1;
    }

    let marker = dict[s[0]];
    let sum = 0;
    round = 0;
    for (const letter in dict) {
        if (marker !== dict[letter]) {
            output[round] = dict[letter] - marker;
            sum += output[round]
            round += 1;
        }
        marker = dict[letter];
    }

    output.push(s.length - sum)
    return output;
};

// Runtime: 153 ms, faster than 9.44% of JavaScript online submissions for Partition Labels.
// Memory Usage: 45.3 MB, less than 21.73% of JavaScript online submissions for Partition Labels.
