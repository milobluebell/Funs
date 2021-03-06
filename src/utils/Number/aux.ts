// 根据位数要求，为数字补0，直到满足精度要求
export const supplyZero = ($number: number, $precision: number) => {
  if ($precision > 0) {
    const numberString = $number.toString();
    const chars = numberString.split('.');
    const rightChar = chars[1];
    let newRightChar: string;
    if (rightChar) {
      if (rightChar.length === $precision) {
        return $number;
      } else if (rightChar.length < $precision) {
        const gutter = $precision - rightChar.length;
        newRightChar = rightChar + '0'.repeat(gutter);
        return `${chars[0]}.${newRightChar}`;
      }
      // 如果小数点右边的位数，大于精确度则不做任何处理
    } else {
      newRightChar = '0'.repeat($precision);
      return `${chars[0]}.${newRightChar}`;
    }
  }
  return $number;
};
