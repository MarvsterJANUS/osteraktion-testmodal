// ── Loot Pool ─────────────────────────────────────────
// Two types of entries are supported:
//
// Fact  →  { title, fact }
// Quiz  →  { type: 'quiz', question, answers: [...], correctIndex }
//
// Add, remove or edit entries freely.
const LOOT_POOL = [

  // ── Facts ────────────────────────────────────────────
  {
    title: 'Wusstest du schon?',
    fact: 'Die Tradition des Eierfärbens zu Ostern geht auf das 13. Jahrhundert zurück. Ursprünglich wurden Eier rot gefärbt – als Symbol für das Blut Christi.'
  },
  {
    title: 'WUSSTEST DU SCHON?!',
    fact: 'COLIN HAT DIE GRÖßTEN FÜßE DER WELT!'
  },

  // ── Quiz questions ────────────────────────────────────
  {
    type: 'quiz',
    question: 'Was erhält man nach Abschluss eines eLearnings bei ClubBayer?',
    answers: ['Rabattcodes', 'Prämienpunkte', 'Gutscheine', 'Zertifikate'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Wofür können gesammelte ClubBayer Prämienpunkte verwendet werden?',
    answers: ['Für kostenlose Medikamente', 'Für Produkte im Shop', 'Für Prämien in der Prämienwelt', 'Für eLearning Downloads'],
    correctIndex: 2
  },
  {
    type: 'quiz',
    question: 'Was gehört zum Abschluss eines eLearnings?',
    answers: ['Wissenstest', 'Telefoninterview', 'Live-Prüfung', 'Videoaufnahme'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Welches dieser Produkte wird häufig bei Erkältungssymptomen eingesetzt?',
    answers: ['Talcid®', 'Aspirin® Complex', 'Priorin®', 'Lefax®'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Welches dieser Produkte wird bei Magenbeschwerden verwendet?',
    answers: ['Talcid®', 'Bepanthen®', 'Priorin®', 'Elevit®'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Welches dieser Produkte wird für die Hautpflege und Wundheilung eingesetzt?',
    answers: ['Bepanthen®', 'Iberogast®', 'Lefax®', 'Aspirin®'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Welches dieser Produkte unterstützt die Darmflora?',
    answers: ['Bepanthen®', 'Rennie®', 'Iberogast®', 'IberoBiotics®'],
    correctIndex: 3
  },
  {
    type: 'quiz',
    question: 'Welches dieser Produkte wird häufig bei Verdauungsproblemen eingesetzt?',
    answers: ['Calmalaif®', 'Elevit®', 'Iberogast®', 'Rennie®'],
    correctIndex: 2
  },
  {
    type: 'quiz',
    question: 'Welches dieser Produkte wird gegen Blähungen eingesetzt?',
    answers: ['Lefax®', 'Talcid®', 'Priorin®', 'IberoBiotics®'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Welches dieser Produkte unterstützt die Haargesundheit?',
    answers: ['Calmalaif®', 'Priorin®', 'Iberogast®', 'Talcid®'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Welches dieser Produkte ist speziell für Schwangere entwickelt?',
    answers: ['Elevit®', 'Priorin®', 'Iberogast®', 'Lefax®'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Welches Produkt hilft bei Hustenreiz?',
    answers: ['Priorin®', 'Phytohustil®', 'IberoBiotics®', 'Bepanthol®'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Welches Produkt gibt es auch als Variante Plus C?',
    answers: ['Talcid®', 'Phytohustil®', 'Aspirin®', 'Bepanthen®'],
    correctIndex: 2
  }
];
