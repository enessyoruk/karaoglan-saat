export const site = {
  name: "KARAOĞLAN SAAT",
  shortName: "Karaoğlan Saat",
  phoneDisplay: "+90 505 261 57 31",
  waNumber: "905052615731",
  email: "karaoglansaat@gmail.com",
  address: "Özyurt Mahallesi 169. Sokak No:8, Gediz/KÜTAHYA",
  hours: "08.30–17.30",
  maps: {
    googleShare: "https://share.google/n2PL5wB9iSYjDbTy1",
    googleQuery:
      "https://www.google.com/maps/search/?api=1&query=%C3%96zyurt%20Mahallesi%20169.%20Sokak%20No%3A8%20Gediz%20K%C3%BCtahya%2043600",
    apple:
      "https://maps.apple.com/?q=%C3%96zyurt%20Mahallesi%20169.%20Sokak%20No%3A8%20Gediz%20K%C3%BCtahya%2043600",
  },
  social: {
    instagram: [
      { label: "Instagram", href: "https://instagram.com/karaoglan_saat" },
      { label: "Instagram — Retro", href: "https://instagram.com/retrosaatcim" },
    ],
    facebook: { label: "Facebook", href: "https://www.facebook.com/karaoglansaat" },
  },
  copy: {
    line1: "ZAMANA",
    line2: "HÜKMEDEN",
    line3: "MİRAS",
    sub: "Nadir referanslar, kusursuz mekanizmalar ve nesilden nesile aktarılan saatçilik zanaatı.",
  },
  wa: {
    model:
      "Merhaba Karaoğlan Saat, portföyünüz dışındaki özel bir model hakkında bilgi almak istiyorum.",
    trade:
      "Merhaba, elimdeki saatin ekspertiz ve alım/takas şartlarını öğrenmek istiyorum.",
    atelier:
      "Merhaba, mekanik saatimin bakım/onarım randevusu için yazıyorum.",
    visit:
      "Merhaba Karaoğlan Saat, işletmenizi ziyaret etmek ve kahve eşliğinde koleksiyonu incelemek için randevu talep ediyorum.",
  },
  cards: [
    {
      id: "aksiyon",
      num: "01",
      title: "MODEL TALEP ET",
      kicker: "İstek & Talep",
      body: "Aradığınız nadir modeller için özel temin masası.",
      waKey: "model" as const,
    },
    {
      id: "aksiyon-deger",
      num: "02",
      title: "SAATİNİZİ DEĞERLENDİRİN",
      kicker: "Takas & Alım",
      body: "Koleksiyonunuzu değerinde nakite çevirin veya takas teklifi alın.",
      waKey: "trade" as const,
    },
    {
      id: "aksiyon-atolye",
      num: "03",
      title: "ATÖLYE & BAKIM",
      kicker: "Mekanik Servis",
      body: "Orijinal parça garantili mekanizma revizyonu, polisaj ve hassas ayar.",
      waKey: "atelier" as const,
    },
  ],
  nav: [
    { label: "KOLEKSİYON", href: "#aksiyon" },
    { label: "ÖZEL TALEP", href: "#aksiyon" },
    { label: "ATÖLYE", href: "#aksiyon-atolye" },
    { label: "HAKKIMIZDA", href: "#guven" },
    { label: "İLETİŞİM", href: "#butik" },
  ],
} as const;

export function waLink(message: string) {
  return `https://wa.me/${site.waNumber}?text=${encodeURIComponent(message)}`;
}
