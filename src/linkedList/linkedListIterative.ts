import {node} from "./linkedListNode";

class linkedList {

    root?: node;

    append(value: number) {
        let newNode = new node(value);

        // Base case - Empty linked list
        if (this.root == null) {
            this.root = newNode;
            return;
        }

        let currentNode = this.root;

        while (currentNode.child != null) {
            currentNode = currentNode.child;
        }

        currentNode.child = newNode;
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
            return;
        }

        // Special Case - Root is larger than element being added
        if (this.root.value > newNode.value) {
            newNode.child = this.root;
            this.root = newNode;
            return;
        }

        let previousNode = this.root;
        let currentNode = this.root.child;

        while (currentNode != null && value > currentNode.value) {
            previousNode = currentNode;
            currentNode = currentNode.child;
        }

        newNode.child = currentNode;
        previousNode.child = newNode;
    }

    print() {

        let currentNode = this.root;

        while (currentNode != null) {
            process.stdout.write(currentNode.value.toString());

            if (currentNode.child == null) {return;}

            process.stdout.write(" => ");

            currentNode = currentNode.child;
        }

    }

}

let listOne = new linkedList();
listOne.append(4);
listOne.append(3);
listOne.append(5);
console.log("List one (append):");
listOne.print();

console.log("\n");

let listTwo = new linkedList();
listTwo.push(4);
listTwo.push(3);
listTwo.push(5);
console.log("List two (push):");
listTwo.print();

console.log("\n");

let listThree = new linkedList();
listThree.insertSorted(4);
listThree.insertSorted(3);
listThree.insertSorted(5);
console.log("List three (sorted):");
listThree.print();
