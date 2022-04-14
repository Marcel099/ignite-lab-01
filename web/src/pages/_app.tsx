import { UserProvider } from "@auth0/nextjs-auth0";
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
