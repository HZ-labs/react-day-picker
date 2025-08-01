import React, { type Ref, type HTMLAttributes } from "react";
/**
 * Render the root element of the calendar.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export declare function Root(props: {
    /** Ref for the root element, used when `animate` is `true`. */
    rootRef?: Ref<HTMLDivElement>;
} & HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export type RootProps = Parameters<typeof Root>[0];
