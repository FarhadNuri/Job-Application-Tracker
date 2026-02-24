# Job Application Tracker

### Answer to Question 1
getElementById("id") =  
Returns a single element matching with the id. The returned element is always unique as id is used to identify unique elements. It is less flexible as it only works for id.

getElementsByClassName("class") =
Returns multiple elements matching with the class name. Many elements can have same class. It gives a HTMLCollection. It is less flexible because it only works for class.

querySelector("selector") =
Returns first element matching the CSS selector. We can use id, class, tag, anything like CSS. It returns only one element, the first match. It is more flexible than getElementById.

querySelectorAll("selector") =
Returns all elements matching the CSS selector. It gives a NodeList like array. We can use id, class, tag, any CSS selector. It is flexible and mostly used in modern JS.


### Answer to Question 2
We use createElement() to create new element. Then we can add text or content inside it. After that we use appendChild() or append() to insert it into the DOM.

```javascript
let headingTag = document.createElement("h1");
headingTag.textContent = "Hello World";
document.body.append(headingTag);
```

document.createElement("h1") = Creates a new <h1> element
headingTag.textContent = "Hello World" = Adds text inside the <h1>.
document.body.append(headingTag) = Adds the <h1> inside the <body>.