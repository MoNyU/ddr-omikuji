import clsx from "clsx";
import { TwitterIcon, TwitterShareButton } from "react-share";
import { buttonStyle } from "./TwitterButton.css";

type Props = {
  readonly className?: string;
  // eslint-disable-next-line functional/prefer-readonly-type
  readonly hashtags: string[];
  readonly tweet: string;
  readonly url: string;
};

export const TwitterButton = ({ className, hashtags, tweet, url }: Props) => (
  <TwitterShareButton
    className={clsx(buttonStyle, className)}
    title={tweet}
    url={url}
    hashtags={hashtags}
  >
    <TwitterIcon size={32} />
    結果をツイートする
  </TwitterShareButton>
);
