



document.querySelector("#submit-btn").addEventListener("click", () => {
    document.querySelector(".cards").innerHTML = "";

    let movie = document.querySelector("#search-field").value.toLowerCase();

    console.log('User choose ', movie);


    const apiKey = '7cb15079'

    if (movie == "") {
        alert("Please type a movie title");
      }else{

          fetch(`https://www.omdbapi.com/?s=${movie}&apikey=${apiKey}`)
              .then(res => {
                  return res.json()
              }).then(data => {
                //   console.log(data)
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

                    
                    
                    let cards = document.querySelector(".cards")
                    let normWrapper = document.querySelector(".nomination-wrapper")
                    let normDivs = document.querySelector(".nominations")
                    let normDiv = document.createElement("div")
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
                    let nomBtn = document.createElement("button");

                    if (type == "movie" || type == "series") {
                      
                        
                        cards.appendChild(cardDiv)
                        cardDiv.appendChild(movieImageBox)
                        normDivs.appendChild(normDiv)
                        movieImageBox.appendChild(movieImage)
                        cardDiv.appendChild(movieDescription)
                        cardDiv.appendChild(nomBtn)
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
                        cardDiv.classList.add("card");
                        normDivs.classList.add("nominations")
                        normDiv.classList.add("nomination")
                        movieImageBox.classList.add( "card-image-box")
                        movieImage.classList.add( "card-image")
                        movieDescription.classList.add( "card-description")
                        nomBtn.classList.add("nom-btn")
                        movieTitle.classList.add( "card-title")

                        // movieRate.classList.add( "card-rating")
                        // moviePlot.classList.add( "card-plot")
                        // typeSpan.classList.add( "topic")
                        // genreSpan.classList.add("topic")
                        // rateSpan.classList.add("topic")
                        // rateIcon.classList.add("fas")
                        // rateNumber.classList.add("rating")

                        movieImage.innerHTML = `<img alt='movie-image'src=${poster}/>`
                        movieDescription.innerHTML = `<h2>${title}, ${year}</h2>`
                        nomBtn.innerText = "Nominate"
                      }
                      else{
                        console.log(`There is also a ${type} with the name: ${title}`);
                        document.querySelector("#search-field").value = "";
                      }
                      
                      let deleteBtn = document.createElement("button")
                      let nomName = document.createElement("p")

                      // function nominate(e){

                      //   let btnParent = e.target.parentNode
                      //   btnParent.appendChild(movieTitle)


                      //   normDiv.appendChild(nomName)
                      //   normDiv.appendChild(deleteBtn)

                      //   nomName.innerText = `${title}`
                      //   deleteBtn.innerText = "Delete"

                      // }

                      // function deleteNomination(e){
                      //   let btnParent = e.target.parentNode
                      //   btnParent.removeChild(movieTitle)
                      // }

                      nomBtn.addEventListener("click", (e) => {
                        
                        normDiv.appendChild(nomName)
                        normDiv.appendChild(deleteBtn)

                        nomName.innerText = `${title}`
                        deleteBtn.innerText = "Delete"
                        deleteBtn.style.backgroundColor = "red"

                        nomBtn.style.backgroundColor="grey"
                      })

                      deleteBtn.addEventListener("click", (e)=>{
                        deleteBtn.parentNode.remove(this.parentNode);
                      })

                      
                    
                    
                })
              })
              
      }

});
