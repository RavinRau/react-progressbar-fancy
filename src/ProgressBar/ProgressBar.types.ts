export interface IProgressBarProps {
    score?: number;
    useScoreColor?: boolean;
    showScore?: boolean;
    progressWidth?: number;
    showCaret?: boolean;
    darkTheme?: boolean;
    compareScore?: number;
    progressColor?: "red" | "green" | "blue" | "purple";
}