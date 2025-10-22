# Etch-a-Sketch Project

## 🎯 Overview  
This project was a hands-on exercise in using **JavaScript** and **Flexbox** to dynamically create and manipulate elements on a webpage. The goal was to build a digital “etch-a-sketch” — a sketch pad made of square divs that react to user interaction.

---

## 🧠 What I Learned

### 🧩 1. DOM Manipulation with JavaScript  
I learned how to create HTML elements dynamically using JavaScript instead of manually writing them in the HTML file. Specifically, I used loops to generate a **16x16 grid** of square divs and append them to a container div.  
- This taught me how to use methods like `document.createElement()`, `appendChild()`, and `querySelector()` effectively.  
- I also practiced clearing and recreating elements in the DOM when generating new grids.

---

### 💪 2. Using Flexbox for Layout  
Even though the grid could have been built using CSS Grid, this project focused on **Flexbox**. I learned how to:
- Use `display: flex;` and `flex-wrap: wrap;` to make square divs align neatly into rows and columns.
- Adjust sizing and spacing so that all squares fit perfectly in the container.
- Troubleshoot layout issues caused by borders and margins.

This really helped me understand how Flexbox distributes space and aligns items dynamically.

---

### 🎨 3. Event Handling and Hover Effects  
I learned how to respond to **user interactions** by adding event listeners to each grid square. When hovering over a square, its background color changes to create a “colored” effect.  
- I practiced using `addEventListener('mouseenter', ...)` to trigger these changes.
- I experimented with different ways to apply color changes, including toggling CSS classes and directly modifying the `style` property in JavaScript.

---

### 🔘 4. Dynamic Grid Resizing  
I added a **button** that prompts the user to input a new grid size. When the button is clicked:
- A popup (`prompt()`) asks for a number of squares per side.
- The existing grid is cleared.
- A new grid is generated, scaled to fit within the area.

This taught me how to handle user input, validate it, and rebuild elements dynamically based on that input.

---

### 🧰 5. Debugging Techniques  
During development, I ran into one main problem like:
- Flexbox items not wrapping correctly.

I practiced using **browser developer tools** — especially the **console** and **elements panel** — to inspect the DOM, check for JavaScript errors, and log key information with `console.log()` for debugging.

---

## 🚀 Skills Practiced
- HTML structure and semantic organization  
- JavaScript DOM manipulation  
- Event handling and user interaction  
- Flexbox layout design  
- Debugging and problem-solving  

---

## 📦 Summary
This project strengthened my understanding of **how HTML, CSS, and JavaScript work together** to create interactive web pages. By building everything from scratch — including dynamic grids, event listeners, and layout control — I gained confidence in writing clean, modular JavaScript and using Flexbox effectively.