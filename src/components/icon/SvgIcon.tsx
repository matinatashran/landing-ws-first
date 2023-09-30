import { FC } from "react";

interface Props {
  className: string;
}

const SvgIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 125"
      className={className}
    >
      <path d="M79.8828125,11.4697266c0.1650391-0.3105469,0.1552734-0.6835938-0.0253906-0.984375S79.3505859,10,79,10H21  c-0.3505859,0-0.6767578,0.1845703-0.8574219,0.4853516s-0.1904297,0.6738281-0.0253906,0.984375l8.4667969,15.9189453  c7.5302734,14.1582031,7.5302734,31.0644531,0,45.2226562l-8.4667969,15.9189453  c-0.1650391,0.3105469-0.1552734,0.6835938,0.0253906,0.984375S20.6494141,90,21,90h58  c0.3505859,0,0.6767578-0.1845703,0.8574219-0.4853516s0.1904297-0.6738281,0.0253906-0.984375l-8.4667969-15.9189453  c-7.5302734-14.1582031-7.5302734-31.0644531,0-45.2226562L79.8828125,11.4697266z M69.6503906,73.5507812L77.3359375,88h-54.671875  l7.6855469-14.4492188c7.8427734-14.7470703,7.8427734-32.3544922,0-47.1015625L22.6640625,12h54.671875l-7.6855469,14.4492188  C61.8076172,41.1962891,61.8076172,58.8037109,69.6503906,73.5507812z" />
    </svg>
  );
};

export default SvgIcon;