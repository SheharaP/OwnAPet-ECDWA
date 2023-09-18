/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function MyIcon(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { MyIcon: {} }, variantValues: { type: "warning" } },
    
    {
      overrides: {
        MyIcon: {
          paths: [
            {
              d: "M8 0L6.59 1.41L12.17 7L0 7L0 9L12.17 9L6.59 14.59L8 16L16 8L8 0Z",
              fill: "rgba(92,102,112,1)",
              fillRule: "nonzero",
              style: { transform: "translate(16.67%, 16.67%)" },
            },
          ],
        },
      },
      variantValues: { type: "arrow-right" },
    },
    {
      overrides: {
        MyIcon: {
          paths: [
            {
              d: "M11 6L11 16L3 16L3 6L11 6ZM9.5 0L4.5 0L3.5 1L0 1L0 3L14 3L14 1L10.5 1L9.5 0ZM13 4L1 4L1 16C1 17.1 1.9 18 3 18L11 18C12.1 18 13 17.1 13 16L13 4Z",
              fill: "rgba(92,102,112,1)",
              fillRule: "nonzero"
            },
          ],
        },
      },
      variantValues: { type: "delete" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M0 19L22 19L11 0L0 19ZM12 16L10 16L10 14L12 14L12 16ZM12 12L10 12L10 8L12 8L12 12Z",
          fill: "rgba(92,102,112,1)",
          fillRule: "nonzero",
          style: { transform: "translate(4.17%, 12.5%)" },
        },
      ]}
      {...getOverrideProps(overrides, "MyIcon")}
      {...rest}
    ></Icon>
  );
}
