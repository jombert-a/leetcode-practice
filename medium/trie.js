class treeNode {
    links = {};
    isEnd = false;

    hasChar(char) {
        return this.links.hasOwnProperty(char);
    }

    setEnd() {
        this.isEnd = true;
    }

    add(word) {
        if (word.length > 0) {
            if (!this.hasChar(word.charAt(0))) {
                this.links[word.charAt(0)] = new treeNode();
            }
            this.links[word.charAt(0)].add(word.substring(1, word.length));
        } else {
            this.setEnd();
        }
    }

    _getList(word = "") {
        if (Object.keys(this.links).length > 0) {
            for (const seed in this.links) {
                this.links[seed]._getList(word + seed)
            }
            if (this.isEnd) {
                console.log("word:", word)
            }
        } else {
            console.log("word:", word)
        }
    }
}

const Trie = function() {
    this.root = new treeNode()
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    this.root.add(word);
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let seed = this.root;
    for (let char of word) {
        if (!seed.hasChar(char)) {
            return false;
        } else {
            seed = seed.links[char];
        }
    }

    return seed.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let seed = this.root;
    for (let char of prefix) {
        if (!seed.hasChar(char)) {
            return false;
        } else {
            seed = seed.links[char];
        }
    }

    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // return True
console.log(trie.search("app"));     // return False
console.log(trie.startsWith("app")); // return True
trie.insert("app");
console.log(trie.search("app"));     // return True

trie.root._getList();
