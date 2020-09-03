const numerCharAlias = [
  {
    lowercase: '〇',
    uppcase: '零',
  },
  {
    lowercase: '一',
    uppcase: '壹',
  },
  {
    lowercase: '二',
    uppcase: '贰',
  },
  {
    lowercase: '三',
    uppcase: '叁',
  },
  {
    lowercase: '四',
    uppcase: '肆',
  },
  {
    lowercase: '五',
    uppcase: '伍',
  },
  {
    lowercase: '六',
    uppcase: '陆',
  },
  {
    lowercase: '七',
    uppcase: '柒',
  },
  {
    lowercase: '八',
    uppcase: '捌',
  },
  {
    lowercase: '九',
    uppcase: '玖',
  },
];

const unitAlias = [
  {
    lowercase: '千',
    uppcase: '仟',
  },
  {
    lowercase: '百',
    uppcase: '佰',
  },
  {
    lowercase: '十',
    uppcase: '拾',
  },
];

const quotAlias = [
  {
    lowercase: '万',
    uppcase: '万',
  },
  {
    lowercase: '亿',
    uppcase: '万',
  },
  {
    lowercase: '兆',
    uppcase: '万',
  },
];

/**
 *
 * digitToZh($digit [, $isCapital]) - 🍀 数字转中文
 *
 * @param  $digit      待转数字或字符串
 * @param  $isCapital  是否为"大写中文"
 *
 */
const digitToZh = ($digit: number | string, $isCapital?: boolean): string => {
  if (!$digit) {
    return '';
  }

  const digit = String(Number($digit));
  const zhChars = Object.values(numerCharAlias).map((alias) => ($isCapital !== true ? alias.lowercase : alias.uppcase));
  const theZero = zhChars[0];
  const units = Object.values(unitAlias)
    .map((alias) => ($isCapital !== true ? alias.lowercase : alias.uppcase))
    .concat(['']);
  const quots = Object.values(quotAlias)
    .map((alias) => ($isCapital !== true ? alias.lowercase : alias.uppcase))
    .concat(['不支持长度']);

  // 需要处理的分片处
  let breakLen = Math.ceil(digit.length / 4);
  let notBreakSegment = digit.length % 4 || 4;
  // 每次循环的当前分片
  let segment;
  //
  const zeroFlag = [];
  const allZeroFlag = [];
  let result = '';

  while (breakLen > 0) {
    if (!result) {
      // 第一次循环
      segment = digit.slice(0, notBreakSegment);
      const segmentLen = segment.length;
      for (let i = 0; i < segmentLen; i += 1) {
        result += zhChars[segment[i]] + units[4 - segmentLen + i];
        if (i === segmentLen - 1 && breakLen > 1) {
          result += quots[breakLen - 2];
        }
      }
    } else {
      segment = digit.slice(notBreakSegment, notBreakSegment + 4);
      notBreakSegment += 4;
      for (let j = 0; j < segment.length; j += 1) {
        if (segment[j] !== 0 && segment[j] !== '0') {
          if (zeroFlag.length > 0) {
            result += theZero + zhChars[segment[j]] + units[j];
            zeroFlag.length = 0;
          } else {
            result += zhChars[segment[j]] + units[j];
          }
          // 判断是否需要加上 quots 单位
          if (j === segment.length - 1 && breakLen > 1) {
            result += quots[breakLen - 3] || '';
          }
        } else {
          zeroFlag.push(segment[j]);
          // continue;
        }
      }
      breakLen -= 1;
    }
  }
  return result.replace(/^一十/, '十');
};

export default digitToZh;
