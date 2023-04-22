//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------

// api used for fetching data
const axios = require('axios');
// const { get } = require('../Route/rt_route');

const lt = (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
      params: {
        units: 'metric',
        room_number: '1',
        longitude: req.query.lng,
        latitude: req.query.lat,
        filter_by_currency: 'AED',
        order_by: 'popularity',
        locale: 'en-gb',
        checkout_date: '2023-09-28',
        adults_number: '2',
        checkin_date: '2023-09-27',
        children_ages: '5,0',
        include_adjacency: 'true',
        children_number: '2',
        page_number: '0',
        categories_filter_ids: 'class::2,class::4,free_cancellation::1'
      },
      headers: {
        'X-RapidAPI-Key': '853aefb517msh4d8f08c1d332359p1c16e3jsn80f508b1bc20',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    };


    let rd
    return axios.request(options).then(function (response) {
      rd = [...response.data.result];
      const hotel_data = []


      rd.filter((hotel) => {
        let obj = { hotel_name: null, review_score_word: null }
        obj["hotel_name"] = hotel.hotel_name;
        obj["review_score_word"] = hotel.review_score_word
        obj["address"] = hotel.address
        obj["review_nr"] = hotel.review_nr
        obj["min_total_price"] = hotel.min_total_price
        obj["max_photo_url"] = hotel.max_photo_url
        obj["url"] = hotel.url

        hotel_data.push(obj)
      })
      res.status(200).json(hotel_data);
      // return hotel_data;

      // res.status(200).json({
      //   status: 'pas',
      //   hotel_data
      //   // rd
      // })

    }).catch(function (error) {
      console.error(error);
    });
    // let r_data = await rd;


  } catch (err) {
    console.log(err);
  }
};

const dt = (req, res, lat, lng) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
      params: {
        units: 'metric',
        room_number: '1',
        longitude: lng,
        latitude: lat,
        filter_by_currency: 'AED',
        order_by: 'popularity',
        locale: 'en-gb',
        checkout_date: '2023-09-28',
        adults_number: '2',
        checkin_date: '2023-09-27',
        children_ages: '5,0',
        include_adjacency: 'true',
        children_number: '2',
        page_number: '0',
        categories_filter_ids: 'class::2,class::4,free_cancellation::1'
      },
      headers: {
        'X-RapidAPI-Key': '853aefb517msh4d8f08c1d332359p1c16e3jsn80f508b1bc20',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    };


    let rd
    return axios.request(options).then(function (response) {
      rd = [...response.data.result];
      const hotel_data = []


      rd.filter((hotel) => {
        let obj = { hotel_name: null, review_score_word: null }
        obj["hotel_name"] = hotel.hotel_name;
        obj["review_score_word"] = hotel.review_score_word
        obj["address"] = hotel.address
        obj["review_nr"] = hotel.review_nr
        obj["min_total_price"] = hotel.min_total_price
        obj["max_photo_url"] = hotel.max_photo_url
        obj["url"] = hotel.url

        hotel_data.push(obj)
      })
      return hotel_data;

      // res.status(200).json({
      //   status: 'pas',
      //   hotel_data
      //   // rd
      // })

    }).catch(function (error) {
      console.error(error);
    });
    // let r_data = await rd;


  } catch (err) {
    console.log(err);
  }
};

const getLatLng = (req, res) => {
  const options = {
    method: 'GET',
    url: `https://api.openweathermap.org/geo/1.0/direct?q=${req.query.cityName}&limit=5&appid=c105d11229bb56aa82af0dc91e2aa9eb`,
  };

  axios.request(options).then(async (response) => {
    // console.log('data')
    // res.status(200).json(response.data);
    // console.log(response.data);
    let lat, lng;
    const ll = response.data;
    ll.filter((ltlng) => {
      if (ltlng.country === 'IN') {
        lat = ltlng.lat;
        lng = ltlng.lon;
      }
    })
    const data = await dt(req, res, lat, lng);
    res.status(200).json(data);
    // return dt
  }).catch(function (error) {
    console.error(error);
  });
}


module.exports = { getLatLng, lt };

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------