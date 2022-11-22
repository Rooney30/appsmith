import { WidgetProps } from "widgets/BaseWidget";
import { Alignment } from "@blueprintjs/core";
import { IconName, IconNames } from "@blueprintjs/icons";
import {
  ButtonBorderRadius,
  ButtonVariant,
  ButtonPlacement,
} from "components/constants";
import { RenderMode } from "constants/WidgetConstants";

export enum MenuItemsSource {
  STATIC = "STATIC",
  DYNAMIC = "DYNAMIC",
}

export interface MenuItems {
  widgetId: string;
  id: string;
  index: number;
  isVisible?: boolean;
  isDisabled?: boolean;
  label?: string;
  backgroundColor?: string;
  textColor?: string;
  iconName?: IconName;
  iconColor?: string;
  iconAlign?: Alignment;
  onClick?: string;
}

export interface ConfigureMenuItems {
  label: string;
  id: string;
  config: {
    id: string;
    label: any;
    isVisible: any;
    isDisabled: any;
    onClick?: string;
    backgroundColor?: string;
    textColor?: string;
    iconName?: IconName;
    iconColor?: string;
    iconAlign?: Alignment;
  };
}

export interface MenuButtonWidgetProps extends WidgetProps {
  label?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  isCompact?: boolean;
  menuItems: Record<string, MenuItems>;
  getVisibleItems: () => Array<MenuItems>;
  menuVariant?: ButtonVariant;
  menuColor?: string;
  borderRadius: ButtonBorderRadius;
  boxShadow?: string;
  iconName?: IconName;
  iconAlign?: Alignment;
  placement?: ButtonPlacement;
  menuItemsSource: MenuItemsSource;
  configureMenuItems: ConfigureMenuItems;
  sourceData?: Array<Record<string, unknown>>;
  sourceDataKeys?: Array<string>;
}

export interface MenuButtonComponentProps {
  label?: string;
  isDisabled?: boolean;
  isVisible?: boolean;
  isCompact?: boolean;
  menuItems: Record<string, MenuItems>;
  getVisibleItems: () => Array<MenuItems>;
  menuVariant?: ButtonVariant;
  menuColor?: string;
  borderRadius: string;
  boxShadow?: string;
  iconName?: IconName;
  iconAlign?: Alignment;
  onItemClicked: (onClick: string | undefined, index: number) => void;
  backgroundColor?: string;
  placement?: ButtonPlacement;
  width: number;
  widgetId: string;
  menuDropDownWidth: number;
  renderMode?: RenderMode;
  menuItemsSource: MenuItemsSource;
  configureMenuItems: ConfigureMenuItems;
  sourceData?: Array<Record<string, unknown>>;
  sourceDataKeys?: Array<string>;
}

export interface PopoverContentProps {
  menuItems: Record<string, MenuItems>;
  getVisibleItems: () => Array<MenuItems>;
  onItemClicked: (onClick: string | undefined, index: number) => void;
  isCompact?: boolean;
  borderRadius?: string;
  backgroundColor?: string;
  menuItemsSource: MenuItemsSource;
  configureMenuItems: ConfigureMenuItems;
  sourceData?: Array<Record<string, unknown>>;
  sourceDataKeys?: Array<string>;
}

export const ICON_NAMES = Object.keys(IconNames).map(
  (name: string) => IconNames[name as keyof typeof IconNames],
);
