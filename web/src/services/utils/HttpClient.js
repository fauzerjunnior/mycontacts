import delay from '../../utils/delay';
import ApiError from '../../errors/ApiError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path) {
    await delay();
    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new ApiError(
      body?.error || `${response.status} - ${response.statusText}`,
      response
    );
  }
}

export default HttpClient;
