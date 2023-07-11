// components/ProtectSecond.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
export function ProtectedSecond() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === 'authenticated' ? 'ADMIN PAGE!' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
}