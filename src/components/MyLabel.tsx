import './MyLabel.css';

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Size to label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Text is UpperCase
   */
  allCaps?: boolean;
  /**
   * Color Class to label
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
  /**
   * Select color manually
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps,
  color,
  fontColor,
  label,
  size = 'normal',
}: Props) => {
  return (
    <span className={`${size} ${color} `} style={{ color: fontColor }}>
      {!!allCaps ? label.toUpperCase() : label.toLowerCase()}
    </span>
  );
};
