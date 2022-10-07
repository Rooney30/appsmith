import { updateApplication } from "actions/applicationActions";
import { AppIconName, TextInput, IconSelector } from "design-system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentApplication } from "selectors/applicationSelectors";
import { getCurrentApplicationId } from "selectors/editorSelectors";
import styled from "styled-components";

const IconSelectorWrapper = styled.div`
  position: relative;
  .icon-selector {
    max-height: 100px;
    padding: 0;
    .t--icon-selected,
    .t--icon-not-selected {
      margin: 0;
    }
    gap: 3px;
  }
  .icon-selector::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  .icon-selector::-webkit-scrollbar {
    width: 0px;
  }
`;

function GeneralSettings() {
  const dispatch = useDispatch();
  const applicationId = useSelector(getCurrentApplicationId);
  const application = useSelector(getCurrentApplication);

  const [applicationName, setApplicationName] = useState(application?.name);
  const [applicationIcon, setApplicationIcon] = useState(
    application?.icon as AppIconName,
  );

  useEffect(() => {
    setApplicationName(application?.name);
  }, [application?.name]);

  const callUpdateAppNameApi = () => {
    if (!applicationName || !(applicationName?.length > 0)) return;
    dispatch(
      updateApplication(applicationId, {
        name: applicationName,
        currentApp: true,
      }),
    );
  };

  const callUpdateAppIconApi = (icon: AppIconName) => {
    dispatch(
      updateApplication(applicationId, {
        icon,
        currentApp: true,
      }),
    );
  };

  return (
    <>
      <div className="pb-1 text-[#575757]">App name</div>
      <div className="pb-2.5">
        <TextInput
          fill
          onBlur={callUpdateAppNameApi}
          onChange={(name: string) => {
            setApplicationName(name);
          }}
          placeholder="App name"
          type="input"
          validator={(value: string) => {
            return {
              isValid: value.length > 0,
              message: value.length > 0 ? "" : "Cannot be empty",
            };
          }}
          value={applicationName}
        />
      </div>

      <div className="pb-1 text-[#575757]">App Icon</div>
      <IconSelectorWrapper className="pb-4">
        <IconSelector
          className="icon-selector"
          fill
          onSelect={(icon: AppIconName) => {
            setApplicationIcon(icon);
            callUpdateAppIconApi(icon);
          }}
          selectedColor="black"
          selectedIcon={applicationIcon}
        />
      </IconSelectorWrapper>
    </>
  );
}

export default GeneralSettings;
