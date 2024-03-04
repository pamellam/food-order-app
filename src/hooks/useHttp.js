import { useCallback, useEffect, useState } from 'react';

// In general dealing with send requests
async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || 'Something went wrong, failed to send request'
    );
  }

  return resData;
}
/**
 * A custom hook for making HTTP requests.
 * @param {string} url - The URL of the endpoint.
 * @param {object} [config] - The configuration object for the request.
 * @param {any} [initialData] - The initial data to be displayed before the request is made.
 * @returns {{
 *   data: any,
 *   isLoading: boolean,
 *   error: any,
 *   sendRequest: function,
 *   clearData: function
 * }}
 */

export default function useHttp(url, config, initialData) {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Clears the data and resets it to the initial data.
   */
  function clearData() {
    setData(initialData);
  }
  /**
   * Sends a request to the backend.
   * @param {object} data - The data to send to the backend.
   */

  /**
   * Sends a request to the backend.
   * @param {object} data - The data to send to the backend.
   */
  const sendRequest = useCallback(
    async function sendRequest(data) {
      setIsLoading(true);
      try {
        const responseData = await sendHttpRequest(url, {
          ...config,
          body: data,
        });
        setData(responseData);
      } catch (error) {
        setError(
          error.message || 'Something went wrong, failed to send request'
        );
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    // Check if method is 'GET' or undefined in the config
    if ((config && (config.method === 'GET' || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config, url]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
    clearData,
  };
}
