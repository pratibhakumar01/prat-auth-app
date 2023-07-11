// components/Protected.js
import { useAuthenticator, Heading } from '@aws-amplify/ui-react';
export function Protected() {
  const { route } = useAuthenticator((context) => [context.route]);

  const message =
    route === 'authenticated' ? 'USER PAGE!' : 'Loading...';
  return <Heading level={1}>{message}</Heading>;
}