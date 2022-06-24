// next
import Image from "next/image";
import Link from "next/link";

import ExternalLinkIcon from "@heroicons/react/solid/ExternalLinkIcon";

import { common } from "../../constants";

// react-share
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";

interface Props {
  name: string;
  description?: string;
  type: string;
  logo?: string;
  web?: string;
  industry: string;
  socialMedias?: { name: string; url: string }[];
}

const Brand = ({
  name,
  type,
  industry,
  description,
  logo,
  web,
  socialMedias,
}: Props) => {
  const defaultProps = {
    size: 24,
    round: true,
  };

  const getSocialMedia = (name: string, url: string) => {
    switch (name) {
      case "FACEBOOK":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={<FacebookIcon {...defaultProps} />}
          />
        );

      case "TWITTER":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={<TwitterIcon {...defaultProps} />}
          />
        );

      case "INSTAGRAM":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={
              <Image
                src={common.socialMedia.color.instagram || common.noImage}
                width={20}
                height={20}
                alt={name}
              />
            }
          />
        );

      case "YOUTUBE":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={
              <Image
                src={common.socialMedia.color.youtube || common.noImage}
                width={20}
                height={20}
                alt={name}
              />
            }
          />
        );

      case "LINKEDIN":
        return (
          <SocialMedia
            key={name}
            name={name}
            url={url}
            image={<LinkedinIcon {...defaultProps} />}
          />
        );
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 flex flex-col gap-6">
      <div className="flex flex-row items-center gap-4">
        <div className="shadow-md rounded-full w-20 h-20">
          <Image
            src={logo || common.noImage}
            alt="brand logo"
            width={100}
            height={100}
            objectFit="scale-down"
          />
        </div>
        <div>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="font-semibold text-xs text-gray-500">{type}</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          {socialMedias?.map((media) => {
            return getSocialMedia(media?.name, media?.url);
          })}
        </div>

        <Link href={web || "/"}>
          <a
            target="_blank"
            className="flex items-center gap-1 text-blue-500 hover:underline"
          >
            <p>visit</p>
            <ExternalLinkIcon className="w-5 h-5 text-blue-500" />
          </a>
        </Link>
      </div>
      {description && (
        <p className="mt-4 text-justify text-sm text-gray-500">{description}</p>
      )}
    </div>
  );
};

export default Brand;

const SocialMedia = ({
  name,
  url,
  image,
}: {
  name: string;
  url: string;
  image: React.ReactNode;
}) => {
  return (
    <Link href={url}>
      <a>{image}</a>
    </Link>
  );
};
