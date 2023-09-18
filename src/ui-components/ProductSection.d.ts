/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ReviewCardProps } from "./ReviewCard";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProductSectionOverridesProps = {
    ProductSection?: PrimitiveOverrideProps<FlexProps>;
    ReviewCard?: ReviewCardProps;
} & EscapeHatchProps;
export declare type ProductSectionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ProductSectionOverridesProps | undefined | null;
}>;
export default function ProductSection(props: ProductSectionProps): React.ReactElement;
