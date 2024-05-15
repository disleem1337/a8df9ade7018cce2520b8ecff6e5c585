import { DateSelect } from "@/components/ui/DateSelect";
import { IconButton } from "@/components/ui/IconButton";
import { ToggleButton } from "@/components/ui/ToggleButton";
import { CrownIcon, SingleMatchIcon, TrashIcon } from "@/icons";
import {
  FilterHeaderBox,
  FilterHeaderWrapper,
  FilterMatchResultWrapper,
  FilterWrapper,
  SearchIconWrapper,
  SubFilterWrapper,
  TeamFilterInput,
  TeamFilterInputWrapper,
} from "./styled";

export interface FilterProps {
  teamName: string | null;
  onChangeTeamName: (value: string | null) => void;
  date?: string | null;
  onChangeDate: (value: string | null) => void;
  crown?: boolean | null;
  onChangeCrown: (value: boolean | null) => void;
  singleMatch?: boolean | null;
  onChangeSingleMatch: (value: boolean | null) => void;
  dateList: Array<{ label: string; value: string }>;
}

export function Filter({
  teamName,
  onChangeTeamName,
  date,
  onChangeDate,
  crown,
  onChangeCrown,
  singleMatch,
  onChangeSingleMatch,
  dateList,
}: FilterProps) {
  return (
    <FilterWrapper>
      <SubFilterWrapper>
        <TeamFilterInputWrapper>
          <TeamFilterInput
            fullWidth
            placeholder="Takım adı giriniz"
            value={teamName || ""}
            onChange={(e) => onChangeTeamName(e.target.value || null)}
          />
          <SearchIconWrapper />
        </TeamFilterInputWrapper>
        <DateSelect
          isMulti
          placeholder="Tarih"
          options={dateList}
          value={date?.split(",").map((x) => ({ value: x })) || []}
          onChange={(newValue) => {
            const value = newValue as Array<{ label: string; value: string }>;

            if (value.length === 0) {
              onChangeDate(null);
            } else {
              onChangeDate(value.map((v) => v.value).join(","));
            }
          }}
        />
        <ToggleButton
          isActive={crown || false}
          onClick={() => onChangeCrown(!crown || null)}
        >
          <CrownIcon />
        </ToggleButton>
        <ToggleButton
          isActive={singleMatch || false}
          onClick={() => onChangeSingleMatch(!singleMatch || null)}
        >
          <SingleMatchIcon />
        </ToggleButton>
        <IconButton
          onClick={() => {
            onChangeDate(null);
            onChangeCrown(null);
            onChangeSingleMatch(null);
            onChangeTeamName(null);
          }}
        >
          <TrashIcon />
        </IconButton>
      </SubFilterWrapper>
      <FilterHeaderWrapper>
        <FilterMatchResultWrapper>
          <FilterHeaderBox w={3}>Maç Sonucu</FilterHeaderBox>
        </FilterMatchResultWrapper>
        <FilterHeaderBox></FilterHeaderBox>
      </FilterHeaderWrapper>
    </FilterWrapper>
  );
}
