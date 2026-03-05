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
    question: 'Seit welchem Jahr findet am Weißen Haus in Washington der "Easter Egg Roll" statt?',
    answers: ['1823', '1878', '1901', '1952'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'Welches Tier bringt in Australien traditionell die Ostereier?',
    answers: ['Känguru', 'Koala', 'Bilby', 'Wombat'],
    correctIndex: 2
  },
  {
    type: 'quiz',
    question: 'Für wie viel wurde das teuerste Fabergé-Ei versteigert?',
    answers: ['2,5 Mio. $', '18,5 Mio. $', '45 Mio. $', '7 Mio. $'],
    correctIndex: 1
  },
  {
    type: 'quiz',
    question: 'In welchem Jahrhundert tauchte der Osterhase erstmals in deutschen Quellen auf?',
    answers: ['15. Jahrhundert', '16. Jahrhundert', '17. Jahrhundert', '18. Jahrhundert'],
    correctIndex: 2
  }
];
