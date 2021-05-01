import React from "react";
import {ProgressBar} from "./ProgressBar";

export default {
    title: "ProgressBar"
};

export const Blue = () => <ProgressBar score={25} progressColor={"blue"} />;
export const Green = () => <ProgressBar score={50} progressColor={"green"} />;
export const Purple = () => <ProgressBar score={75} progressColor={"purple"} />;
export const Red = () => <ProgressBar score={100} progressColor={"red"} />;
