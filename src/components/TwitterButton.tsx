import styled from "@emotion/styled";
import { FC } from "react";
import { TwitterIcon, TwitterShareButton } from "react-share";

type Props = {
  hashtags: string[];
  tweet: string;
};

const StyledButton = styled(TwitterShareButton)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #00aced !important;
  width: 180px;
  color: white !important;
  font-size: 1.2rem !important;
  font-weight: bold !important;
  padding: 4px 16px 4px 8px !important;
  outline: none;
  border-radius: 4px;
`;

export const TwitterButton: FC<Props> = ({ hashtags, tweet }) => (
  <StyledButton title={tweet} url="https://monyu.github.io/ddr-omikuji" hashtags={hashtags}>
    <TwitterIcon size={32} />
    結果をツイートする
  </StyledButton>
);
