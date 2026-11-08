# Site vitrine d'Entreprise Barry

Plomberie, chauffage, climatisation et nettoyage à Montpellier et alentours.
Next.js (App Router), React, TypeScript strict, Tailwind CSS, Lucide React. Le site est entièrement statique : pas de base de données, pas d'authentification, pas d'API.

## Installer et lancer

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
npm run dev        # développement : http://localhost:3000
npm run build      # build de production
npm run start      # sert le build de production
npm run lint       # ESLint
```

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| téléphone, WhatsApp, e-mail, zone, navigation, informations légales | `data/site.ts` |
| prestations, textes et titres SEO des 4 pages de service | `data/services.ts` |
| photos de la galerie et leurs légendes | `data/realisations.ts` |
| couleurs, polices, tracé des conduites | `app/globals.css` |
| textes de l'accueil | `components/sections/` |
| mentions légales | `app/mentions-legales/page.tsx` |
| politique de confidentialité (RGPD) | `app/politique-de-confidentialite/page.tsx` |

Les informations à compléter sont surlignées en orange dans les pages légales (composant `Todo`). Les valeurs viennent de `legal` dans `data/site.ts` : renseignez-les une fois, elles se mettent à jour partout. L'adresse `/rgpd` redirige vers la politique de confidentialité.

### Ajouter une réalisation

1. Déposez la photo dans `public/realisations/` (JPEG, 1500 px de côté maximum).
2. Ajoutez une ligne dans `data/realisations.ts` : catégorie, nom du fichier, largeur, hauteur, légende.

Une catégorie sans photo n'est ni affichée dans les filtres ni sur sa page de service. C'est le cas du nettoyage tant qu'aucune photo n'a été ajoutée.

## Formulaire de devis (Formspree)

1. Créez un compte gratuit sur [formspree.io](https://formspree.io), puis un formulaire.
2. Copiez l'identifiant (la fin de l'URL `https://formspree.io/f/xxxxxxxx`).
3. Renseignez-le dans la variable `NEXT_PUBLIC_FORMSPREE_ID` (voir `.env.example`).

Cet identifiant n'est pas un secret : il apparaît dans toute requête du navigateur. Tant qu'il n'est pas renseigné, le formulaire n'envoie rien et le dit au visiteur, en lui donnant le téléphone et l'e-mail. Il n'y a pas de faux message de succès.

Protection contre les abus : champ piège invisible, validation des champs, et filtre anti-spam de Formspree à activer dans son tableau de bord.

## Déployer

Le plus simple est [Vercel](https://vercel.com) (offre gratuite) : importez le dépôt, ajoutez les deux variables d'environnement, puis ajoutez votre nom de domaine. Netlify et Cloudflare Pages conviennent aussi.

Après la mise en ligne :

- vérifiez que `NEXT_PUBLIC_SITE_URL` est bien l'adresse définitive ;
- déclarez le site dans Google Search Console et envoyez `/sitemap.xml` ;
- créez ou mettez à jour la fiche Google Business Profile avec les mêmes nom, téléphone et zone.

## À fournir par le propriétaire

- Forme juridique, SIRET, adresse du siège, nom du directeur de la publication, hébergeur (mentions légales).
- Durée de conservation des demandes et garanties de transfert Formspree (politique de confidentialité).
- Nom de domaine.
- Compte Formspree et son identifiant.
- Photos de nettoyage (la page de service n'en a pas encore).
- Une adresse e-mail dédiée à l'entreprise, si possible : l'adresse actuelle ressemble à une date de naissance et est affichée publiquement.
- Confirmation du numéro WhatsApp (le même que le téléphone par défaut).
- Validation des textes de la page « À propos » (section « Notre façon de travailler »), rédigés à partir de la fiche de l'entreprise.
- Ajout de l'adresse postale dans `lib/schema.ts` pour les données structurées, une fois confirmée.

## Choix de contenu

- Les prestations viennent de la fiche de l'entreprise. Rien d'autre n'est annoncé : pas de certification, d'assurance, d'avis, d'ancienneté ni de garantie.
- Les mentions « garanti » et « intervention rapide » de la fiche ne sont pas reprises tant que l'entreprise n'a pas précisé ce qu'elles couvrent. « Devis gratuit » est repris.
- Les légendes des photos décrivent uniquement ce qu'on y voit, sans nom de marque.
- Photos écartées du dossier : celles qui portent le nom d'un client (pharmacie), celle où apparaît une personne, des vues de chantier sans rapport avec les services, et des gros plans de cartes électroniques. Les vidéos ne sont pas utilisées (nom d'un client à l'image, ou images tremblantes).
- Aucun cookie ni outil de suivi. Si vous ajoutez Google Analytics, il faudra un bandeau de consentement et la mise à jour de la politique de confidentialité.

## Identité visuelle et animations

Le logo est celui fourni par l'entreprise (flamme et flocon), détouré sur fond transparent : `public/brand/logo.png`. Le favicon et l'icône d'écran d'accueil (`app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`) en sont tirés. L'original est conservé dans `public/brand/logo-original.png`. Les deux fines lignes orange et bleue évoquent les deux conduites d'une installation (départ et retour).

Le mouvement est volontairement mesuré et tout est défini dans `app/globals.css` :

- ouverture de page : les conduites se tracent, les mots du titre montent un à un, la photo se dévoile de bas en haut ;
- apparition des blocs au défilement (composant `Reveal`, un seul observateur pour toute la page) ;
- header qui se resserre et barre de progression de lecture (du chaud vers le froid) ;
- menu mobile qui se déroule, liens en cascade, bouton qui se transforme en croix ;
- survols : boutons, colonnes de métiers, photos, lignes de prestations ;
- galerie : photos en cascade au changement de filtre, agrandissement animé ;
- légère parallaxe sur les grandes photos (navigateurs récents), lueurs d'ambiance chaud/froid en haut de page.

Toutes les animations sont désactivées pour les personnes qui demandent de réduire les animations dans leur système, et le contenu reste visible si JavaScript est coupé. Pour retirer les lueurs d'ambiance, supprimez les lignes `<div className="ambient" … />` ; pour calmer le mouvement, ajustez les durées dans `globals.css`.
