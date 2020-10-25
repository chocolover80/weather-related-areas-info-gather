This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application aims to collect weather data for the 15 surrounding locations, based on a latitude and longitude of a city passed. It's connected with Google Maps API and OpenWeather Map.

Project developed by: [Luan Lucas Brevinski (chocolover80)](https://github.com/chocolover80).

## To start up the project
To run the project, you must first install the dependencies. with a simple 'npm install' command. After running the command just wait for it to finish (takes up to 2 minutes depending on your PC) and start hacking! :)

## Available Scripts

As told above, the project was generated via Create React App, so the default scripts were kept, with just some environment changes. In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:<env_port_declared_on_env_file>]() to view it in the browser. Here I used a PORT declaration via .env file, it can be found on the 
 [.env inside the project](https://github.com/chocolover80/weather-related-areas-info-gather/blob/main/.env)
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

** The test and build scripts are also available, but they're not relevant for this POC, so no need to concern about it. For more info, see the [package.json](https://github.com/chocolover80/weather-related-areas-info-gather/blob/main/package.json) of the project. **

**Image 1**

![Scripts for the project](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/scripts.PNG)

## The project interface
In this section, we'll see the main screens of the application.

### Home Page
If everything goes right, this is what you're gonna see, right on application first load:

**Image 2**

![Home Page of the Project](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/home-page.PNG)

As we can see, the Home Page presents us a introduction label, and some input texts so we can put the desired latitude and longitude, then right below from it, we see 3 buttons, the first one adds a pin based on the provided coordinates. the second one removes a pin (if there is one), the the third one search for the weather data, based on the pin set.

** Sometimes, the page could have loading problems or browser rendering limitations, making the page not set your location automatically (the application should set your current location at the first load, as we saw above, where it set my location as São Paulo - BR). On those cases, this is what you'll see:

**Image 3**

![Bugged Home Page of the Project](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/bugged-home-page.PNG)

This is not a problem for what it's worth, you still can unzoom the map to view your set pin and all. It's just a "not ideal scenario", but of course, you still can refresh your page to properly see the application setting your location by default. This problem doesn't even happens most of the time. **

### Weather Info Screen for the 15 sorroundings
This Modal Screen is filled with info gathered via OpenWeather Map API, searching data with provided latitude and longitude (passed via inputs at home screen). It shows them on a rounded semi-transparent box, with an icon defined by its main weather condition, and two labels showing city's name and weather description respectively. Here you can see an example for my city coordinates:

**Image 4**

![Modal Weather Info with 15 cities](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/example-modal-weather-info.PNG)

### Modal with no data (no weather info for the coordinates provided)

**Image 5**

![Modal Weather Info NO DATA](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/example-modal-weather-info-NO_DATA.PNG)

### Details Modal for a clicked city
When clicking any of the cities gathered on the previous modal, a mini modal will pop showing temperature measures (in Celsius). See an example clicking on the "Ferraz de Vasconcelos" card  we seen on **Image 4**.

**Image 6**

![Modal Weather Info with 15 cities](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/details-modal-example.PNG)

## Coding structure
The project is a simple POC, but yet, it uses great and very famous libraries, so in order for them to work together some


