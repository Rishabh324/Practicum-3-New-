const fs = require('fs');
const rt_data = require('./../restaurant_data/rt_data.json');


const obj_rt_data = [...rt_data];
// console.log((rt_data[0].capacity))


// const lc_fltr_rt_data = obj_rt_data.filter(location: 'kolkata');
const chosen_location = 'Delhi';

let req_type = "Hotels";
// It sorts on base of type that is restaurant or hotels
let lc_fltr_rt_data = obj_rt_data.filter((obj_rt_data) => (obj_rt_data.type==req_type));

// console.log(lc_fltr_rt_data);
// console.log('-----------------');
// console.log('-----------------');
// console.log('-----------------');

// It filters the object on basis of location chosen
lc_fltr_rt_data = lc_fltr_rt_data.filter((lc_fltr_rt_data) => (lc_fltr_rt_data.location==chosen_location));


// This line sorts on base of ratingsAverage
lc_fltr_rt_data = lc_fltr_rt_data.sort((a,b)=>(b.ratingsAverage-a.ratingsAverage));

//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------



// console.log(lc_fltr_rt_data);



// console.log(lc_fltr_rt_data);
// latitude , longitude , radius , types (restaurant,hotel) .