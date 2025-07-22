import { LINKS } from '../constants/links';
import { LinkButton } from './LinkButton';

export const PageContainer = () => {
  return (
    <div className="max-w-10/12 p-6 @md:max-w-8/12 bg-white rounded-lg shadow-[0px_0px_19px_17px_rgba(0,_0,_0,_0.2)]">
      <div className="pb-4">
        <h1 className="text-2xl @lg:text-4xl text-center">Lauro Lyra Aguiar</h1>
        <p className="text-xs @lg:text-base text-center">
          Full Stack Software Developer
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center w-10/12 mx-auto">
        {LINKS.map(({ label, url }) => (
          <LinkButton
            key={url}
            url={url}
            label={label}
            style="bg-green-400 p-2 px-4 rounded-lg text-l @lg:text-2xl text-center w-full"
          />
        ))}
      </div>
    </div>
  );
};
