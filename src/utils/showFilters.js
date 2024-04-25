import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <FilterContext.Provider
      value={{
        showFilter,
        setShowFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
