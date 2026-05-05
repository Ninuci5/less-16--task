 // 1. Five-number array, sum and average
      const numbers = [10, 22, 35, 47, 58];
      const sum = numbers.reduce((total, num) => total + num, 0);
      const average = sum / numbers.length;
      console.log("Sum of numbers:", sum);
      console.log("Average of numbers:", average);

      // 2. Movie object and formatted text output
      const movie = {
        movieName: "Inception",
        genre: "science fiction",
        streamingPlatforms: ["Netflix", "Hulu", "Amazon Prime"],
      };
      console.log(
        `${movie.movieName}, which is a ${movie.genre} movie, is available on ${movie.streamingPlatforms[0]}.`,
      );

      // 3. Array of three book objects
      const books = [
        { title: "1984", author: "George Orwell", yearPublished: 1949 },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          yearPublished: 1960,
        },
        {
          title: "Pride and Prejudice",
          author: "Jane Austen",
          yearPublished: 1813,
        },
      ];
      console.log("Books array:", books);