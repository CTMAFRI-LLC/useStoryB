async function makeRequest(url, data, headers = {}) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(data),
  });

//storing data 
  const jsonData = await res.json();

  //creating custom response to check if request was successful or not
  const customRes = {
    error: { status: null, message: null, data: null },
    data: jsonData,
  };

  if (!res.ok) {
    customRes.error = { ...customRes, status: res.status, message: res.statusText };
  }

  // return {error: null, data: null}
  return customRes
}

export default makeRequest;
