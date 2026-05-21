# Portfolio — Tolojanahary Stephan

Portfolio développeur premium construit avec **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** et **Lucide React**.

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm run start` | Serveur production |
| `npm run extract-profile` | Télécharge la photo (CV/GitHub) → `public/profile.jpg` |

## Structure

```
app/           # Pages & layout (App Router)
components/    # UI, effets, layout, sections
data/          # Données du portfolio (portfolio.ts)
hooks/         # Hooks React personnalisés
lib/           # Utilitaires & API GitHub
sections/      # (alias via components/sections)
public/        # Assets statiques (profile.jpg)
```

## Formulaire de contact (professionnel)

1. Copiez `.env.example` vers `.env.local`
2. Inscrivez-vous sur [Web3Forms](https://web3forms.com) (gratuit) et ajoutez :
   ```
   WEB3FORMS_ACCESS_KEY=votre_clé
   ```
3. Ou utilisez [Resend](https://resend.com) avec `RESEND_API_KEY`

Sans configuration, le formulaire propose un fallback email.

## Personnalisation

Modifier `data/portfolio.ts` pour mettre à jour :
- Coordonnées, liens CV/GitHub
- Compétences, expériences, projets
- Formation, SEO

## Photo de profil

1. Exécuter `npm run extract-profile` pour télécharger l’avatar GitHub
2. Ou placer manuellement votre photo extraite du CV dans `public/profile.jpg`

## Déploiement

Compatible **Vercel**, **Netlify** et tout hébergeur Node.js :

```bash
npm run build
```

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
