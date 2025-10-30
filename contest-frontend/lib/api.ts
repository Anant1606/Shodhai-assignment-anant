// Use Next.js API routes to proxy requests
const buildUrl = (endpoint: string) => {
  // Remove any leading slashes
  const cleanEndpoint = endpoint.replace(/^\/+/, '');
  return `/api/${cleanEndpoint}`;
}

export async function postData(endpoint: string, data: any) {
  const url = buildUrl(endpoint);
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function getData(endpoint: string) {
  const url = buildUrl(endpoint);
  const res = await fetch(url);
  return res.json();
}
