// Checkpoints de la VSP « Avant notre appel », en 6 prises. Pas de texte à lire : tu jettes un œil et tu parles.
// Mêmes textes que les diapos du studio (vsp-diapos/notes.json). Mot-clé : LIBERTÉ (partie 4), dit une seule fois sans l'annoncer.
// Parties retirées : « preuves » et « questions / objections » (traitées pendant l'appel).
const SCRIPTS_RETIRES = ["vsp6", "vsp7"];
const SCRIPTS_VSP = [
{ id: "vsp1", version: 6, titre: "VSP 1/6 · Bravo et règle du mot-clé", texte:
`① BRAVO
→ T'as réservé ton appel
→ « La plupart des gens rêvent de changer de vie, très peu passent à l'action. Toi, tu l'as fait. »

② LA RÈGLE DU MOT-CLÉ
→ Un mot est caché dans cette vidéo
→ Envoie-le-moi en DM avant l'appel, sinon pas d'appel
→ Pas pour être strict : si tu peux pas regarder cette vidéo, tu pourras pas faire le reste
→ Ne donne PAS de durée` },

{ id: "vsp2", version: 6, titre: "VSP 2/6 · Le miroir", texte:
`③ LE MIROIR
→ Un taf qui te ressemble pas, tu rentres sans énergie
→ À la fin du mois, il reste pas grand-chose
→ Reconversion ou complément : tu sens que t'es pas à ta place

④ CE QUE T'AS DÉJÀ ESSAYÉ
→ Dropshipping, crypto, immo, trading
→ Il faut de l'argent, ou des années… ou ça sent l'arnaque

⑤ TU N'ES PAS LE PROBLÈME
→ Pas ta motivation, pas ton âge, pas ton diplôme
→ Le vrai problème est ailleurs` },

{ id: "vsp3", version: 6, titre: "VSP 3/6 · Le vrai problème et les 3 pièces", texte:
`⑥ TON TEMPS CONTRE DE L'ARGENT
→ Une heure de travail = un salaire
→ Ton temps est limité, donc tes revenus sont bloqués

⑦ LES 3 PIÈCES DU PUZZLE
→ 1. Une compétence qui a de la valeur, depuis ton téléphone
→ 2. Un suivi, pour pas lâcher
→ 3. Des opportunités : des gens prêts à te payer

⑧ POURQUOI ÇA A PAS MARCHÉ
→ « Internet te donne la première pièce, et après on te dit débrouille-toi. »
→ Personne pour te corriger, te pousser, t'ouvrir les portes
→ « C'est pas de ta faute : il te manquait deux pièces. »

⑨ LA COMPÉTENCE : LE SETTING — 30 s max
→ Les entrepreneurs reçoivent trop de messages
→ Le setter répond, comprend le besoin, cale le rendez-vous
→ Un téléphone, du réseau, c'est tout` },

{ id: "vsp4", version: 6, titre: "VSP 4/6 · Mon accompagnement et la méthode (mot-clé)", texte:
`⑩ MON ACCOMPAGNEMENT : 3 MOIS
→ Compétence : je t'apprends étape par étape
→ Suivi : 2 coachings par semaine, on relit tes conversations
→ Réseau : je te mets en relation avec mes apporteurs d'affaires

⑪ LA MÉTHODE
→ Naturellement, UNE seule fois : « C'est ce que j'appelle la méthode liberté. »
→ N'annonce PAS que c'est le mot-clé, enchaîne direct` },

{ id: "vsp5", version: 6, titre: "VSP 5/6 · D'où je viens", texte:
`⑫ D'OÙ JE VIENS — ton vrai parcours, dans l'ordre
→ Les petits boulots : entrepôt, chantiers
→ Au pair aux USA : New York, puis Atlanta
→ Le setting : pourquoi t'as commencé
→ Aujourd'hui
→ « J'en vis » : seulement si c'est vrai aujourd'hui` },

{ id: "vsp8", version: 6, titre: "VSP 6/6 · Dans 6 mois et conclusion", texte:
`⑬ DANS 6 MOIS
→ Plus de boule au ventre le matin
→ Tu sais ce que tu fais, et pourquoi
→ « La vraie liberté, c'est pas juste l'argent, c'est d'avoir le choix. »

⑭ ON SE RETROUVE EN APPEL
→ Envoie-moi le mot-clé en DM
→ J'ai hâte d'échanger avec toi. À très vite.` }
];
