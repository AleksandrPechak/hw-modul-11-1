import './modules/binance';
import './modules/hero';
import './modules/quotes';
import './modules/ipfinder';
import './modules/pokemon';
import './modules/instagram';
import './modules/user';

// ====================================

// fetch('<https://jsonplaceholder.typicode.com/posts?userId=3&_limit=7&_sort=name');

/* function getPostsByUser(userId) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const END_POINT = '/posts';
  const PARAMS = `?userId=${userId}`;
  const url = BASE_URL + END_POINT + PARAMS;

  const options = {
    headers: {
      test_header: 'Aleksandr',
    },
  };

  return fetch(url, options).then(res => res.json());
} */

// getPostsByUser(1).then(data => {
//   console.log(data);
// }); 
// getPostsByUser(4); 
// getPostsByUser(3); 
// getPostsByUser(8); 
// getPostsByUser(15); 