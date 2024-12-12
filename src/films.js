// Exercise 1: Get the array of all directors.
function getAllDirectors(array) { 
  let result = array.map(movie => movie.director); // turns obj array into only director names
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) { 
  let result = array.filter(name => name.director === director); // removes objects with different director property
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = array.filter(name => name.director === director); // removes objects with different director property
  let scores = movies.map(movie => movie.score); // turns obj array into only the scores
  let totalScore = scores.reduce((sum, n) => sum + n, 0); // sums all scores
  let average = Number((totalScore / movies.length).toFixed(2));
  console.log("EXERCICE 3 ->", average);
  return average;
}

// Exercise 4: Alphabetic order by title 
function orderAlphabetically(array) {
  let sorted = [...array].sort(function (a, b) { // creates a copy of the original and sorts it alphabetically
    let titleA = a.title;
    let titleB = b.title;
    return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
  })
  sorted = sorted.map(movie => movie.title); // only takes title property
  let sortedSliced = sorted.slice(0, 20); // only keeps first 20 values
  console.log("EXERCICE 4 ->", sortedSliced);
  return sortedSliced;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sorted = [...array].sort(function (a, b) { // creates a copy of the original and sorts it by year
    let yearA = a.year;
    let yearB = b.year;
    let titleA = a.title;
    let titleB = b.title;

    if (yearA != yearB) return (yearA < yearB) ? -1 : 1;
    else if (yearA == yearB) return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0; // if same year, sort alphabetically
  });
  console.log("EXERCICE 5 ->", sorted);
  return sorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, gen) {
  let genreArr = array.filter(movie => movie.genre.includes(gen)); // removes objects with different genre as the one passed
  let scores = genreArr.map(movie => movie.score); // only the scores
  let totalScore = scores.reduce((sum, n) => sum + n, 0); // sums scores
  let averageGen = Number((totalScore / genreArr.length).toFixed(2));
  console.log("EXERCICE 6 ->", averageGen);
  return averageGen;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let hourToMin = [...array].map(movie => { // creates a copy of og array with duration value as a number
    let totalMin = 0;
    let duration = movie.duration.split(' '); // splits on the space

    for (const part of duration) {
      if (part.includes('h')) totalMin += Number(part.replace('h', '')) * 60; // if the part includes h replaces it with '' and multiplies by 60. turns it into Num
      else if (part.includes('min')) totalMin += Number(part.replace('min', ''));// if the part includes min replaces it with '' and multiplies by 60. turns it into Num
    }

    return { ...movie, duration: totalMin }

  });

  console.log("EXERCICE 7 ->", hourToMin);
  return hourToMin;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let moviesInYear = [...array].filter(movie => movie.year === year);
  let scores = moviesInYear.map(movie => movie.score);
  let highest = Math.max(...scores);
  let best = moviesInYear.find(movie => movie.score === highest);
  console.log("EXERCICE 8 ->", best);
  return [best];
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
