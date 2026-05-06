const BEJO_WHATSAPP_NUMBER = "6289512457250";
const PERSONAL_TRAINER_WHATSAPP_NUMBER = "6282185497044";

function createWhatsAppLink(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappLinks = {
  bejoMembership: createWhatsAppLink(
    BEJO_WHATSAPP_NUMBER,
    "Halo Bejo Sport Center, saya tertarik daftar membership. Saya dapat info dari website personal trainer."
  ),
  bejoThreeMonthPlan: createWhatsAppLink(
    BEJO_WHATSAPP_NUMBER,
    "Halo Bejo Sport Center, saya tertarik ambil paket 3 bulan. Saya dapat info dari website personal trainer."
  ),
  bejoDayPass: createWhatsAppLink(
    BEJO_WHATSAPP_NUMBER,
    "Halo Bejo Sport Center, saya ingin coba day pass. Saya dapat info dari website personal trainer."
  ),
  bejoQuickRegistration: createWhatsAppLink(
    BEJO_WHATSAPP_NUMBER,
    "Halo Bejo Sport Center, saya tertarik daftar member. Saya dapat info dari website personal trainer."
  ),
  personalTrainerConsultation: createWhatsAppLink(
    PERSONAL_TRAINER_WHATSAPP_NUMBER,
    "Halo Aziz, saya lihat website Bejo dan ingin konsultasi gratis tentang personal training."
  ),
  personalTrainerProgram: createWhatsAppLink(
    PERSONAL_TRAINER_WHATSAPP_NUMBER,
    "Halo Aziz, saya tertarik ambil program personal training dari website Bejo."
  ),
  personalTrainerFloatingButton: createWhatsAppLink(
    PERSONAL_TRAINER_WHATSAPP_NUMBER,
    "Halo Aziz, saya tertarik konsultasi personal training setelah lihat website Bejo."
  ),
};
