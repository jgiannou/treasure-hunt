import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface HeroSelection {
  id: number;
  email: string;
  hero_name: string;
  created_at: string;
}

export async function getSelectedHeroes(): Promise<string[]> {
  const { data, error } = await supabase
    .from("hero_selections")
    .select("hero_name");

  if (error) {
    console.error("Error fetching selected heroes:", error);
    return [];
  }

  return data.map((selection) => selection.hero_name);
}

export async function selectHero(
  email: string,
  heroName: string
): Promise<boolean> {
  const { error } = await supabase
    .from("hero_selections")
    .insert([{ email, hero_name: heroName }]);

  if (error) {
    console.error("Error selecting hero:", error);
    return false;
  }

  return true;
}
