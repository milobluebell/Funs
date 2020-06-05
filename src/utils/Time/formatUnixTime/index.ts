import dayjs from 'dayjs';
import { uniTime } from '../aux';

/**
 *
 * formatUnixTime($unixTime [, $formatter]) - 🍀根据时间长度显示倒计时
 *
 * @param  $time       UNIX时间戳（单位s）
 * @param  $formatter  格式化模板（default：'YYYY/MM/DD HH:mm:ss'）
 */
const formatUnixTime = ($unixTime: number, $formatter: string = 'YYYY/MM/DD HH:mm:ss') => dayjs(uniTime($unixTime)).format($formatter);
export default formatUnixTime;
