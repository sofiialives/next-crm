import { buildUrl, sendRequest, stringifyQueryParams } from "./api";
import {
  CategoryI,
  CompanyI,
  CountryI,
  PromotionI,
  SalesI,
  StatsI,
} from "./interface";

export const getStats = (init?: RequestInit) => {
  return sendRequest<StatsI>(buildUrl("summary-stats", "1"), init);
};

export const getSales = (init?: RequestInit) => {
  return sendRequest<SalesI[]>(buildUrl("summary-sales"), init);
};

export const getCountries = (init?: RequestInit) => {
  return sendRequest<CountryI[]>(buildUrl("countries"), init);
};

export const getCategories = (init?: RequestInit) => {
  return sendRequest<CategoryI[]>(buildUrl("categories"), init);
};

export const getCompanies = (init?: RequestInit) => {
  return sendRequest<CompanyI[]>(buildUrl("companies"), init);
};

export const getCompany = (id: string, init?: RequestInit) => {
  return sendRequest<CompanyI>(buildUrl("companies", id), init);
};

export const getPromotions = async (
  params: Record<string, string> = {},
  init?: RequestInit
) => {
  return sendRequest<PromotionI[]>(
    `${buildUrl("promotions")}?${stringifyQueryParams(params)}`,
    init
  );
};

export const createPromotion = async (
  data: Omit<PromotionI, "id">,
  init?: RequestInit
) => {
  return sendRequest<PromotionI>(buildUrl("promotions"), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      ...(init && init.headers),
      "content-type": "application/json",
    },
  });
};
