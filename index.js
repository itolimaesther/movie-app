



document.querySelector("#submit-btn").addEventListener("click", function () {
    document.querySelector("#movies").innerHTML = "";

    let movie = document.querySelector("#search-field").value.toLowerCase();

    console.log('User choose ', movie);


    const apiKey = '7cb15079'

    if (movie == "") {
        alert("Please type a movie title");
      }else{

          fetch(`http://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`)
              .then(res => {
                  return res.json()
              }).then(data => {
                  console.log(data)
                let searchOutput = data.Search;
                if (data.res == "False") {
                  alert(data.Error);
                  document.querySelector("#search-field").value = "";
                }

                searchOutput.forEach(result =>{
                    let title = result.Title;
                    let poster = result.Poster;
                    let year = result.Year;
                    let type = result.Type;

                    if (type == "movie" || type == "series") {
                        let moviesDiv = document.querySelector("#movies");
                        let cards = document.createElement("div")
                        let cardDiv = document.createElement("div");
                        let movieImageBox = document.createElement("div")
                        let movieImage = document.createElement("div")
                        let movieDescription = document.createElement("div")
                        let movieTitle = document.createElement("h2")
                        let movieRate = document.createElement("p")
                        let rateSpan = document.createElement("span")
                        let rateIcon = document.createElement("i")
                        let rateNumber = document.createElement("span")
                        let moviePlot = document.createElement("p")
                        let movieTopic = document.createElement("p")
                        let typeSpan = document.createElement("span")
                        let topicGenre = document.createElement("p")
                        let genreSpan = document.createElement("span")

                        moviesDiv.appendChild(cards);
                        cards.appendChild(cardDiv)
                        cardDiv.appendChild(movieImageBox)
                        movieImageBox.appendChild(movieImage)
                        cardDiv.appendChild(movieDescription)
                        movieDescription.appendChild(movieTitle)
                        movieDescription.appendChild(movieRate)
                        movieDescription.appendChild(moviePlot)
                        movieRate.appendChild(rateSpan)
                        movieRate.appendChild(rateIcon)
                        movieRate.appendChild(rateNumber)
                        movieDescription.appendChild(moviePlot)
                        movieDescription.appendChild(movieTopic)
                        movieTopic.appendChild(typeSpan)
                        movieDescription.appendChild(topicGenre)
                        topicGenre.appendChild(genreSpan)

                        cards.classList.add( "cards")
                        cardDiv.classList.add( "card");
                        movieImageBox.classList.add( "card-image-box")
                        movieImage.classList.add( "card-image")
                        movieDescription.classList.add( "card-description")
                        movieTitle.classList.add( "card-title")
                        movieRate.classList.add( "card-rating")
                        moviePlot.classList.add( "card-plot")
                        typeSpan.classList.add( "topic")
                        genreSpan.classList.add("topic")
                        rateSpan.classList.add("topic")
                        rateIcon.classList.add("fas")
                        rateNumber.classList.add("rating")

                        fetch(`http://www.omdbapi.com/?s=${title}&apikey=${apiKey}`).then(function(res) {
                    return res.json();
                }).catch(function(error) {
                    alert('Error:', error)
                }).then(function(json) {
                  //console.log(json);
                  let cast = json.Actors;
                  let director = json.Director;
                  let awards = json.Awards;
                  let plot = json.Plot;
                  let genre = json.Genre;
                  let rating = json.imdbRating;
                  let votes = json.imdbVotes;
                  let duration = json.Runtime;
                  let website = json.Website;  
                  let metaScore = json.Metascore;
                  let rated = json.Rated;
                  
                    // cardDiv.innerHTML = `<img alt='movie-image'src=${poster}/><h2>${title}, ${year}</h2><p>Genre: ${genre}/ Rated: ${rated}/ Duration: ${duration}</p><a href='${website}' target='_blank'></a><p>Plot: ${plot}</p><p>Starring: ${cast}</p><p>Director: ${director}</p><p>Imdb rating: ${rating} Votes: ${votes}</p><p>Metascore: ${metaScore}</p><p>${awards}</p>`

                    // cardDiv.innerHTML = `<h2>${title}, ${year}</h2><p>Genre: ${genre}/ Rated: ${rated}/ Duration: ${duration}</p><a href='${website}' target='_blank'><img alt='movie-image'src=${poster}/></a><p>Plot: ${plot}</p><p>Starring: ${cast}</p><p>Director: ${director}</p><p>Imdb rating: ${rating} Votes: ${votes}</p><p>Metascore: ${metaScore}</p><p>${awards}</p>`
                });


                        // innerDiv.setAttribute("class", "movieNames");
                    }
                    else{
                      console.log(`There is also a ${type} with the name: ${title}`);
                      document.querySelector("#search-field").value = "";
                    }
                })
              })
              
      }

});
