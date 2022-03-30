           
    let ioURL= "https://io.adafruit.com/api/v2/ariannaborgeson/feeds/testsensorfeed/data?";
    let ioUVURL= "https://io.adafruit.com/api/v2/ariannaborgeson/feeds/uvsensorfeed/data?";
    let ioLimitQuery = "limit="
    let ioLimitNumbers = "1000";
   //uncomment if not using a range - ioinclude limits the values
    // let ioInclude = "include=value";
    //set a start and end time
    let ioStart = "start_time=";
    let ioStartVal = "2022-03-13T09:45Z";
    let ioEnd = "end_time=";
    let ioEndVal = "2022-03-13T09:55Z";

    let data;
    let valueSets = [];
    let buttonPressed = false;


    // let lightValues = [];
    // let lightTimes = [];
    // let uvValues = [];
    // let uvTimes = [];



//preload a function to assign to io values, info of data, and error functions to data variable
    function preload(){
      fetchData();
    }
//change to HSB to adjust the brightness using the lightvalues
    function setup(){
        colorMode(HSB, 360, 100, 100);
        let mycanvas = createCanvas(800, 800);
        mycanvas.parent('canvas');
    }

    function draw(){ 
        background(182, 52, 84);

        if (buttonPressed) {
            valueSets.forEach((obj,i) => {
                noStroke();
                rectMode(CENTER);
                //map light values to HSB circle, make them fill colors
                fill(map(obj.lightValue, 0, 4095, 0, 360)/5, map(obj.lightValue, 0, 4095, 0, 360), map(obj.lightValue, 0, 4095, 0, 360));
                //x pos is time, vx values are height       
                rect(obj.lightTime.getMinutes()*15, 400, 10, obj.uvValue*100);
                // buttonText = 'Go to Arc View';
        })
    }
        else {
        valueSets.forEach((obj,i) => {
                // rectMode(CENTER);
            //fill(lightValues[i]*10, lightValues[i]*20, lightValues[i]*30);
            //map light values to HSB circle, make them fill colors
                stroke(map(obj.lightValue, 0, 4095, 0, 360)/5, map(obj.lightValue, 0, 4095, 0, 360), map(obj.lightValue, 0, 4095, 0, 360));
             //x and y pos are time, uv values are width and height, time values are angles of the arc
            arc(obj.lightTime.getMinutes()*10, obj.lightTime.getMinutes()*10, obj.uvValue*40, obj.uvValue*40, obj.lightTime.getMinutes(), obj.lightTime.getHours());
            // buttonText = 'Go to Rectangle View';

        })     
    }}

    function mousePressed() {
         buttonPressed = !buttonPressed;
        }


    function fetchData(){
        let lightAssembledURL = ioURL+ioLimitQuery+ioLimitNumbers+"&"+ioStart+ioStartVal;
        let uvAssembledURL = ioUVURL+ioLimitQuery+ioLimitNumbers+"&"+ioStart+ioStartVal;
        
        //push each value set
        for(let i = 0; i < ioLimitNumbers; i++){
            valueSets.push({})
        }

        console.log(lightAssembledURL, uvAssembledURL)
        data1 = loadJSON(lightAssembledURL, dataHandler1, errorHandler);
        data2 = loadJSON(uvAssembledURL, dataHandler2, errorHandler);

    }

//handles the API data for light sensor
    function dataHandler1(APIdata){
        // lightValues = [];
        // lightTimes = [];

    //from the api data, for each element, log the value into the console
    //regroup the separate arrays for time and value into one value set
        APIdata.forEach((elem, i) => {
            valueSets[i].lightValue = elem.value;
            valueSets[i].lightTime = new Date(elem.created_at);
            // lightValues[i]=elem.value;
            // lightTimes[i] = new Date(elem.created_at);
            console.log(elem.value);
            console.log(valueSets[i]);
        })
    }

//handles the API data for UV sensor
    function dataHandler2(APIdata){
            // uvValues = [];
            // uvTimes = [];

       //from the api data, for each element, log the value into the console
       //regroup the separate arrays for time and value into one value set

        APIdata.forEach((elem, i) => {
            valueSets[i].uvValue = elem.value;
            valueSets[i].uvTime = new Date(elem.created_at);
            // uvValues[i]=elem.value;
            // uvTimes[i] = new Date(elem.created_at);
            //console.log(uvValues);
        })
    }

    //log errors
    function errorHandler(APIerror) {
        console.error(APIerror)
    }
