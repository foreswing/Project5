// Overall viewmodel for this application, along with initial state

function place(type, name, url, lat, long) {
    this.type = ko.observable(type);
    this.name = ko.observable(name);
    this.url = ko.observable(url);
    this.lat = ko.observable(lat);
    this.long = ko.observable(long);

    var iconBase
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, long),
        title: name,
        url: url,
        icon: iconSelect(type),
        map: googleMap,

// Set up information window content to use when marker is clicked

        infowindow: new google.maps.InfoWindow({
            content: "<span class='name'>" + name +
                     "</span><br><a href=" + url + ">" + url + "</a><br>"
        })
    });



// Event handler to show information window when marker is clicked

    google.maps.event.addListener(marker, 'click', function() {
        marker.infowindow.open(googleMap, marker);
    });

}

function iconSelect(markerType) {
    if (markerType == 'ski') {
        markerUrl = 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/sport22.svg';
    } else if (markerType == 'bar') {
            markerUrl = 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drink87.svg';
        } else {
            markerUrl = 'C:/Users/Ken/Desktop/Portfolio/Project5/icons/drug5.svg';
        }
    return markerUrl;
}

// Define initial map variable and instantiate it zoomed and centered

var googleMap = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: new google.maps.LatLng(39.599434,-106.005254),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

// Event handler to keep map centered when screen is resized

google.maps.event.addDomListener(window, 'resize', function() {
  googleMap.setCenter(new google.maps.LatLng(39.599434,-106.005254));
});

// Set up the viewModel and instantiate all points of interest

var viewModel = {
    query: ko.observable(''),
    points: ko.observableArray([
        new place('ski', 'Keystone Ski Resort', 
                  'http://www.keystoneresort.com/', 39.607441,-105.943594),
        new place('ski', 'Loveland Ski Area', 
                  'http://www.skiloveland.com/', 39.680273,-105.895918),
        new place('ski', 'Breckenridge Ski Resort',
                  'http://www.breckenridge.com/', 39.480506,-106.06688),
        new place('ski', 'Copper Mountain', 
                  'http://www.coppercolorado.com/winter/index.html', 39.500037,-106.146817),
        new place('ski', 'Arapahoe Basin Ski Area',
                  'http://www.arapahoebasin.com/Abasin/Default.aspx', 39.6328784,-105.9413623),
        new place('bar', 'Lake Dillon Tavern', 
                  'http://www.lakedillontavern.com/', 39.627513,-106.045675),
        new place('bar', 'Snake River Saloon', 
                  'http://www.snakeriversaloon.com/', 39.608487,-105.950939),
        new place('bar', 'Dillon Dam Brewery', 
                  'http://www.dambrewery.com/', 39.627563,-106.06032),
        new place('bar', 'Ollies Pub & Grub', 
                  'http://www.olliespub.com/', 39.575529,-106.0997),
        new place('bar', 'Breckenridge Brewery & Pub', 
                  'http://www.breckbrew.com/agegate', 39.4806555,-106.0451615),
        new place('dispensary', 'Alpenglow Botanicals', 
                  'http://alpenglowbotanicals.com/', 39.508006,-106.052112),
        new place('dispensary', 'Breckenridge Cannabis Club', 
                  'http://medicalmarijuanabreckenridge.com/', 39.501242,-106.043211),
        new place('dispensary', 'High Country Healing', 
                  'http://www.highcountryhealing.com/new/', 39.628771,-106.070723),
        new place('dispensary', 'Native Roots', 
                  'http://nativeroots303.com/', 39.587397,-106.094236),
        new place('dispensary', 'Alpenglow Premium Cannabis', 
                  'http://alpenglowbotanicals.com/', 39.62685,-106.061994)])
};

// Setup search and filtering functionality

viewModel.filteredPoints = ko.computed(function() {
    var self = this;
    var query = self.query().toLowerCase();
    return ko.utils.arrayFilter(self.points, function(points) {
        return ko.utils.stringStartsWith(self.place.name().toLowerCase(), query);
    });

}, viewModel);

// Apply all knockout bindings to the viewModel

ko.applyBindings(viewModel);