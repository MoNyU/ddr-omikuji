import styled from "@emotion/styled";
import { TwitterIcon, TwitterShareButton } from "react-share";

type Props = {
  className?: string;
  hashtags: string[];
  tweet: string;
  url: string;
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

export const TwitterButton = ({ className, hashtags, tweet, url }: Props) => (
  <StyledButton
    className={className}
    title={tweet}
    url={url}
    hashtags={hashtags}
  >
    <TwitterIcon size={32} />
    結果をツイートする
  </StyledButton>
);
