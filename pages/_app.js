import "../styles/globals.css";
import AuthProvider from "../components/contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="text-white bg-[#1f1f1f]">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
