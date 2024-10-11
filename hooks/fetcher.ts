  // Fetcher function to fetch data from a given URL and parse it as JSON
  export const fetcher = (input: RequestInfo, init?: RequestInit): Promise<any> => 
    fetch(input, init).then(res => res.json());

 export const swrConfig = {
    revalidateOnFocus: false, // Prevent revalidation on focus
    revalidateOnReconnect: false, // Prevent revalidation on reconnect
    revalidateOnMount: false, // Prevent initial revalidation
    dedupingInterval: 10000, // Debounce revalidation for 1 second
    // refreshInterval: 60000, // Refresh data every minute
    // suspense: true, // Use React Suspense for better error handling
  };