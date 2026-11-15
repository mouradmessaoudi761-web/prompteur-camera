// Script de la VSP, découpé en 6 parties (une partie = une prise, sous les 30 Mo en qualité très légère).
// Mêmes textes que les diapos du studio (vsp-diapos/notes.json). Mot-clé : LIBERTÉ (partie 4).
// Parties retirées : « preuves » et « questions / objections » (traitées pendant l'appel).
const SCRIPTS_RETIRES = ["vsp6", "vsp7"];
const SCRIPTS_VSP = [
{ id: "vsp1", version: 5, titre: "VSP 1/6 · Accroche et règle du mot-clé", texte:
`Salut à toi !

Si tu regardes cette vidéo aujourd'hui, c'est que tu as réservé un appel avec moi.

Et franchement, bravo. Parce que la plupart des gens rêvent de changer de vie, mais très peu passent vraiment à l'action.

Toi, tu l'as fait. Et je suis vraiment fier de toi.

Avant d'aller plus loin, il y a une règle importante, pour qu'on avance hyper vite.

Il y a un mot-clé caché quelque part dans cette vidéo. C'est fait exprès : tu ne sais pas à quel moment il va arriver.

Avant notre appel, tu devras juste me l'envoyer en message. Si je ne le reçois pas, l'appel est annulé.

Je ne suis pas strict pour le plaisir, hein. C'est juste que si tu ne peux pas prendre un quart d'heure pour regarder cette vidéo, tu ne pourras pas faire ce qu'il faut pour réussir.

Alors installe-toi tranquillement.` },

{ id: "vsp2", version: 5, titre: "VSP 2/6 · Le miroir", texte:
`Je vais te décrire une situation. Dis-moi si tu te reconnais.

Tu te lèves le matin pour un travail qui ne te ressemble même pas. Tu fais tes heures, tu rentres sans énergie, et à la fin du mois, il ne te reste pas grand-chose.

Et franchement, c'est le cas de la plupart des gens.

Tu sens que tu vaux plus que ça. Tu as envie de changer. Peut-être une reconversion, peut-être juste un complément de revenu, pour respirer un peu.

Mais au fond, tu sais que tu n'es pas à ta place. Et si tu te reconnais là-dedans, c'est déjà un bon signe.

Alors tu as cherché. Tu as regardé des vidéos sur Internet.

On t'a parlé de dropshipping, de crypto, d'immobilier, de trading… On t'a parlé de plein de choses.

Et à chaque fois, c'est la même chose : il faut de l'argent pour commencer, ou des années pour apprendre. Ou alors, tu sens que ça sent l'arnaque.

Et petit à petit, tu commences à te dire que ce n'est peut-être pas pour toi. Que les gens qui travaillent avec leur téléphone, qui voyagent, qui choisissent leurs horaires, ils ont juste de la chance. Ou qu'ils mentent. Ou qu'ils avaient déjà de l'argent au départ.

En fait, tu te trouves des excuses.

Ce que je veux que tu comprennes, c'est que tu n'es pas le problème.

Le vrai problème, ce n'est pas ton manque de motivation. Ce n'est pas ton âge, ni ton diplôme.

Le vrai problème, il est ailleurs. Et c'est ce que je vais te montrer maintenant.` },

{ id: "vsp3", version: 5, titre: "VSP 3/6 · Le vrai problème", texte:
`Aujourd'hui, la plupart des gens échangent leur temps contre de l'argent. Une heure de travail, un salaire.

Le problème, c'est que ton temps est limité. Tu ne peux pas travailler vingt-cinq heures par jour.

Donc tes revenus seront toujours bloqués. Et ta liberté aussi.

Et c'est ça qui est frustrant.

Pour en sortir, il te faut trois choses.

Un : une compétence qui a de la valeur, et que tu peux exercer depuis ton téléphone.

Deux : un suivi. Quelqu'un qui te forme et qui te suit, pour que tu n'abandonnes pas.

Trois : des opportunités. Des gens qui ont besoin de toi, et qui sont prêts à te payer.

Ça, ce sont les trois pièces du puzzle.

Alors pourquoi ça n'a pas marché jusqu'ici ? C'est là que ça coince.

Les formations que tu trouves sur Internet te donnent, au mieux, la première pièce. Et après, on te dit : débrouille-toi.

Personne pour te corriger. Personne pour te pousser quand tu doutes. Et surtout, personne pour t'ouvrir les portes.

Donc si ça n'a pas marché pour toi, ce n'est pas de ta faute. On t'a donné une pièce du puzzle, alors qu'il en fallait trois.

La compétence dont je te parle, c'est le setting.

Les coachs, les formateurs, les entrepreneurs qui vendent sur Instagram reçoivent énormément de messages. Ils n'ont pas le temps de tout gérer.

Le setter, c'est la personne qui répond à ces messages, qui comprend le besoin de chaque prospect, et qui lui cale un rendez-vous.

Un téléphone, du réseau. Et c'est tout.` },

{ id: "vsp4", version: 5, titre: "VSP 4/6 · Ma méthode (mot-clé)", texte:
`Maintenant, concrètement, comment je t'accompagne ?

On travaille ensemble pendant quatre mois. Et mon accompagnement repose justement sur les trois pièces du puzzle.

Première pièce : la compétence. Je t'apprends le setting étape par étape. Comment démarrer une conversation, comment comprendre le besoin d'une personne, comment caler un rendez-vous sans jamais forcer. C'est cette compétence qui a tout changé pour moi, et c'est elle que je vais te transmettre.

Deuxième pièce : le suivi. On se voit deux fois par semaine en coaching. On regarde tes conversations ensemble, je te corrige, je réponds à tes questions. Tu n'es jamais seul face à ton téléphone.

Troisième pièce, et c'est celle qui fait la différence : le réseau. Je te mets en relation avec mon réseau d'apporteurs d'affaires, pour t'aider à trouver tes premières missions auprès d'entrepreneurs qui cherchent des setters. C'est ça, la force.

Prends un exemple. Quelqu'un qui démarre seul, avec une formation en vidéo : il apprend la théorie, mais il ne sait pas où trouver sa première mission. Personne ne relit ses messages, et au bout d'un mois, il lâche.

Avec les trois pièces, c'est différent. Tu sais quoi faire, tu es corrigé chaque semaine, et des portes s'ouvrent pour démarrer.

Compétence, suivi, réseau : c'est ce que j'appelle la méthode LIBERTÉ.

Retiens bien ce mot : LIBERTÉ.

C'est le mot-clé que tu dois m'envoyer avant notre appel.` },

{ id: "vsp5", version: 5, titre: "VSP 5/6 · Qui je suis", texte:
`Tu te demandes peut-être qui je suis pour te parler de tout ça.

Il n'y a pas si longtemps, j'étais exactement à ta place. Je travaillais dans un entrepôt, je portais des sacs toute la journée. J'ai fait des chantiers. Je partais le matin, je rentrais le soir, et le lendemain, je recommençais.

À côté, je voyageais énormément. J'ai même vécu aux États-Unis. Et à chaque fois, je tombais sur le même problème : l'argent. C'était mon mur.

Je ne voulais plus travailler pour un patron. Je voulais travailler de là où je veux. Alors j'ai commencé le setting.

J'ai appris à parler aux gens par message, à comprendre ce qu'ils voulaient vraiment, et j'ai commencé à caler des rendez-vous. Et là, je me suis dit : en fait, ça s'apprend.` },

{ id: "vsp8", version: 5, titre: "VSP 6/6 · Ta vie dans 6 mois et conclusion", texte:
`Maintenant, prends deux secondes.

Imagine-toi dans six mois. Tu te réveilles, et tu n'as plus cette boule au ventre en pensant à ta journée.

Tu ouvres ton téléphone, tu réponds à tes conversations, tu cales des rendez-vous. Tu sais ce que tu fais, et tu sais pourquoi tu le fais.

Et surtout, tu as retrouvé du temps. Pour toi, pour tes proches, pour ces projets que tu repousses depuis trop longtemps.

C'est ça, la vraie liberté. Pas juste l'argent : le choix. Tu ne dépends de personne d'autre que de toi.

Bon, écoute, maintenant on se retrouve en appel.

Juste avant, n'oublie pas : envoie-moi le mot-clé en message. Tu l'as entendu tout à l'heure. Sans mot-clé, pas d'appel.

J'ai hâte d'échanger avec toi.

À très vite !` }
];
