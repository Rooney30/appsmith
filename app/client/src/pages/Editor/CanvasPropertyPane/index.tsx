import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as Sentry from "@sentry/react";
import { PopoverPosition } from "@blueprintjs/core";
import { TooltipComponent, Button, Size } from "design-system";

import { Colors } from "constants/Colors";
import { MainContainerLayoutControl } from "../MainContainerLayoutControl";
import { openAppSettingsPaneAction } from "actions/appSettingsPaneActions";

const Title = styled.p`
  color: ${Colors.GRAY_800};
`;

export function CanvasPropertyPane() {
  const dispatch = useDispatch();

  const openAppSettingsPane = () => {
    dispatch(openAppSettingsPaneAction());
  };

  return (
    <div className="relative ">
      <h3 className="px-4 py-3 text-sm font-medium uppercase">Properties</h3>

      <div className="mt-3 space-y-6">
        <div className="px-4 space-y-2">
          <Title className="text-sm">Canvas Size</Title>
          <MainContainerLayoutControl />

          <TooltipComponent
            content={
              <>
                <div>Update your app theme, URL</div>and other settings
              </>
            }
            position={PopoverPosition.BOTTOM}
          >
            <Button
              className="!bg-white !border-[#716e6e] !text-[#716e6e]"
              fill
              onClick={openAppSettingsPane}
              size={Size.medium}
              text="App Settings"
            />
          </TooltipComponent>
        </div>
      </div>
    </div>
  );
}

CanvasPropertyPane.displayName = "CanvasPropertyPane";

export default Sentry.withProfiler(CanvasPropertyPane);
