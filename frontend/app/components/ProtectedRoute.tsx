// "use client";

// import { useAuth } from "../contexts/AuthContext";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { isAuthenticated } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/auth");
//     }
//   }, [isAuthenticated, router]);

//   if (!isAuthenticated) {
//     return null;
//   }

//   return <>{children}</>;
// }
