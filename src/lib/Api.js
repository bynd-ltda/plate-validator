
const env = require('../../config/environment');

export const POST = 'POST'
export const GET = 'GET'

const makeApi = (apiOptions) => {
  const {
    baseURI,
    headers
  } = apiOptions;

  var requesHeaders = new Headers();
  Object.keys(headers).forEach(h => requesHeaders.append(h, headers[h]))
  return async (requestOptions) => {
    const { body } = requestOptions;
    console.log(body, typeof body);
    const jsonBody = (typeof body === 'object') ? JSON.stringify(body): body;
    console.log(jsonBody);
    var request = new Request(baseURI +requestOptions.url, {
      ...requestOptions,
      headers: requesHeaders,
      body:jsonBody
    });
    console.log(request)
    const response = await fetch(request);
    console.log(response)
    if (response.err) throw response.err;
    if(response.status == 200 ) {
       const res = await response.json();
       console.log(res)
       if(res.Error)
         throw new Error(res.Message);
       else{
         return res
       }
    }
    else {
      throw new Error("Ocorreu um falha na requisição!");
    }
  }
};

export const api = makeApi({
  baseURI: env.endpoint.api,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});
export const urlPagSeguro =  ({idmaquina}) => {
  return  api({
    url:'/mobile/pagseguro-url',
    method: POST,
    body: {
       idHash: IdHash,
       idMaquina:idmaquina
    }
  })
};
export const mainMachines =  () => {
  return  api({
    url:'/mobile/pagseguro-main-machine',
    method: POST,
    body: {
       idHash: IdHash
    }
  })
};
export const machines =  () => {
  return  api({
    url:'/mobile/pagseguro-machine',
    method: POST,
    body: {
       idHash: IdHash
    }
  })
};

