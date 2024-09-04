import { supabase } from "./lib/supabase";

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return {
    data,
    error,
  };
}

export async function signUpWithEmail(email: string, password: string) {
  try {
    // console.log("🚀 ~ signUpWithEmail instance ~ supabase:", supabase)
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    console.log("🚀 ~ signUpWithEmail ~ error:", error);
    return {
      data,
      error,
    };
  } catch (error) {
    console.log("🚀 ~ signUpWithEmail ~ error:", error);
    return { data: { session: null }, error };
  }
}
