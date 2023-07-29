import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  height: 66px;
  overflow: hidden;
`;

export const NewsList = styled.ul`
  list-style: none;
  margin-top: 40px;
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(1, 1fr);
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 60px;
    margin-top: 60px;
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const NewsItem = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  @media (min-width: 768px) {
    min-width: 336px;
  }
  @media (min-width: 1280px) {
    min-width: 395px;
  }
`;

export const Line = styled.div`
  border-radius: 40px;
  width: 200px;
  height: 8px;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    width: 280px;
  }
  @media (min-width: 1280px) {
    width: 340px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #111321;

  height: 154px;
  overflow: hidden;

  @media (min-width: 1280px) {
    height: 110px;
  }
`;

export const NewsBottom = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewsLink = styled.a`
  color: #f59256;
  text-decoration: underline;
  &:hover,
  &:focus {
    color: #000000;
  }
`;
