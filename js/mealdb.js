const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;

    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';
    if (meals.length == 0) {
        console.log(' hey ki khobor')
    }
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `

        <div onclick="loadMealDetail('${meal.idMeal}')" class="card h-100">
            <img width="400px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `
        searchResult.appendChild(div)
    })
}
const loadMealDetail = async meal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;

    const res = await fetch(url)
    const data = await res.json()
    displayDetailsMeal(data.meals[0])

    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayDetailsMeal(data.meals[0]))
}
const displayDetailsMeal = mealDetails => {
    console.log(mealDetails)
    const divContainer = document.getElementById('meal-details')
    divContainer.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
            <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${mealDetails.strMeal}</h5>
                <p class="card-text">${mealDetails.strInstructions.slice(0, 150)}</p>
                <a href="${mealDetails.strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
    divContainer.appendChild(div)
}