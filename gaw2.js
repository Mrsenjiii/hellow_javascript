/* Abstract:
*
* Write method definitions to manage Cafe.
*
* Product defines a product with its name, price and number of items in stock
* A cafe is initialized with an array of products, array of instances of
  CustomerProducts class, and balance amount
* A customer with a customer_id can buy things if it's available in the Cafe.
*
* The stock should be reduced based on the buy request
* Cafe balance amount should be updated
* Customer history is maintained
*
* A customer with a customer_id can return things if he/she has bought before
*
* Check in the customer_products, if he/she has bought before
* If yes, reduce or remove accordingly
* Increase the stock
* Update the balance
*/



/*
 * buyProduct makes a purchase in the cafe, and does the following:
 * 1. Reduces the stock of a product based on the buy request
 * 2. Updates the cafe balance based on the buy request
 * 3. Creates and add the CustomerProducts instance to the customer_products of Cafe class
 *
 * @param {number} customer_id - unique ID of customer
 * @param {object} product - object of Product class
 * @param {number} count - number of items (quantity) to be purchased
 * @return {boolean} 
 *
 * The method should return true if the purchase is successful, and false in the following cases:
 * 1. Product is not available in Cafe
 * 2. The quantity to be puchased is more than the current stock of a product



/*
 * returnProduct makes a return of a purchase in the cafe, and does the following:
 * 1. Updates the stock of a particular product based on the return request
 * 2. Updates the cafe balance based on the return request
 * 3. Updates or deletes the CustomerProducts instance to the customer_products of Cafe class (delete in case of a full return)
 *
 *
 *
 * @param {number} customer_id - unique ID of customer
 * @param {object} product - object of Product class
 * @param {number} count - number of items (quantity) to be returned
 * @return {boolean}
 * 
 * 
 * 
 * 
 * The method should return true if the return is successful, and false in the following cases:
 * 1. No such purchase was made from the Cafe
 * 2. The quantity to be returned is more than the quantity purchased
*/


/*
 * getCurrentBalance return the current balance of the Cafe
*/


class Product {
    constructor(name, price, stock) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
  }



class CustomerProducts {
    constructor(customer_id, product, count){
      this.customer_id = customer_id;
      this.product = product;
      this.count = count;
    }
  }



class Cafe {
    constructor(products, balance){
      this.products = products;
      this.balance = balance;
      //Maintain the customer history
      this.customer_products = [];
    }



    buyProduct(customer_id, product, count){

        // Add your code here
        //   *
        //   * @param {number} customer_id - unique ID of customer
        //   * @param {object} product - object of Product class
        //   * @param {number} count - number of items (quantity) to be purchased
        //   * @return {boolean}

        let stock_in = false // check if out of stock. 
        let availablity = this.products.reduce((found,obj) => 
        { return found || JSON.stringify(obj) == JSON.stringify(product)} 
          ,false)
        if (availablity){stock_in = (count <= product.stock)}

        if(availablity && stock_in){
            this.balance += product.price*count;
            product.stock = product.stock-count;
            this.customer_products.push(new CustomerProducts(customer_id,product,count))
            return true;
        }
        return false;
    }



    returnProduct(customer_id, product, count){ // count is no of products you want to return .
      // Add your code here
      // check validity of the customer in the database.
        // let customer_obj = this.customer_products.reduce((found,x) => {if(customer_id == x.customer_id){return x} },undefined)
        let customer_obj = undefined;
        for(const x of this.customer_products){
            if (x.customer_id == customer_id){
                // customer in the database.
                customer_obj = x ;
                break;
            }
        }

        if (customer_obj &&  count <= customer_obj.count  ){// custormer is available
            // console.log('customer avialble and valid return')
            if(count < customer_obj.count){ // counts of returns is less 
                customer_obj.count = customer_obj.count -  count ;
                this.balance = this.balance - customer_obj.product.price*count;
                customer_obj.product.stock = customer_obj.product.stock + count;
                // console.log("retured succesfully stilll in the database")
                return true;
            }
            else{
                this.balance = this.balance -  customer_obj.product.price*count;
                customer_obj.product.stock = customer_obj.product.stock + count;
                console.log(customer_obj.product.stock)
                let indx = this.customer_products.indexOf(customer_obj);
                this.customer_products.splice(indx,1);
                return true;
                // console.log('returnd and deleted from database.');

            }

        } 
        return false;
    }

    getCurrentBalance(){
      // get the current balance at cafe
      return this.balance;
    }
  }



const apple = new Product('apple',80,80)
const mango = new Product('mango',50,10)
const guava = new Product('guava',32,30)
const carrot = new Product('carrot',82,10)
const peanuts = new Product('peanuts',100,55)
const honey = new Product('honey',23,4)



const grocery_cafe = new Cafe([mango,apple,guava,carrot,peanuts] , 0 );
const c1 = grocery_cafe.buyProduct(101,mango,5)// bought
console.log( 'c1 can buy : ', c1 )
console.log(grocery_cafe.customer_products)
console.log('balance of the cafe', grocery_cafe.getCurrentBalance())
grocery_cafe.returnProduct(101,mango,3)
console.log('balance of the cafe', grocery_cafe.getCurrentBalance())
console.log(grocery_cafe.customer_products)