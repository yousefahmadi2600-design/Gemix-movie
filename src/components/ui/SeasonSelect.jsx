import Select from "react-select";

const SeasonSelect = ({ seasonOptions, seasonNum, setSeasonNum }) => {
  return (
    <Select
      options={seasonOptions}
      value={seasonNum}
      onChange={setSeasonNum}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          border: 0,
          backgroundColor: "#fff3e1",
          fontSize: 16,
          fontWeight: 500,
          boxShadow: 0,
          width: 150,
          borderRadius: 8,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          border: "#6f0000",
          backgroundColor: "#fff3e1",
          zIndex: 20,
          padding: 2,
          borderRadius: 8,
        }),
        option: (baseStyles, { isSelected, isFocused }) => ({
          ...baseStyles,
          borderRadius: 8,
          backgroundColor: isSelected
            ? "#6f0000"
            : isFocused
              ? "#6f00009c"
              : "#fff3e1",
          color: isFocused ? "white" : isSelected ? "white" : "black",
          transition: "all 200ms ease",
        }),
      }}
    />
  );
};

export default SeasonSelect;
