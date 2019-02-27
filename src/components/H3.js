import styled from 'styled-components';
import mq from "../utils/breakpoints";

const H3 = styled.h3`
${mq.a768}{
  font-size: 20px;
}

${mq.a1200}{
  font-size: 22px;
}
`;

export default H3;