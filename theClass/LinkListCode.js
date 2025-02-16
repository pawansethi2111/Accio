class Node{
    constructor(data){
        this.data = data;
        this.next = null
    }
}

// let n1 = new Node(10)

// let n2 = new Node(20)

// console.log(n1)
// console.log(n2)

class LinkList{
    constructor()
    {
        this.head = null
    }
    
    addNodeAtEnd(data)
    {
        let newNode = new Node(data)
        let currentNode = this.head
        if(currentNode == null)
        {
            this.head = newNode
            return
        }        
        while(currentNode.next!=null)
        {
                currentNode = currentNode.next
        }
        currentNode.next = newNode
    }
    addNodeAtStart(data){
        let newNode = new Node(data)
        if(this.head==null){
            this.head = newNode;
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
    }


    printValue(){
        let currentNode = this.head
        let arr = []
        while(currentNode!=null)
        {
            arr.push(currentNode.data)
            // console.log(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(arr.join("->"))
    }
}


let l1 = new LinkList()
l1.addNodeAtEnd(100)
l1.addNodeAtEnd(200)
l1.addNodeAtEnd(300)
l1.addNodeAtStart(50)
l1.addNodeAtEnd(40)
l1.printValue()