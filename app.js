function displayTemperature ( response ) {

    let temp = document.querySelector( "#temperature" );
    temp.innerHTML = response.data.main.temp;
}



function start ( city ) {

    let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apiKey }&units=metric`;
    axios.get( apiUrl ).then( displayTemperature );
}
function selectCity ( event ) {
    event.preventDefault()
    let element = document.querySelector( "#detail" );
    let summer = document.querySelector( "#place" );
    summer.innerHTML = element.value;
    start( element.value );

}
let form = document.querySelector( "#display-city" );
form.addEventListener( "submit", selectCity );