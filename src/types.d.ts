export interface QuoteType {
  id: string;
  category: string;
  author: string;
  quote: string;
}

export interface QuotesType {
  [id: string]: QuoteType;
}