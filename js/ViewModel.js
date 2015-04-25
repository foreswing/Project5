// Set up the  data Model

var Model = {
  points: [
    {
    type: 'ski',
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/sport22.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/sport22.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/sport22.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/sport22.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/sport22.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drink87.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drink87.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drink87.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drink87.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drink87.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drug5.svg', 
    name: 'Alpenglow Botanicals',
    url:  'http://alpenglowbotanicals.com/',
    lat: 39.508006,
    long: -106.052112,
    yelpID: 'alpenglow-botanicals-breckenridge',
    snoCountryID: '303009',
    highlight: ko.observable(false)
    },
    {
    type: 'dispensary',
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drug5.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drug5.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drug5.svg', 
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
    iconUrl: 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drug5.svg', 
    name: 'Alpenglow Premium Cannabis',
    url:  'http://alpenglowbotanicals.com/',
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

// Initialize Knockout Observable Variables

  var self = this;

  self.markerArray = ko.observableArray();
  self.query = ko.observable("");
  self.showMarkers = ko.observable(true);
  var map;

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
          highlight: pointsArray[x].highlight,
          snow: pointsArray[x].snoCountryID,
        });

// Event handler to set Content and show information window when marker is clicked

        google.maps.event.addListener(marker, 'click', function() {
          var that = this;
          infowindow.setContent("<span class='name'>" + that.title +
                  "</span><br><a href=" + that.url + ">" + that.url + "</a><br>" +
                  "</span><br><a onClick=" + "snowReport(that.snow); return false;" + 
                  ">Click Here for Nearby Snow Report</a><br>");

          infowindow.open(map, that);
        });

// Add marker to marker array

        self.markerArray.push(marker);

      }; // end for

// Event handler to keep map centered when screen is resized

      google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(new google.maps.LatLng(39.599434,-106.005254));
      });
    }; // end if
  }(); // end initDom and immediately execute

    self.listArray = ko.computed(function(){
        var query = self.query().toLowerCase();
        console.log(query);
        if (!query) {
            return self.listArray = Model.points;
        } else {
            console.log("I'm in the else branch of the filter query");
            return ko.utils.arrayFilter(self.markerArray(), function(marker) {

                if (marker.title.toLowerCase().indexOf(query) > -1) {
                    console.log("I'm in the true branch indexOf check");
                    console.log(marker.title);
                    return marker.title.indexOf(query);
                }
                // return marker.title.indexOf(query) > -1;
            });
        }
    }, self);
}

// Apply all ViewModel knockout bindings

ko.applyBindings(ViewModel);