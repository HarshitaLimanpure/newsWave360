// Variables
let general = $("#general");
let business = $("#business");
let sports = $("#sport");
let technology = $("#technology");
let entertainment = $("#entertainment");
let searchBtn = $("#searchBtn");
let newsQuery = $("#newsQuery");
let newsType = $("#newsType");
let newsDetails = $("#newsdetails");

// Array to hold news data
var newsDataArr = [];

// API Keys and URLs
const API_KEY = "d306689314d947369666fa221efc9554";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d306689314d947369666fa221efc9554";
const GENERAL_NEWS = "https://newsapi.org/v2/everything?q=general&apiKey=d306689314d947369666fa221efc9554";
const BUSINESS_NEWS = "https://newsapi.org/v2/everything?q=business&apiKey=d306689314d947369666fa221efc9554";
const SPORTS_NEWS = "https://newsapi.org/v2/everything?q=sports&apiKey=d306689314d947369666fa221efc9554";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/everything?q=entertainment&apiKey=d306689314d947369666fa221efc9554";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/everything?q=technology&pageSize=8&apiKey=d306689314d947369666fa221efc9554";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload =function() {
    newsType.html("<h4>Headlines</h4>");
    fetchHeadlines();
};

general.on("click", function() {
    newsType.html("<h4>General</h4>");
    fetchGeneralNews();
});

business.on("click", function() {
    newsType.html("<h4>Business</h4>");
    fetchBusinessNews();
});

sports.on("click", function() {
    newsType.html("<h4>Sports</h4>");
    fetchSportsNews();
});

entertainment.on("click", function() {
    newsType.html("<h4>Entertainment</h4>");
    fetchEntertainmentNews();
});

technology.on("click", function() {
    newsType.html("<h4>Technology</h4>");
    fetchTechnologyNews();
});

searchBtn.on("click", function(event) {
    event.preventDefault();
    const query = newsQuery.val().trim();
    if (query) {
        newsType.html(`<h4>Search: ${query}</h4>`);
        fetchQueryNews(query);
    }
});

const fetchHeadlines = async () => {
    try {
        const response = await fetch(HEADLINES_NEWS);
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        newsDetails.html("<h5>No data found.</h5>");
    }
};

const fetchGeneralNews = async () => {
    try {
        const response = await fetch(GENERAL_NEWS);
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        newsDetails.html("<h5>No data found.</h5>");
    }
};

const fetchBusinessNews = async () => {
    try {
        const response = await fetch(BUSINESS_NEWS);
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        newsDetails.html("<h5>No data found.</h5>");
    }
};

const fetchEntertainmentNews = async () => {
    try {
        const response = await fetch(ENTERTAINMENT_NEWS);
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        newsDetails.html("<h5>No data found.</h5>");
    }
};

const fetchSportsNews = async () => {
    try {
        const response = await fetch(SPORTS_NEWS);
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        newsDetails.html("<h5>No data found.</h5>");
    }
};

const fetchTechnologyNews = async () => {
    try {
        const response = await fetch(TECHNOLOGY_NEWS);
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        newsDetails.html("<h5>No data found.</h5>");
    }
};

const fetchQueryNews = async (query) => {
    try {
        const response = await fetch(`${SEARCH_NEWS}${encodeURIComponent(query)}&apiKey=${API_KEY}`);
        if (response.ok) {
            const myJson = await response.json();
            newsDataArr = myJson.articles;
            displayNews();
        } else {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error(error);
        newsDetails.html("<h5>No data found.</h5>");
    }
};

function displayNews() {
    newsDetails.html("");

    $.each(newsDataArr, function (index, news) {
        let date = news.publishedAt.split("T")[0]; // Extract date

        let col = $('<div>').addClass("col-sm-12 col-md-2 col-lg-3 my-1   p-2 card cards");

        let card = $('<div>').addClass("p-2");

        let image = $('<img>').attr({
            "height": "200",
            "width": "100%",
            "src": news.urlToImage || "https://via.placeholder.com/150"
        });

        let cardBody = $('<div>').addClass("card-body");

        let newsHeading = $('<h5>').addClass("card-title").html(news.title);

        let dateHeading = $('<h6>').addClass("text-primary").html(date);

        let description = $('<p>').addClass("text-muted").html(news.description || "No description available");

        let link = $('<a>').addClass("btn btn-dark").attr({
            "target": "_blank",
            "href": news.url
        }).html("Read more");

        cardBody.append(newsHeading);
        cardBody.append(dateHeading);
        cardBody.append(description);
        cardBody.append(link);

        card.append(image);
        card.append(cardBody);

        col.append(card);
        newsDetails.append(col);
    });
}


// // variables
// let general = $("#general").html();
// let bussiness = $("#bussiness").html();
// let sports = $("#sport").html();
// let technology = $("#technology").html();
// let entertainment = $("#entertainment").html();
// let searchBtn = $("#searchBtn").html();
// let newsType = $("#newsType").html();
// let newsdetails = $("#newsdetails").html();




// // Array
// var newsDataArr = [];

// // apis 
// const API_KEY = "d306689314d947369666fa221efc9554";
// const HEADLINES_NEWS = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
// const GENERAL_NEWS = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${API_KEY}`;
// const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
// const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
// const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
// const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
// const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

// $(document).ready(function() {
//     $("#newsType").html("<h4>Headlines</h4>");
//     fetchHeadlines();
// });

// $("#general").on("click", function() {
//     $("#newsType").html("<h4>General</h4>");
//     fetchGeneralNews();
// });

// $("#bussiness").on("click", function() {
//     $("#newsType").html("<h4>Bussiness</h4>");
//     fetchBussinessNews();
// });

// $("#sport").on("click", function() {
//     $("#newsType").html("<h4>Sports</h4>");
//     fetchSportsNews();
// });

// $("#entertainment").on("click", function() {
//     $("#newsType").html("<h4>Entertainment</h4>");
//     fetchEntertainmentNews();
// });

// $("#technology").on("click", function() {
//     $("#newsType").html("<h4>Technology</h4>");
//     fetchTechnologyNews();
// });
// $("#searchBtn").on("click", function() {
// $("#newsType").html("<h4>Search : "+newsQuery.value+"</h4>")
//     fetchQueryNews();
// });



// const fetchHeadlines = async () => {
//     const response = await fetch(HEADLINES_NEWS+API_KEY);
//     newsDataArr = [];
//     if(response.status >=200 && response.status < 300) {
//         const myJson = await response.json();
//         newsDataArr = myJson.articles;
//     } else {
//         // handle errors
//         console.log(response.status, response.statusText);
//         $("#newsdetails").html("<h5>No data found.</h5>")
//         return;
//     }

//     displayNews();
// }


// const fetchGeneralNews = async () => {
//     const response = await fetch(GENERAL_NEWS+API_KEY);
//     newsDataArr = [];
//     if(response.status >=200 && response.status < 300) {
//         const myJson = await response.json();
//         newsDataArr = myJson.articles;
//     } else {
//         // handle errors
//         console.log(response.status, response.statusText);
//         $("#newsdetails").html("<h5>No data found.</h5>")
//         return;
//     }

//     displayNews();
// }

// const fetchBussinessNews = async () => {
//     const response = await fetch(BUSINESS_NEWS+API_KEY);
//     newsDataArr = [];
//     if(response.status >=200 && response.status < 300) {
//         const myJson = await response.json();
//         newsDataArr = myJson.articles;
//     } else {
//         // handle errors
//         console.log(response.status, response.statusText);
//         $("#newsdetails").html("<h5>No data found.</h5>")
//         return;
//     }

//     displayNews();
// }

// const fetchEntertainmentNews = async () => {
//     const response = await fetch(ENTERTAINMENT_NEWS+API_KEY);
//     newsDataArr = [];
//     if(response.status >=200 && response.status < 300) {
//         const myJson = await response.json();
//         console.log(myJson);
//         newsDataArr = myJson.articles;
//     } else {
//         // handle errors
//         console.log(response.status, response.statusText);
//         $("#newsdetails").html("<h5>No data found.</h5>")
//         return;
//     }

//     displayNews();
// }

// const fetchSportsNews = async () => {
//     const response = await fetch(SPORTS_NEWS+API_KEY);
//     newsDataArr = [];
//     if(response.status >=200 && response.status < 300) {
//         const myJson = await response.json();
//         newsDataArr = myJson.articles;
//     } else {
//         // handle errors
//         console.log(response.status, response.statusText);
//         $("#newsdetails").html("<h5>No data found.</h5>")
//         return;
//     }

//     displayNews();
// }

// const fetchTechnologyNews = async () => {
//     const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
//     newsDataArr = [];
//     if(response.status >=200 && response.status < 300) {
//         const myJson = await response.json();
//         newsDataArr = myJson.articles;
//     } else {
//         // handle errors
//         console.log(response.status, response.statusText);
//         $("#newsdetails").html("<h5>No data found.</h5>")
//         return;
//     }

//     displayNews();
// }

// const fetchQueryNews = async () => {

//     if(newsQuery.value == null)
//         return;

//     const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
//     newsDataArr = [];
//     if(response.status >= 200 && response.status < 300) {
//         const myJson = await response.json();
//         newsDataArr = myJson.articles;
//     } else {
//         //error handle
//         console.log(response.status, response.statusText);
//         $("#newsdetails").html("<h5>No data found.</h5>")

//         return;
//     }

//     displayNews();
// }
// function displayNews() {
//     $("#newsdetails").html("");

//     $.each(newsDataArr, function (index, news) {
//         var date = news.publishedAt.split("T");

//         var col = $('<div>').addClass("col-sm-12 col-md-4 col-lg-3 p-2 card ");

//         var card = $('<div>').addClass("p-2");

//         var image = $('<img>').attr({
//             "height": "matchparent",
//             "width": "100%",
//             "src": news.urlToImage
//         });

//         var cardBody = $('<div>');

//         var newsHeading = $('<h5>').addClass("card-title").html(news.title);

//         var dateHeading = $('<h6>').addClass("text-primary").html(date[0]);

//         var description = $('<p>').addClass("text-muted").html(news.description);

//         var link = $('<a>').addClass("btn btn-dark").attr({
//             "target": "_blank",
//             "href": news.url
//         }).html("Read more");

//         cardBody.append(newsHeading);
//         cardBody.append(dateHeading);
//         cardBody.append(description);
//         cardBody.append(link);

//         card.append(image);
//         card.append(cardBody);

//         col.append(card);
//         $("#newsdetails").append(col);
//     });
// }
