class HashTable {

    absoluteListSize = 99;
    currentListSize = 0;
    currentloadFactor = 0
    acceptedLoadFactor = 0.75;

    list = new Array<string>(this.absoluteListSize);

    hash(key: string) {
        let hashCode = 0;
        for (let i = 0; i < key.length; i++) {
            hashCode = (hashCode << 5) - hashCode + key.charCodeAt(i);
        }
        return hashCode % this.absoluteListSize;
    }

    insert(key: string, value: string) {
        let hashCode = this.hash(key);
        this.list.splice(hashCode, 0, value);
        this.currentListSize++;
        this.calculateLoadFactor();
    }

    lookup(key: string) {
        let hashCode = this.hash(key);
        return this.list[hashCode];
    }

    delete(value: string) {
        let hashCode = this.hash(value);
        this.list.splice(hashCode, 1);
        this.currentListSize--
        this.calculateLoadFactor();
    }

    calculateLoadFactor() {
        if (this.currentloadFactor > .75) {
            this.resizeList()
        }
        this.currentloadFactor = this.currentListSize / this.absoluteListSize;
    }

    resizeList() {
        // let newListSize = this.currentListSize / 
    }
}
let dictionary = new HashTable();
dictionary.insert("", "Kirk");
console.log("Hash value for 'Billy': " + dictionary.hash("Billy"));
console.log(dictionary);
console.log("Lookup value for 'Billy': " + dictionary.lookup("Billy"));
console.log("Delete 'Billy'");
dictionary.delete("");
console.log(dictionary);



