import styled from "styled-components";
import mq from "../utils/breakpoints";

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${mq.a768} {
    flex-direction: row;
    height: 575px;
  }

  ${mq.a1200} {
    height: 650px;
  }
  ${mq.a1400} {
    height: 700px;
  }
`;

const InformationBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;

  :hover {
    filter: contrast(90%);
  }

  ${mq.a768} {
    height: 100%;
  }
`;

export { InformationBox, InformationContainer };
