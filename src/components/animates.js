import { keyframes } from 'styled-components';

const AniSlideLeft = keyframes`
 from{
  transform:translateX(100%)
}
to{
  transform:translateX(0)
}
`;
const AniRotate = keyframes`
from{
  transform:rotate(0);
}
to{
  transform:rotate(360deg);
}
`;
export { AniRotate, AniSlideLeft };
