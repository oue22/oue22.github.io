(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000);
        
        function updateClock() {

            let date = new Date();
            let h = date.getHours();
            let AmOrPm = h >= 12 ? 'pm' : 'am';
            h = (h%12) || 12;
            let m = date.getMinutes();
            let s = date.getSeconds();
            

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s + AmOrPm;
        

        };
        
    });
    
    // forms
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        let i = 0;

        let v1 = document.getElementById("v1")
        if (v1.checked === true) {
            i = i + 5
        }

        else {
        console.log("ei ole")
        }

        let v2 = document.getElementById("v2")
        if (v2.checked === true) {
            i = i + 1
        }

        else {
        console.log("ei ole")
        }

        let fname = document.getElementById("fname");
        if (fname.value === "") {
            alert("Täitke kõik väljad");
        }
       
       else if (isNaN(fname.value)){
           console.log("nimega korras")
        }
        else{
           alert("sisesta korrektne nimi");
        }
        let lname = document.getElementById("lname");
        if (lname.value === ""){
            alert("Täitke kõik väljad");
        }
        else if (isNaN(lname.value)){
           console.log("nimega korras")
        }
        else{
           alert("sisesta korrektne nimi");
        }










        let linn = document.getElementById("linn");
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;
            
            
        }
        
        else if (linn.value === "tln"){
            i = i + 0
            e.innerHTML = i + "&euro;";
        }
        else if (linn.value === "trt") {
            i = i + 2.5
            e.innerHTML = i + "&euro;";
        }
        else if (linn.value === "nrv") {
            i = i + 2.5
            e.innerHTML = i + "&euro;";
        }
        else if (linn.value === "prn") {
            i = i + 3
            e.innerHTML = i + "&euro;";
        }

        else {
            
            e.innerHTML = "x,xx &euro;";
            
        }        
        
        console.log("Tarne hind on arvutatud");
    }
    
})();
    

// map



let map, infobox;

    function GetMap() {

        "use strict";
        
    let centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
     );
    let teinepunkt = new Microsoft.Maps.Location(
        58.3664552,
        25.5974927
    );
    let keskpunkt = new Microsoft.Maps.Location(
        58.47934,
        26.11038
    );

        map = new Microsoft.Maps.Map('#map', { 
        center: keskpunkt,
        zoom: 9,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });

        //Create an infobox at the center of the map but don't show it.
        infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
            visible: false
        });

        //Assign the infobox to a map instance.
        infobox.setMap(map);

        //Create a pushpin at a random location in the map bounds.
       

        let pushpin = new Microsoft.Maps.Pushpin(centerPoint); 
        let pushpin1 = new Microsoft.Maps.Pushpin(teinepunkt); 
    




        //Store some metadata with the pushpin.

        pushpin.metadata = {
            title: 'Tartu Ülikool',
            subTitle: 'Hea koht',
            text: 'UT'
        }
        pushpin1.metadata = {
            title: 'Viljandi kultuuriakadeemia',
            subTitle: 'Ka hea koht',
            text: 'VKA'
        }

        //Add a click event handler to the pushpin.
        
        Microsoft.Maps.Events.addHandler(pushpin, 'click', pushpinClicked);
        Microsoft.Maps.Events.addHandler(pushpin1, 'click', pushpinClicked);

        //Add pushpin to the map.
       
        map.entities.push(pushpin);
        map.entities.push(pushpin1);

    }

    function pushpinClicked(e) {
        //Make sure the infobox has metadata to display.
        if (e.target.metadata) {
            //Set the infobox options with the metadata of the pushpin.
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    }

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

