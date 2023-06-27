import axios from 'axios';

export default function api() {
  const headers = {
    // 'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Expose-Headers':
    //   'X-My-Custom-Header, X-Another-Custom-Header',
    // 'Access-Control-Allow-Credentials': true,
    // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, OPTIONS',
  };

  return axios.create({ headers });
}

// async function api(endpoint: string) {
//   const options = {
//     Accept: 'application/json',
//     // Authorization: `Bearer ${import.meta.env.VITE_API_BEARER}`,
//     // 'X-Api-Key': import.meta.env.VITE_API_PUBLIC_KEY,
//     // 'Access-Control-Allow-Methods': 'GET, POST',
//     // 'Access-Control-Allow-Headers': '*',
//     // 'Access-Control-Allow-Origin': '*',
//     // 'Content-Type': 'application/json',
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS',
//   };
//   await fetch(`${import.meta.env.VITE_API_ROTA_URL}/${endpoint}`, {
//     headers: options,
//     body: JSON.stringify('body'),
//   })
//     .then((response) => {
//       if (response.ok) {
//         return JSON.stringify(response);
//       }
//       throw JSON.stringify(response);
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       return error;
//     });
// }
// export default api;
