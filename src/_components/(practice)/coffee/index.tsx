"use client";

import useCoffeKioskStore from "@/stores/(practice)/coffeeKioskStore";
import CoffeeStep1 from "./step/1";
import { useEffect } from "react";
import CoffeeStep2 from "./step/2";

const CoffeeKiosk = () => {
  const step = useCoffeKioskStore((state) => state.step);

  useEffect(() => {
    // 진행여부 서버에 체크

    return () => {
      // 종료할 때 앱으로 가거나, 서버에 저장
    };
  }, []);

  switch (step) {
    case 1:
      return <CoffeeStep1 />;
    case 2:
      return <CoffeeStep2 />;
    default:
      return <></>;
  }
};

export default CoffeeKiosk;
