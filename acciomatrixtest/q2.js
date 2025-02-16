import axios from "axios";
async function getProducts() {
  try {
    let response = await axios.get("abc.com/api/getProduct");
    console.log(response.data);
  } catch (err) {
    console.log(err.response.data);
  }
}

class Product {
    constructor(categories, price, quantity, description, Id) {
      this.category = categories;
      this.price = price;
      this.quantity = quantity;
      this.description = description;
      this.productId = Id;
    }
  }
  
  class Inventory {
    constructor() {
      this.itemList = [];
    }
  
    add(categories, price, quantity, description, Id) {
      let newProduct = new Product(categories, price, quantity, description, Id);
      // console.log(newProduct);
  
      this.itemList.push(newProduct);
    }
  
    update(id,data) {
        let arr = []
        for(let t of this.itemList){
          //  console.log(t);
          if(t.productId == id){
             let obj = {...t}
             obj.quantity = data
             arr.push(obj)
          }
          else{
            arr.push(t)
          }
        }  
  
    }

    delete(id) {}
  
    print() {
      console.log(this.itemList);
    }
  }
  
  let inventory = new Inventory();
  
  inventory.add("electronics", 1000, 10, "laptop", 1);
  inventory.add("fashion", 100, 10000, "jeans", 2);
  
  // inventory.print();
  
  inventory.update(1, 100);
  