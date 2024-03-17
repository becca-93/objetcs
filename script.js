const movies = [
    {
        name: "The Lion King",
        year: 1993,
        director: "Roger Allers, Rob Minkoff",
        picture: "http://www.impawards.com/1994/posters/lion_king_ver1_xlg.jpg"
    },
    {
        name: "The Matrix",
        year: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        picture:  "http://www.impawards.com/1999/posters/matrix_ver1_xlg.jpg"
    },
    {
        name: "Shrek",
        year: 2001,
        director: "Andrew Adamson, Vicky Jenson",
        picture:  "http://www.impawards.com/2001/posters/shrek_ver2_xlg.jpg"
    }
    
];

const movieList = document.getElementById("movieList");
const movieItems = movies.map(
    (movie) => `
    <li>
            <p>Name: ${movie.name}</p>
            <p>Year: ${movie.year} </p>
            <p>Director: ${movie.director} </p>
            <img src="${movie.picture}" alt="${movie.name}" height="550"> 
    </li>    
    `

);



movieList.innerHTML = movieItems.join("");