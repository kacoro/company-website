import fetch from 'isomorphic-unfetch'

const dev = process.env.NODE_ENV !== 'production';
const server = dev ? 'http://localhost:3000' : 'http://localhost:8080';

export async function sampleFetchWrapper(
  input: RequestInfo,
  init?: RequestInit 
) {
  try {
    
    const data = await fetch(server + input, {credentials: 'include',
            headers: {'Access-Control-Request-Method': '*'},
           mode: 'no-cors'
   }).then(res => res.json())
    return data
  } catch (err) {
    // throw new Error(err.message)
  }
}