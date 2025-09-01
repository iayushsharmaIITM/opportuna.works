import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@/react-app/contexts/AuthContext";
import { Loader2 } from "lucide-react";

export default function AuthCallback() {
  const { loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Wait for auth state to be determined
    if (!loading) {
      // Redirect to home page after authentication process
      navigate("/");
    }
  }, [loading, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin mb-4 mx-auto">
          <Loader2 className="w-12 h-12 text-white" />
        </div>
        <p className="text-white text-lg font-medium">Completing authentication...</p>
      </div>
    </div>
  );
}
