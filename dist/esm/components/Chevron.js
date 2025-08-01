import React from "react";
/**
 * Render the chevron icon used in the navigation buttons and dropdowns.
 *
 * @group Components
 * @see https://daypicker.dev/guides/custom-components
 */
export function Chevron(props) {
    const { size = 24, orientation = "left", className } = props;
    return (React.createElement("svg", { className: className, width: size, height: size, viewBox: "0 0 24 24" },
        orientation === "up" && (React.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" })),
        orientation === "down" && (React.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" })),
        orientation === "left" && (React.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" })),
        orientation === "right" && (React.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }))));
}
//# sourceMappingURL=Chevron.js.map