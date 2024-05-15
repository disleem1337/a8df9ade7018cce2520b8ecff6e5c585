import { ChevronDownIcon } from "@/icons";
import { useId } from "react";
import ReactSelect, {
  OptionProps,
  Props as ReactSelectProps,
} from "react-select";
import { useTheme } from "styled-components";
import { DropdownWrapper, OptionLabel, OptionWrapper } from "./styled";

function Option({ children, isSelected, innerProps, innerRef }: OptionProps) {
  return (
    <OptionWrapper {...innerProps} ref={innerRef}>
      <OptionLabel isSelected={isSelected}>{children}</OptionLabel>
    </OptionWrapper>
  );
}

export interface SelectProps extends ReactSelectProps {}

export function Select({ ...props }: SelectProps) {
  const theme = useTheme();
  return (
    <ReactSelect
      instanceId={useId()}
      hideSelectedOptions={false}
      components={{
        IndicatorSeparator: () => null,
        ClearIndicator: () => null,
        DropdownIndicator: ({ getValue }) => (
          <DropdownWrapper>
            <ChevronDownIcon display="block" />
          </DropdownWrapper>
        ),
        Option,
      }}
      styles={{
        control: (provided) => ({
          ...provided,
          minHeight: "auto",
          height: "32px",
          backgroundColor: theme.colors.bleached,
          border: "none",
          boxShadow: "none",
        }),
        singleValue: (provided) => ({
          ...provided,
          fontSize: theme.fontSize.sm,
          fontWeight: theme.fontWeight.medium,
          lineHeight: "20px",
          letterSpacing: "0.02em",
          color: theme.colors.white,
        }),
        placeholder: (provided) => ({
          ...provided,
          fontSize: theme.fontSize.sm,
          fontWeight: theme.fontWeight.medium,
          lineHeight: "20px",
          letterSpacing: "0.02em",
        }),
        valueContainer: (provided) => ({
          ...provided,
          paddingRight: "16px",
        }),
        menu: (provided) => ({
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
