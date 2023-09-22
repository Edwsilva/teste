export default {
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
    realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
    clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
    credentials: {
      secret: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_SECRET,
    },
    'ssl-required': 'external',
    'confidential-port': 0,
  };