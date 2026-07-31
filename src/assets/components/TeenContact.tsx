import { DiscordIcon } from './BrandIcons';
import { DISCORD_INVITE_URL, DISCORD_USERNAME } from '../../constants';

/**
 * Encart qui s'adresse directement aux adolescents, d'où le tutoiement :
 * ils doivent pouvoir prendre contact sans passer par leurs parents.
 */
export function TeenContact() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <div className="flex flex-col sm:flex-row gap-5">
        <span
          className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center"
          aria-hidden="true"
        >
          <DiscordIcon className="w-6 h-6 text-amber-700" />
        </span>

        <div>
          <h3 className="font-serif text-xl text-amber-900">
            Tu es adolescent(e) et la relation avec tes parents est compliquée&nbsp;?
          </h3>
          <p className="mt-3 text-neutral-700">
            Si tu ressens le besoin de consulter un psychologue, n'hésite pas à me contacter. Tu
            peux me poser tes questions en toute simplicité sur mon Discord professionnel, afin
            d'échanger avant une éventuelle prise de rendez-vous.
          </p>

          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#5865F2] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-[#4752C4]"
          >
            <DiscordIcon className="w-5 h-5" />
            Rejoindre le Discord
          </a>

          <p className="mt-4 text-sm text-neutral-600">
            Ou en message privé, si tu préfères :{' '}
            <code className="inline-block rounded bg-amber-50 px-2 py-0.5 font-mono text-amber-900 break-all">
              {DISCORD_USERNAME}
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
