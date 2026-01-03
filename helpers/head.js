import config from '@/config';

const URL = config.url;

export default (page, i18nHead, override, noindexnofollow) => {
  if (!page) page = {}

  const image = `${URL}/images/${page.image || 'default.png'}`;
  return {
    title: page.title,
    meta: [
      {
        hid: 'og:url',
        property: 'og:url',
        content: URL + page.path,
      },
      {
        hid: "description",
        name: "description",
        content: page.description,
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: page.title,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: page.description,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: image,
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: page.title,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: page.title,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: page.description,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: image,
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: image,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: page.title,
      },
      {
        hid: "robots",
        name: "robots",
        content: noindexnofollow && 'noindex,nofollow',
      },
      ...i18nHead.meta
    ],
    htmlAttrs: {
      ...i18nHead.htmlAttrs
    },
    link: [
      ...i18nHead.link
    ],
    ...(override || {})
  };
}