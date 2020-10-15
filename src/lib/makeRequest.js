


async function makeRequest(url, data, headers={}){
    const res = await fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json', ...headers},
        body: JSON.stringify(data),
      });
  
      return await res.json()
}

export default makeRequest