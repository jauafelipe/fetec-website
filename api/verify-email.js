// Serverless Function da Vercel: /api/verify-email
// Esconde a chave da API de verificação e faz a checagem real de mailbox.
//
// Configure na Vercel (Settings > Environment Variables):
//   VERIFY_EMAIL_API_KEY  -> sua chave (ZeroBounce, Hunter.io ou Emailable)
//   VERIFY_EMAIL_PROVIDER -> "zerobounce" | "hunter" | "emailable" (padrão: hunter)

const PROVIDERS = {
  // Hunter.io - plano gratuito: 25 verificações/mês
  async hunter(email, key) {
    const res = await fetch(
      `https://api.hunter.io/v2/email-verifier?email=${encodeURIComponent(email)}&api_key=${key}`
    );
    if (!res.ok) throw new Error(`Hunter HTTP ${res.status}`);
    const data = await res.json();
    // status: valid | invalid | accept_all | webmail | unknown
    const status = data?.data?.status;
    return {
      valid: status === 'valid' || status === 'webmail' || status === 'accept_all',
      // accept_all = o servidor aceita qualquer endereço, não dá para confirmar a caixa
      definitive: status === 'valid' || status === 'invalid',
      status,
      provider: 'hunter'
    };
  },

  // ZeroBounce - plano gratuito: 100 verificações/mês
  async zerobounce(email, key) {
    const res = await fetch(
      `https://api.zerobounce.net/v2/validate?api_key=${key}&email=${encodeURIComponent(email)}`
    );
    if (!res.ok) throw new Error(`ZeroBounce HTTP ${res.status}`);
    const data = await res.json();
    // status: valid | invalid | catch-all | unknown | spamtrap | abuse | do_not_mail
    const status = data?.status;
    return {
      valid: status === 'valid' || status === 'catch-all',
      definitive: status === 'valid' || status === 'invalid',
      status,
      provider: 'zerobounce'
    };
  },

  // Emailable - plano gratuito: 250 verificações/mês
  async emailable(email, key) {
    const res = await fetch(
      `https://api.emailable.com/v1/verify?email=${encodeURIComponent(email)}&api_key=${key}`
    );
    if (!res.ok) throw new Error(`Emailable HTTP ${res.status}`);
    const data = await res.json();
    // state: deliverable | undeliverable | risky | unknown
    const state = data?.state;
    return {
      valid: state === 'deliverable' || state === 'risky',
      definitive: state === 'deliverable' || state === 'undeliverable',
      status: state,
      provider: 'emailable'
    };
  }
};

export default async function handler(req, res) {
  // Só aceita POST simples
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Use POST' });
  }

  const { email } = req.body || {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return res.status(400).json({ error: 'E-mail inválido' });
  }

  const key = process.env.VERIFY_EMAIL_API_KEY;
  const providerName = process.env.VERIFY_EMAIL_PROVIDER || 'hunter';

  // Sem chave configurada: degrada com elegância (o front mantém a validação de DNS)
  if (!key) {
    return res.status(200).json({ available: false, valid: true, definitive: false });
  }

  const provider = PROVIDERS[providerName];
  if (!provider) {
    return res.status(500).json({ error: `Provedor desconhecido: ${providerName}` });
  }

  try {
    const result = await provider(email, key);
    return res.status(200).json({ available: true, ...result });
  } catch (err) {
    // Em caso de falha na API externa, não bloqueia o usuário
    console.error('verify-email error:', err.message);
    return res.status(200).json({ available: false, valid: true, definitive: false });
  }
}
