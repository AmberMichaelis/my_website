function searchProblems() {
    // Declare variables
    let input, filter, problem__info, leetcode, problem__title, searchValueTitle, problem__number, searchValueNumber;
    input = document.getElementById('search__problems__input');
    filter = input.value.toLowerCase();
    problem__info = document.getElementsByClassName('leetcode__problem__info');
    leetcode = document.getElementsByClassName('leetcode');

    // // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < problem__info.length; i++) {
        problem__title = problem__info[i].getElementsByTagName("h3")[0];
        searchValueTitle = problem__title.textContent || problem__title.innerText;
        problem__number = problem__info[i].getElementsByTagName("h3")[1];
        searchValueNumber = problem__number.textContent || problem__number.innerText;
        if (searchValueTitle.toLowerCase().indexOf(filter) > -1 || searchValueNumber.indexOf(filter) > -1) {
            leetcode[i].style.display = "";
        } else {
            leetcode[i].style.display = "none";
        }
    }
}
