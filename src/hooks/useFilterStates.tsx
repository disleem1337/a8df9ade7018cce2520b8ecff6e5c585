import { parseAsBoolean, useQueryState } from "nuqs";

export function useFilterStates() {
  const [teamNameFilter, setTeamNameFilter] = useQueryState("name");
  const [dateFilter, setDateFilter] = useQueryState("date");
  const [isCrownFilter, setIsCrownFilter] = useQueryState(
    "crown",
    parseAsBoolean
  );
  const [isSingleMatchFilter, setIsSingleMatchFilter] = useQueryState(
    "singleMatch",
    parseAsBoolean
  );

  return {
    teamNameFilter,
    setTeamNameFilter,
    dateFilter,
    setDateFilter,
    isCrownFilter,
    setIsCrownFilter,
    isSingleMatchFilter,
    setIsSingleMatchFilter,
  };
}
