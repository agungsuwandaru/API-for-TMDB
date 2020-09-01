class MovieItem extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: block;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(144, 145, 150);
                   border-radius: 10px;
                   overflow: hidden;
                   background-color: #030c36;

               }
              
               .poster-movie {
                    max-height: 200px;
                    max-width: 150px;
                    object-fit: cover;
                    float: left;
                    display:inline;
                    border-radius: 10px;
                    //margin-top: 2em;
                    padding: 20px;
                //    width: 100%;
                //    max-height: 300px;
                //    object-fit: cover;
                //    object-position: center;
               }
              
               .movie-info {
                   padding: 24px;
                   display: inline;
               }
              
               .movie-info > h2 {
                   font-weight: lighter;
                   color: white;
                   font-weight: bold;
                  // display: inline;
               }
              
               p {
                   //margin-top: -10px;
                   margin-left: 20px;
                   margin-right: 20px;
                   margin-bottom: 20px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;                   
                   color: white;

                   border-left: 10px solid #003185;
                   padding: 0.5em 10px;
                   
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 10; /* number of lines to show */
               }

               table {
                margin-top: 10px;
                width: 75%;
                //margin: 0 auto;
                table-layout: fixed;
            }
            
            td {
                width: 75%;
                height: 25px;
                color: #bdbdbd;
                font-weight: bold;
                //word-wrap:break-word;
            }
            
            th {
                width: 25%;
                height: 25px;
                text-align: left;
                color: #bdbdbd;
                //word-wrap:break-word;
            } 
            
            @media screen and (max-width: 1000px){
                .poster-movie {
                    max-width: 100%;
                    max-height: none;
                    float: none;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
               }

               .movie-info > h2 {
                    text-align: center;
            }

            table {
                margin-left: 20px;
            }

            td {
                width: 60%;
            }
            
            th {
                width: 40%;
            } 


           </style>
           <img class="poster-movie" src="https://image.tmdb.org/t/p/w185/${this._movie.poster_path}" alt="movie poster">
          <div class="movie-info">
                <h2>${this._movie.title}</h2>           
                <table>
                <tr>
                    <th>Release Date</th>
                    <td>${this._movie.release_date}</td>
                </tr>
                <tr>
                    <th>Language</th>
                    <td>${this._movie.original_language}</td>
                </tr>
                <tr>
                    <th>Popularity</th>
                    <td>${this._movie.popularity}</td>
                </tr>
                <tr>
                    <th>Vote Count</th>
                    <td>${this._movie.vote_count}</td>
                </tr>
                <tr>
                    <th>Vote Average</th>
                    <td>${this._movie.vote_average}</td>
                </tr>
            </table>
           </div>
           <p>${this._movie.overview}</p>
           `;
    }
}

customElements.define("movie-item", MovieItem);