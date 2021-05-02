export interface IProgressBarProps {
    score: number;
    label?: string;
    progressWidth?: number;
    hideText?: boolean;
    darkTheme?: boolean;
    progressColor?: "red" | "green" | "blue" | "purple";
    primaryColor?: string;
    secondaryColor?: string;
    disableGlow?: boolean
}