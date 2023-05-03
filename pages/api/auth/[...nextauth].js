// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth"
import axios from 'axios'
import GoogleProvider from "next-auth/providers/google"
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
		AzureADProvider({
	    clientId: process.env.AZURE_AD_CLIENT_ID,
	    clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
	    tenantId: process.env.AZURE_AD_TENANT_ID,
      authorization: { params: { scope: "openid profile user.Read email" } },
      wellKnown: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0/.well-known/openid-configuration`,
      idToken: true,
        async profile(profile, tokens) {
          const profileObject = {
            id: profile.sub,
            name: profile.name,
            email: ""
          };
          const response = await axios.get(
            `https://graph.microsoft.com/v1.0/me?$select=userPrincipalName`,
            {
              headers: {
                Authorization: `Bearer ${tokens.access_token}`,
              },
            }
          );
          const setEmail = await response.data
          profileObject.email = setEmail.userPrincipalName
          
          return profileObject
        },
	  }),
	],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
      signIn: "/auth/signin"
  },
}

export default NextAuth(authOptions);