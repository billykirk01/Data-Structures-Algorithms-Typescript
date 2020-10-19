import { node } from "./linkedListNode";

class linkedList {

    root?: node

    append(value: number) {
        let newNode = new node(value);

        // Base case - Empty linked list
        if (this.root == null) {
            this.root = newNode
            return
        }

        let lastNode = this.findEnd(this.root)

        lastNode.child = newNode;
    }

    private findEnd(currentNode: node): node {
        // At end of linked-list
        if (currentNode.child == null) {
            return currentNode;
        }

        return this.findEnd(currentNode.child)
    }

    push(value: number) {
        let newRoot = new node(value);

        newRoot.child = this.root;
        this.root = newRoot;
    }

    insertSorted(value: number) {
        let newNode = new node(value);

        // Base case - Empty linked list
        if (this.root == null) {
            this.root = newNode;
            return
        }

        // Special Case - root is larger than element being added
        if (this.root.value > newNode.value) {
            newNode.child = this.root
            this.root = newNode
            return
        }

        let previousNode = this.findPrevious(value, this.root)

        newNode.child = previousNode.child
        previousNode.child = newNode
    }

    private findPrevious(value: number, parent: node): node {
        if (parent.child != null && parent.child.value < value) {
            return this.findPrevious(value, parent.child)
        }

        return parent
    }

    printList() {
        this.recursivePrint(this.root)
    }

    private recursivePrint(currentNode?: node) {

        // Base case - Empty linked list
        if (currentNode == null) { return }

        process.stdout.write(currentNode.value.toString());

        // No more children
        if (currentNode.child == null) { return }

        process.stdout.write(" => ")

        return this.recursivePrint(currentNode.child)
    }
}

let listOne = new linkedList();
listOne.append(4)
listOne.append(3)
listOne.append(5)
console.log("List one (append):")
listOne.printList();

console.log("\n")

let listTwo = new linkedList();
listTwo.push(4);
listTwo.push(3);
listTwo.push(5);
console.log("List two (push):")
listTwo.printList();

console.log("\n")

let listThree = new linkedList();
listThree.insertSorted(4)
listThree.insertSorted(3)
listThree.insertSorted(5)
console.log("List three (sorted):")
listThree.printList();
