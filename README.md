
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```
2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```
3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```
```bash
https://openapi.programming-hero.com/api/category/1
```
4. Get 🌴Plants Detail <br/>
```bash
https://openapi.programming-hero.com/api/plant/${id}
```
```bash
https://openapi.programming-hero.com/api/plant/1
```
--
#### 7) Create a README file to answer the following question-


#### 1) What is the difference between var, let, and const?
Ans:
1.var → function-scoped, can be re-declared and re-assigned, hoisted with undefined.

2.let → block-scoped, can be re-assigned but not re-declared in same scope, hoisted but not initialized (Temporal Dead Zone).

3.const → block-scoped, cannot be re-assigned or re-declared, hoisted but not initialized.

#### 2) What is the difference between map(), forEach(), and filter()? 
Ans:
#forEach() → executes a function on each element, does not return new array.

#map() → transforms each element, returns new array.

#filter() → returns elements that satisfy a condition, returns new array.

#### 3) What are arrow functions in ES6?
Ans:
1.Shorter syntax for functions.
2.Do not have their own this.
code:
const sum = (a,b) => a+b;
const square = x => x*x;
const greet = () => console.log("Hello");


#### 4) How does destructuring assignment work in ES6?
Ans:
Extract values from arrays or objects into variables.
example in js:
 const arr = [1,2,3];
const [a,b,c] = arr; // a=1, b=2, c=3


#### 5) Explain template literals in ES6. How are they different from string concatenation?
Ans:
#Strings wrapped in backticks `.

#Allow interpolation with ${expression}.

#Allow multi-line strings.

Difference from concatenation:

1.Template literals are cleaner, readable, and support multi-line.

2.Concatenation uses + operator and is less readable for dynamic values.

## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.

## 🔗 Submission
- **Live Link :** YOUR_DEPLOYED_URL_HERE  
- **GitHub Private Repository:** YOUR_REPO_URL_HERE  

---