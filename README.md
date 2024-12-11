# S3. Testing

This project focuses on implementing functions for processing and analyzing movie data while ensuring correctness through unit tests. The primary goal is to write modular, testable code that handles various requirements for working with an array of movie objects.

---

## Objectives

- Understand and practice methods: `map`, `reduce`, and `filter`.
- Create unit tests.
- Learn to effectively manipulate a dataset.

---

## Features and Tasks

### Level 1: Basic Functionalities

1. **Retrieve All Directors**
   - **Function**: `getAllDirectors()`
   - **Description**: Extracts and returns an array of all directors from the given movie data.

2. **Retrieve Movies by Director**
   - **Function**: `getMoviesFromDirector()`
   - **Description**: Takes a director's name as input and returns an array of movies directed by them.

3. **Calculate Average Movie Ratings**
   - **Function**: `moviesAverageOfDirector()`
   - **Description**: Accepts an array of movies and computes the average score of those movies, rounded to two decimal places.

4. **Sort Movies Alphabetically**
   - **Function**: `orderAlphabetically()`
   - **Description**: Receives an array of movies and returns the first 20 titles sorted alphabetically.

5. **Sort Movies by Year**
   - **Function**: `orderByYear()`
   - **Description**: Orders movies by release year. In case of ties (same year), movies are further sorted alphabetically by title.

6. **Average Rating by Genre**
   - **Function**: `averageByGenre()`
   - **Description**: Calculates the average rating of movies within a specified genre.

---

### Level 2: Advanced Data Manipulation

7. **Convert Movie Durations**
   - **Function**: `convertHoursToMinutes()`
   - **Description**: Converts movie durations from hours and minutes format to a total duration in minutes. Returns a new array of movies with updated durations.

---

### Level 3: Complex Functionalities

8. **Find the Best Movie of a Year**
   - **Function**: `bestFilmOfYear()`
   - **Description**: Determines the highest-rated movie for a specified year and returns the movie in an array.

---

## Testing Framework and Tools

- **Unit Testing**: Automated unit tests are implemented in the file `tests/films.spec.js` using a JavaScript testing framework (e.g., Jest).
- **Visual Test Feedback**: Executing the command `npm run test:watch` generates an HTML file (`test-results.html`) displaying the test results. Use the **Live Server plugin** in Visual Studio Code for real-time updates when the code changes.

---

## Development Instructions

### Setup

1. **Clone the Repository**  
   ```
   git clone https://github.com/oscarrep/S3.-Testing
   cd S3.-Testing
   ```

2. **Install Jest**  
   ```
   npm install jest -D
   ```

3. **Run Tests**  
   ```
   npm run test
   ```

4. **Watch Tests**  
   ```
   npm run test:watch
   ```
   
