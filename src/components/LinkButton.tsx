interface ILinkButton {
  url: string;
  label: string;
  style: string;
}
export const LinkButton = ({ url, label, style }: ILinkButton) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={style}>
      {label}
    </a>
  );
};
