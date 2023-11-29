import { useCallback, useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const request = useCallback(
    async (
      url: string,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();

        setLoading(false);
        return data;
      } catch (error) {
        let message = "Unknown Error";
        if (error instanceof Error) {
          message = error.message;
        }
        setError(message);

        reportError({ message });
        setLoading(false);
        throw error;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(""), []);

  return { loading, request, error, clearError };
};
