export interface StatsI {
  promotions: number;
  categories: number;
  newCompanies: number;
  activeCompanies: number;
}

export interface SalesI {
  id: string;
  companyId: string;
  companyTitle: string;
  sold: number;
  income: number;
}

export interface CountryI {
  id: string;
  title: string;
}

export interface CategoryI {
  id: string;
  title: string;
}

export enum CompanyStatus {
  Active = "active",
  NotActive = "notActive",
  Pending = "pending",
  Suspended = "suspended",
}

export interface CompanyI {
  id: string;
  title: string;
  description: string;
  status: CompanyStatus;
  joinedDate: string;
  hasPromotions: boolean;
  categoryId: string;
  categoryTitle: string;
  countryId: string;
  countryTitle: string;
  avatar?: string;
}

export interface PromotionI {
  id: string;
  title: string;
  description: string;
  discount: number;
  companyId: string;
  companyTitle: string;
  avatar?: string;
}
