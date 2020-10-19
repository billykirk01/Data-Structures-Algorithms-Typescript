import { WebPageNode } from "./WebPageNode";

export class SearchEngine {

    private root!: WebPageNode; // root of the BST-based search engine

    constructor() { }

    isEmpty() {
        return this.root == null;
    }

    insert(id: string, webLink: string) {
        this.root = this.recursiveInsert(this.root, id, webLink);
    }

    // inserts an instance
    // of WebPageNode with the given id and weblink into the search
    // engine conforming to the search order property of a BST.
    // This method throws an exception if the user tries to
    // insert an entry with a duplicate id.
    private recursiveInsert(current: WebPageNode, id: string, webLink: string) {
        if (current == null) { // base case, add it here
            current = new WebPageNode(id, webLink);
        } else if (current.getId() == id) {
            console.warn("WARNING: failed to insert duplicate web page '" + id + "'.");
        } else if (current.getId() > id) { // go left
            current.setLeftChild(this.recursiveInsert(current.getLeftChild(), id, webLink));
        } else { // go right
            current.setRightChild(this.recursiveInsert(current.getRightChild(), id, webLink));
        }
        return current;

    }

    searchWebPage(id: string) {
        return this.recursiveSearchWebPage(this.root, id);

    }

    // A look-up method that
    // searches for a webPageNode with the given id in the current
    // search engine and returns the related weblink if that webPageNode
    // is present. Otherwise, a Warning message starting with
    // "No web link found" will be returned.
    private recursiveSearchWebPage(current: WebPageNode, id: string): string {
        if (current == null) { // first base case
            return "No web link found for web page '" + id + "'.";
        } else if (current.getId() == id) { // second base case
            return current.getWebLink();
        } else if (id < current.getId()) {
            return this.recursiveSearchWebPage(current.getLeftChild(), id);
        } else {
            return this.recursiveSearchWebPage(current.getRightChild(), id);
        }
    }

    getWebPageCount() {
        return this.recursiveGetWebPageCount(this.root);
    }

    // returns the number of webPageNodes
    // stored in the search engine
    private recursiveGetWebPageCount(current: WebPageNode): number {
        if (current == null) { // base case
            return 0;
        }
        return 1 + this.recursiveGetWebPageCount(current.getLeftChild()) + this.recursiveGetWebPageCount(current.getRightChild());
    }

    getAllWebPages() {
        let result: string[] = [];
        this.addNodeID(result, this.root);
        return result;
    }

    // returns an array
    // of strings that stores all the id fields of the webPageNodes
    // present in the current search engine, sorted in alphabetical
    // order from left to right.
    private addNodeID(result: string[], current: WebPageNode) {
        if (current == null) { // base case
            return;
        }
        this.addNodeID(result, current.getLeftChild());
        result.push(current.getId());
        this.addNodeID(result, current.getRightChild());
    }

    printDiagram() {
        this.recursivePrintSideways(this.root, "");
    }

    private recursivePrintSideways(current: WebPageNode, indent: string) {
        if (current != null) {
            this.recursivePrintSideways(current.getRightChild(), indent + "    ");
            console.log(indent + current.getId());
            this.recursivePrintSideways(current.getLeftChild(), indent + "    ");
        }

    }

}

let se = new SearchEngine();

console.log("Results for 'MSN': " + se.searchWebPage("MSN"));

se.insert("MSN", "http://msn.com");
se.insert("MKE", "http://mke.com");
se.insert("ORD", "http://ord.com");
se.insert("DEN", "http://denver.com");
se.insert("DET", "http://detroit.com");
se.insert("SEA", "http://seatac.com");

console.log("Total Webpages: " + se.getWebPageCount());
console.log("Webpages Alpha Order: " + se.getAllWebPages());
console.log("Webpage Diagram:");
se.printDiagram();
console.log("Results for 'SEA': " + se.searchWebPage("SEA"));
se.insert("SEA", "http://seatac.com");


