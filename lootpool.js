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
  },
  {
    type: 'quiz',
    question: 'Welches Produkt gibt es auch als Augentropfen Intense?',
    answers: ['Bepanthol®', 'Laif® 900 Balance', 'Aspirin®', 'Bepanthen®'],
    correctIndex: 3
  },
  {
    type: 'quiz',
    question: 'Wie viele eLearnings bietet die Plattform ungefähr an?',
    answers: ['5', '10', 'über 15', 'über 50'],
    correctIndex: 2
  },
  {
    type: 'quiz',
    question: 'Welche Marke gehört zu den bekanntesten Schmerzmitteln von Bayer?',
    answers: ['Aspirin®', 'Phytohustil®', 'Talcid®', 'Bepanthen®'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Was ist ClubBayer?',
    answers: ['Eine Apotheke', 'Eine Fortbildungsplattform für Apothekenpersonal', 'Ein Online-Shop', 'Ein Gesundheitsforum'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Wann erhält man Prämienpunkte bei ClubBayer?',
    answers: ['Beim Lesen eines Artikels', 'Beim Teilen auf Social Media', 'Beim Login', 'Beim Abschluss eines eLearnings'],
    correctIndex: 3
  },
  {
    type: 'quiz',
    question: 'In welchem Land wurde Bayer gegründet?',
    answers: ['Schweiz', 'Deutschland', 'Österreich', 'USA'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Welche zusätzliche Variante gibt es von Aspirin?',
    answers: ['Aspirin Plus C', 'Aspirin Ultra', 'Aspirin Forte Max', 'Aspirin Gold'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Welche Produkt-Variante gibt es für die Augen?',
    answers: ['Bepanthen Augenspray', 'Bepanthen Augentropfen Intense', 'Bepanthen Eye Care', 'Bepanthen Vision'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Welches Produkt unterstützt innere Ruhe und Balance?',
    answers: ['Laif® 900 Balance', 'Talcid®', 'Lefax®', 'Elevit®'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Welches Produkt wird zur Unterstützung des Schlafs eingesetzt?',
    answers: ['Priorin®', 'Aspirin® Plus C', 'Lunalaif®', 'IberoBiotics®'],
    correctIndex: 2
  },
  {
    type: 'quiz',
    question: 'Was steht im Mittelpunkt der ClubBayer eLearnings?',
    answers: ['Unterhaltung', 'Produktwissen und Beratungskompetenz', 'Spiele', 'Social Media'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Was ist ein DauDi?',
    answers: ['Ein eLearning', 'Ein Medikament', 'Ein Produktdisplay für die Apotheke', 'Eine App'],
    correctIndex: 2
  },
  {
    type: 'quiz',
    question: 'Wo sollte DauDi in der Apotheke stehen?',
    answers: ['Im Lager', 'Im Pausenraum', 'Vor der Tür', 'Gut sichtbar im Verkaufsraum'],
    correctIndex: 3
  },
  {
    type: 'quiz',
    question: 'Womit sollte DauDi bestückt werden?',
    answers: ['Apothekenzeitschriften', 'Bayer-Produkten', 'Rezeptformularen', 'Kosmetik'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Warum soll das Warenangebot im DauDi zur Saison passen?',
    answers: ['Damit das Display moderner aussieht', 'Damit es für Kunden spannend bleibt und Kaufimpulse setzt', 'Damit die Apotheke mehr Platz hat', 'Damit weniger Produkte verkauft werden'],
    correctIndex: 2
  },
  {
    type: 'quiz',
    question: 'Was können Apotheken im Rahmen der DauDi-Aktionen einreichen?',
    answers: ['Fotos', 'Videos', 'Rechnungen', 'Rezepte'],
    correctIndex: 0
  },
  {
    type: 'quiz',
    question: 'Warum gibt es die DauDi-Community?',
    answers: ['Für Unterhaltung', 'Für Austausch, Aktionen und Teamspirit', 'Für Produktverkauf', 'Für Werbung'],
    correctIndex: 1
  }
];
