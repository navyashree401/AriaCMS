import type { Schema, Attribute } from '@strapi/strapi';

export interface ListValuedelivered extends Schema.Component {
  collectionName: 'components_list_valuedelivereds';
  info: {
    displayName: 'valuedelivered';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'list.valuedelivered': ListValuedelivered;
    }
  }
}
