import { SwaggerConfig } from './swagger.interface';

/**
 * Configuration for the swagger UI (found at /api).
 * Change this to suit your app!
 */
export const SWAGGER_CONFIG: SwaggerConfig = {
  title: process.env.npm_package_name || 'Nestjs Template',
  description:
    process.env.npm_package_description ||
    'The Nestjs Template API description',
  version: '1.0',
  tags: [],
  contact: {
    name: 'uahmadsoft',
    url: 'uahmadsoft',
    email: 'umadahmad1928@gmail.com',
  },
};
