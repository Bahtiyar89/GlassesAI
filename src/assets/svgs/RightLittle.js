import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RightLittle(props) {
  return (
    <Svg
      width={12}
      height={9}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.441 6.188v-.442H4.8s0 0 0 0c-1.06 0-2.1.27-3.01.786a5.79 5.79 0 00-1.255.955C1.012 5.095 3.257 3.254 6 3.254h.441V.882L11.264 4.5 6.441 8.117v-1.93z"
        stroke="#000"
        strokeWidth={0.882857}
      />
    </Svg>
  );
}

export default RightLittle;
