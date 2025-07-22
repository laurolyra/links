import { LINKS } from '../constants/links';
import { LinkButton } from './LinkButton';

export const PageContainer = () => {
  return (
    <div className="w-10/12 h-11/12 p-2 @md:max-w-3/12 @md:h-fit @md:p-4 @md:py-6 bg-white rounded-lg shadow-[0px_0px_19px_17px_rgba(0,_0,_0,_0.2)]">
      <div className="pb-4">
        <h1 className="text-2xl @md:text-4xl text-center">Lauro Lyra Aguiar</h1>
        <p className="text-xs @md:text-base text-center">
          Full Stack Software Developer
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center w-10/12 mx-auto">
        {LINKS.map(({ label, url }) => (
          <div
            key={url}
            className="bg-green-400 p-2 px-4 rounded-lg text-2xl @md:text-l text-center w-full"
          >
            <LinkButton url={url} label={label} />
          </div>
        ))}
      </div>
    </div>
  );
};
