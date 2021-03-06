import { FunctionalComponent, h } from 'preact';

interface IButtonProps {
  children?: any;
  onClick?: () => void;
}
//
const buttonStyle = {
  cursor: `pointer`,
  outline: `none`,
  padding: 8,
  borderRadius: 8,
  borderWidth: 1,
  background: `linear-gradient(#53a0d4, #327dad)`,
  color: `white`,
};
export const Button: FunctionalComponent<IButtonProps> = (props: IButtonProps) => {
  return (
    <button onClick={props?.onClick} style={buttonStyle}>
      <span>{`测试 ${props?.children?.toString()} 方法`}</span>
    </button>
  );
};
