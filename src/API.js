async function executeRequest(params) {
  let url = params.endpoint;
  if (params.method === "GET") {
    url += "?";
    const paramStrings = [];
    for (const key in params.queryParams) {
      paramStrings.push(`${key}=${params.queryParams[key]}`);
    }
    url += paramStrings.join("&");
  }
  const response = await fetch(url, {
    method: params.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params.bodyParams),
  });
  if (response.status == 200) {
    return await response.json();
  } else {
    throw new Error(await response.json());
  }
}

async function fetchVideo(title) {
  return executeRequest({
    endpoint: "/.netlify/functions/fetch-videos",
    method: "GET",
    queryParams: {
      title,
    },
  });
}

module.exports = {
  fetchVideo,
};
