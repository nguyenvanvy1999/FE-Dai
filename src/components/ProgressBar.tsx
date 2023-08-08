export interface IProgressBar {
  className?: string;
  percent: number;
}

export default function ProgressBar({ className, percent }: IProgressBar) {

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${percent}%`}}></div>
    </div>
  )
}
