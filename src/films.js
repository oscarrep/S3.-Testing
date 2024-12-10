// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(name => name.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = array.filter(name => name.director === director);
  let scores = movies.map(movie => movie.score);
  let totalScore = scores.reduce((sum, n) => sum + n, 0);
  let average = (totalScore / movies.length).toFixed(2);
  console.log("EXERCICE 3 ->", average);
  return average;
}

// Exercise 4: Alphabetic order by title 
function orderAlphabetically(array) {
  let sorted = array.sort(function (a, b) {
    let titleA = a.title;
    let titleB = b.title;
    return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  })
  let sortedSliced = sorted.slice(0, 20);
  console.log("EXERCICE 4 ->", sortedSliced);
  return sortedSliced;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sorted = array.sort(function (a, b) {
    let yearA = a.year;
    let yearB = b.year;
    let titleA = a.title;
    let titleB = b.title;

    if (yearA != yearB) return (yearA < yearB) ? -1 : 1;
    else if (yearA == yearB) return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  })
  console.log("EXERCICE 5 ->", sorted);
  return sorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
