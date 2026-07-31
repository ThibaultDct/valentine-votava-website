import { DiscordIcon } from './BrandIcons';
import { DISCORD_INVITE_URL, DISCORD_USERNAME } from '../../constants';

/**
 * Encart qui s'adresse directement aux adolescents, d'où le tutoiement :
 * ils doivent pouvoir prendre contact sans passer par leurs parents.
 */
export function TeenContact() {
  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col gap-8 p-6 md:p-8 lg:flex-row lg:items-center">
        <div className="flex flex-1 gap-6">
          <span
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-100"
            aria-hidden="true"
          >
            <DiscordIcon className="h-6 w-6 text-amber-800" />
          </span>

          <div>
            <h3 className="text-xl">
              Tu es adolescent(e) et la relation avec tes parents est compliquée&nbsp;?
            </h3>
            <p className="mt-3 text-stone-600">
              Si tu ressens le besoin de consulter un psychologue, n'hésite pas à me contacter. Tu
              peux me poser tes questions en toute simplicité sur mon Discord professionnel, afin
              d'échanger avant une éventuelle prise de rendez-vous.
            </p>
          </div>
        </div>

        <div className="flex-shrink-0 lg:text-center">
          {/* <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-[#5865F2] text-white shadow-soft hover:bg-[#4752C4] hover:shadow-lift"
          >
            <DiscordIcon className="h-5 w-5" />
            Rejoindre le Discord
          </a> */}

          <p className="mt-4 text-sm text-stone-500">
            Mon nom d'utilisateur :{' '}
            <hr/>
            <code className="inline-block break-all rounded-lg bg-amber-50 px-2 py-0.5 font-mono text-amber-900">
              {DISCORD_USERNAME}
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
