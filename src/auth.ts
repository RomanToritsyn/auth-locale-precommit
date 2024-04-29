import { AuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
// import LinkedInProvider from 'next-auth/providers/linkedin';
import CredentialsProvider from 'next-auth/providers/credentials';

const auth: AuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID ?? '',
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    // }),
    // LinkedInProvider({
    //   clientId: process.env.LINKEDIN_CLIENT_ID ?? '',
    //   clientSecret: process.env.LINKEDIN_CLIENT_SECRET ?? '',
    // }),
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // Validate credentials and return a User object or null
        if (credentials?.email && credentials?.password) {
          // Example: Perform authentication logic (replace with your own logic)
          const isValid = validateCredentials(credentials.email, credentials.password);
          if (isValid) {
            // Return a valid User object
            return { id: 'unique-user-id', email: credentials.email };
          }
        }

        // Return null if authentication failed
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET ?? '',
};

function validateCredentials(email: string, password: string): boolean {
  return email === 'rt@com.com' && password === '123';
}

export default auth;
