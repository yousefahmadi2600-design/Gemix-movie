import Select from "react-select";

const Selector = ({selected,setSelected,options}) => {
  return (
    <Select
      value={selected}
      onChange={setSelected}
      placeholder={selected}
      options={options}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          border: 0,
          backgroundColor: "#fff3e1",
          fontSize: 24,
          fontWeight: 600,
          boxShadow: 0,
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          border: "#6f0000",
          backgroundColor: "#fff3e1",
          zIndex: 20,
          padding: 2,
          borderRadius: 5,
        }),
        option: (baseStyles, { isSelected, isFocused }) => ({
          ...baseStyles,
          borderRadius: 5,
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

export default Selector;
