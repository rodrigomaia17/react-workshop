import axios from 'axios';


axios.get('https://jigsaw.thoughtworks.net/api/people/rmaia', {
      headers: {'Authorization': 'foobar'}  
    }).then(function (response) {
      console.log(response);
    });

console.log('oi');
