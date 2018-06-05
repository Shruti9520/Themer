import React from "react";

import PaginatedThemeSelector from "../PaginatedThemeSelector";
import { presetThemes } from "../../../../lib/themes";
import "./index.scss";

export const PresetThemeSelector = ({ setTheme, presetThemesPage, setPresetThemesPage, deleteTheme }) => { 
    const sortedPresetThemes = presetThemes.map(item => ([ item.idx, { theme: item } ]));
    return (
    <PaginatedThemeSelector
      title="Choose a preset theme"
      themes={sortedPresetThemes}
      className="preset-theme-selector"
      previewClassName="preset-theme-preview"
      onClick={theme => setTheme({ theme })}
      onDelete={key => deleteTheme(key)}
      perPage={8}
      currentPage={presetThemesPage}
      setCurrentPage={setPresetThemesPage}
    />
  );
};

export default PresetThemeSelector;
