interface ILinkButton {
  url: string;
  label: string;
}
export const LinkButton = ({ url, label }: ILinkButton) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
};
