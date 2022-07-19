var img = document.createElement("img");
document.getElementById('button').addEventListener("click", function() {
    
  
let randomNumber = Math.ceil(Math.random() * 6);
//Get a random starWars film
fetch(`https://swapi.dev/api/films/${randomNumber}`)
    .then(response => response.json())
    .then(data => {
        document.querySelector('aside').innerHTML = data.opening_crawl;
        document.getElementById('title').innerHTML = data.title;
        img.src = "";
        document.getElementById("poster").appendChild(img);
        switch(data.episode_id){
            case 1:
                img.src = "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg";    
                break;
            case 2:
                img.src = "https://m.media-amazon.com/images/I/61zAkpvYLqL._AC_SY741_.jpg";  
                break;
            case 3:
                img.src = "https://m.media-amazon.com/images/I/71WgjTKJ00L._AC_SY679_.jpg";    
                break;                   
            case 4:
                img.src = "https://i.etsystatic.com/17352010/r/il/750ea1/1614619486/il_fullxfull.1614619486_22fz.jpg";    
                break;
            case 5:
                img.src = "https://i.pinimg.com/474x/05/4c/f8/054cf89c468b7f97ac8a7607b0cd2447.jpg";
                break;
            case 6:
                img.src = "https://m.media-amazon.com/images/I/81E911hVDAL._AC_SL1500_.jpg"; 
                break;
                
            default:
                img.src = "https://wallpapercave.com/wp/wp7153195.jpg";    
                
                break;
        }
    })
});