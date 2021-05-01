import * as React from "react";
import "./progressBar.scss";
import { useEffect } from "react";
import {IProgressBarProps} from "./ProgressBar.types";



const ProgressBar: React.FC<IProgressBarProps> = (props) => {
  const [progressAnimation, setProgressAnimation] = React.useState<boolean>(
    false
  );

  const { score, progressWidth = 500, compareScore, progressColor, darkTheme } = props;

  useEffect(() => {
    setProgressAnimation(true);
  });

  const renderColor = (color) => {
    switch (color) {
      case "red":
        return 'red';
      case "green":
        return 'green';
      case "blue":
        return 'blue';
      case "purple":
        return 'purple';
    }
  };

  const renderProgressFiller = (glow: boolean) => (
    <>
      <div
        className={`progressFill ${renderColor(progressColor)} ${
          glow && 'glowingEffect'
        } ${compareScore && 'transitionDelay'}`}
        style={{
          width: progressAnimation ? `${score > 3 ? score : 3}%` : 3,
        }}
      />
      <div
        className={`${renderColor(progressColor)}`}
      >
        <div className={`particlesContainer`} style={{
          left: progressAnimation ? `${score > 3 ? score : 3}%` : 3,
        }}>
          <div className={`particles`} />
          <div className={`smallParticles smallParticles4`} />
          <div className={`smallParticles smallParticles3`} />
          <div className={`smallParticles smallParticles2`} />
          <div className={`bigParticles`} />
          <div className={`smallParticles`} />
          <div className={`particles particles2`} />
          <div className={`smallParticles smallParticles5`} />
          <div className={`smallParticles smallParticles6`} />
        </div>
      </div>
    </>
  );

  return (
    <div className={`progressBarContainer`}>
      <div className={`labelScoreContainer ${darkTheme && `labelDarkTheme`}`}>
        <div className={`label`}>label</div>
        <div className={`number`}>{score}%</div>
      </div>
      <div className={`barGaugeContainer`} style={{ flexWrap: "wrap" }}>
        <div
          style={{
            width: progressWidth,
            margin: "0px 10px",
          }}
        >
          <div className={`progressBar`}>
            <div className={`progressTrack`} />
            {renderProgressFiller(false)}
            {renderProgressFiller(true)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;