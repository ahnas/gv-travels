import { createContext, useContext, useState, ReactNode } from "react";

type Currency = "AED" | "INR" | "USD";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (priceInAED: number) => number;
  formatPrice: (priceInAED: number) => string;
  symbol: string;
}

const exchangeRates: Record<Currency, number> = {
  AED: 1,
  INR: 22.7, // 1 AED = ~22.7 INR
  USD: 0.27, // 1 AED = ~0.27 USD
};

const currencySymbols: Record<Currency, string> = {
  AED: "AED",
  INR: "₹",
  USD: "$",
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("AED");

  const convertPrice = (priceInAED: number): number => {
    return Math.round(priceInAED * exchangeRates[currency]);
  };

  const formatPrice = (priceInAED: number): string => {
    const converted = convertPrice(priceInAED);
    return `${currencySymbols[currency]} ${converted.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider 
      value={{ 
        currency, 
        setCurrency, 
        convertPrice, 
        formatPrice,
        symbol: currencySymbols[currency]
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};
