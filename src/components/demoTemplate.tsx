import { FunctionalComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Button } from './button';

interface IDemoProps {
  method: () => any;
  params?: any[];
  paramLength?: number;
}
const demoStyle = {
  marginTop: 35,
  padding: 6,
  borderTop: `solid gray 3px`,
  borderRadius: 6,
  backgroundColor: `#eaeaea`,
  position: `relative`,
  overflow: `hidden`,
  lineHeight: 1.5,
};
const tagStyle = {
  position: `absolute`,
  right: 0,
  backgroundColor: `#c1c1c1`,
  minWidth: 180,
  textAlign: `center`,
  fontSize: 18,
  fontWeight: `bold`,
  cursor: `pointer`,
  color: `black`,
  textDecoration: `none`,
  borderLeft: `solid 3px red`,
  lineHeight: 2,
};
const tagStyle2 = {};
const tableStyle = {
  marginBottom: 10,
  paddingLeft: 15,
};
const textareaStyle = {
  minWidth: 320,
  height: 26,
  fontSize: 14,
};
const resultStyle = {
  color: `red`,
  marginLeft: 10,
};
export const Demo: FunctionalComponent = (props: IDemoProps) => {
  const [data, setData] = useState(props?.params);
  const [result, setResult] = useState(undefined);
  let params = [];
  const paramLength = data.length || 0;
  for (let i = 0; i < paramLength; i++) {
    params.push(data[i]);
  }
  return (
    <div style={demoStyle} id={props.method.name}>
      {data.map((item, index) => (
        <table style={Object.assign({}, tableStyle, data.length > 1 ? { borderLeft: `3px solid #c1c1c1` } : {})}>
          <tr>
            <td>参数：</td>
            <td>
              <textarea
                style={textareaStyle}
                onChange={(e) => {
                  data[index] = e.target.value;
                  setData(data);
                }}>
                {JSON.stringify(item).toString() || 'undefined'}
              </textarea>
            </td>
          </tr>
          <tr>
            <td>数据类型：</td>
            <td>{typeof item}</td>
          </tr>
        </table>
      ))}
      <Button onClick={() => setResult(props.method(data.length === 1 ? data[0] : data))}>{props?.method.name}</Button>
      {result ? <span style={resultStyle}>运算结果：{result.toString()}</span> : null}
      <a style={Object.assign({}, tagStyle, document.documentElement.clientWidth <= 760 ? { bottom: 0 } : { top: 0 })} href={`#${props.method.name}`}>
        {props.method.name}
      </a>
    </div>
  );
};