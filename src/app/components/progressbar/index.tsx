const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-full">
      <div className="progress-bar-container mt-1">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
