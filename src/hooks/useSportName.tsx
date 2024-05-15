import { appConfig } from "@/constants/appConfig";
import { useRouter } from "next/router";

export function useSportName() {
  const {
    query: { sportName },
    route,
  } = useRouter();

  const sportnameWithDefault =
    (sportName as string) ||
    (route == "/" ? appConfig.defaultSportName : undefined);

  return sportnameWithDefault;
}
