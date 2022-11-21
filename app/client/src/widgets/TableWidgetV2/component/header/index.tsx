import React from "react";
import Actions, { ActionsPropsType } from "./actions";
import { Banner, BannerPropType } from "./banner";

function TableHeader(props: ActionsPropsType & BannerPropType) {
  const {
    accentColor,
    borderRadius,
    boxShadow,
    disabledAddNewRowSave,
    isAddRowInProgress,
    onAddNewRowAction,
    ...ActionProps
  } = props;

  return isAddRowInProgress ? (
    <Banner
      accentColor={accentColor}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      disabledAddNewRowSave={disabledAddNewRowSave}
      isAddRowInProgress={isAddRowInProgress}
      onAddNewRowAction={onAddNewRowAction}
    />
  ) : (
    <Actions
      accentColor={accentColor}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      {...ActionProps}
    />
  );
}

export default TableHeader;
