const API_KEY = "187e5ee3b4e402f8d595d0289d16ddfb"
const URL_BASE = "https://api.openweathermap.org/data/2.5/weather"

const boton = document.getElementById('boton-clima')
boton.addEventListener('click', () => {
    let ciudad = document.getElementById('buscador-clima').value
    if(ciudad){
        fetchMostrarDatos(ciudad)
    }
})

function fetchMostrarDatos(ciudad){
    fetch(`${URL_BASE}?q=${ciudad}&lang=es&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(response => mostrarDatosClima(response))
    .catch(error => mostrarError(error));
}

function mostrarError(_error){
    const divDatosClima = document.getElementById('datos-clima')
    divDatosClima.innerText = 'Error al ingresar ciudad. Por favor intente de nuevo'
}

function mostrarDatosClima(response){
    const divDatosClima = document.getElementById('datos-clima')
    divDatosClima.innerText = ''

    const nombreCiudad = response.name
    const nombrePais = response.sys.country
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const icono = response.weather[0].main

    const ciudadTitulo = document.createElement('h3')
    ciudadTitulo.textContent = `${nombreCiudad}, ${nombrePais}`

    const tempSubTitulo = document.createElement('h3')
    tempSubTitulo.textContent = `${temperatura} °C`

    const iconoAnimado = document.createElement('img')
    iconoAnimado.classList.add('agrandar')

        switch (response.weather[0].main) {
            case 'Thunderstorm':
                iconoAnimado.src='animated/thunder.svg'
                console.log('TORMENTA');
                break;
            case 'Drizzle':
                iconoAnimado.src='animated/rainy-2.svg'
                console.log('LLOVIZNA');
                break;
            case 'Rain':
                iconoAnimado.src='animated/rainy-7.svg'
                console.log('LLUVIA');
                break;
            case 'Snow':
                iconoAnimado.src='animated/snowy-6.svg'
                console.log('NIEVE');
                break;
            case 'Clear':
                iconoAnimado.src='animated/day.svg'
                console.log('LIMPIO');
                break;
            case 'Atmosphere':
                iconoAnimado.src='animated/weather.svg'
                console.log('ATMOSFERA');
                break;
            case 'Clouds':
                iconoAnimado.src='animated/cloudy-day-1.svg'
                console.log('NUBES');
                break;
            default:
                iconoAnimado.src='animated/cloudy-day-1.svg'
                console.log('por defecto');
        }

    const descripcionClima = document.createElement('p')
    descripcionClima.textContent = descripcion

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(tempSubTitulo)
    divDatosClima.appendChild(iconoAnimado)
    divDatosClima.appendChild(descripcionClima)
}

//DARK MODE
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = 'Light Mode';
    } else {
        darkModeToggle.textContent = 'Dark Mode';
    }
});