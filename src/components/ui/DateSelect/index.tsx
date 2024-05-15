import { ChevronDownIcon } from "@/icons";
import { useId } from "react";
import ReactSelect, {
  OptionProps,
  Props as ReactSelectProps,
} from "react-select";
import { useTheme } from "styled-components";
import {
  DropdownWrapper,
  OptionCheckbox,
  OptionLabel,
  OptionWrapper,
} from "./styled";

function Option({ children, isSelected, innerProps, innerRef }: OptionProps) {
  return (
    <OptionWrapper {...innerProps} ref={innerRef}>
      <OptionCheckbox isSelected={isSelected} />
      <OptionLabel isSelected={isSelected}>{children}</OptionLabel>
    </OptionWrapper>
  );
}

export interface DateSelectProps extends ReactSelectProps {}

export function DateSelect({ ...props }: DateSelectProps) {
  const theme = useTheme();
  return (
    <ReactSelect
      instanceId={useId()}
      controlShouldRenderValue={false}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      components={{
        IndicatorSeparator: () => null,
        ClearIndicator: () => null,
        DropdownIndicator: ({ getValue }) => (
          <DropdownWrapper $isEmpty={getValue().length === 0}>
            <ChevronDownIcon />
          </DropdownWrapper>
        ),
        Option,
      }}
      styles={{
        control: (provided, state) => ({
          ...provided,
          minHeight: "auto",
          height: "32px",
          backgroundColor: theme.colors.bleached,
          border: "none",
          boxShadow: "none",
        }),
        placeholder: (provided, state) => ({
          ...provided,
          color:
            state.getValue().length !== 0
              ? theme.colors.secondary
              : theme.colors.white,
          fontSize: theme.fontSize.sm,
          fontWeight: theme.fontWeight.medium,
          lineHeight: "20px",
          letterSpacing: "0.02em",
        }),
        valueContainer: (provided, state) => ({
          ...provided,
          paddingRight: "16px",
        }),
        menu: (provided, state) => ({
          ...provided,
          minWidth: "200px",
          backgroundColor: theme.colors.gunmetal,
        }),
      }}
      isSearchable={false}
      {...props}
    />
  );
}
