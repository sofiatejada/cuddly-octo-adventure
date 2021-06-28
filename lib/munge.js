function mungeLocationRes(locationRes) {
  //1. grab needed display_name, lat and lon out of the array 2. change last/lon to longitude/latitude 3. change display_name to formatted_query

  const locationItem = locationRes[0];
  return {
    formatted_query: locationItem.display_name,
    latitude: locationItem.lat,
    longitude: locationItem.lon,
  };

}

function mungeWeatherRes(weatherRes) {
  const weatherItem = weatherRes.data;
  const mungedWeatherItem = weatherItem.map(item => {
    return {
      'forecast': item.weather.description,
      'time': new Date(item.ts * 1000).toLocaleDateString('en-US', { 
        weekday: 'long', 
        year:'numeric', 
        month: 'long', 
        day: 'numeric',
      })
    };
  });

  return mungedWeatherItem;
}

function mungeYelpRes(yelpRes) {
  const yelpItem = yelpRes.businesses;
  const mungedYelpItem = yelpItem.map(item => {
    return {
      'name': item.name,
      'image_url': item.image_url,
      'price': item.price,
      'rating': item.rating,
      'url': item.url,
    };
  });

  return mungedYelpItem;
}

module.exports = {
  mungeLocationRes, mungeWeatherRes, mungeYelpRes
};
