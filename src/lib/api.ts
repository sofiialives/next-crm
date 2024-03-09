import path from "path";

const MOCKAPI_API = process.env.MOCKAPI;

export const buildUrl = (...paths: string[]) =>
  `${MOCKAPI_API}${paths.join("/")}`;

export const stringifyQueryParams = (params: Record<string, string>) =>
  new URLSearchParams(params).toString();

export const sendRequest = async <T>(url: string, init?: RequestInit) => {
  const res = await fetch(url, init);
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return (await res.json()) as T;
};
