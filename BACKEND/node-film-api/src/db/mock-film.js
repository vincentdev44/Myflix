const films = [
    {
        id: 1,
        name: "Erreur de la banque en votre faveur",
        description: "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le Titanic, appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
        picture: "./assets/images/erreurdelabanqueenvotrefaveur.jpg",
        types: ["Drame", "Romance"],
        created: 1998,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 2,
        name: "Matrix",
        description: "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. A cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ? Nul ne le sait, et aucun homme n'est encore parvenu à en percer les defenses. Mais Morpheus est persuadé que Neo est l'Elu, le lib�rateur mythique de l'humanit� annonc� selon la proph�tie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents...",
        picture: "./assets/images/matrix.jpg",
        types: ["Action", "Science Fiction"],
        created: 1999,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 3,
        name: "Harry Potter",
        description: "Orphelin, Harry Potter a été recueilli à contrecœur par son oncle Vernon et sa tante Pétunia, aussi cruels que mesquins, qui n'hésitent pas à le faire dormir dans le placard sous l'escalier. Constamment maltraité, il doit en outre supporter les jérémiades de son cousin Dudley, garçon cupide et archi-gâté par ses parents. De leur côté, Vernon et Pétunia détestent leur neveu dont la présence leur rappelle sans cesse le tempérament imprévisible des parents du garçon et leur mort mystérieuse. À l'approche de ses 11 ans, Harry ne s'attend à rien de particulier – ni carte, ni cadeau, ni même un goûter d'anniversaire. Et pourtant, c'est à cette occasion qu'il découvre qu'il est le fils de deux puissants magiciens et qu'il possède lui aussi d'extraordinaires pouvoirs. Quand on lui propose d'intégrer Poudlard, la prestigieuse école de sorcellerie, il trouve enfin le foyer et la famille qui lui ont toujours manqué… et s'engage dans l'aventure de sa vie.",
        picture: "./assets/images/harrypotter.jpg",
        types: ["Fantastique", "Aventure", "Famille"],
        created: 2001,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 4,
        name: "Forrest Gump",
        description: "Quelques décennies d'histoire américaine, des années 1940 à la fin du XXème siècle, à travers le regard et l'étrange odyssée d'un homme simple et pur, Forrest Gump.",
        picture: "./assets/images/forrestgump.jpg",
        types: ["Romance", "Drame", "Comédie"],
        created: 1994,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 5,
        name: "Simpson",
        description: "Lorsqu'Homer pollue gravement le lac de Springfield, une agence de protection de l'environnement décide de mettre la ville en quarantaine en l'isolant sous un énorme dôme. Les Springfieldiens, fous de rage, sont bien décidés à lyncher le coupable. Devant cette vague d'animosité, les Simpson n'ont d'autre choix que de fuir et de s'exiler en Alaska.",
        picture: "./assets/images/simpson.jpg",
        types: ["Animation", "Aventure", "Comédie"],
        created: 2007,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 6,
        name: "South Park",
        description: "Quatre garnements ont reussi a assister a la projection d'un film canadien de Terance et Phillip interdit au moins de dix-huit ans. Tetanises de bonheur et transportes au septieme ciel, Stan, Kyle, Kenny et Cartman n'ont plus qu'une idee: transmettre leur savoir a leurs copines et copains verts d'envie. Bientot les enseignants sont impuissants face a l'anarchie qui s'installe. Alertees, les meres s'unissent pour que leurs rejetons se calment mais par leurs methodes expeditives provoquent la guerre entre le gouvernement canadien et la Maison-Blanche.",
        picture: "./assets/images/southpark.jpg",
        types: ["Animation", "Comédie"],
        created: 1998,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 7,
        name: "Ace Ventura",
        description: "Le fils du célébre et excentrique détective tente de suivre les traces de son père.",
        picture: "./assets/images/aceventura.jpg",
        types: ["Comédie", "Action", "Aventure"],
        created: 1994,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 8,
        name: "Pokemon",
        description: "Sacha est un jeune garçon qui vit dans le monde des pokemon. Un pokemon est une petite créature possédant divers pouvoirs. Le but de Sacha est de devenir maitre pokemon. Entouré de ses amis il va vivre de nombreuses aventures et combattre la Team Rocket, des voleurs de pokemon.",
        picture: "./assets/images/pokemon.jpg",
        types: ["Aventure", "Action", "Animation"],
        created: 1997,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 9,
        name: "ah si j'etais riche",
        description: "Entre sa femme qui engage une procédure de divorce, les dettes qui s'accumulent et un emploi menacé, Aldo Bonnard voit sa vie se déliter, jusqu'au jour où il gagne une fortune au loto. Alors qu'il est sur le point d'annoncer la nouvelle à son épouse, il découvre qu'elle le trompe avec son nouveau patron. Deux solutions se présentent alors à lui : soit partager ses gains faramineux avec elle et... son rival, soit dissimuler sa fortune et feindre avoir gagné après le divorce. Il choisit cette dernière option, mais vit parallèlement et clandestinement comme un homme richissime.",
        picture: "./assets/images/ahsijetaisriche.jpg",
        types: ["Comédie"],
        created: 2002,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 10,
        name: "Ambulance",
        description: "Will Sharp, un vétéran décoré fait appel à la seule personne indigne de confiance, son frère adoptif Danny pour trouver l’argent afin de couvrir les frais médicaux de sa femme. Ce dernier, un charismatique criminel au long cours, au lieu de lui donner de l’argent, lui propose un coup : le plus grand braquage de banque de l’histoire de Los Angeles : 32 millions de dollars. Will, prêt à tout pour sauver sa femme, accepte. Mais quand leur affaire prend un tour spectaculairement désastreux, les deux frères n’ont pas d’autre choix que de détourner une ambulance avec à son bord un vieux flic mortellement blessé et l’ambulancière Cam Thompson. Pendant la course poursuite infernale qui s’ensuit, Will et Danny vont devoir échapper aux forces de l’ordre surmotivées postées aux 4 coins de la ville, tenter de garder leurs otages en vie et éviter de s’entre tuer tout en exécutant l’évasion la plus spectaculaire que la ville de Los Angeles n’ait jamais vue.",
        picture: "./assets/images/ambulance.jpg",
        types: ["Thriller", "Action"],
        created: 2022,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 11,
        name: "Malcolm",
        description: "Petit génie malgré lui, Malcolm vit dans une famille hors du commun. Le jeune surdoué n'hésite pas à se servir de son intelligence pour faire les 400 coups avec ses frères. Et les parents tentent tant bien que mal de canaliser l'énergie de ces petits démons.",
        picture: "./assets/images/malcolm.jpg",
        types: ["Comédie"],
        created: 2000,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 12,
        name: "Gladiator",
        description: "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de MarcAurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
        picture: "./assets/images/gladiator.jpg",
        types: ["Action", "Aventure"],
        created: 2000,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 13,
        name: "Retour vers le futur 1",
        description: "1985. Le jeune Marty McFly mène une existence anonyme auprès de sa petite amie Jennifer, seulement troublée par sa famille en crise et un proviseur qui serait ravi de l'expulser du lycée. Ami de l'excentrique professeur Emmett Brown, il l'accompagne un soir tester sa nouvelle expérience : le voyage dans le temps via une DeLorean modifiée. La démonstration tourne mal : des trafiquants d'armes débarquent et assassinent le scientifique. Marty se réfugie dans la voiture et se retrouve transporté en 1955. Là, il empêche malgré lui la rencontre de ses parents, et doit tout faire pour les remettre ensemble, sous peine de ne pouvoir exister...",
        picture: "./assets/images/retourverslefutur1.jpg",
        types: ["Science Fiction", "Aventure"],
        created: 1985,
        video: "./assets/videos/netflix-video-devices.webm"
    },
    {
        id: 14,
        name: "It",
        description: "À Derry, dans le Maine, sept gamins ayant du mal à s'intégrer se sont regroupés au sein du Club des Ratés. Rejetés par leurs camarades, ils sont les cibles favorites des gros durs de l'école. Ils ont aussi en commun d'avoir éprouvé leur plus grande terreur face à un terrible prédateur métamorphe qu'ils appellent Ça. Car depuis toujours, Derry est en proie à une créature qui émerge des égouts tous les 27 ans pour se nourrir des terreurs de ses victimes de choix : les enfants. Bien décidés à rester soudés, les Ratés tentent de surmonter leurs peurs pour enrayer un nouveau cycle meurtrier. Un cycle qui a commencé un jour de pluie lorsqu'un petit garçon poursuivant son bateau en papier s'est retrouvé face-à-face avec le Clown Grippe-Sou …",
        picture: "./assets/images/it.jpg",
        types: ["Horreur"],
        created: 1992,
        video: "./assets/videos/netflix-video-devices.webm"
    }
];

module.exports = films