# RecipeJS - Part 3 Implementation Guide

## What's New in Part 3 ✨

Your RecipeJS application now has expandable recipe cards with detailed cooking steps and ingredients, organized using professional JavaScript patterns.

---

## Features Implemented

### 1. **Expandable Recipe Cards**

- Each recipe card now has two toggle buttons:
  - 📋 **Show Steps** - Reveals detailed cooking instructions
  - 🥗 **Show Ingredients** - Displays ingredient list
- Click buttons to show/hide sections
- Multiple cards can be expanded simultaneously
- Smooth animations when sections appear/disappear

### 2. **Enhanced Recipe Data**

All 8 recipes now include:

- **ingredients**: Array of 6-9 ingredient items
- **steps**: Array of 5-12 cooking steps

**Special Feature**: Two recipes have nested substeps:

- **Chicken Tikka Masala** (ID: 2) - Substeps for marinating and sauce preparation
- **Beef Wellington** (ID: 5) - Substeps for mushroom duxelles preparation

### 3. **Recursive Step Rendering**

The `renderSteps()` function uses recursion to handle nested steps:

```javascript
const renderSteps = (steps, level = 0) => {
  // Base case: if not an array, return empty string
  if (!Array.isArray(steps)) return "";

  return steps
    .map((step, index) => {
      if (typeof step === "string") {
        // Simple step: just render as text
        return `<li>Step ${index + 1}: ${step}</li>`;
      } else if (step.substeps) {
        // Complex step with substeps: RECURSION here!
        // Call renderSteps again with substeps at increased level
        const substepsHTML = renderSteps(step.substeps, level + 1);
        return `<li>${step.text}
                        <ul>${substepsHTML}</ul>
                    </li>`;
      }
    })
    .join("");
};
```

**Why Recursion?**

- Handles any depth of nesting (2 levels, 3 levels, 10 levels - doesn't matter!)
- Each recursive call handles one level
- The function calls itself when it encounters substeps
- Automatic indentation based on nesting level

### 4. **IIFE Module Pattern**

Entire application is wrapped in an IIFE (Immediately Invoked Function Expression):

```javascript
const RecipeApp = (() => {
  // PRIVATE variables and functions
  let currentFilter = "all";
  let currentSort = "none";
  const recipeContainer = document.querySelector("#recipe-container");

  const createRecipeCard = (recipe) => {
    /* ... */
  };
  const handleToggleClick = (event) => {
    /* ... */
  };
  const updateDisplay = () => {
    /* ... */
  };

  // PUBLIC API - only return what's needed
  return {
    init: () => {
      updateDisplay();
      setupEventListeners();
    },
    updateDisplay: () => updateDisplay(),
  };
})();

RecipeApp.init();
```

**Benefits:**

- ✅ **Encapsulation**: Variables inside IIFE are private
- ✅ **No Global Pollution**: Only `RecipeApp` is in global scope
- ✅ **Controlled Access**: Only exposed methods can be called from outside
- ✅ **Professional Code**: Industry-standard pattern

### 5. **Event Delegation**

Instead of adding listeners to every toggle button:

```javascript
// INEFFICIENT - Add listener to EACH button
buttons.forEach((btn) => btn.addEventListener("click", handleClick));

// EFFICIENT - Add ONE listener to parent
recipeContainer.addEventListener("click", handleToggleClick);
```

The single listener checks if the clicked element is a toggle button and handles it accordingly.

**Advantages:**

- Fewer event listeners = better performance
- Works with dynamically created buttons
- Easier to manage

### 6. **CSS Styling for Expandable Sections**

- `.steps-container` and `.ingredients-container` are hidden by default (`display: none`)
- Add `.visible` class to show them (`display: block`)
- Smooth `slideDown` animation
- Different indentation levels for nested steps
- Checkmark bullets for ingredient lists

---

## Code Architecture

### Private Functions (Inside IIFE)

These are NOT accessible from outside:

- `filterByDifficulty()` - Filter logic
- `applyFilter()` - Apply current filter
- `sortByName()`, `sortByTime()` - Sort logic
- `applySort()` - Apply current sort
- `renderSteps()` - **RECURSIVE function for nested steps**
- `createStepsHTML()` - Generate steps container HTML
- `createIngredientsHTML()` - Generate ingredients container HTML
- `createRecipeCard()` - Generate card HTML
- `renderRecipes()` - Render to DOM
- `updateDisplay()` - Main orchestrator
- `updateActiveButtons()` - Update button states
- `handleFilterClick()` - Filter button handler
- `handleSortClick()` - Sort button handler
- `handleToggleClick()` - Toggle button handler
- `setupEventListeners()` - Attach event listeners

### Public API (Accessible Outside)

```javascript
RecipeApp.init(); // Initialize app
RecipeApp.updateDisplay(); // Manually trigger re-render
```

---

## Data Structure for Nested Steps

### Simple Recipe (String Steps)

```javascript
steps: ["Step 1 text", "Step 2 text", "Step 3 text"];
```

### Recipe with Nested Steps (Objects)

```javascript
steps: [
  "Simple step",
  {
    text: "Complex step with substeps",
    substeps: [
      "Substep 1",
      "Substep 2",
      {
        text: "Even deeper step",
        substeps: ["Deep substep 1", "Deep substep 2"],
      },
    ],
  },
  "Another simple step",
];
```

---

## How to Test

### 1. **Initial Load**

```
✅ Open index.html in browser
✅ All 8 recipe cards visible
✅ Each card has "Show Steps" and "Show Ingredients" buttons
✅ No steps/ingredients visible yet
✅ Console shows:
   - "RecipeApp initializing..."
   - "Displaying 8 recipes (Filter: all, Sort: none)"
   - "Event listeners attached!"
   - "RecipeApp ready!"
```

### 2. **Toggle Steps**

```
✅ Click "Show Steps" on any card
✅ Steps appear with animation
✅ Button changes to "Hide Steps"
✅ For recipes with substeps, indented nested steps display
✅ Click "Hide Steps" to collapse
```

### 3. **Toggle Ingredients**

```
✅ Click "Show Ingredients" on any card
✅ Ingredient list appears
✅ Each item has a checkmark (✓)
✅ Button changes to "Hide Ingredients"
```

### 4. **Nested Steps (Recursion Test)**

```
Find recipes 2 (Chicken Tikka Masala) or 5 (Beef Wellington)
✅ Click "Show Steps"
✅ Main steps display with numbers
✅ Substeps appear indented below parent step
✅ Proper visual hierarchy
```

### 5. **Filters & Sorts Still Work**

```
✅ Click a filter button
✅ Cards update to show only filtered recipes
✅ Expanded sections stay expanded
✅ Apply a sort
✅ Cards reorder
✅ Expanded sections move with correct cards
```

### 6. **IIFE Encapsulation Test**

```
Open DevTools Console (F12)
Type: recipes
✅ Should show "Uncaught ReferenceError: recipes is not defined"
    (Good! It's private)

Type: RecipeApp
✅ Should show {init: ƒ, updateDisplay: ƒ}
    (Public API visible)

Type: RecipeApp.init
✅ Should show function definition

Type: currentFilter
✅ Should show "Uncaught ReferenceError: currentFilter is not defined"
    (Good! It's private)
```

---

## Key Concepts Explained

### IIFE (Immediately Invoked Function Expression)

```javascript
// Function is defined AND immediately called
const RecipeApp = (() => {
  // This code runs immediately
  // Variables here are PRIVATE
  return {
    /* public methods */
  };
})();

// Outside, only public methods are accessible
RecipeApp.init();
```

### Recursion with Base Case

```javascript
const renderSteps = (steps, level = 0) => {
  if (!Array.isArray(steps)) return ""; // BASE CASE - stop recursion

  return steps
    .map((step) => {
      if (typeof step === "string") {
        return `<li>${step}</li>`; // BASE CASE - no recursion needed
      } else if (step.substeps) {
        // RECURSIVE CASE - call self with deeper level
        return renderSteps(step.substeps, level + 1);
      }
    })
    .join("");
};
```

### Event Delegation

```javascript
// Instead of:
buttons.forEach((btn) => btn.addEventListener("click", handler));

// Use event delegation:
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("toggle-btn")) {
    handleToggleClick(e);
  }
});
```

### Data Attributes for State

```html
<!-- Store recipe ID and toggle type in HTML -->
<button class="toggle-btn" data-recipe-id="2" data-toggle="steps">
  📋 Show Steps
</button>

<!-- Access in JavaScript -->
const recipeId = button.dataset.recipeId; // "2" const toggleType =
button.dataset.toggle; // "steps"
```

---

## Files Modified

### ✅ app.js

- Added `ingredients` and `steps` arrays to all 8 recipe objects
- Wrapped entire app in IIFE (`RecipeApp`)
- Added `renderSteps()` recursive function
- Added `createStepsHTML()` and `createIngredientsHTML()` functions
- Updated `createRecipeCard()` to include toggle buttons and containers
- Added `handleToggleClick()` event handler
- Updated `setupEventListeners()` to use event delegation

### ✅ style.css

- Added `.toggle-buttons` styling
- Added `.toggle-btn` button styles with hover effects
- Added `.steps-container` and `.ingredients-container` styles
- Added `.steps-list`, `.ingredients-list` styling
- Added nested steps indentation
- Added checkmark styling for ingredients
- Added `slideDown` animation for smooth appearance

### ✅ index.html

- No changes needed - works with existing HTML structure

---

## Debugging Tips

### Problem: Steps don't show when clicking button

```javascript
// Add console logs to handleToggleClick:
console.log("Button clicked:", button);
console.log("Recipe ID:", recipeId);
console.log("Container:", container);
```

### Problem: Nested steps don't render correctly

```javascript
// Check that step objects have 'substeps' property (not 'subSteps' or 'sub_steps')
// Verify renderSteps is being called recursively
console.log(`Rendering level ${level}:`, steps);
```

### Problem: "RecipeApp is not defined" errors

- Make sure JavaScript file loads after DOM is ready
- Check `<script src="app.js"></script>` is at end of body in HTML

---

## What You've Accomplished 🎉

✅ **Expandable recipe cards** with toggle functionality  
✅ **Recursive rendering** handling any nesting depth  
✅ **IIFE module pattern** for professional code organization  
✅ **Event delegation** for efficient event handling  
✅ **Data attributes** for element identification  
✅ **Enhanced recipe data** with detailed steps and ingredients  
✅ **CSS animations** for smooth user experience  
✅ **All Part 1 & 2 features** (filters/sorts) still working perfectly

---

## Next Steps (Part 4)

In the final part, you'll add:

- 🔍 Search functionality
- ⭐ Favorites system with localStorage
- 📊 Recipe counter display
- 💾 Persistent data storage
- 📱 Responsive design polish

Your IIFE structure stays the same - just add new methods to the public API!

---

## Quick Reference

**IIFE Pattern:**

```javascript
const AppName = (() => {
  // private code
  return { public: methods };
})();
```

**Recursion Pattern:**

```javascript
const recurse = (data, level = 0) => {
  if (!hasMore(data)) return baseCase; // BASE CASE
  return process(data) + recurse(data.nested, level + 1); // RECURSIVE CASE
};
```

**Event Delegation Pattern:**

```javascript
container.addEventListener("click", (e) => {
  if (e.target.matches(".button-class")) {
    handleClick(e);
  }
});
```

Good luck, and happy coding! 🚀
