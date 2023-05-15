import _ from 'lodash'

export default function solution(content){
  // BEGIN

  // step 1
  const data = content.split('\r\n');
  const info = data.slice(1, data.length - 1);
  console.log(`Count: ${info.length}`);


  // step 2
  let city_arr = [];
  let birs = [];
  for (let i = 0; i < info.length - 1; i += 1) {
    city_arr = info[i].split(',');
    birs.push(city_arr[7]);
  }
  let maggie = _.union(birs);
  let all_cities = _.sortBy(maggie);
  console.log(`Cities: ${all_cities.join(', ')}`);



  // step 3
  let humid = [];
  let humid_kind = [];
  for (let i = 0; i < info.length - 1; i += 1) {
    humid = info[i].split(',');
    humid_kind.push(humid[3]);
  }

  let min_humi = humid_kind[0];
  let max_humi = humid_kind[0];

  for (let hum of humid_kind) {
    if (hum < min_humi) {
      min_humi = hum;
    }
  }

  for (let hum of humid_kind) {
    if (hum > max_humi) {
      max_humi = hum;
    }
  }

  console.log(`Humidity: Min: ${min_humi}, Max: ${max_humi}`);



  // step 4
  let temp = [];
  let temp_maxim = [];
  let data_max_temp = [];
  let city_of_max_tempa = [];
  for (let i = 0; i < info.length - 1; i += 1) {
    temp = info[i].split(',');
    data_max_temp.push(temp[0]);
    temp_maxim.push(temp[1]);
    city_of_max_tempa.push(temp[7]);
  }
  
  let date_maxi_tempi = '';
  let city_maxi_tempi = '';
  let max_tempi = temp_maxim[0];

  for (let q = 0; q < temp_maxim.length - 1; q += 1) {
    if (temp_maxim[q] > max_tempi) {
      max_tempi = temp_maxim[q];
      date_maxi_tempi = data_max_temp[q];
      city_maxi_tempi = city_of_max_tempa[q];
    }
  }

  console.log(`HottestDay: ${date_maxi_tempi} ${city_maxi_tempi}`);


  // step 5
  const kiks = info.map((row) => row.split(','));
  let arr_city = [];
  for (let i = 0;  i < kiks.length - 1; i += 1) {
    arr_city.push(kiks[i][7]);
  }
  const list_of_city = _.union(arr_city);
  //console.log(list_of_city);

  let arrTemp = [];
  let arr_LA = [];
  let arr_Se = [];
  let arr_Mi = [];
  let arr_Ch = [];
  let arr_De = [];
  let grandArrTemp = [];
    for (let i = 0; i < list_of_city.length; i += 1) {
    for (let a = 0; a < kiks.length; a += 1) {
      if (list_of_city[i] === "Los Angeles") {
        if (kiks[a][7] === list_of_city[i]) {
          arrTemp.push(kiks[a][1]); 
          arr_LA.push(Number(kiks[a][1]));
        }
        
      }

      if (list_of_city[i] === "Seattle") {
        if (kiks[a][7] === list_of_city[i]) {
          arrTemp.push(kiks[a][1]); 
          arr_Se.push(Number(kiks[a][1]));
        }
      }

      if (list_of_city[i] === "Miami") {
        if (kiks[a][7] === list_of_city[i]) {
          arrTemp.push(kiks[a][1]); 
          arr_Mi.push(Number(kiks[a][1]));
        }
      }

      if (list_of_city[i] === "Chicago") {
        if (kiks[a][7] === list_of_city[i]) {
          arrTemp.push(kiks[a][1]); 
          arr_Ch.push(Number(kiks[a][1]));
        }
      }

      if (list_of_city[i] === "Denver") {
        if (kiks[a][7] === list_of_city[i]) {
          arrTemp.push(kiks[a][1]); 
          arr_De.push(Number(kiks[a][1]));
        }
      }


    }
  }
  //console.log(grandArrTemp);

  /*
for (let i = 0; i < grandArrTemp.length; i += 1) {
  const meanTempCity= arr_LA.reduce((acc, temp) => acc + temp);
}
*/



/*
  console.log(arr_LA);
  console.log(arr_Se);
  console.log(arr_Mi);
  console.log(arr_Ch);
  console.log(arr_De);
*/

  const meanTemp_LA = arr_LA.reduce((acc, temp) => acc + temp);
  const pony_LA = ['Los Angeles', meanTemp_LA / 4]; 
  //console.log(pony_LA);

  const meanTemp_Se = arr_Se.reduce((acc, temp) => acc + temp);
  const pony_Se = ['Seattle', meanTemp_Se / 4]; 
  //console.log(pony_Se);

  const meanTemp_Mi = arr_Mi.reduce((acc, temp) => acc + temp);
  const pony_Mi = ['Miami', meanTemp_Mi / 4]; 
  //console.log(pony_Mi);

  const meanTemp_Ch = arr_Ch.reduce((acc, temp) => acc + temp);
  const pony_Ch = ['Chicago', meanTemp_Ch / 4]; 
  //console.log(pony_Ch);

  const meanTemp_De = arr_De.reduce((acc, temp) => acc + temp);
  const pony_De = ['Denver', meanTemp_De / 4]; 
  //console.log(pony_De);

  const allMaxTempCity = [];
  allMaxTempCity.push(pony_LA);
  allMaxTempCity.push(pony_Se);
  allMaxTempCity.push(pony_Mi);
  allMaxTempCity.push(pony_Ch);
  allMaxTempCity.push(pony_De);


  //const allMaxTempCity = [pony_LA + pony_Se + pony_Mi + pony_Ch + pony_De];
  //console.log(allMaxTempCity); 

  let maxiTempiCity = 0;
  let nameOfHottestCity = '';
 for (let i = 0; i < allMaxTempCity.length; i += 1) {
  if (allMaxTempCity[i][1] > maxiTempiCity) {
    maxiTempiCity = allMaxTempCity[i][1];
    nameOfHottestCity = allMaxTempCity[i][0];
  }
 }
 //console.log(maxiTempiCity);
 console.log(`HottestCity: ${nameOfHottestCity}`);
  // END

}

/*
const numbers = [5, 2, 3];

const newNumbers = numbers.map((number) => number ** 2);
console.log(newNumbers); // => [25, 4, 9]

const newNumbers2 = numbers.map((number) => number + 3);
console.log(newNumbers2); // => [8, 5, 6]

*/