// Recipe data - Foundation for all 4 parts
const recipes = [
	{
		id: 1,
		title: "Classic Spaghetti Carbonara",
		time: 25,
		difficulty: "easy",
		description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
		category: "pasta",
		ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "100g Pecorino Romano cheese", "Black pepper", "Salt"],
		steps: [
			"Bring a large pot of salted water to boil",
			"Cut pancetta into small cubes and fry until crispy",
			"Cook spaghetti according to package instructions",
			"Whisk eggs with grated cheese and black pepper",
			"Drain pasta, reserving 1 cup pasta water",
			"Mix hot pasta with pancetta and fat",
			"Add egg mixture while tossing constantly",
			"Add pasta water as needed for creamy sauce"
		]
	},
	{
		id: 2,
		title: "Chicken Tikka Masala",
		time: 45,
		difficulty: "medium",
		description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
		category: "curry",
		ingredients: ["700g chicken breast", "200ml yogurt", "2 tbsp tikka paste", "400ml coconut milk", "2 onions", "4 cloves garlic", "2 tbsp ginger", "400ml tomatoes", "Cilantro"],
		steps: [
			{
				text: "Marinate chicken",
				substeps: [
					"Cut chicken into 2-inch pieces",
					"Mix yogurt with 1 tbsp tikka paste",
					"Coat chicken and marinate for 30 minutes"
				]
			},
			"Heat oil in large pan and cook marinated chicken until golden",
			{
				text: "Prepare sauce base",
				substeps: [
					"Sauté diced onions until soft",
					"Add minced garlic and ginger",
					"Add remaining tikka paste and cook for 1 minute"
				]
			},
			"Add tomatoes and simmer for 10 minutes",
			"Stir in coconut milk and cooked chicken",
			"Simmer for 15 minutes until sauce thickens",
			"Garnish with fresh cilantro and serve with rice"
		]
	},
	{
		id: 3,
		title: "Homemade Croissants",
		time: 180,
		difficulty: "hard",
		description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
		category: "baking",
		ingredients: ["500g all-purpose flour", "300g cold butter", "10g salt", "50g sugar", "7g instant yeast", "250ml milk", "1 egg"],
		steps: [
			"Mix flour, salt, and sugar in a bowl",
			"Activate yeast with warm milk and let sit 10 minutes",
			"Combine flour mixture with yeast mixture and knead",
			"Let dough rise for 1 hour until doubled",
			"Pound cold butter between plastic wrap into a 20x20cm square",
			"Roll out dough into a 40x20cm rectangle",
			"Place butter in center and fold dough to encase it",
			"Fold dough in thirds, rotate, and repeat 3 more times",
			"Chill between folds for 30 minutes each",
			"Final shape into crescent molds",
			"Let proof for 2 hours",
			"Brush with egg wash and bake at 200°C for 20-25 minutes"
		]
	},
	{
		id: 4,
		title: "Greek Salad",
		time: 15,
		difficulty: "easy",
		description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
		category: "salad",
		ingredients: ["4 tomatoes", "1 cucumber", "1 red onion", "250g feta cheese", "150g kalamata olives", "Extra virgin olive oil", "Oregano", "Salt and pepper"],
		steps: [
			"Dice tomatoes and cucumber into chunks",
			"Slice red onion thinly",
			"Cut feta cheese into cubes",
			"Combine all vegetables and cheese in large bowl",
			"Add kalamata olives",
			"Drizzle with extra virgin olive oil",
			"Sprinkle with oregano, salt, and pepper",
			"Toss gently and serve immediately"
		]
	},
	{
		id: 5,
		title: "Beef Wellington",
		time: 120,
		difficulty: "hard",
		description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
		category: "meat",
		ingredients: ["1.5kg beef fillet", "500g mushrooms", "2 shallots", "300g pâté", "1 sheet puff pastry", "50g prosciutto", "2 tbsp Dijon mustard", "Egg for wash"],
		steps: [
			"Sear beef fillet on all sides until browned, then cool",
			"Brush beef with Dijon mustard",
			"Wrap beef with slices of prosciutto",
			{
				text: "Prepare mushroom duxelles",
				substeps: [
					"Finely chop mushrooms and shallots",
					"Cook in butter until all moisture evaporates",
					"Season with salt and pepper"
				]
			},
			"Spread pâté on cooled beef",
			"Cover pâté with mushroom duxelles",
			"Wrap entire beef in puff pastry",
			"Brush pastry with egg wash",
			"Bake at 200°C for 25-30 minutes until golden",
			"Rest for 5 minutes before slicing"
		]
	},
	{
		id: 6,
		title: "Vegetable Stir Fry",
		time: 20,
		difficulty: "easy",
		description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
		category: "vegetarian",
		ingredients: ["2 cups broccoli florets", "1 bell pepper", "2 carrots", "1 cup snap peas", "3 cloves garlic", "2 tbsp soy sauce", "1 tbsp sesame oil", "1 tbsp cornstarch", "Ginger"],
		steps: [
			"Chop all vegetables into uniform bite-sized pieces",
			"Mince garlic and ginger",
			"Mix soy sauce, sesame oil, and cornstarch in a bowl",
			"Heat oil in a wok or large pan over high heat",
			"Add garlic and ginger, cook for 30 seconds",
			"Add harder vegetables first (carrots, broccoli)",
			"Stir-fry for 3-4 minutes",
			"Add remaining vegetables and stir-fry for 2-3 minutes",
			"Pour sauce over vegetables and toss to coat",
			"Serve immediately over rice or noodles"
		]
	},
	{
		id: 7,
		title: "Pad Thai",
		time: 30,
		difficulty: "medium",
		description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
		category: "noodles",
		ingredients: ["250g rice noodles", "300g shrimp", "3 eggs", "2 cups beansprouts", "3 green onions", "100g peanuts", "3 tbsp tamarind paste", "2 tbsp fish sauce", "3 cloves garlic"],
		steps: [
			"Soak rice noodles in warm water for 30 minutes until soft",
			"Peel and devein shrimp",
			"Combine tamarind paste, fish sauce, and 2 tbsp sugar",
			"Heat oil in a wok and stir-fry garlic for 10 seconds",
			"Add shrimp and cook until pink, about 2 minutes",
			"Push shrimp to side and scramble eggs in the wok",
			"Add drained noodles and sauce, toss to combine",
			"Add green onions and half the peanuts",
			"Toss everything together for 1-2 minutes",
			"Serve topped with remaining peanuts and beansprouts"
		]
	},
	{
		id: 8,
		title: "Margherita Pizza",
		time: 60,
		difficulty: "medium",
		description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
		category: "pizza",
		ingredients: ["500g pizza dough", "200ml tomato sauce", "250g fresh mozzarella", "4 tomatoes", "Fresh basil leaves", "Olive oil", "Salt", "Oregano"],
		steps: [
			"Preheat oven to 250°C (or highest setting)",
			"Let pizza dough come to room temperature",
			"Stretch dough into a thin 12-inch circle",
			"Place on a pizza pan or stone",
			"Spread tomato sauce evenly, leaving border for crust",
			"Tear fresh mozzarella into chunks and distribute",
			"Slice tomatoes and place on top",
			"Drizzle with olive oil",
			"Sprinkle with salt and oregano",
			"Bake for 12-15 minutes until crust is golden and cheese bubbles",
			"Remove and top with fresh basil",
			"Let rest 2 minutes before slicing"
		]
	}
];

// IIFE - Module Pattern for encapsulation
const RecipeApp = (() => {
	// Private variables - only accessible inside IIFE
	let currentFilter = 'all';
	let currentSort = 'none';
	
	// Private DOM references
	const recipeContainer = document.querySelector('#recipe-container');
	const filterButtons = document.querySelectorAll('.filter-btn');
	const sortButtons = document.querySelectorAll('.sort-btn');
	
	console.log('RecipeApp initializing...');
	
	// Private: Pure Filter Functions
	const filterByDifficulty = (recipesToFilter, filterType) => {
		switch (filterType) {
			case 'easy':
				return recipesToFilter.filter(recipe => recipe.difficulty === 'easy');
			case 'medium':
				return recipesToFilter.filter(recipe => recipe.difficulty === 'medium');
			case 'hard':
				return recipesToFilter.filter(recipe => recipe.difficulty === 'hard');
			case 'quick':
				return recipesToFilter.filter(recipe => recipe.time < 30);
			case 'all':
			default:
				return recipesToFilter;
		}
	};
	
	const applyFilter = (recipesToFilter, filterType) => {
		return filterByDifficulty(recipesToFilter, filterType);
	};
	
	// Private: Pure Sort Functions
	const sortByName = (recipesToSort) => {
		return [...recipesToSort].sort((a, b) => a.title.localeCompare(b.title));
	};
	
	const sortByTime = (recipesToSort) => {
		return [...recipesToSort].sort((a, b) => a.time - b.time);
	};
	
	const applySort = (recipesToSort, sortType) => {
		switch (sortType) {
			case 'name':
				return sortByName(recipesToSort);
			case 'time':
				return sortByTime(recipesToSort);
			case 'none':
			default:
				return recipesToSort;
		}
	};
	
	// Private: Recursive function to render steps with substeps
	const renderSteps = (steps, level = 0) => {
		if (!Array.isArray(steps)) return '';
		
		return steps
			.map((step, index) => {
				if (typeof step === 'string') {
					// Simple string step
					const indent = 'padding-left: ' + (level * 20) + 'px';
					return `<li style="${indent}"><strong>Step ${index + 1}:</strong> ${step}</li>`;
				} else if (step.substeps) {
					// Object with substeps - recursion happens here!
					const indent = 'padding-left: ' + (level * 20) + 'px';
					const substepsHTML = renderSteps(step.substeps, level + 1);
					return `
						<li style="${indent}"><strong>Step ${index + 1}:</strong> ${step.text}
							<ul>${substepsHTML}</ul>
						</li>
					`;
				}
				return '';
			})
			.join('');
	};
	
	// Private: Create steps HTML section
	const createStepsHTML = (recipe) => {
		if (!recipe.steps || recipe.steps.length === 0) return '';
		
		const stepsHTML = renderSteps(recipe.steps);
		return `
			<div class="steps-container" data-recipe-id="${recipe.id}">
				<h4>🍳 Cooking Steps:</h4>
				<ol class="steps-list">
					${stepsHTML}
				</ol>
			</div>
		`;
	};
	
	// Private: Create ingredients HTML section
	const createIngredientsHTML = (recipe) => {
		if (!recipe.ingredients || recipe.ingredients.length === 0) return '';
		
		const ingredientsHTML = recipe.ingredients
			.map(ingredient => `<li>${ingredient}</li>`)
			.join('');
		
		return `
			<div class="ingredients-container" data-recipe-id="${recipe.id}">
				<h4>🥗 Ingredients:</h4>
				<ul class="ingredients-list">
					${ingredientsHTML}
				</ul>
			</div>
		`;
	};
	
	// Private: Function to create HTML for a single recipe card
	const createRecipeCard = (recipe) => {
		return `
			<div class="recipe-card" data-recipe-id="${recipe.id}">
				<h3>${recipe.title}</h3>
				<div class="recipe-meta">
					<span>⏱️ ${recipe.time} min</span>
					<span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
				</div>
				<p>${recipe.description}</p>
				<div class="toggle-buttons">
					<button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
						📋 Show Steps
					</button>
					<button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
						🥗 Show Ingredients
					</button>
				</div>
				${createStepsHTML(recipe)}
				${createIngredientsHTML(recipe)}
			</div>
		`;
	};
	
	// Private: Function to render recipes to the DOM
	const renderRecipes = (recipesToRender) => {
		const allCardsHTML = recipesToRender
			.map(createRecipeCard)
			.join('');

		if (recipeContainer) {
			recipeContainer.innerHTML = allCardsHTML;
		}
	};
	
	// Private: Main Update Function - Orchestrates filtering, sorting, and rendering
	const updateDisplay = () => {
		let recipesToDisplay = [...recipes]; // Start with copy of all recipes
		
		// Apply filter
		recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
		
		// Apply sort
		recipesToDisplay = applySort(recipesToDisplay, currentSort);
		
		// Render to screen
		renderRecipes(recipesToDisplay);
		
		// Update button states
		updateActiveButtons();
		
		// Log for debugging
		console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort})`);
	};
	
	// Private: Helper function to update active button styling
	const updateActiveButtons = () => {
		// Update filter buttons
		filterButtons.forEach(btn => {
			const filterType = btn.dataset.filter;
			if (filterType === currentFilter) {
				btn.classList.add('active');
			} else {
				btn.classList.remove('active');
			}
		});
		
		// Update sort buttons
		sortButtons.forEach(btn => {
			const sortType = btn.dataset.sort;
			if (sortType === currentSort) {
				btn.classList.add('active');
			} else {
				btn.classList.remove('active');
			}
		});
	};
	
	// Private: Event handler for filter button clicks
	const handleFilterClick = (event) => {
		currentFilter = event.target.dataset.filter;
		updateDisplay();
	};
	
	// Private: Event handler for sort button clicks
	const handleSortClick = (event) => {
		currentSort = event.target.dataset.sort;
		updateDisplay();
	};
	
	// Private: Event handler for toggle buttons (Steps/Ingredients)
	const handleToggleClick = (event) => {
		// Check if clicked element is a toggle button
		if (!event.target.classList.contains('toggle-btn')) {
			return;  // Not a toggle button, ignore
		}
		
		const button = event.target;
		const recipeId = button.dataset.recipeId;
		const toggleType = button.dataset.toggle;  // "steps" or "ingredients"
		
		// Find the corresponding container
		const containerClass = toggleType === 'steps' ? 'steps-container' : 'ingredients-container';
		const container = document.querySelector(`.${containerClass}[data-recipe-id="${recipeId}"]`);
		
		// Toggle visibility with smooth height animation
		if (container) {
			const willShow = !container.classList.contains('visible');
			if (willShow) {
				container.classList.add('visible');
				// set explicit maxHeight to trigger transition to the content height
				container.style.maxHeight = container.scrollHeight + 'px';
			} else {
				// collapse
				container.style.maxHeight = container.scrollHeight + 'px';
				// force reflow so transition happens reliably
				container.offsetHeight;
				container.style.maxHeight = '0px';
				container.classList.remove('visible');
			}

			// Update button text
			const isVisible = willShow;
			if (toggleType === 'steps') {
				button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
			} else {
				button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
			}
		}
	};
	
	// Private: Set up Event Listeners
	const setupEventListeners = () => {
		// Filter button listeners
		filterButtons.forEach(btn => {
			btn.addEventListener('click', handleFilterClick);
		});
		
		// Sort button listeners
		sortButtons.forEach(btn => {
			btn.addEventListener('click', handleSortClick);
		});
		
		// Event delegation for toggle buttons
		recipeContainer.addEventListener('click', handleToggleClick);
		
		console.log('Event listeners attached!');
	};
	
	// PUBLIC API - Only these methods are accessible from outside
	return {
		init: () => {
			updateDisplay();
			setupEventListeners();
			console.log('RecipeApp ready!');
		},
		updateDisplay: () => updateDisplay()
	};
})();

// Initialize the app when the page loads
RecipeApp.init();

