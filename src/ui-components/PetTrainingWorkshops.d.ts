/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProductSectionProps } from "./ProductSection";
import { MyIconProps } from "./MyIcon";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetTrainingWorkshopsOverridesProps = {
    PetTrainingWorkshops?: PrimitiveOverrideProps<ViewProps>;
    TrainingSessionSection?: ProductSectionProps;
    MyIcon38617119?: MyIconProps;
    MyIcon38617120?: MyIconProps;
    "Checkout Our Pet Training Workshops!"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PetTrainingWorkshopsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PetTrainingWorkshopsOverridesProps | undefined | null;
}>;
export default function PetTrainingWorkshops(props: PetTrainingWorkshopsProps): React.ReactElement;
