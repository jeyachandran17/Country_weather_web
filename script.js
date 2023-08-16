var create_container = document.createElement('div');
create_container.setAttribute("class","container");

var row = document.createElement("div")
row.setAttribute("class","row")

create_container.append(row);

// var weather_url = fetch(`https://api.openweathermap.org/data/2.5/weather?lat={34.52}&lon={69.18}&appid=abe0f566c455439fee500c28e807c2b7`)

var data = fetch("https://restcountries.com/v3.1/all")
    .then((data)=>data.json())
        .then((data)=>{
            // console.log(data);
            for(var i in data){
                // console.log(`country name : ${data[i].name.common} |  flag : ${data[i].flags.png} | \n caital : ${data[i].capital} | region : ${data[i].region} | country code : ${data[i].fifa}| \n lattitude : ${data[i].latlng[0]} | lattitude : ${data[i].latlng[1]}`)
                let country_name = data[i].name.common;
                let flag = data[i].flags.png;
                let capital = data[i].capital;
                let region = data[i].region;
                let country_code = data[i].fifa;
                let lat = data[i].latlng[0];
                let lng = data[i].latlng[1];
                // console.log(country_name,flag,capital,region,country_code,lat,lng);
                row.innerHTML += ` <div class="col-lg-4, col-sm-12" id="card">
                <div class="heading-container">
                    <h6 class="head_tag">${country_name}</h6>
                </div>
                <div class="flag-container">
                    <img src="${flag}" alt="country flag">
                </div>
                <div class="label">
                    <label for="captial" class="details">Captial : ${capital}</label>
                    <label for="Region" class="details">Region : ${region}</label>
                    <label for="Country-code" class="details">Country Code : ${country_code}</label>
                </div>
                <div class="button">
                    <button type="button" class="btn btn-primary" id="btn" onclick="weather_cheak(${lat},${lng})">Click for Weather</button>
                </div>
            </div> `;
            document.body.append(create_container)
            } 
        }).catch((error)=>console.log(error));

function weather_cheak(lat,lng){
            // console.log(lat,lng);
            // console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=abe0f566c455439fee500c28e807c2b7`)
            var weather_data = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=abe0f566c455439fee500c28e807c2b7`)
                .then((weather_data)=>weather_data.json())
                    .then((weather_data)=>{
                        alert(`Country name : ${weather_data.name}\nWeather : ${weather_data.weather[0].description}\n`);
                })
}
                   
