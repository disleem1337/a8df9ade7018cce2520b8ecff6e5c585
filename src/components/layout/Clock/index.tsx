import { appConfig } from "@/constants/appConfig";
import { useEffect, useState } from "react";
import { ClockText, ClockWrapper } from "./styled";

const dateFormat = new Intl.DateTimeFormat(appConfig.timezone, {
  dateStyle: "long",
});

const timeFormat = new Intl.DateTimeFormat(appConfig.timezone, {
  timeStyle: "short",
});

export function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ClockWrapper>
      <ClockText>{dateFormat.format(date)}</ClockText>
      <ClockText>{timeFormat.format(date)}</ClockText>
    </ClockWrapper>
  );
}
