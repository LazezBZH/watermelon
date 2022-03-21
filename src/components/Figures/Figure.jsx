import { Trans } from "react-i18next";

export default function Figure({ img, alt, txt }) {
  return (
    <figure className={alt}>
      <img className="me-img" src={img} alt={alt} />
      <figcaption>
        <Trans i18nKey={txt}>trans</Trans>
      </figcaption>
    </figure>
  );
}
