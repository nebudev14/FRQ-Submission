import "../styles/globals.css";
import AuthProvider from "../components/contexts/AuthContext";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Nav />
      <div className="text-white bg-[#1f1f1f]">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
