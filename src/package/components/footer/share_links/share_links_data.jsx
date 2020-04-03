/*  eslint linebreak-style: ["error", "windows"]    */
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';

import { ReactComponent as TwitterIcon } from '../../../assets/icons/brands/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../../assets/icons/brands/github.svg';

export const SHARE_LINKS_DATA = Object.freeze({
    twitter: {
        icon: TwitterIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="Find me on {platform}"
                values={{ platform: 'Twitter' }}
            />
        ),
        getLink: ({ translatedMessage }) => `https://twitter.com/MuflahNasir`
    },
    linkedIn: {
        icon: LinkedInIcon,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="Share on {platform}"
                values={{ platform: 'LinkedIn' }}
            />
        ),
        getLink: ({ link }) => `https://www.linkedin.com/in/muflah-nasir-68a0aa145/`
    },
    github: {
        icon: GithubLogo,
        tooltipTranslation: (
            <FormattedMessage
                id="Footer.shareLinks.shareOnTooltip"
                defaultMessage="Share on {platform}"
                values={{ platform: 'Github' }}
            />
        ),
        getLink: ({ link }) => `https://github.com/MuflahNasir`
    }
});
