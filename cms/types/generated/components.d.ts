import type { Schema, Struct } from '@strapi/strapi';

export interface MenuKnopka extends Struct.ComponentSchema {
  collectionName: 'components_menu_knopka';
  info: {
    description: '';
    displayName: '\u041A\u043D\u043E\u043F\u043A\u0430';
    icon: 'cursor';
  };
  attributes: {
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary', 'link']>;
    url: Schema.Attribute.String;
  };
}

export interface MenuLogo extends Struct.ComponentSchema {
  collectionName: 'components_menu_logos';
  info: {
    description: '';
    displayName: '\u041B\u043E\u0433\u043E\u0442\u0438\u043F';
    icon: 'command';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface MenuPunktMenyu extends Struct.ComponentSchema {
  collectionName: 'components_menu_punkt_menyu';
  info: {
    displayName: '\u041F\u0443\u043D\u043A\u0442 \u043C\u0435\u043D\u044E';
    icon: 'cursor';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuSsylka extends Struct.ComponentSchema {
  collectionName: 'components_menu_ssylka';
  info: {
    description: '';
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuTekst extends Struct.ComponentSchema {
  collectionName: 'components_menu_tekst';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442';
    icon: 'pencil';
  };
  attributes: {
    text: Schema.Attribute.Blocks;
  };
}

export interface MenuVypadayushheeMenyu extends Struct.ComponentSchema {
  collectionName: 'components_menu_vypadayushhee_menyu';
  info: {
    displayName: '\u0412\u044B\u043F\u0430\u0434\u0430\u044E\u0449\u0435\u0435 \u043C\u0435\u043D\u044E';
    icon: 'bulletList';
  };
  attributes: {
    sections: Schema.Attribute.Relation<'oneToMany', 'api::section.section'>;
    title: Schema.Attribute.String;
  };
}

export interface PageBlokOLokaczii extends Struct.ComponentSchema {
  collectionName: 'components_page_blok_o_lokaczii';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u043E \u043B\u043E\u043A\u0430\u0446\u0438\u0438';
    icon: 'globe';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'page.knopki', false>;
    description: Schema.Attribute.Blocks;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
    images: Schema.Attribute.Media<'images'>;
  };
}

export interface PageBlokOrganizacziyaMeropriyatij
  extends Struct.ComponentSchema {
  collectionName: 'components_page_blok_organizacziya_meropriyatij';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u0439';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
    tabs: Schema.Attribute.Component<'page.taby', true>;
  };
}

export interface PageBlokRestoran extends Struct.ComponentSchema {
  collectionName: 'components_page_blok_restoran';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D';
    icon: 'restaurant';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'page.knopki', true>;
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<'page.opczii', true>;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface PageBlokSKartoj extends Struct.ComponentSchema {
  collectionName: 'components_page_blok_s_kartoj';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0441 \u043A\u0430\u0440\u0442\u043E\u0439';
    icon: 'pinMap';
  };
  attributes: {
    coordinates: Schema.Attribute.JSON & Schema.Attribute.Required;
    description: Schema.Attribute.Blocks;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
  };
}

export interface PageBlokSUslugami extends Struct.ComponentSchema {
  collectionName: 'components_page_blok_s_uslugami';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0441 \u0443\u0441\u043B\u0443\u0433\u0430\u043C\u0438';
    icon: 'handHeart';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
    service: Schema.Attribute.Component<'page.kartochka-uslugi', true>;
  };
}

export interface PageBlokUchebnyeKorpusa extends Struct.ComponentSchema {
  collectionName: 'components_page_blok_uchebnye_korpusa';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0443\u0447\u0435\u0431\u043D\u044B\u0435 \u043A\u043E\u0440\u043F\u0443\u0441\u0430';
    icon: 'feather';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    gallery: Schema.Attribute.Media<'images', true>;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
  };
}

export interface PageInfoBlok extends Struct.ComponentSchema {
  collectionName: 'components_page_info_blok';
  info: {
    description: '';
    displayName: '\u0418\u043D\u0444\u043E \u0431\u043B\u043E\u043A';
    icon: 'slideshow';
  };
  attributes: {
    cards: Schema.Attribute.Component<'page.kartochka', true>;
    description: Schema.Attribute.Blocks;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
    images: Schema.Attribute.Media<'images', true>;
    is_video: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    video_url: Schema.Attribute.String;
  };
}

export interface PageKartochka extends Struct.ComponentSchema {
  collectionName: 'components_page_kartochka';
  info: {
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430';
    icon: 'layout';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    icon: Schema.Attribute.Media<'images'>;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'primary'>;
    title: Schema.Attribute.String;
  };
}

export interface PageKartochkaUslugi extends Struct.ComponentSchema {
  collectionName: 'components_page_kartochka_uslugi';
  info: {
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u0443\u0441\u043B\u0443\u0433\u0438';
    icon: 'calendar';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface PageKnopki extends Struct.ComponentSchema {
  collectionName: 'components_page_knopki';
  info: {
    displayName: '\u041A\u043D\u043E\u043F\u043A\u0438';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.Component<'page.ssylka', false>;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface PageNomer extends Struct.ComponentSchema {
  collectionName: 'components_page_nomer';
  info: {
    displayName: '\u041A\u0430\u0440\u0442\u043E\u0447\u043A\u0430 \u043D\u043E\u043C\u0435\u0440\u0430';
    icon: 'crop';
  };
  attributes: {
    button: Schema.Attribute.Component<'menu.knopka', true>;
    description: Schema.Attribute.Blocks;
    features: Schema.Attribute.Component<'page.opczii', true>;
    photos: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface PageNomera extends Struct.ComponentSchema {
  collectionName: 'components_page_nomera';
  info: {
    displayName: '\u0411\u043B\u043E\u043A \u0441 \u043D\u043E\u043C\u0435\u0440\u0430\u043C\u0438';
    icon: 'house';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
    rooms: Schema.Attribute.Component<'page.nomer', true>;
  };
}

export interface PageOpczii extends Struct.ComponentSchema {
  collectionName: 'components_page_opczii';
  info: {
    displayName: '\u041E\u043F\u0446\u0438\u0438';
    icon: 'server';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    theme: Schema.Attribute.Enumeration<['primary', 'secondary', 'muted']>;
    title: Schema.Attribute.String;
  };
}

export interface PagePervyjEkran extends Struct.ComponentSchema {
  collectionName: 'components_page_pervyj_ekran';
  info: {
    description: '';
    displayName: '\u041F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D';
    icon: 'monitor';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'page.knopki', true>;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
    images: Schema.Attribute.Media<'images' | 'videos', true>;
    text: Schema.Attribute.Text;
  };
}

export interface PagePervyjEkranMalyj extends Struct.ComponentSchema {
  collectionName: 'components_page_pervyj_ekran_malyj_s';
  info: {
    displayName: '\u041F\u0435\u0440\u0432\u044B\u0439 \u044D\u043A\u0440\u0430\u043D (\u043C\u0430\u043B\u044B\u0439)';
    icon: 'chartBubble';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    header: Schema.Attribute.Component<'page.zagolovok', false>;
    images: Schema.Attribute.Media<'images', true>;
  };
}

export interface PageSeo extends Struct.ComponentSchema {
  collectionName: 'components_page_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'globe';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaField: Schema.Attribute.Component<'seo.meta-field', true>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface PageSsylka extends Struct.ComponentSchema {
  collectionName: 'components_page_ssylka';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_blank']> &
      Schema.Attribute.DefaultTo<'_blank'>;
  };
}

export interface PageTaby extends Struct.ComponentSchema {
  collectionName: 'components_page_taby';
  info: {
    displayName: '\u0422\u0430\u0431';
    icon: 'server';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'page.knopki', false>;
    content: Schema.Attribute.Blocks;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer &
      Schema.Attribute.Unique &
      Schema.Attribute.DefaultTo<0>;
    photos: Schema.Attribute.Media<'images', true>;
    slug: Schema.Attribute.String;
  };
}

export interface PageZagolovok extends Struct.ComponentSchema {
  collectionName: 'components_page_zagolovok';
  info: {
    displayName: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A';
    icon: 'bold';
  };
  attributes: {
    label: Schema.Attribute.Text;
    theme: Schema.Attribute.Enumeration<[' primary', 'secondary', 'muted']> &
      Schema.Attribute.DefaultTo<' primary'>;
    title: Schema.Attribute.Text;
  };
}

export interface SeoMetaField extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_fields';
  info: {
    displayName: 'metaField';
    icon: 'earth';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.knopka': MenuKnopka;
      'menu.logo': MenuLogo;
      'menu.punkt-menyu': MenuPunktMenyu;
      'menu.ssylka': MenuSsylka;
      'menu.tekst': MenuTekst;
      'menu.vypadayushhee-menyu': MenuVypadayushheeMenyu;
      'page.blok-o-lokaczii': PageBlokOLokaczii;
      'page.blok-organizacziya-meropriyatij': PageBlokOrganizacziyaMeropriyatij;
      'page.blok-restoran': PageBlokRestoran;
      'page.blok-s-kartoj': PageBlokSKartoj;
      'page.blok-s-uslugami': PageBlokSUslugami;
      'page.blok-uchebnye-korpusa': PageBlokUchebnyeKorpusa;
      'page.info-blok': PageInfoBlok;
      'page.kartochka': PageKartochka;
      'page.kartochka-uslugi': PageKartochkaUslugi;
      'page.knopki': PageKnopki;
      'page.nomer': PageNomer;
      'page.nomera': PageNomera;
      'page.opczii': PageOpczii;
      'page.pervyj-ekran': PagePervyjEkran;
      'page.pervyj-ekran-malyj': PagePervyjEkranMalyj;
      'page.seo': PageSeo;
      'page.ssylka': PageSsylka;
      'page.taby': PageTaby;
      'page.zagolovok': PageZagolovok;
      'seo.meta-field': SeoMetaField;
    }
  }
}
