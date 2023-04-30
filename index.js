import _ from 'lodash'

export default function solution(content){
  // BEGIN

  // step 1
  const data = content.split('\r\n');
  const info = data.slice(1, data.length - 1);
  console.log(`Count: ${info.length}`);
  // END

}

