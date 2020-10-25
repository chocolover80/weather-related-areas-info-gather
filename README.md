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

![Details Modal Example](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/details-modal-example.PNG)

## Coding structure
The project is a simple POC, but yet, it uses very famous and incredible libraries, which are very used on the market. So in order for them to work together and display a good outcome, some patterns were needed:

### Folders separation
I used some separation patterns that I currently applied on my projects, which includes:

**.env file located on the root of the project** - This file, like in every other project that has a ".env" file, is used to set some environment properties that the program will read and apply on its runtime execution. Below you can see some info set on this project environment:

#### Env file keys
**Image 7**

![Env File](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/env-file.PNG)
**Here is a description for each value set on the env file:**

**NODE_ENV:** This key defines the environment dev we are currently using, is useful when we build it on a docker image for example. When we build it we'll pass the flag, saying which env file the image shall read. 

**PORT:** This is the port the application will run on (for default, React sets the port as 3000)

**REACT_APP_GOOGLE_MAPS_API_KEY:** Here is where we set our API Key created on the Google Maps API.

**REACT_APP_OWM_MAPS_API_KEY:** Here is where we set our API Key created on the Open Weather Map API.

**REACT_APP_OWM_SURROUNDINGS_WEATHER_INFO:** Here we set the endpoint for the OWN API call, that gathers the 15 sorrounding cities weather data.

#### Folders and other files structure
**'src' folder** - This folder is the main folder, where every other folder and file for our application content management will follow in structure.

**'components' folder** - This folder is where I put every component I create on the application, also, I like to separate the components inside this folder, on sub-folders. For example: Let's imagine you are creating an app that shows both weather information and historic info for cities. You will probably create many components for each functions, so I personaly would create at least to separated folders, one for the components which would manage the "Historic Info Data Gather" and the other to "Weather Info Data Gather".

**Image 8**

![Env File](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/component-structure.PNG)

**For a demonstration see this project structure print:**


**'service' folder** - This folder contains the Services for the project, usually it helps to aggregate all the API calls, so we can just call an instance of it from another components and makes easier the management of the calls. For this project specifically, I only set on service, which is the OWM call manager:

**Image 9**

![Env File](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/api-service.PNG)

** Here we use axios to make the calls and set the endpoint query params via env files.

**'store' folder** - This folder contains all the .js  files responsable for managing the state of the entire application via redux. It includes two sub-folders, the **actions** and the **reducers**, which respectively contains the functions for setting state info and retrieve it on other components. Here's the folder with redux objects set on the project:

**Image 10**

![Redux js files](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/redux-js-files.PNG)

**'store' folder** - This folder contains all the .js  files responsable for managing the state of the entire application via redux. It includes two sub-folders, the **actions** and the **reducers**, which respectively contains the functions for setting state info and retrieve it on other components. Here's the folder with redux objects set on the project:

**'utils' folder** - This folder contains all the .js  files responsable for managing the utility features (like conversors, date manipulators etc.). Here's the folder with just one .js file, which is a helper, with the purpose to set a default location once the application is loaded up:

**Image 11**

![Utility js files](https://raw.githubusercontent.com/chocolover80/weather-related-areas-info-gather/main/documentation/images/utils-js-files.PNG)

## Libraries used
#### React.js
A javascript framework focused on web development for user interfaces;
#### Axios 
A library that allows promise-based HTTP requests
#### Redux
A javascript framework to manage applications state.
#### React-Redux
A library that links both react and redux together to properly work
#### dotenv
A library to manipulate .env files inside the application.
#### React Bootstrap
The famous bootstrap front-end framework, but specifically reforged for React applications
#### Font Awesome
A front-end library of icons and fonts.


