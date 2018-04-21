import React from "react";

import PaginatedThemeSelector from "../PaginatedThemeSelector";

import { presetThemes } from "../../../../lib/themes";

import "./index.scss";

export const PresetThemeSelector = ({setTheme, presentThemesPage, setPresentThemesPage}) => {
 return (
    <PaginatedThemeSelector
      title="Choose a preset theme"
      themes={presetThemes}
      className="preset-theme-selector"
      previewClassName="preset-theme-preview"
      onClick={theme => setTheme({ theme })}
      perPage={12}
      currentPage={presentThemesPage}
      setCurrentPage={setPresentThemesPage}
    />
  );
};

export default PresetThemeSelector;

