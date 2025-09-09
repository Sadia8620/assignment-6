let price = 0;
const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(res => res.json())
    .then(data => {
        displaycatebar(data.categories); 
    })
}

const displaycatebar = (categories) => {
    const sidebar = document.getElementById("left");

    // HTML assemble 
    let html = `<h2 class="text-2xl font-bold text-black">Categories</h2>
    <ul id="category-list">
        <li id="all" class="list-none hover:text-white hover:bg-green-500 rounded-md px-3 py-2 cursor-pointer active-category">All Trees</li>`;

    categories.forEach(cat => {
        html += `<li id="cat-${cat.id}" class="category-item list-none px-3 py-2 m-3 hover:bg-green-500 hover:text-white rounded-md cursor-pointer">
                    ${cat.category_name}
                 </li>`;
    });
    html += `</ul>`;
    sidebar.innerHTML = html;

    
    // Adding event listeners to category items
    document.getElementById('all').addEventListener('click', () => {
        setActiveCategory('all');
        loadPlants();
    });
    categories.forEach(cat => {
        document.getElementById(`cat-${cat.id}`).addEventListener('click', () => {
            setActiveCategory(`cat-${cat.id}`);
            loadPlantsByCategory(cat.id);
        });
    });
}

const setActiveCategory = (id) => {
    // Removing active class from all categories
    document.querySelectorAll('.category-item, #all').forEach(item => {
        item.classList.remove('active-category', 'bg-green-500', 'text-white');
    });

    
    // Adding active class to  the selected category
    const selectedCategory = document.getElementById(id);
    selectedCategory.classList.add('active-category', 'bg-green-500', 'text-white');
}
