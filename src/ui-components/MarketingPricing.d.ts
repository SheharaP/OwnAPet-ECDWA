/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { FiltersProps } from "./Filters";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingPricingOverridesProps = {
    MarketingPricing?: PrimitiveOverrideProps<FlexProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    "Discover Your Lifelong Companion"?: PrimitiveOverrideProps<TextProps>;
    "Explore a world of furry and feathered friends at our pet store. From loyal dogs to playful kittens and exotic birds, find the perfect companion to share your life's journey. Our expert team is here to help you choose the ideal pet that will fill your days with joy, love, and unforgettable memories. Welcome to a place where friendships are forged and hearts are won\u2014one pawprint at a time."?: PrimitiveOverrideProps<TextProps>;
    Filters38605337?: PrimitiveOverrideProps<FlexProps>;
    Filters38605338?: FiltersProps;
} & EscapeHatchProps;
export declare type MarketingPricingProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingPricingOverridesProps | undefined | null;
}>;
export default function MarketingPricing(props: MarketingPricingProps): React.ReactElement;
