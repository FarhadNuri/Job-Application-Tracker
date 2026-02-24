# Job Application Tracker


### Answer to Question 1
**getElementById("id")**  
Returns a single element matching with the id. The returned element is always unique as id is used to identify unique elements. Less flexible because it only works for id.

**getElementsByClassName("class")**  
Returns multiple elements matching with the class name. Many elements can have the same class. It gives a `HTMLCollection`. Less flexible because it only works for class.

**querySelector("selector")**  
Returns the first element matching the CSS selector. We can use id, class, tag, anything like CSS. Returns only one element (first match). More flexible than `getElementById`.

**querySelectorAll("selector")**  
Returns all elements matching the CSS selector. It gives a `NodeList` (like an array). Can use id, class, tag, or any CSS selector. Flexible and mostly used in modern JS.

---

### Answer to Question 2
We use `createElement()` to create a new element. Then we can add text or content inside it. After that we use `appendChild()` or `append()` to insert it into the DOM.

```javascript
let headingTag = document.createElement("h1");
headingTag.textContent = "Hello World";
document.body.append(headingTag);
```

`document.createElement("h1")` : `Creates a new <h1> element`.

`headingTag.textContent = "Hello World"` : `Adds text inside the <h1>`.

`document.body.append(headingTag)` : `Adds the <h1> inside the <body>`.

---

### Answer to Question 3 
Event Bubbling means when we click on child element, the event also goes to its parent automatically. It moves from child to parent, then to the body, then to the document. Like bubble going up. First child runs, then parent runs. If we click a <button> inside a `<div>`, the browser triggers the click handler on the button first, then goes to the `<div>`, then moves to the `<body>`.

---

### Answer to Question 4 
Event Delegation means adding event listener to parent instead of adding to many child elements. Parent handles the event using bubbling. It is useful because less code, better performance, and works for dynamic elements also. Instead of adding an event listener to 100 individual list items `<li>`, we can add one listener to the parent `<ul>`.

---

### Answer to Question 5 
`preventDefault()` = Stops the default browser action like form submit or link redirect. 
If we click a `<a>` link, normally the browser will open the link. But if we use `preventDefault()`, it will stop the link from opening. 


`stopPropagation()` = Stops the event from moving to parent element. 
It stops bubbling. If we click a `<button>` inside a `<div>`, normally the event goes to the button first, then the div. But if we use `stopPropagation()`, it will stop at the button.





















