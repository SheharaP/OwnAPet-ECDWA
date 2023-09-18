/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DividerProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterOverridesProps = {
    MarketingFooter?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 43439413748"?: PrimitiveOverrideProps<FlexProps>;
    OwnAPet?: PrimitiveOverrideProps<TextProps>;
    "Find a furry friend for life!"?: PrimitiveOverrideProps<TextProps>;
    Divider39413816?: PrimitiveOverrideProps<DividerProps>;
    "Frame 4343862857"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    Services?: PrimitiveOverrideProps<TextProps>;
    "View Store"?: PrimitiveOverrideProps<TextProps>;
    "Pet Care Workshops"?: PrimitiveOverrideProps<TextProps>;
    "Frame 404"?: PrimitiveOverrideProps<FlexProps>;
    Resources?: PrimitiveOverrideProps<TextProps>;
    "Pet Care"?: PrimitiveOverrideProps<TextProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    Company?: PrimitiveOverrideProps<TextProps>;
    "About Us"?: PrimitiveOverrideProps<TextProps>;
    Contact?: PrimitiveOverrideProps<TextProps>;
    Divider39413869?: PrimitiveOverrideProps<DividerProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "logo 2"?: PrimitiveOverrideProps<ImageProps>;
    "\u00A9 2023 OwnAPet. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingFooterOverridesProps | undefined | null;
}>;
export default function MarketingFooter(props: MarketingFooterProps): React.ReactElement;
