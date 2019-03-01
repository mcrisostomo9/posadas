import styled from "styled-components";
import mq from "../utils/breakpoints";

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;

  ${mq.a768} {
    flex-direction: row;
    height: 600px;
  }

  ${mq.a1200} {
    height: 650px;
  }
  ${mq.a1400} {
    height: 700px;
  }
`;

const InformationBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    filter: contrast(90%);
  }
`;

export { InformationBox, InformationContainer };
