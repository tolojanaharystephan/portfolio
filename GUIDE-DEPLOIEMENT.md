# Guide — Portfolio en local puis en ligne (gratuit)

Ce guide couvre **Windows**, le projet dans `Desktop\portfolio`.

---

## Partie 1 — Prérequis

### 1.1 Installer Node.js

1. Allez sur https://nodejs.org/
2. Téléchargez la version **LTS** (20 ou 22)
3. Installez avec les options par défaut
4. Vérifiez dans PowerShell :

```powershell
node -v
npm -v
```

Vous devez voir des numéros de version (ex. `v22.x.x` et `10.x.x`).

### 1.2 (Optionnel) Installer Git

Pour déployer gratuitement via GitHub + Vercel :

1. https://git-scm.com/download/win
2. Installez, puis vérifiez :

```powershell
git --version
```

---

## Partie 2 — Lancer le portfolio en local

### Étape 1 — Ouvrir le dossier du projet

```powershell
cd C:\Users\Tolojanahary\Desktop\portfolio
```

### Étape 2 — Installer les dépendances

```powershell
npm install
```

Attendez la fin (1 à 3 minutes).

### Étape 3 — Photo de profil (optionnel)

```powershell
npm run extract-profile
```

Cela télécharge votre avatar GitHub dans `public/profile.jpg`.

### Étape 4 — Variables d'environnement (local)

```powershell
Copy-Item .env.example .env.local
```

Ouvrez `.env.local` et laissez pour l'instant :

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Le site fonctionne **sans** clé email ; le formulaire proposera un fallback.

### Étape 5 — Démarrer le serveur de développement

```powershell
npm run dev
```

Ouvrez dans le navigateur : **http://localhost:3000**

Pour arrêter : `Ctrl + C` dans le terminal.

### Étape 6 — Tester le build production (recommandé)

```powershell
npm run build
npm run start
```

Ouvrez **http://localhost:3000** — c'est ce que verra le serveur en ligne.

---

## Partie 3 — Activer le formulaire de contact (recommandé)

### Option A — Web3Forms (gratuit, simple)

1. Allez sur https://web3forms.com
2. Créez un compte (email)
3. Créez un formulaire → copiez l’**Access Key**
4. Dans `.env.local` :

```
WEB3FORMS_ACCESS_KEY=votre_clé_ici
```

5. Redémarrez `npm run dev` et testez la section Contact.

### Option B — Resend (emails plus « pro »)

1. https://resend.com → compte gratuit
2. Créez une API Key
3. Dans `.env.local` :

```
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL_TO=tolotrastephan2001@gmail.com
```

---

## Partie 4 — Mettre le code sur GitHub

### Étape 1 — Créer un dépôt GitHub

1. Connectez-vous sur https://github.com
2. **New repository**
3. Nom : `portfolio` (ou autre)
4. **Public** ou Private
5. **Ne cochez pas** « Add README » (le projet existe déjà)
6. Créez le dépôt

### Étape 2 — Initialiser Git localement

```powershell
cd C:\Users\Tolojanahary\Desktop\portfolio
git init
git add .
git commit -m "Portfolio développeur - version initiale"
```

### Étape 3 — Lier et pousser vers GitHub

Remplacez `VOTRE_USERNAME` par votre identifiant GitHub :

```powershell
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git push -u origin main
```

GitHub vous demandera de vous connecter (navigateur ou token).

> **Important** : `.env.local` est dans `.gitignore` — vos clés secrètes ne partent pas sur GitHub.

---

## Partie 5 — Déployer gratuitement sur Vercel (recommandé pour Next.js)

Vercel est gratuit pour les portfolios personnels et optimisé pour Next.js.

### Étape 1 — Compte Vercel

1. https://vercel.com → **Sign Up**
2. Choisissez **Continue with GitHub**
3. Autorisez l’accès à votre compte GitHub

### Étape 2 — Importer le projet

1. Dashboard Vercel → **Add New…** → **Project**
2. Sélectionnez le dépôt `portfolio`
3. Framework : **Next.js** (détecté automatiquement)
4. **Root Directory** : laisser `.`
5. **Build Command** : `npm run build` (par défaut)
6. **Output** : laisser par défaut

### Étape 3 — Variables d'environnement sur Vercel

Avant **Deploy**, section **Environment Variables** :

| Nom | Valeur |
|-----|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://votre-projet.vercel.app` (vous pourrez corriger après le 1er déploiement) |
| `WEB3FORMS_ACCESS_KEY` | votre clé Web3Forms (si utilisée) |
| `RESEND_API_KEY` | optionnel |
| `CONTACT_EMAIL_TO` | `tolotrastephan2001@gmail.com` |

Cliquez **Deploy**.

### Étape 4 — Premier déploiement

- Attendez 2 à 5 minutes
- Vercel affiche une URL du type : `https://portfolio-xxxxx.vercel.app`

### Étape 5 — Corriger l’URL du site (SEO)

1. Vercel → votre projet → **Settings** → **Environment Variables**
2. Modifiez `NEXT_PUBLIC_SITE_URL` avec l’URL finale exacte
3. **Deployments** → les trois points du dernier déploiement → **Redeploy**

### Étape 6 — Domaine personnalisé (optionnel)

Vercel → **Settings** → **Domains** → ajoutez un domaine si vous en avez un.

Sinon, l’URL `.vercel.app` gratuite suffit pour un CV / LinkedIn.

---

## Partie 6 — Mises à jour après déploiement

Chaque modification locale :

```powershell
git add .
git commit -m "Description de la modification"
git push
```

Vercel **redéploie automatiquement** à chaque push sur `main`.

---

## Dépannage rapide

| Problème | Solution |
|----------|----------|
| `npm` introuvable | Réinstallez Node.js, redémarrez le terminal |
| Port 3000 occupé | `npm run dev -- -p 3001` puis http://localhost:3001 |
| Build échoue | `npm run build` et lisez l’erreur dans le terminal |
| Formulaire ne envoie pas | Vérifiez `WEB3FORMS_ACCESS_KEY` dans `.env.local` et sur Vercel |
| GitHub API limitée | Normal sans token ; le profil GitHub peut être partiel |
| Page blanche en prod | Vérifiez les logs : Vercel → Deployments → Build Logs |

---

## Récapitulatif des commandes

```powershell
# Local — développement
cd C:\Users\Tolojanahary\Desktop\portfolio
npm install
npm run dev

# Local — test production
npm run build
npm run start

# Mise en ligne
git add .
git commit -m "Mise à jour portfolio"
git push
```

---

## Alternatives gratuites

- **Netlify** : https://netlify.com (import GitHub, build `npm run build`, publish `.next` nécessite adapter — Vercel reste plus simple pour Next.js)
- **Render** : https://render.com (Web Service Node, commande `npm start` après build)

Pour ce projet Next.js 16, **Vercel** reste le choix le plus simple et le plus fiable.
