import * as React from "react";
import ProgressBar from "./ProgressBar";

export default {
    title: "ProgressBar"
};

export const Blue = () => <ProgressBar score={25} progressColor={"blue"}/>;
export const Green = () => <ProgressBar score={50} progressColor={"green"} />;
export const Purple = () => <ProgressBar score={75} progressColor={"purple"} />;
export const Red = () => <ProgressBar score={100} progressColor={"red"} />;
export const Custom = () => <ProgressBar score={100} progressWidth={100} primaryColor={`#0F2027`} secondaryColor={`#2C5364`} disableGlow={true} progressColor={"blue"} />;
export const Basic = () => <ProgressBar score={100} />;
