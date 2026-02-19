import { API_URL } from "../config/api";

/**
 * GET ALL TEMPLATES (UNTUK KATALOG)
 */
export async function getTemplates() {
  const res = await fetch(`${API_URL}/templates`);

  if (!res.ok) {
    throw new Error("Gagal mengambil data template");
  }

  return res.json();
}

/**
 * GET TEMPLATE BY SLUG (UNTUK PREVIEW)
 */
export async function getTemplateBySlug(slug) {
  const res = await fetch(`${API_URL}/templates/${slug}`);

  if (!res.ok) {
    throw new Error("Template tidak ditemukan");
  }

  return res.json();
}
