export class WebPageNode {

    private leftChild!: WebPageNode
    private rightChild!: WebPageNode

    constructor(private id: string, private webLink: string) { }

    getLeftChild() {
        return this.leftChild;
    }

    getRightChild() {
        return this.rightChild;
    }

    setLeftChild(leftChild: WebPageNode) {
        this.leftChild = leftChild;
    }

    setRightChild(rightChild: WebPageNode) {
        this.rightChild = rightChild;
    }

    getId() {
        return this.id;
    }

    getWebLink() {
        return this.webLink;
    }

    setID(id: string) {
        this.id = id;
    }

    setWebLink(webLink: string) {
        this.webLink = webLink;
    }

}
