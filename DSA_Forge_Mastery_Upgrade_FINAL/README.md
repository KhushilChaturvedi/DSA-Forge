# DSA Forge — Full DSA Pool

A self-contained browser DSA learning/quiz application.

## Current bank
- 410 total questions
- 28 topics
- Foundation: 103 · Easy: 103 · Medium: 103 · Hard: 101
- Progressive hints, reference solutions, teach-back notes
- Topic, level and question-type filtering
- Unseen-only mode
- Session score and local progress tracking

## Coverage philosophy
The pool follows a pattern-oriented progression used in current interview-prep roadmaps: arrays/hash usage, two pointers, stacks, binary search, sliding windows, linked lists, trees/BSTs, tries, backtracking, heaps, intervals, greedy, graphs, 1-D/2-D DP, advanced graphs, bit manipulation and math/geometry. Current roadmaps explicitly emphasize these patterns and prerequisites rather than treating DSA as an unstructured list.

Sources used for curriculum calibration: NeetCode's interview-prep guidance and roadmap, LeetCode Top Interview 150, and cp-algorithms for advanced algorithm coverage.

## Run
Open `index.html` in a modern browser. No backend is required. Progress is stored locally with localStorage.

## Important limitation
The app is currently a structured knowledge/reasoning trainer, not a full online judge. Coding questions test algorithm selection and reasoning through the quiz UI. A future judge layer can add editable code, hidden tests, language execution, complexity checks, and generated edge cases.


## Forge mastery upgrade

The practice layer now includes:
- In-browser JavaScript coding editor with visible tests and hidden tests.
- Web Worker execution with a 1.2 second timeout per test.
- Correctness gate before complexity assessment.
- Advisory complexity feedback using code-structure heuristics and browser timing.
- Topic weakness signals from repeated attempts.
- Spaced review scheduling with increasing intervals after successful work.
- Topic mastery gates requiring multiple attempts, consistent accuracy, hidden-test coding passes, and complexity evidence.

The executable judge currently maps a curated set of canonical coding questions. The remaining question bank still works in the original reasoning/quiz mode.
