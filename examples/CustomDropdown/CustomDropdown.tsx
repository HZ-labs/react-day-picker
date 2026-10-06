import React, { useState } from "react";

import { DayPicker, DropdownProps } from "react-day-picker";

const selectStyle: React.CSSProperties = {
  appearance: "none",
  padding: "4px 24px 4px 8px",
  border: "1px solid #d4d4d8",
  borderRadius: 6,
  background:
    "#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%2371717a'/%3E%3C/svg%3E\") no-repeat right 8px center",
  font: "inherit",
  cursor: "pointer"
};

export function CustomSelectDropdown(props: DropdownProps) {
  const { options, value, onChange, "aria-label": ariaLabel } = props;

  return (
    <select
      aria-label={ariaLabel}
      value={value}
      onChange={onChange}
      style={selectStyle}
    >
      {options?.map((option) => (
        <option
          key={option.value}
          value={option.value}
          disabled={option.disabled}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function CustomDropdown() {
  const [selected, setSelected] = useState<Date | undefined>();

  return (
    <DayPicker
      captionLayout="dropdown"
      components={{ Dropdown: CustomSelectDropdown }}
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={
        selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      }
    />
  );
}
