// Use Next.js API routes to proxy requests
const buildUrl = (endpoint: string) => {
  // Remove any leading slashes
  const cleanEndpoint = endpoint.replace(/^\/+/, '');
  return `/api/${cleanEndpoint}`;
}

export interface ApiResponse<T> {
  data: T;
  error?: string;
  message?: string;
}

export async function postData<T>(endpoint: string, data: T): Promise<ApiResponse<T>> {
  const url = buildUrl(endpoint);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    });
    
    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: `HTTP error! status: ${res.status}` }));
      throw new Error(error.message || `Request failed with status ${res.status}`);
    }
    
    const responseData = await res.json();
    return {
      data: responseData,
      message: 'Success'
    };
  } catch (error) {
    return {
      data: null as unknown as T,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}

export async function getData<T>(endpoint: string): Promise<ApiResponse<T>> {
  const url = buildUrl(endpoint);
  try {
    const res = await fetch(url, {
      headers: {
        'Accept': 'application/json'
      },
      next: {
        revalidate: 0 // Opt out of caching
      }
    });
    
    if (!res.ok) {
      const error = await res.json().catch(() => ({ message: `HTTP error! status: ${res.status}` }));
      throw new Error(error.message || `Request failed with status ${res.status}`);
    }
    
    const data = await res.json();
    return {
      data,
      message: 'Success'
    };
  } catch (error) {
    return {
      data: null as unknown as T,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}
