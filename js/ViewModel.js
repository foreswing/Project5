// Set up the  data Model

var Model = {
    points: [
        {
        type: 'ski',
        iconUrl: 'icons/ski.svg', 
        name: 'Keystone Ski Resort',
        url:  'http://www.keystoneresort.com/',
        lat: 39.607441,
        long: -105.943594,
        yelpID: 'keystone-resort-keystone-2',
        snoCountryID: '303014',
        highlight: ko.observable(false)
        },
        {
        type: 'ski',
        iconUrl: 'icons/ski.svg', 
        name: 'Loveland Ski Area',
        url:  'http://www.skiloveland.com/',
        lat: 39.680273,
        long: -105.895918,
        yelpID: 'loveland-ski-area-georgetown-2',
        snoCountryID: '303015',
        highlight: ko.observable(false)
        },
        {
        type: 'ski',
        iconUrl: 'icons/ski.svg', 
        name: 'Breckenridge Ski Resort',
        url:  'http://www.breckenridge.com/',
        lat: 39.480506,
        long: -106.06688,
        yelpID: 'breckenridge-ski-resort-breckenridge',
        snoCountryID: '303007',
        highlight: ko.observable(false)
        },
        {
        type: 'ski',
        iconUrl: 'icons/ski.svg', 
        name: 'Copper Mountain',
        url:  'http://www.coppercolorado.com/winter/index.html',
        lat: 39.500037,
        long: -106.146817,
        yelpID: 'copper-mountain-ski-resort-copper-mountain',
        snoCountryID: '303009',
        highlight: ko.observable(false)
        },
        {
        type: 'ski',
        iconUrl: 'icons/ski.svg', 
        name: 'Arapahoe Basin Ski Area',
        url:  'http://www.arapahoebasin.com/Abasin/Default.aspx',
        lat: 39.6328784,
        long: -105.9413623,
        yelpID: 'arapahoe-basin-ski-area-dillon',
        snoCountryID: '303001',
        highlight: ko.observable(false)
        },
        {
        type: 'bar',
        iconUrl: 'icons/bar.svg', 
        name: 'Lake Dillon Tavern',
        url:  'http://www.lakedillontavern.com/',
        lat: 39.627513,
        long: -106.045675,
        yelpID: 'lake-dillon-tavern-dillon',
        snoCountryID: '303015',
        highlight: ko.observable(false)
        },
        {
        type: 'bar',
        iconUrl: 'icons/bar.svg', 
        name: 'Snake River Saloon',
        url:  'http://www.snakeriversaloon.com/',
        lat: 39.608487,
        long: -105.950939,
        yelpID: 'snake-river-saloon-keystone',
        snoCountryID: '303001',
        highlight: ko.observable(false)
        },
        {
        type: 'bar',
        iconUrl: 'icons/bar.svg', 
        name: 'Dillon Dam Brewery',
        url:  'http://www.dambrewery.com/',
        lat: 39.627563,
        long: -106.06032,
        yelpID: 'dillon-dam-brewery-dillon',
        snoCountryID: '303014',
        highlight: ko.observable(false)
        },
        {
        type: 'bar',
        iconUrl: 'icons/bar.svg', 
        name: 'Ollies Pub & Grub',
        url:  'http://www.olliespub.com/',
        lat: 39.575529,
        long: -106.0997,
        yelpID: 'ollies-pub-and-grub-frisco',
        snoCountryID: '303009',
        highlight: ko.observable(false)
        },
        {
        type: 'bar',
        iconUrl: 'icons/bar.svg', 
        name: 'Breckenridge Brewery & Pub',
        url:  'http://www.breckbrew.com/agegate',
        lat: 39.4806555,
        long: -106.0451615,
        yelpID: 'breckenridge-brewery-breckenridge',
        snoCountryID: '303007',
        highlight: ko.observable(false)
        },
        {
        type: 'dispensary',
        iconUrl: 'icons/dispensary.svg', 
        name: 'Alpenglow Botanicals',
        url:  'http://alpenglowbotanicals.webs.com/',
        lat: 39.508006,
        long: -106.052112,
        yelpID: 'alpenglow-botanicals-breckenridge',
        snoCountryID: '303009',
        highlight: ko.observable(false)
        },
        {
        type: 'dispensary',
        iconUrl: 'icons/dispensary.svg', 
        name: 'Breckenridge Cannabis Club',
        url:  'http://medicalmarijuanabreckenridge.com/',
        lat: 39.501242,
        long: -106.043211,
        yelpID: 'breckenridge-cannabis-club-breckenridge',
        snoCountryID: '303007',
        highlight: ko.observable(false)
        },
        {
        type: 'dispensary',
        iconUrl: 'icons/dispensary.svg', 
        name: 'High Country Healing',
        url:  'http://www.highcountryhealing.com/new/',
        lat: 39.628771,
        long: -106.070723,
        yelpID: 'high-country-healing-silverthorne',
        snoCountryID: '303001',
        highlight: ko.observable(false)
        },
        {
        type: 'dispensary',
        iconUrl: 'icons/dispensary.svg', 
        name: 'Native Roots',
        url:  'http://nativeroots303.com/',
        lat: 39.587397,
        long: -106.094236,
        yelpID: 'native-roots-frisco-frisco',
        snoCountryID: '303014',
        highlight: ko.observable(false)
        },
        {
        type: 'dispensary',
        iconUrl: 'icons/dispensary.svg', 
        name: 'Alpenglow Premium Cannabis',
        url:  'http://alpenglowbotanicals.webs.com/',
        lat: 39.62685,
        long: -106.061994,
        yelpID: 'alpenglow-premium-cannabis-dillonflat',
        snoCountryID: '303015',
        highlight: ko.observable(false)
        }
    ],
    currentPoint: ko.observable(null)
};

// ViewModel Code

var ViewModel = function () {

// Initialize Standard and Knockout Observable Variables

    var self = this;
    self.dialogItem = ko.observable();
    self.markerArray = ko.observableArray();
    self.filterArray = ko.observableArray();
    self.listArray = ko.observableArray();
    self.query = ko.observable("");
    self.dialogVisible = ko.observable(false);
    self.showMarkers = ko.observable(true);
    var map, place; 
    var activityButton = false;

// Initialize DOM using IIFE

    var initDom = function() {

// Verify Map Object in DOM and initialize map or display map error

        if (typeof window.google === 'object' && typeof window.google.maps === 'object') {

// Set initial map options

            var mapOptions = {
            // disableDefualtUI: true,
                zoom: 10,
                center: new google.maps.LatLng(39.599434,-106.005254),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

// Set and display map

            map = new google.maps.Map(document.getElementById('map'), mapOptions);
                infowindow = new google.maps.InfoWindow({
                content: null
            });

// Create points of interest array using data Model & display on map

            var pointsArray = Model.points;

            for (var x=0; x < pointsArray.length; x++) {
                var pointPosition = new google.maps.LatLng(
                pointsArray[x].lat,
                pointsArray[x].long
                );

                var marker = new google.maps.Marker({
                    position: pointPosition,
                    title: pointsArray[x].name,
                    url: pointsArray[x].url,
                    icon: pointsArray[x].iconUrl,
                    map: map,
                    type: pointsArray[x].type,
                    highlight: pointsArray[x].highlight,
                    snow: pointsArray[x].snoCountryID,
                });

// Add marker to marker array to show google markers and to list array to show location list

                self.markerArray.push(marker);
                self.listArray.push(marker);

// Event handler to set content and show information window when marker is clicked

                google.maps.event.addListener(marker, 'click', function() {
                    var that = this;
                    infowindow.setContent("<span class='name'>" + that.title +
                          "</span><br><a href=" + that.url + ">" + that.url + "</a><br>" +
                          "</span><br><button type='button' onclick=" +
                          "'snowReport(" + that.snow + ")'" + 
                          ">Get Nearby Snow Report</button><br>");

                    infowindow.open(map, that);
                });
            }; // end for

// Event handler to keep map centered when screen is resized

            google.maps.event.addDomListener(window, 'resize', function() {
                map.setCenter(new google.maps.LatLng(39.599434,-106.005254));
            });

        }; // end if

    }(); // end initDom and immediately execute

// Function to filter list based on activity button clicked

    self.filterActivity = function(activity) {

// Start by setting displayed list array to full list of places by setting it equal marker array
// Then use spice to remove entries that don't match the selected activity button
// Must decrement through array backwards since index will change if go forward and remove elements

        self.listArray(self.markerArray().slice(0));
        if (activity == "all") {
            return;
        }
        var i = self.listArray().length;
        while (i--) {
            if (self.listArray()[i].type !== activity){
                self.listArray.splice(i, 1);    
            };
        };
    };

// This function modifies the displayed locations based on the search/filter input box
// A key point is that I had to use a different array than the displayed array since we are
// using a ko.computed fuction, which makes the underlying observable "read only"
// We must empty the displayed array first using the splice(0)
// We then then push the filtered marker entry to the displayed array

    self.filterArray = ko.computed(function(){
        var query = self.query().toLowerCase();
        self.listArray.splice(0);
        return ko.utils.arrayFilter(self.markerArray(), function(marker) {
            if (marker.title.toLowerCase().indexOf(query) > -1) {
                self.listArray.push(marker);
                return marker.title.toLowerCase().indexOf(query) > -1;
            };
        });
    }, self);

// Subscribe map marker array to list array to keep the markers in synch with the list

    self.listArray.subscribe(function() {
        var differences = ko.utils.compareArrays(self.markerArray(), self.listArray());
        ko.utils.arrayForEach(differences, function(marker) {
          if (marker.status == 'deleted') {
            marker.value.setMap(null);
          } else {
            marker.value.setMap(map);
          }
        });
    });

//Highlight map marker if list item is clicked

    self.selectItem = function(listItem) {
        google.maps.event.trigger(listItem, 'click');
    };

// Function to display snow report when called from map marker infowindow

    self.snowReport = function(resortID) {
        console.log("I'm in the snow report function - Resort ID = " + resortID);
        document.getElementById("dialog").style.visibility = "visible";
        self.dialogVisible(true);
        // self.dialogItem = ko.observable();
        self.dialogItem('THIS IS THE SNOW REPORT FOR THIS RESORT');
        // var dialog = document.querySelector('dialog');
        // function showDialog() {
        //     dialog.showModal();
        // }
        
        // document.querySelector('#close').onclick = function() {
        //     dialog.close();
        // };        
    };

} // End ViewModel Function

// Apply all ViewModel knockout bindings

ko.applyBindings(ViewModel);