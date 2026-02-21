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

/**
 * POST TEMPLATE BARU (DIPROTEKSI API KEY)
 */
export async function createTemplate(data) {
  const res = await fetch(`${API_URL}/templates`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Gunakan kunci yang sudah sukses di Postman tadi
      "X-SNA-KEY": "21Febuari2026SNADigitalprikitiw@!",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Gagal menyimpan data. Pastikan kunci akses benar.");
  }

  return res.json();
}
