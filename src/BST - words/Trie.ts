import { TrieNode } from "./TrieNode";

export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    public insertWord(word: string): void {
        let charNum = 0;

        // start traversal at root node
        let currentNode = this.root;

        for (const char of word) {
            // check if charecter is one of the current node's children
            let charNode = currentNode.children.get(char);

            // if charecter was not a child of current node make a node and add as child of current node
            if (!charNode) {
                charNode = new TrieNode(char);
                currentNode.children.set(char, charNode);
            }

            // if at end of word set leaf flag else advance to next level (currentNode becomes charNode)
            if (charNum++ === word.length - 1) {
                charNode.isLeaf = true;
            } else {
                currentNode = charNode;
            }

        }

    }

    public insertWords(words: string) {
        const wordsAry = words.match(/\b(\w+)\b/g);
        if (wordsAry) {
            wordsAry.forEach((word) => {
                this.insertWord(word);
            })
        }
    }

    public search(wordOrFragment: string): string[] {
        const baseNode = this.getNode(wordOrFragment);
        let results = [];
        this.recursiveSearchWords(baseNode, results, wordOrFragment.slice(0, -1));
        return results
    }

    private getNode(wordOrFragment: string): TrieNode {
        let node;
        let currentNode = this.root.children;

        for (const char of wordOrFragment) {
            if (currentNode.get(char)) {
                node = currentNode.get(char);
                currentNode = node.children;
            }
        }

        return node;
    }

    private recursiveSearchWords(trie: TrieNode, results: string[], prefix: string) {
        if (trie == null) { return }
        if (trie.isLeaf) {
            results.push(prefix + trie.character)
        } else {
            if (trie.character) { prefix += trie.character }
            trie.children.forEach((value: TrieNode, key: string) => {
                this.recursiveSearchWords(value, results, prefix);
            });
        }
    }

    public allWords() {
        let results = [];
        this.recursiveSearchWords(this.root, results, "");
        return results
    }

}

let trie = new Trie()

trie.insertWord("Hey")
trie.insertWord("Help")
trie.insertWords("Well this is nice.")

console.log(trie.search("H"));

console.log(trie.allWords())
