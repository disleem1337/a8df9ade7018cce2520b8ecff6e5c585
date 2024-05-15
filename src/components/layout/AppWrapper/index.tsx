import { Header } from "@/components/layout/Header";
import { Menu } from "@/components/layout/Menu";
import { appConfig } from "@/constants/appConfig";
import { useAppDispatch } from "@/hooks/store";
import { loadCoupon } from "@/store/slices/myCoupons";
import { ResetStyle } from "@/styles/reset";
import { theme } from "@/styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const queryClient = new QueryClient();

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  // Load coupon if it exists from local storage to store
  useEffect(() => {
    const coupon = localStorage.getItem(appConfig.couponLocalStorageKey);

    if (coupon) {
      dispatch(loadCoupon(JSON.parse(coupon)));
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <ResetStyle />
        <div className={inter.className}>
          <Header />
          <Menu />
          {children}
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
