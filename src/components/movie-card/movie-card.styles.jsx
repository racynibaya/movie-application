import styled from 'styled-components';

export const YearContainer = styled.div`
  position: absolute;
  padding: 16px;
  width: 100%;
  opacity: 0;
  top: 0;
  color: #f9d3b4;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const MovieInformationContainer = styled.div`
  z-index: 2;
  background-color: #343739;
  padding: 16px 24px 24px 24px;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

export const TypeContainer = styled.span`
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #f0f0f0;
`;

export const TitleContainer = styled.h3`
  margin-top: 5px;
  font-family: 'Roboto Slab', serif;
  color: #f9d3b4;
`;

export const MovieCardContainer = styled.div`
  width: 310px;
  height: 460px;
  margin: 1.5rem;

  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: none;

  transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
    cursor: pointer;

    ${ImageContainer} {
      height: 100%;
      opacity: 0.3;
    }

    ${YearContainer} {
      opacity: 1;
    }

    ${MovieInformationContainer} {
      background-color: transparent;
    }
  }
`;
