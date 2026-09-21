const QUESTION_BANK = [
  {
    "id": "f1",
    "topic": "Foundations & Complexity",
    "level": "foundation",
    "type": "complexity",
    "title": "Nested loops, but not always n²",
    "body": "What is the tightest asymptotic time complexity of the algorithm below?",
    "code": "for (i = 1; i <= n; i *= 2)\n    for (j = 0; j < n; j++)\n        work(j);",
    "options": [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    "answer": 2,
    "hints": [
      "Count the number of values taken by i.",
      "The outer loop doubles; the inner loop still scans n items each time."
    ],
    "solution": "The outer loop runs Θ(log n) times because i takes 1,2,4,8,… up to n. Each iteration performs Θ(n) work. Therefore the product is Θ(n log n).",
    "teaching": [
      "A logarithmic loop multiplied by a linear loop is usually Θ(n log n).",
      "Always analyze each loop’s iteration count before multiplying."
    ]
  },
  {
    "id": "f2",
    "topic": "Foundations & Complexity",
    "level": "foundation",
    "type": "complexity",
    "title": "Amortized thinking: dynamic array append",
    "body": "A dynamic array doubles its capacity whenever it becomes full. Over n appends starting from an empty array, what is the amortized cost per append?",
    "options": [
      "Θ(1)",
      "Θ(log n)",
      "Θ(n)",
      "Θ(n log n)"
    ],
    "answer": 0,
    "hints": [
      "Resizing is expensive but happens infrequently.",
      "Think about the total number of elements copied across all resizes."
    ],
    "solution": "Θ(1) amortized. Resizes copy 1,2,4,8,… elements, so the total copied over n appends is O(n). Adding O(n) ordinary insertion work gives O(n) total, hence O(1) amortized per append.",
    "teaching": [
      "Worst-case cost of a single operation can be Θ(n) while amortized cost remains Θ(1)."
    ]
  },
  {
    "id": "f3",
    "topic": "Foundations & Complexity",
    "level": "foundation",
    "type": "design",
    "title": "Pick the structure for membership",
    "body": "You need to answer 1,000,000 queries of the form: “Have I seen this ID before?” Order does not matter. Which structure is the best default choice?",
    "options": [
      "Stack",
      "Hash set",
      "Queue",
      "Binary heap"
    ],
    "answer": 1,
    "hints": [
      "The core operation is membership testing.",
      "You do not need the items sorted."
    ],
    "solution": "A hash set gives expected O(1) membership tests and naturally represents unique keys. A balanced tree would also work in O(log n), but the hash set is the stronger default when ordering is unnecessary.",
    "teaching": [
      "Start from required operations, not from data-structure names."
    ]
  },
  {
    "id": "f4",
    "topic": "Foundations & Complexity",
    "level": "foundation",
    "type": "mcq",
    "title": "Identify the invariant",
    "body": "For binary search on a sorted array, which invariant is essential?",
    "options": [
      "The array is always strictly increasing after each step.",
      "If the target exists, it remains inside the current search interval.",
      "The middle element is always the target.",
      "The search interval must contain an even number of elements."
    ],
    "answer": 1,
    "hints": [
      "Ask: what must remain true after each discarded half?",
      "Binary search is safe only if the discarded half cannot contain a valid target."
    ],
    "solution": "The invariant is: if the target exists, it remains inside the maintained search interval. Each comparison discards a half while preserving that statement.",
    "teaching": [
      "Invariants are what let you prove a loop never throws away the answer."
    ]
  },
  {
    "id": "f5",
    "topic": "Foundations & Complexity",
    "level": "easy",
    "type": "debug",
    "title": "Complexity bug: early exit",
    "body": "A developer says the following search is O(log n) because it 'checks the middle and halves the problem'. What is the actual worst-case complexity if the array is unsorted?",
    "code": "mid = n/2\nif A[mid] == x: return true\nfor i in 0..n-1:\n    if A[i] == x: return true\nreturn false",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n log n)"
    ],
    "answer": 2,
    "hints": [
      "The array is unsorted, so there is no ordering-based reason to discard half.",
      "Look at the fallback loop."
    ],
    "solution": "Worst-case Θ(n). The middle check is constant time, but an unsorted array may require scanning every element in the fallback loop. Halving once does not make a search logarithmic.",
    "teaching": [
      "Binary search requires a reusable ordering invariant, not merely checking a middle index."
    ]
  },
  {
    "id": "a1",
    "topic": "Arrays & Strings",
    "level": "foundation",
    "type": "coding",
    "title": "Two Sum: choose the right idea",
    "body": "Given an integer array and a target, return the indices of two distinct elements whose sum equals the target. Aim for O(n) time. Which core pattern should you use?",
    "options": [
      "Sort + nested loops",
      "Hash map from value to index",
      "DFS over all pairs",
      "Min-heap"
    ],
    "answer": 1,
    "hints": [
      "For each value x, what previous value would complete the target?",
      "You want to ask whether a complement has already appeared."
    ],
    "solution": "Use a hash map. For each x at index i, compute c = target - x. If c is already in the map, return its stored index and i; otherwise store x→i. Expected O(n) time and O(n) space.",
    "teaching": [
      "The key insight is complement lookup: transform pair search into membership lookup."
    ]
  },
  {
    "id": "a2",
    "topic": "Arrays & Strings",
    "level": "easy",
    "type": "coding",
    "title": "Maximum subarray",
    "body": "Find the contiguous subarray with maximum sum in O(n) time. What recurrence captures the decision at each position?",
    "options": [
      "bestEndingHere = min(A[i], bestEndingHere + A[i])",
      "bestEndingHere = max(A[i], bestEndingHere + A[i])",
      "bestEndingHere = bestEndingHere * A[i]",
      "bestEndingHere = bestEndingHere + abs(A[i])"
    ],
    "answer": 1,
    "hints": [
      "At i, either the previous running segment helps or you start fresh at A[i].",
      "Track the best subarray that must end exactly at i."
    ],
    "solution": "Kadane’s algorithm: bestEndingHere = max(A[i], bestEndingHere + A[i]); best = max(best, bestEndingHere). Starting fresh is better when the previous sum would reduce the result.",
    "teaching": [
      "A useful DP state is often 'the best answer that ends exactly here', which makes the recurrence local."
    ]
  },
  {
    "id": "a3",
    "topic": "Arrays & Strings",
    "level": "easy",
    "type": "trace",
    "title": "Two pointers on a sorted array",
    "body": "A = [1,2,4,6,8,9], target = 10. Starting with left=0 and right=5, which pair is found first?",
    "options": [
      "1 + 9",
      "2 + 8",
      "4 + 6",
      "1 + 8"
    ],
    "answer": 0,
    "hints": [
      "Compute the first sum: A[0] + A[5].",
      "Stop immediately if it equals the target."
    ],
    "solution": "The first pair is 1 + 9 = 10. This is exactly why the two-pointer method works well on sorted arrays: the extreme pair gives a useful comparison immediately.",
    "teaching": [
      "When the array is sorted, the sum comparison tells you which pointer can safely move."
    ]
  },
  {
    "id": "a4",
    "topic": "Arrays & Strings",
    "level": "medium",
    "type": "coding",
    "title": "Longest substring without repeats",
    "body": "Find the length of the longest substring without repeating characters. Which implementation pattern is the best target for O(n)?",
    "options": [
      "For every start, extend until a duplicate appears — O(n²)",
      "Sliding window + last-seen index",
      "Sort the string then scan it",
      "Backtracking over all substrings"
    ],
    "answer": 1,
    "hints": [
      "Maintain a window that always satisfies 'all characters are unique'.",
      "When a duplicate enters, move the left boundary past its previous position."
    ],
    "solution": "Use a sliding window and a map of last-seen positions. For right from 0..n-1, if s[right] was seen at p, set left = max(left, p+1). Then update lastSeen and maximize right-left+1. O(n) time.",
    "teaching": [
      "Sliding window is strongest when you can maintain a validity condition while moving boundaries only forward."
    ]
  },
  {
    "id": "a5",
    "topic": "Arrays & Strings",
    "level": "medium",
    "type": "debug",
    "title": "Off-by-one in prefix sums",
    "body": "A prefix-sum array is defined as pref[i] = sum of A[0..i-1]. Which expression gives the sum of A[l..r] inclusive?",
    "options": [
      "pref[r] - pref[l]",
      "pref[r+1] - pref[l]",
      "pref[r] - pref[l+1]",
      "pref[r+1] - pref[l+1]"
    ],
    "answer": 1,
    "hints": [
      "The prefix array has a leading zero-sized prefix.",
      "To include A[r], you need the boundary immediately after r."
    ],
    "solution": "pref[r+1] - pref[l]. The prefix up to index r+1 contains A[0..r], while pref[l] contains A[0..l-1], so subtraction leaves A[l..r].",
    "teaching": [
      "Prefix sums are easiest to reason about as boundary positions, not element positions."
    ]
  },
  {
    "id": "a6",
    "topic": "Arrays & Strings",
    "level": "hard",
    "type": "coding",
    "title": "Trapping Rain Water: choose the invariant",
    "body": "Given bar heights, how can water above index i be expressed using prefix/suffix information?",
    "options": [
      "max(0, leftMax + rightMax)",
      "min(leftMax, rightMax) - height[i]",
      "max(leftMax, rightMax) - height[i]",
      "leftMax + rightMax - height[i]"
    ],
    "answer": 1,
    "hints": [
      "The water level is limited by the shorter wall on the two sides.",
      "Water cannot be negative."
    ],
    "solution": "At i, trapped[i] = max(0, min(leftMax[i], rightMax[i]) - height[i]). This yields an O(n) prefix/suffix method; a two-pointer implementation gets O(1) extra space.",
    "teaching": [
      "Many geometry-on-array problems reduce to identifying the limiting boundary."
    ]
  },
  {
    "id": "ll1",
    "topic": "Linked Lists",
    "level": "foundation",
    "type": "design",
    "title": "Why use a linked list?",
    "body": "Which requirement most directly favors a linked list over an array?",
    "options": [
      "Fast random access by index",
      "Frequent insertions/deletions when you already hold the node position",
      "Better cache locality",
      "Binary search by index"
    ],
    "answer": 1,
    "hints": [
      "Think about what arrays must shift after an insertion.",
      "A linked list can reconnect pointers without moving neighboring payloads."
    ],
    "solution": "If you already have a node/reference at the insertion or deletion position, a linked list can update a constant number of pointers. Random access is O(n), and cache locality is generally worse than arrays.",
    "teaching": [
      "Linked lists trade indexing and locality for pointer-based structural updates."
    ]
  },
  {
    "id": "ll2",
    "topic": "Linked Lists",
    "level": "easy",
    "type": "coding",
    "title": "Reverse a singly linked list",
    "body": "Which loop invariant best describes an iterative linked-list reversal?",
    "options": [
      "The suffix after current is already sorted.",
      "prev points to the reversed prefix and current starts the unreversed suffix.",
      "current always points to the tail.",
      "The list length decreases every iteration."
    ],
    "answer": 1,
    "hints": [
      "After k iterations, what part of the original list has had its arrows reversed?",
      "You need a saved next pointer before changing current.next."
    ],
    "solution": "Maintain prev = reversed prefix head and current = first node of the unreversed suffix. Save next=current.next, set current.next=prev, then advance prev=current and current=next. At the end, prev is the new head.",
    "teaching": [
      "Pointer problems become manageable when you explicitly name the processed and unprocessed regions."
    ]
  },
  {
    "id": "ll3",
    "topic": "Linked Lists",
    "level": "medium",
    "type": "coding",
    "title": "Cycle detection",
    "body": "Which algorithm detects a cycle in a singly linked list using O(1) extra space?",
    "options": [
      "Hash set of all node addresses",
      "Floyd slow/fast pointers",
      "Sort node addresses",
      "Binary search on node values"
    ],
    "answer": 1,
    "hints": [
      "Use two runners with different speeds.",
      "If one repeatedly laps another on a cycle, they must meet."
    ],
    "solution": "Floyd’s algorithm uses slow=slow.next and fast=fast.next.next. If there is a cycle, fast eventually meets slow. If fast reaches null or fast.next is null, no cycle exists. O(n) time, O(1) space.",
    "teaching": [
      "Two pointers with different speeds are a reusable pattern for cyclic structure detection."
    ]
  },
  {
    "id": "ll4",
    "topic": "Linked Lists",
    "level": "hard",
    "type": "debug",
    "title": "Reverse nodes in groups of k",
    "body": "You reverse linked-list nodes in groups of k. What must be checked before reversing each group?",
    "options": [
      "Whether the remaining group has exactly k nodes",
      "Whether the values are distinct",
      "Whether the head value is smaller than the tail value",
      "Whether k is prime"
    ],
    "answer": 0,
    "hints": [
      "The usual specification says incomplete final groups should remain unchanged.",
      "You need a way to locate the kth node before rewiring."
    ],
    "solution": "Find the kth node from the group start. If it does not exist, leave the remaining nodes unchanged. Otherwise reverse exactly those k nodes, reconnect the previous group to the new head, and continue.",
    "teaching": [
      "For pointer-heavy problems, establish the group's boundaries before changing pointers."
    ]
  },
  {
    "id": "sq1",
    "topic": "Stacks & Queues",
    "level": "foundation",
    "type": "mcq",
    "title": "LIFO vs FIFO",
    "body": "Which structure models an undo stack most naturally?",
    "options": [
      "Queue",
      "Stack",
      "Min-heap",
      "Hash map"
    ],
    "answer": 1,
    "hints": [
      "Undo means the most recent action is removed first.",
      "That is last-in, first-out."
    ],
    "solution": "A stack is LIFO: the most recently pushed action is popped first. That exactly matches typical undo behavior.",
    "teaching": [
      "Translate a real-world rule into an operation order before picking a data structure."
    ]
  },
  {
    "id": "sq2",
    "topic": "Stacks & Queues",
    "level": "easy",
    "type": "coding",
    "title": "Valid parentheses",
    "body": "What must be stored while scanning '([]{})' to validate matching delimiters?",
    "options": [
      "All opening brackets in a stack",
      "All closing brackets in a queue",
      "Sorted bracket pairs",
      "A running count only"
    ],
    "answer": 0,
    "hints": [
      "The most recently opened bracket must be the first one matched.",
      "Different bracket types require remembering which opener is on top."
    ],
    "solution": "Push every opening bracket. On a closing bracket, verify the stack is non-empty and its top is the matching opener, then pop. At the end the stack must be empty. O(n).",
    "teaching": [
      "Nested structures are classic stack territory because the newest unfinished scope closes first."
    ]
  },
  {
    "id": "sq3",
    "topic": "Stacks & Queues",
    "level": "medium",
    "type": "coding",
    "title": "Sliding-window maximum",
    "body": "You need the maximum of every length-k window in O(n). Which structure is the right core?",
    "options": [
      "Min-heap only",
      "Monotonic deque storing useful candidate indices",
      "Ordinary queue with all values",
      "Balanced BST required"
    ],
    "answer": 1,
    "hints": [
      "Candidates that can never become the maximum again should be removed.",
      "The front should represent the maximum for the current window."
    ],
    "solution": "Use a decreasing monotonic deque of indices. Remove indices that leave the window from the front; while the back has a value ≤ current value, pop it; then append current. The front is the max. O(n) total because each index enters and leaves once.",
    "teaching": [
      "Monotonic structures preserve only candidates that can still win later."
    ]
  },
  {
    "id": "sq4",
    "topic": "Stacks & Queues",
    "level": "hard",
    "type": "coding",
    "title": "Largest rectangle in histogram",
    "body": "What key pattern turns histogram rectangle search into O(n)?",
    "options": [
      "Sort bars by height",
      "A monotonic increasing stack of indices",
      "BFS from every bar",
      "Two nested pointers"
    ],
    "answer": 1,
    "hints": [
      "When a shorter bar appears, rectangles using taller bars may end.",
      "The stack should maintain increasing heights so the previous smaller boundary is known."
    ],
    "solution": "Maintain an increasing stack of indices. When a new height is smaller than the stack top, pop bars and compute their maximum width using the new index as the right smaller boundary and the new stack top as the left smaller boundary. Each index is pushed/popped once: O(n).",
    "teaching": [
      "Monotonic stacks are ideal when an element’s next smaller/greater boundary determines its maximal contribution."
    ]
  },
  {
    "id": "h1",
    "topic": "Hashing",
    "level": "foundation",
    "type": "design",
    "title": "Hash table collision",
    "body": "Two distinct keys hash to the same bucket. What has happened?",
    "options": [
      "A collision",
      "A deadlock",
      "A tree rotation",
      "An overflow bug by definition"
    ],
    "answer": 0,
    "hints": [
      "The table maps many possible keys into fewer slots.",
      "Different keys can therefore land together."
    ],
    "solution": "A collision occurs when distinct keys map to the same bucket/index. Typical collision-resolution strategies include chaining and open addressing.",
    "teaching": [
      "Hashing provides expected fast access, not a guarantee that every key gets a unique slot."
    ]
  },
  {
    "id": "h2",
    "topic": "Hashing",
    "level": "easy",
    "type": "coding",
    "title": "First unique character",
    "body": "How would you find the first character that occurs exactly once in a string while preserving original order?",
    "options": [
      "Sort the string",
      "Count frequencies, then scan left-to-right",
      "Use a stack only",
      "Binary search characters"
    ],
    "answer": 1,
    "hints": [
      "You need both frequency and original position/order.",
      "Two linear passes are enough."
    ],
    "solution": "First count each character in a hash map; then scan the string from left to right and return the first character whose count is 1. O(n) expected time and O(alphabet) or O(n) space.",
    "teaching": [
      "A frequency table followed by an order-preserving scan is a fundamental hash-map pattern."
    ]
  },
  {
    "id": "h3",
    "topic": "Hashing",
    "level": "medium",
    "type": "coding",
    "title": "Longest consecutive sequence",
    "body": "Given an unsorted array, find the longest run of consecutive integers in O(n) expected time. What prevents repeated work?",
    "options": [
      "Start a run only when x-1 is absent from the set",
      "Start every possible run",
      "Sort first",
      "Use a max-heap"
    ],
    "answer": 0,
    "hints": [
      "A number is the start of a consecutive run exactly when its predecessor is missing.",
      "Then walk upward only from true starts."
    ],
    "solution": "Put all values in a hash set. For x, begin counting only when x-1 is absent. Then increment y=x+1 while y is in the set. Each value is scanned as part of a run beginning only once overall, giving O(n) expected time.",
    "teaching": [
      "The trick is not faster iteration; it is eliminating redundant starts."
    ]
  },
  {
    "id": "t1",
    "topic": "Trees & BST",
    "level": "foundation",
    "type": "mcq",
    "title": "BST ordering rule",
    "body": "For a strict BST, where must a key smaller than node x appear?",
    "options": [
      "Only in x's right subtree",
      "Only in x's left subtree",
      "Anywhere in the tree",
      "Only at x's parent"
    ],
    "answer": 1,
    "hints": [
      "BST stands for binary search tree; smaller and larger keys are separated."
    ],
    "solution": "In a strict BST, every key smaller than x lies in x’s left subtree, while larger keys lie in the right subtree. This global subtree ordering enables search.",
    "teaching": [
      "A BST is useful because the ordering property holds for entire subtrees, not only immediate children."
    ]
  },
  {
    "id": "t2",
    "topic": "Trees & BST",
    "level": "easy",
    "type": "trace",
    "title": "Inorder traversal",
    "body": "What is the inorder traversal of the BST containing 5 as root, with 3 and 7 as children, and 2 as left child of 3?",
    "options": [
      "5,3,2,7",
      "2,3,5,7",
      "2,5,3,7",
      "7,5,3,2"
    ],
    "answer": 1,
    "hints": [
      "Inorder means left subtree, node, right subtree.",
      "BSTs have a special property under inorder traversal."
    ],
    "solution": "Inorder is 2,3,5,7. For a BST, inorder traversal lists keys in sorted order (assuming the usual no-duplicate convention).",
    "teaching": [
      "Traversal order itself can expose structural properties."
    ]
  },
  {
    "id": "t3",
    "topic": "Trees & BST",
    "level": "medium",
    "type": "coding",
    "title": "Lowest common ancestor in a BST",
    "body": "For nodes p and q in a BST, how can you find their LCA without parent pointers?",
    "options": [
      "Always go to the root twice",
      "Use BST comparisons: both left, both right, otherwise current is LCA",
      "Run DFS over every leaf first",
      "Sort all nodes"
    ],
    "answer": 1,
    "hints": [
      "If both targets are smaller than the current node, which direction is forced?",
      "If one lies on each side, the current node is the first split point."
    ],
    "solution": "At node x: if p and q are both < x, move left; if both > x, move right; otherwise x is the LCA. The first node where their search paths diverge is the lowest common ancestor. O(h).",
    "teaching": [
      "Use the data structure’s ordering property instead of a generic tree traversal."
    ]
  },
  {
    "id": "t4",
    "topic": "Trees & BST",
    "level": "hard",
    "type": "debug",
    "title": "Tree recursion stack",
    "body": "A recursive DFS on a completely skewed binary tree with n nodes uses how much call-stack space in the worst case?",
    "options": [
      "O(1)",
      "O(log n)",
      "O(n)",
      "O(n²)"
    ],
    "answer": 2,
    "hints": [
      "A skewed tree can look like a linked list.",
      "The deepest recursion is the tree height."
    ],
    "solution": "O(n) stack space, because the recursion depth equals the tree height h, and a skewed tree can have h=n. Balanced trees would instead have height O(log n).",
    "teaching": [
      "For recursive tree algorithms, space is usually O(height), not automatically O(log n)."
    ]
  },
  {
    "id": "t5",
    "topic": "Trees & BST",
    "level": "hard",
    "type": "coding",
    "title": "Validate a BST correctly",
    "body": "Why is checking only each node against its immediate children insufficient to validate a BST?",
    "options": [
      "Children may not exist",
      "A deeper node can violate an ancestor’s bound even if it is valid relative to its parent",
      "BSTs cannot have leaves",
      "Comparisons are too expensive"
    ],
    "answer": 1,
    "hints": [
      "Imagine a node in the left subtree that is larger than the root.",
      "The valid range for a node comes from all ancestors, not just its parent."
    ],
    "solution": "A node in the left subtree must be smaller than the root even if it is smaller than its direct parent. A correct validator carries an allowed range (low, high) or uses inorder ordering.",
    "teaching": [
      "When a property is global, local checks may be necessary but not sufficient."
    ]
  },
  {
    "id": "hp1",
    "topic": "Heaps & Priority Queues",
    "level": "foundation",
    "type": "design",
    "title": "What does a heap guarantee?",
    "body": "Which statement is guaranteed by a min-heap?",
    "options": [
      "Every array position is globally sorted",
      "The minimum element is at the root",
      "The maximum is always at the last array index",
      "Inorder traversal is sorted"
    ],
    "answer": 1,
    "hints": [
      "A heap is partially ordered, not fully sorted.",
      "Ask which element has the strongest positional guarantee."
    ],
    "solution": "A min-heap guarantees the minimum element is at the root. Parent keys are ≤ child keys, but siblings and arbitrary array positions are not globally sorted.",
    "teaching": [
      "Heaps give priority access without paying the cost of full sorting."
    ]
  },
  {
    "id": "hp2",
    "topic": "Heaps & Priority Queues",
    "level": "easy",
    "type": "complexity",
    "title": "Heap operation costs",
    "body": "What are the usual complexities for insert and extract-min in a binary heap?",
    "options": [
      "O(1), O(1)",
      "O(log n), O(log n)",
      "O(n), O(1)",
      "O(log n), O(n)"
    ],
    "answer": 1,
    "hints": [
      "Both operations may move an element along the heap height.",
      "A binary heap has height Θ(log n)."
    ],
    "solution": "Both insert (sift up) and extract-min (sift down) take O(log n) in the worst case. Reading the minimum itself is O(1).",
    "teaching": [
      "Heap height determines the cost of repair operations."
    ]
  },
  {
    "id": "hp3",
    "topic": "Heaps & Priority Queues",
    "level": "medium",
    "type": "coding",
    "title": "Top K frequent elements",
    "body": "You need the k most frequent elements from a large input. Which approach can achieve O(n log k) after counting?",
    "options": [
      "Sort all unique values by frequency",
      "Maintain a min-heap of size k",
      "Use a stack of all values",
      "Binary search each frequency"
    ],
    "answer": 1,
    "hints": [
      "You only need to retain the current best k candidates.",
      "A min-heap lets you evict the weakest candidate when the heap grows past k."
    ],
    "solution": "Count frequencies with a hash map, then keep a min-heap of at most k elements keyed by frequency. Push each unique item; if size exceeds k, pop the minimum. Total O(n + u log k), where u is number of unique items.",
    "teaching": [
      "Bound the auxiliary structure by k when only the top k matter."
    ]
  },
  {
    "id": "g1",
    "topic": "Graphs",
    "level": "foundation",
    "type": "design",
    "title": "BFS or DFS for shortest unweighted path?",
    "body": "In an unweighted graph, which traversal finds shortest path length from a source when all edges have equal cost?",
    "options": [
      "DFS only",
      "BFS",
      "Topological sort only",
      "Kruskal"
    ],
    "answer": 1,
    "hints": [
      "Think in layers of distance from the source.",
      "The first time BFS reaches a node is via the fewest-edge path."
    ],
    "solution": "BFS explores the graph in layers: distance 0, then 1 edge away, then 2, and so on. Therefore the first discovery of a node gives its minimum number of edges from the source in an unweighted graph.",
    "teaching": [
      "Shortest path choice depends on edge weights; BFS is for equal edge cost."
    ]
  },
  {
    "id": "g2",
    "topic": "Graphs",
    "level": "easy",
    "type": "coding",
    "title": "Count islands",
    "body": "In a binary grid where adjacent land cells (up/down/left/right) belong to one island, what is the standard approach?",
    "options": [
      "For every land cell, DFS/BFS and mark visited land",
      "Sort all cells",
      "Use a heap",
      "Binary search each row"
    ],
    "answer": 0,
    "hints": [
      "An island is a connected component in a grid graph.",
      "You need to avoid counting the same component again."
    ],
    "solution": "Scan the grid. Whenever you find unvisited land, increment the island count and run DFS/BFS to mark the entire connected component visited. Time O(rows*cols).",
    "teaching": [
      "Many grid problems are just graph traversal with implicit edges."
    ]
  },
  {
    "id": "g3",
    "topic": "Graphs",
    "level": "medium",
    "type": "coding",
    "title": "Dijkstra: when is it valid?",
    "body": "Dijkstra’s shortest-path algorithm is safe under which edge-weight condition?",
    "options": [
      "All weights are negative",
      "All edge weights are non-negative",
      "The graph must be a tree",
      "All weights must equal 1"
    ],
    "answer": 1,
    "hints": [
      "Dijkstra finalizes the smallest tentative distance.",
      "That assumes extending a path cannot later make it smaller through a negative edge."
    ],
    "solution": "Dijkstra requires non-negative edge weights. With that condition, once the smallest tentative-distance node is selected, no later path can improve it via an edge of negative cost.",
    "teaching": [
      "Algorithm applicability conditions matter as much as the algorithm itself."
    ]
  },
  {
    "id": "g4",
    "topic": "Graphs",
    "level": "medium",
    "type": "complexity",
    "title": "Kahn's algorithm signal",
    "body": "Kahn’s algorithm for topological sorting repeatedly removes what?",
    "options": [
      "A random leaf",
      "A vertex with indegree 0",
      "The highest-degree vertex",
      "The minimum-weight edge"
    ],
    "answer": 1,
    "hints": [
      "Think dependency scheduling: what can be processed now because nothing points into it?",
      "Removing it decreases indegrees of its outgoing neighbors."
    ],
    "solution": "Kahn’s algorithm starts with vertices of indegree 0. Remove one, append it to the ordering, and decrement indegrees of its outgoing neighbors. If fewer than n vertices are processed, the graph contains a cycle.",
    "teaching": [
      "Topological order exists exactly for DAGs; indegree-zero nodes are immediately dependency-free."
    ]
  },
  {
    "id": "g5",
    "topic": "Graphs",
    "level": "hard",
    "type": "coding",
    "title": "Union-Find for redundant connection",
    "body": "Edges are added to an initially disconnected undirected graph. Which structure efficiently detects whether an added edge connects two vertices already in the same component?",
    "options": [
      "Trie",
      "Disjoint Set Union (Union-Find)",
      "Stack",
      "Fenwick tree"
    ],
    "answer": 1,
    "hints": [
      "The operation is repeated connectivity under merges.",
      "You need find(x), find(y) and union(x,y)."
    ],
    "solution": "Use Disjoint Set Union with path compression and union by rank/size. If find(u)==find(v) before adding edge (u,v), the edge creates a cycle/redundancy. Amortized cost is near O(1), commonly expressed as O(α(n)).",
    "teaching": [
      "DSU shines when components merge over time and you repeatedly ask whether two nodes are already connected."
    ]
  },
  {
    "id": "g6",
    "topic": "Graphs",
    "level": "hard",
    "type": "coding",
    "title": "Bipartite graph test",
    "body": "How can a graph be tested for bipartiteness?",
    "options": [
      "Run BFS/DFS and 2-color adjacent vertices with opposite colors",
      "Sort vertex IDs",
      "Run Dijkstra from every node",
      "Only inspect degrees"
    ],
    "answer": 0,
    "hints": [
      "A bipartite graph has two groups, with every edge crossing groups.",
      "A coloring conflict exposes an odd cycle."
    ],
    "solution": "BFS/DFS each component, assigning one of two colors. Every edge must connect opposite colors. If you encounter an edge between equal-colored vertices, the graph is not bipartite. This is O(V+E).",
    "teaching": [
      "2-colorability, bipartiteness, and absence of odd cycles are tightly connected concepts."
    ]
  },
  {
    "id": "ss1",
    "topic": "Sorting & Searching",
    "level": "foundation",
    "type": "complexity",
    "title": "Which sorting is comparison-optimal?",
    "body": "For arbitrary keys using only comparisons, what is the asymptotic lower bound for worst-case sorting?",
    "options": [
      "Ω(n)",
      "Ω(log n)",
      "Ω(n log n)",
      "Ω(n²)"
    ],
    "answer": 2,
    "hints": [
      "Decision-tree arguments count how many possible orderings must be distinguished.",
      "There are n! possible input permutations."
    ],
    "solution": "Ω(n log n). A comparison sort corresponds to a decision tree with at least n! leaves, requiring height log2(n!) = Ω(n log n). Algorithms such as mergesort and heapsort match this asymptotically.",
    "teaching": [
      "Lower bounds tell you when an optimization target is mathematically impossible under a model."
    ]
  },
  {
    "id": "ss2",
    "topic": "Sorting & Searching",
    "level": "easy",
    "type": "mcq",
    "title": "Stable sorting",
    "body": "What does it mean for a sorting algorithm to be stable?",
    "options": [
      "It never crashes",
      "Equal-key records retain their original relative order",
      "It uses O(1) memory",
      "It always runs in O(n log n)"
    ],
    "answer": 1,
    "hints": [
      "Imagine sorting records by last name while preserving original order among equal last names."
    ],
    "solution": "Stability means items with equal sort keys remain in their original relative order. This property matters in multi-pass sorting and record processing.",
    "teaching": [
      "Algorithm properties such as stability are constraints you may need even when time complexity is identical."
    ]
  },
  {
    "id": "ss3",
    "topic": "Sorting & Searching",
    "level": "easy",
    "type": "coding",
    "title": "Binary search boundary",
    "body": "In a standard lower_bound search, what are you typically trying to find?",
    "options": [
      "The largest element strictly smaller than target",
      "The first position where value is ≥ target",
      "The last array index",
      "Any occurrence of target only"
    ],
    "answer": 1,
    "hints": [
      "Lower bound is a boundary problem, not merely an exact-match problem.",
      "Search for the first index that satisfies a monotonic predicate."
    ],
    "solution": "lower_bound returns the first position i such that A[i] ≥ target in a sorted array. The classic implementation maintains a half-open search interval and narrows based on that predicate. O(log n).",
    "teaching": [
      "Binary search generalizes from exact matching to finding the first/last point where a monotone condition changes."
    ]
  },
  {
    "id": "ss4",
    "topic": "Sorting & Searching",
    "level": "medium",
    "type": "coding",
    "title": "Merge intervals",
    "body": "Given intervals [start,end], merge all overlapping intervals. What should you do after sorting by start?",
    "options": [
      "Compare every pair",
      "Keep one current merged interval and extend it when overlap exists",
      "Use BFS",
      "Sort only by end and scan backwards"
    ],
    "answer": 1,
    "hints": [
      "After sorting by start, future intervals cannot start before the current one.",
      "Overlap is determined by whether next.start <= current.end."
    ],
    "solution": "Sort by start. Maintain the last merged interval [s,e]. For each [a,b], if a≤e, set e=max(e,b); otherwise output [s,e] and start a new interval. O(n log n) due to sorting.",
    "teaching": [
      "Sorting can turn a global overlap problem into a single linear sweep."
    ]
  },
  {
    "id": "ss5",
    "topic": "Sorting & Searching",
    "level": "hard",
    "type": "coding",
    "title": "Quickselect intuition",
    "body": "You want the kth smallest element without fully sorting the array. What does Quickselect exploit?",
    "options": [
      "Heap property of every subarray",
      "Partition around a pivot, recurse only into the side containing rank k",
      "BFS levels",
      "Hash collisions"
    ],
    "answer": 1,
    "hints": [
      "Partition puts smaller items left and larger items right relative to the pivot.",
      "Only one side can contain the desired rank after partitioning."
    ],
    "solution": "Partition around a pivot. If the pivot lands at index p, compare p with k: return if equal; otherwise recurse only on the left or right partition containing k. Average O(n), worst-case O(n²) without robust pivot strategy.",
    "teaching": [
      "Selection problems often need only partial order; full sorting may do unnecessary work."
    ]
  },
  {
    "id": "rb1",
    "topic": "Recursion & Backtracking",
    "level": "foundation",
    "type": "mcq",
    "title": "Base case purpose",
    "body": "What is the most important role of a recursive base case?",
    "options": [
      "Make recursion faster than iteration",
      "Stop recursion on the smallest solvable inputs",
      "Guarantee O(1) memory",
      "Sort the input"
    ],
    "answer": 1,
    "hints": [
      "Without a stopping condition, the recurrence never terminates.",
      "The base case should be directly solvable."
    ],
    "solution": "The base case terminates recursion on inputs that can be answered directly. Correct recursive algorithms also need each recursive call to make progress toward a base case.",
    "teaching": [
      "A recurrence is an algorithm only when it has both a transition and a terminating condition."
    ]
  },
  {
    "id": "rb2",
    "topic": "Recursion & Backtracking",
    "level": "easy",
    "type": "trace",
    "title": "Binary recursion count",
    "body": "How many leaf calls are produced by the recurrence T(n) branching into two calls until n=0, starting from n=3?",
    "options": [
      "3",
      "4",
      "6",
      "8"
    ],
    "answer": 3,
    "hints": [
      "Draw the recursion tree for depth 3.",
      "Each level doubles the number of nodes."
    ],
    "solution": "At depth 3 there are 2^3 = 8 base-case leaves. The total number of calls is 2^(n+1)-1 for this exact full binary recurrence.",
    "teaching": [
      "Recursion trees make exponential branching visible immediately."
    ]
  },
  {
    "id": "rb3",
    "topic": "Recursion & Backtracking",
    "level": "medium",
    "type": "coding",
    "title": "Generate all subsets",
    "body": "How many subsets does an n-element set have, and what recurrence generates them?",
    "options": [
      "n; T(n)=T(n-1)+1",
      "2^n; T(n)=2T(n-1)",
      "n²; T(n)=T(n-1)+n",
      "n!; T(n)=nT(n-1)"
    ],
    "answer": 1,
    "hints": [
      "For each element, there are two choices: include or exclude.",
      "Two branches are generated per element."
    ],
    "solution": "There are 2^n subsets. The backtracking recurrence is T(n)=2T(n-1)+O(1), because each element branches into include/exclude. Output size itself is Θ(n2^n) if copying each subset.",
    "teaching": [
      "When every item creates two independent choices, expect 2^n state combinations."
    ]
  },
  {
    "id": "rb4",
    "topic": "Recursion & Backtracking",
    "level": "hard",
    "type": "coding",
    "title": "N-Queens: pruning",
    "body": "What is the core reason backtracking beats brute-forcing all n^n board assignments in N-Queens?",
    "options": [
      "It never examines any partial state",
      "It prunes partial placements that already violate constraints",
      "It sorts rows first",
      "It uses a heap"
    ],
    "answer": 1,
    "hints": [
      "You do not need to complete a placement once it is already invalid.",
      "Constraint checks shrink the search tree."
    ],
    "solution": "Place one queen per row. Before recursing, reject a column/diagonal conflict. Invalid partial assignments never generate descendants, dramatically reducing search relative to blindly constructing every full assignment.",
    "teaching": [
      "Backtracking is systematic search plus early rejection of impossible partial solutions."
    ]
  },
  {
    "id": "gd1",
    "topic": "Greedy & Dynamic Programming",
    "level": "foundation",
    "type": "design",
    "title": "Greedy vs DP",
    "body": "Which question is a strong signal that DP may be appropriate?",
    "options": [
      "Can I make any legal move?",
      "Do overlapping subproblems and optimal substructure let me reuse solved states?",
      "Can I sort the array?",
      "Does the input contain numbers?"
    ],
    "answer": 1,
    "hints": [
      "DP is about reusing answers to smaller states.",
      "Look for repeated states and a recurrence."
    ],
    "solution": "Dynamic programming is appropriate when the problem can be decomposed into states with optimal substructure and overlapping subproblems. You define a state, transition, base cases, and an evaluation order/top-down memoization.",
    "teaching": [
      "DP is not a magic pattern; it is structured reuse of repeated subproblems."
    ]
  },
  {
    "id": "gd2",
    "topic": "Greedy & Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "Climbing stairs",
    "body": "You can climb 1 or 2 steps at a time. What is the recurrence for the number of ways to reach step n?",
    "options": [
      "dp[n]=dp[n-1] only",
      "dp[n]=dp[n-1]+dp[n-2]",
      "dp[n]=2dp[n-1]",
      "dp[n]=n!"
    ],
    "answer": 1,
    "hints": [
      "The last move is either 1 step or 2 steps.",
      "Partition solutions by the size of the final move."
    ],
    "solution": "dp[n]=dp[n-1]+dp[n-2], with dp[0]=1 and dp[1]=1 under the counting convention. Only the previous two states are needed, so space can be reduced to O(1).",
    "teaching": [
      "A clean DP recurrence often comes from classifying solutions by their final decision."
    ]
  },
  {
    "id": "gd3",
    "topic": "Greedy & Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "Activity selection",
    "body": "Choose the maximum number of non-overlapping activities, each with a start and finish. What greedy choice is correct?",
    "options": [
      "Pick the activity with the earliest start",
      "Pick the shortest duration",
      "Pick the activity with the earliest finish",
      "Pick the highest value start time"
    ],
    "answer": 2,
    "hints": [
      "Finishing early leaves the most room for future activities.",
      "After choosing one, discard activities that overlap it."
    ],
    "solution": "Sort by finish time and repeatedly choose the next activity whose start is at least the finish of the last chosen. The earliest-finish choice is optimal because it leaves maximal remaining time for later activities.",
    "teaching": [
      "A greedy proof often uses an exchange argument: replace an optimal first choice with the greedy choice without making the result worse."
    ]
  },
  {
    "id": "gd4",
    "topic": "Greedy & Dynamic Programming",
    "level": "medium",
    "type": "coding",
    "title": "0/1 Knapsack state",
    "body": "For 0/1 knapsack, what do dp[i][w] usually represent?",
    "options": [
      "The number of items seen",
      "Best value using first i items with capacity at most w",
      "Exact weight of item i",
      "Whether item i is sorted"
    ],
    "answer": 1,
    "hints": [
      "A DP state should completely summarize the choices made so far.",
      "The capacity and prefix of items determine future options."
    ],
    "solution": "dp[i][w] is the maximum value obtainable using the first i items with capacity at most w. Transition: skip item i, or include it if its weight fits: max(dp[i-1][w], value[i]+dp[i-1][w-weight[i]]).",
    "teaching": [
      "Good DP state definitions eliminate irrelevant history while preserving everything the future needs."
    ]
  },
  {
    "id": "gd5",
    "topic": "Greedy & Dynamic Programming",
    "level": "medium",
    "type": "coding",
    "title": "Longest increasing subsequence",
    "body": "Which complexity is achievable by the classic tails/binary-search technique for LIS?",
    "options": [
      "O(n²) only",
      "O(n log n)",
      "O(2^n)",
      "O(n!)"
    ],
    "answer": 1,
    "hints": [
      "Maintain the smallest possible tail value for each subsequence length.",
      "Binary search updates the first tail ≥ current value."
    ],
    "solution": "The tails method maintains an array where tails[k] is the smallest tail value of an increasing subsequence of length k+1 seen so far. Each element uses binary search to update tails, giving O(n log n) time and O(n) space. The tails array itself is not necessarily an actual LIS.",
    "teaching": [
      "A compressed DP state can sometimes turn an O(n²) recurrence into O(n log n) using ordered structure."
    ]
  },
  {
    "id": "gd6",
    "topic": "Greedy & Dynamic Programming",
    "level": "hard",
    "type": "coding",
    "title": "Edit distance transition",
    "body": "For Levenshtein edit distance between prefixes A[0..i-1] and B[0..j-1], what transition applies when A[i-1] != B[j-1]?",
    "options": [
      "dp[i][j]=dp[i-1][j-1]",
      "dp[i][j]=1+min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])",
      "dp[i][j]=max(...)",
      "dp[i][j]=dp[i-1][j-1]-1"
    ],
    "answer": 1,
    "hints": [
      "The final operation can be delete, insert, or replace.",
      "Each operation costs 1."
    ],
    "solution": "If characters differ, dp[i][j] = 1 + min(delete dp[i-1][j], insert dp[i][j-1], replace dp[i-1][j-1]). If they match, use dp[i-1][j-1]. Base cases are dp[i][0]=i and dp[0][j]=j.",
    "teaching": [
      "Edit distance is a canonical example of DP over two prefixes with three possible last operations."
    ]
  },
  {
    "id": "tr1",
    "topic": "Tries & Strings",
    "level": "foundation",
    "type": "design",
    "title": "When a trie wins",
    "body": "Which workload naturally benefits from a trie?",
    "options": [
      "Find all stored strings sharing a prefix",
      "Global median of numeric values",
      "Constant-time random array indexing",
      "Minimum spanning tree"
    ],
    "answer": 0,
    "hints": [
      "What does a trie represent explicitly: characters by prefix.",
      "Prefix traversal can follow the query string directly."
    ],
    "solution": "Tries are designed for prefix-oriented operations. Searching a word or all words beginning with a prefix takes time proportional to the number of characters in the query plus the output traversal.",
    "teaching": [
      "Choose a trie when prefix structure is the thing you need to query repeatedly."
    ]
  },
  {
    "id": "tr2",
    "topic": "Tries & Strings",
    "level": "easy",
    "type": "coding",
    "title": "Autocomplete design",
    "body": "For an autocomplete dictionary, what should a node conceptually provide after walking a prefix?",
    "options": [
      "A random word",
      "A path to all completions beneath that prefix",
      "The sorted entire dictionary copied at each node",
      "A heap of all possible suffixes is mandatory"
    ],
    "answer": 1,
    "hints": [
      "The node reached after the prefix is the root of the completion subtree.",
      "You can then enumerate or rank descendants."
    ],
    "solution": "Walk the prefix characters through the trie. The reached node represents that prefix; its descendants represent all completions. A DFS can enumerate them, optionally with ranking metadata at nodes/edges for faster top-k suggestions.",
    "teaching": [
      "Data structure design often means storing just enough metadata to make the target query cheap."
    ]
  },
  {
    "id": "m1",
    "topic": "Mixed Patterns",
    "level": "medium",
    "type": "debug",
    "title": "Recognize when sorting is enough",
    "body": "You need to determine whether any two intervals overlap. Which strategy is usually simplest and why?",
    "options": [
      "Sort by start then scan adjacent merged state",
      "Compare all pairs only",
      "Use DFS on interval endpoints",
      "Use a stack of random intervals"
    ],
    "answer": 0,
    "hints": [
      "Sorting creates an order in which only the nearest previously processed interval matters.",
      "For an interval starting at s, compare s against the current maximum end."
    ],
    "solution": "Sort intervals by start. Track currentEnd, the furthest end among the current overlapping cluster. If next.start <= currentEnd, there is an overlap; otherwise start a new cluster. O(n log n) because of sorting.",
    "teaching": [
      "Ask whether sorting can create a monotonic order that destroys the need for pairwise comparison."
    ]
  },
  {
    "id": "m2",
    "topic": "Mixed Patterns",
    "level": "medium",
    "type": "complexity",
    "title": "BFS with adjacency lists",
    "body": "A graph has V vertices and E edges stored as adjacency lists. What is the time complexity of a full BFS?",
    "options": [
      "O(V)",
      "O(E)",
      "O(V+E)",
      "O(VE)"
    ],
    "answer": 2,
    "hints": [
      "Each vertex is enqueued at most once; each adjacency list entry is examined.",
      "Count both vertex and edge work."
    ],
    "solution": "O(V+E). Each vertex is discovered/enqueued at most once, O(V), and every adjacency-list edge entry is scanned a constant number of times, O(E).",
    "teaching": [
      "Graph traversal complexity is measured in both vertices and edges, not just V."
    ]
  },
  {
    "id": "m3",
    "topic": "Mixed Patterns",
    "level": "hard",
    "type": "coding",
    "title": "Design an LRU cache",
    "body": "An LRU cache needs O(1) average get/put and must evict the least recently used key. Which combination is standard?",
    "options": [
      "Array + stack",
      "Hash map + doubly linked list",
      "Queue + binary search tree",
      "Heap + singly linked list"
    ],
    "answer": 1,
    "hints": [
      "Map gives key→node lookup; list gives O(1) removal/reinsertion near an end.",
      "Moving a node on every access must be constant time."
    ],
    "solution": "Use a hash map key→node plus a doubly linked list ordered by recency. get moves the node to the MRU end; put inserts or updates there. When over capacity, remove the LRU node from the opposite end. Each operation is expected O(1).",
    "teaching": [
      "Composite data structures pair one structure for lookup with another for ordering/update semantics."
    ]
  },
  {
    "id": "m4",
    "topic": "Mixed Patterns",
    "level": "hard",
    "type": "coding",
    "title": "Median of two sorted arrays: the partition idea",
    "body": "What is the core idea behind an O(log(min(m,n))) algorithm for the median of two sorted arrays?",
    "options": [
      "Merge all elements",
      "Binary search a partition in the smaller array so left halves contain half the elements and boundary values are ordered",
      "Sort both arrays again",
      "Use BFS"
    ],
    "answer": 1,
    "hints": [
      "You do not need every merged position; you need the correct split between left and right.",
      "Choose i in A and derive j in B from the required left-half size."
    ],
    "solution": "Binary search a partition i in the smaller array; choose j so the left side contains half the total elements. Require Aleft≤Bright and Bleft≤Aright. Adjust i based on violated boundary. Once valid, the median is determined from the max left boundary and min right boundary.",
    "teaching": [
      "High-end binary search often searches a solution space defined by a monotone feasibility condition rather than an array value."
    ]
  },
  {
    "id": "m5",
    "topic": "Mixed Patterns",
    "level": "hard",
    "type": "debug",
    "title": "Why local greedy can fail",
    "body": "You have coin denominations {1,3,4} and target 6. Why does choosing the largest denomination first fail to minimize coin count?",
    "options": [
      "6 cannot be made",
      "Greedy chooses 4+1+1 = 3 coins, while 3+3 = 2",
      "Greedy is always optimal for coin systems",
      "There is a negative coin"
    ],
    "answer": 1,
    "hints": [
      "Try taking 4 first, then make the remainder.",
      "Compare with using two 3s."
    ],
    "solution": "Greedy takes 4, leaving 2, so it uses 4+1+1 = 3 coins. The optimal is 3+3 = 2. Therefore arbitrary coin systems do not guarantee greedy optimality; this problem is naturally handled by DP (or other exact methods).",
    "teaching": [
      "A greedy rule needs a proof or known structural condition; locally largest is not automatically globally optimal."
    ]
  },
  {
    "id": "full001",
    "topic": "Two Pointers",
    "level": "foundation",
    "type": "mcq",
    "title": "Sorted two-sum: Foundation checkpoint",
    "body": "What is the key idea behind **sorted array pair-sum**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use opposite-end pointers; increase left when the sum is too small and decrease right when it is too large."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Sortedness makes each pointer move safe because it tells you how the sum will change.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use opposite-end pointers; increase left when the sum is too small and decrease right when it is too large. Sortedness makes each pointer move safe because it tells you how the sum will change. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize sorted two-sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full002",
    "topic": "Two Pointers",
    "level": "easy",
    "type": "coding",
    "title": "Sorted two-sum: Easy checkpoint",
    "body": "You need an efficient solution for **sorted array pair-sum**. Which approach is the best starting point?",
    "options": [
      "Use opposite-end pointers; increase left when the sum is too small and decrease right when it is too large.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Sortedness makes each pointer move safe because it tells you how the sum will change.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use opposite-end pointers; increase left when the sum is too small and decrease right when it is too large. Sortedness makes each pointer move safe because it tells you how the sum will change. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize sorted two-sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full003",
    "topic": "Two Pointers",
    "level": "medium",
    "type": "debug",
    "title": "Sorted two-sum: Medium checkpoint",
    "body": "A teammate has an implementation for **sorted array pair-sum**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use opposite-end pointers; increase left when the sum is too small and decrease right when it is too large."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Sortedness makes each pointer move safe because it tells you how the sum will change.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use opposite-end pointers; increase left when the sum is too small and decrease right when it is too large. Sortedness makes each pointer move safe because it tells you how the sum will change. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize sorted two-sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full004",
    "topic": "Two Pointers",
    "level": "hard",
    "type": "design",
    "title": "Sorted two-sum: Hard checkpoint",
    "body": "For a difficult variant of **sorted array pair-sum**, which design principle should remain unchanged?",
    "options": [
      "Use opposite-end pointers; increase left when the sum is too small and decrease right when it is too large.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Sortedness makes each pointer move safe because it tells you how the sum will change.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use opposite-end pointers; increase left when the sum is too small and decrease right when it is too large. Sortedness makes each pointer move safe because it tells you how the sum will change. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize sorted two-sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full005",
    "topic": "Two Pointers",
    "level": "foundation",
    "type": "mcq",
    "title": "Container water: Foundation checkpoint",
    "body": "What is the key idea behind **maximum rectangle between vertical lines**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Move the shorter boundary inward after measuring the area.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The shorter side is the bottleneck; moving the taller side cannot improve the limiting height while width shrinks.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Move the shorter boundary inward after measuring the area. The shorter side is the bottleneck; moving the taller side cannot improve the limiting height while width shrinks. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize container water as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full006",
    "topic": "Two Pointers",
    "level": "easy",
    "type": "coding",
    "title": "Container water: Easy checkpoint",
    "body": "You need an efficient solution for **maximum rectangle between vertical lines**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Move the shorter boundary inward after measuring the area."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The shorter side is the bottleneck; moving the taller side cannot improve the limiting height while width shrinks.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Move the shorter boundary inward after measuring the area. The shorter side is the bottleneck; moving the taller side cannot improve the limiting height while width shrinks. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize container water as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full007",
    "topic": "Two Pointers",
    "level": "medium",
    "type": "debug",
    "title": "Container water: Medium checkpoint",
    "body": "A teammate has an implementation for **maximum rectangle between vertical lines**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Move the shorter boundary inward after measuring the area.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The shorter side is the bottleneck; moving the taller side cannot improve the limiting height while width shrinks.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Move the shorter boundary inward after measuring the area. The shorter side is the bottleneck; moving the taller side cannot improve the limiting height while width shrinks. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize container water as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full008",
    "topic": "Two Pointers",
    "level": "hard",
    "type": "design",
    "title": "Container water: Hard checkpoint",
    "body": "For a difficult variant of **maximum rectangle between vertical lines**, which design principle should remain unchanged?",
    "options": [
      "Move the shorter boundary inward after measuring the area.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The shorter side is the bottleneck; moving the taller side cannot improve the limiting height while width shrinks.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Move the shorter boundary inward after measuring the area. The shorter side is the bottleneck; moving the taller side cannot improve the limiting height while width shrinks. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize container water as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full009",
    "topic": "Two Pointers",
    "level": "foundation",
    "type": "mcq",
    "title": "Three sum: Foundation checkpoint",
    "body": "What is the key idea behind **unique triples summing to target**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Sort, fix one index, then use two pointers for the remaining pair while skipping duplicates.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Sorting enables safe pointer moves and makes duplicate combinations adjacent.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort, fix one index, then use two pointers for the remaining pair while skipping duplicates. Sorting enables safe pointer moves and makes duplicate combinations adjacent. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize three sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full010",
    "topic": "Two Pointers",
    "level": "easy",
    "type": "coding",
    "title": "Three sum: Easy checkpoint",
    "body": "You need an efficient solution for **unique triples summing to target**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Sort, fix one index, then use two pointers for the remaining pair while skipping duplicates."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Sorting enables safe pointer moves and makes duplicate combinations adjacent.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort, fix one index, then use two pointers for the remaining pair while skipping duplicates. Sorting enables safe pointer moves and makes duplicate combinations adjacent. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize three sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full011",
    "topic": "Two Pointers",
    "level": "medium",
    "type": "debug",
    "title": "Three sum: Medium checkpoint",
    "body": "A teammate has an implementation for **unique triples summing to target**. What reasoning best explains why the intended approach works?",
    "options": [
      "Sort, fix one index, then use two pointers for the remaining pair while skipping duplicates.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Sorting enables safe pointer moves and makes duplicate combinations adjacent.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort, fix one index, then use two pointers for the remaining pair while skipping duplicates. Sorting enables safe pointer moves and makes duplicate combinations adjacent. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize three sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full012",
    "topic": "Two Pointers",
    "level": "hard",
    "type": "design",
    "title": "Three sum: Hard checkpoint",
    "body": "For a difficult variant of **unique triples summing to target**, which design principle should remain unchanged?",
    "options": [
      "Sort, fix one index, then use two pointers for the remaining pair while skipping duplicates.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Sorting enables safe pointer moves and makes duplicate combinations adjacent.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort, fix one index, then use two pointers for the remaining pair while skipping duplicates. Sorting enables safe pointer moves and makes duplicate combinations adjacent. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize three sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full013",
    "topic": "Two Pointers",
    "level": "foundation",
    "type": "mcq",
    "title": "Partition array: Foundation checkpoint",
    "body": "What is the key idea behind **stable compaction of a predicate**?",
    "options": [
      "Use slow as the next write location and fast as the scanner.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Partitioning is a write/read pointer problem when relative order of kept elements matters.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use slow as the next write location and fast as the scanner. Partitioning is a write/read pointer problem when relative order of kept elements matters. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize partition array as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full014",
    "topic": "Two Pointers",
    "level": "easy",
    "type": "coding",
    "title": "Partition array: Easy checkpoint",
    "body": "You need an efficient solution for **stable compaction of a predicate**. Which approach is the best starting point?",
    "options": [
      "Use slow as the next write location and fast as the scanner.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Partitioning is a write/read pointer problem when relative order of kept elements matters.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use slow as the next write location and fast as the scanner. Partitioning is a write/read pointer problem when relative order of kept elements matters. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize partition array as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full015",
    "topic": "Two Pointers",
    "level": "medium",
    "type": "debug",
    "title": "Partition array: Medium checkpoint",
    "body": "A teammate has an implementation for **stable compaction of a predicate**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use slow as the next write location and fast as the scanner."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Partitioning is a write/read pointer problem when relative order of kept elements matters.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use slow as the next write location and fast as the scanner. Partitioning is a write/read pointer problem when relative order of kept elements matters. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize partition array as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full016",
    "topic": "Two Pointers",
    "level": "hard",
    "type": "design",
    "title": "Partition array: Hard checkpoint",
    "body": "For a difficult variant of **stable compaction of a predicate**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use slow as the next write location and fast as the scanner.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Partitioning is a write/read pointer problem when relative order of kept elements matters.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use slow as the next write location and fast as the scanner. Partitioning is a write/read pointer problem when relative order of kept elements matters. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize partition array as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full017",
    "topic": "Sliding Window",
    "level": "foundation",
    "type": "mcq",
    "title": "Minimum window sum: Foundation checkpoint",
    "body": "What is the key idea behind **shortest positive-sum window meeting a threshold**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Expand right until valid, then shrink left while it remains valid.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Positive numbers guarantee that removing from the left decreases the sum monotonically.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Expand right until valid, then shrink left while it remains valid. Positive numbers guarantee that removing from the left decreases the sum monotonically. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize minimum window sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full018",
    "topic": "Sliding Window",
    "level": "easy",
    "type": "coding",
    "title": "Minimum window sum: Easy checkpoint",
    "body": "You need an efficient solution for **shortest positive-sum window meeting a threshold**. Which approach is the best starting point?",
    "options": [
      "Expand right until valid, then shrink left while it remains valid.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Positive numbers guarantee that removing from the left decreases the sum monotonically.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Expand right until valid, then shrink left while it remains valid. Positive numbers guarantee that removing from the left decreases the sum monotonically. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize minimum window sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full019",
    "topic": "Sliding Window",
    "level": "medium",
    "type": "debug",
    "title": "Minimum window sum: Medium checkpoint",
    "body": "A teammate has an implementation for **shortest positive-sum window meeting a threshold**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Expand right until valid, then shrink left while it remains valid.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Positive numbers guarantee that removing from the left decreases the sum monotonically.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Expand right until valid, then shrink left while it remains valid. Positive numbers guarantee that removing from the left decreases the sum monotonically. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize minimum window sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full020",
    "topic": "Sliding Window",
    "level": "hard",
    "type": "design",
    "title": "Minimum window sum: Hard checkpoint",
    "body": "For a difficult variant of **shortest positive-sum window meeting a threshold**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Expand right until valid, then shrink left while it remains valid.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Positive numbers guarantee that removing from the left decreases the sum monotonically.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Expand right until valid, then shrink left while it remains valid. Positive numbers guarantee that removing from the left decreases the sum monotonically. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize minimum window sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full021",
    "topic": "Sliding Window",
    "level": "foundation",
    "type": "mcq",
    "title": "Fixed window frequency: Foundation checkpoint",
    "body": "What is the key idea behind **detect an anagram in a string**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Maintain counts for a fixed-size window and update only entering/leaving characters."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Only O(1) state changes per slide are needed for a fixed alphabet.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain counts for a fixed-size window and update only entering/leaving characters. Only O(1) state changes per slide are needed for a fixed alphabet. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fixed window frequency as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full022",
    "topic": "Sliding Window",
    "level": "easy",
    "type": "coding",
    "title": "Fixed window frequency: Easy checkpoint",
    "body": "You need an efficient solution for **detect an anagram in a string**. Which approach is the best starting point?",
    "options": [
      "Maintain counts for a fixed-size window and update only entering/leaving characters.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Only O(1) state changes per slide are needed for a fixed alphabet.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain counts for a fixed-size window and update only entering/leaving characters. Only O(1) state changes per slide are needed for a fixed alphabet. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fixed window frequency as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full023",
    "topic": "Sliding Window",
    "level": "medium",
    "type": "debug",
    "title": "Fixed window frequency: Medium checkpoint",
    "body": "A teammate has an implementation for **detect an anagram in a string**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Maintain counts for a fixed-size window and update only entering/leaving characters."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Only O(1) state changes per slide are needed for a fixed alphabet.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain counts for a fixed-size window and update only entering/leaving characters. Only O(1) state changes per slide are needed for a fixed alphabet. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fixed window frequency as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full024",
    "topic": "Sliding Window",
    "level": "hard",
    "type": "design",
    "title": "Fixed window frequency: Hard checkpoint",
    "body": "For a difficult variant of **detect an anagram in a string**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Maintain counts for a fixed-size window and update only entering/leaving characters."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Only O(1) state changes per slide are needed for a fixed alphabet.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain counts for a fixed-size window and update only entering/leaving characters. Only O(1) state changes per slide are needed for a fixed alphabet. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fixed window frequency as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full025",
    "topic": "Sliding Window",
    "level": "foundation",
    "type": "mcq",
    "title": "Longest constrained window: Foundation checkpoint",
    "body": "What is the key idea behind **longest window satisfying a frequency constraint**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Track the constraint violation and move left until valid again.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: A variable window works when the left boundary can monotonically restore validity.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track the constraint violation and move left until valid again. A variable window works when the left boundary can monotonically restore validity. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize longest constrained window as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full026",
    "topic": "Sliding Window",
    "level": "easy",
    "type": "coding",
    "title": "Longest constrained window: Easy checkpoint",
    "body": "You need an efficient solution for **longest window satisfying a frequency constraint**. Which approach is the best starting point?",
    "options": [
      "Track the constraint violation and move left until valid again.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A variable window works when the left boundary can monotonically restore validity.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track the constraint violation and move left until valid again. A variable window works when the left boundary can monotonically restore validity. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize longest constrained window as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full027",
    "topic": "Sliding Window",
    "level": "medium",
    "type": "debug",
    "title": "Longest constrained window: Medium checkpoint",
    "body": "A teammate has an implementation for **longest window satisfying a frequency constraint**. What reasoning best explains why the intended approach works?",
    "options": [
      "Track the constraint violation and move left until valid again.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A variable window works when the left boundary can monotonically restore validity.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track the constraint violation and move left until valid again. A variable window works when the left boundary can monotonically restore validity. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize longest constrained window as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full028",
    "topic": "Sliding Window",
    "level": "hard",
    "type": "design",
    "title": "Longest constrained window: Hard checkpoint",
    "body": "For a difficult variant of **longest window satisfying a frequency constraint**, which design principle should remain unchanged?",
    "options": [
      "Track the constraint violation and move left until valid again.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A variable window works when the left boundary can monotonically restore validity.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track the constraint violation and move left until valid again. A variable window works when the left boundary can monotonically restore validity. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize longest constrained window as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full029",
    "topic": "Sliding Window",
    "level": "foundation",
    "type": "mcq",
    "title": "Minimum covering window: Foundation checkpoint",
    "body": "What is the key idea behind **smallest window containing required multiset**?",
    "options": [
      "Track required counts and a formed/satisfied count, then shrink once fully valid.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The optimization phase begins only after the validity condition becomes true.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track required counts and a formed/satisfied count, then shrink once fully valid. The optimization phase begins only after the validity condition becomes true. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize minimum covering window as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full030",
    "topic": "Sliding Window",
    "level": "easy",
    "type": "coding",
    "title": "Minimum covering window: Easy checkpoint",
    "body": "You need an efficient solution for **smallest window containing required multiset**. Which approach is the best starting point?",
    "options": [
      "Track required counts and a formed/satisfied count, then shrink once fully valid.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The optimization phase begins only after the validity condition becomes true.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track required counts and a formed/satisfied count, then shrink once fully valid. The optimization phase begins only after the validity condition becomes true. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize minimum covering window as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full031",
    "topic": "Sliding Window",
    "level": "medium",
    "type": "debug",
    "title": "Minimum covering window: Medium checkpoint",
    "body": "A teammate has an implementation for **smallest window containing required multiset**. What reasoning best explains why the intended approach works?",
    "options": [
      "Track required counts and a formed/satisfied count, then shrink once fully valid.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The optimization phase begins only after the validity condition becomes true.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track required counts and a formed/satisfied count, then shrink once fully valid. The optimization phase begins only after the validity condition becomes true. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize minimum covering window as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full032",
    "topic": "Sliding Window",
    "level": "hard",
    "type": "design",
    "title": "Minimum covering window: Hard checkpoint",
    "body": "For a difficult variant of **smallest window containing required multiset**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Track required counts and a formed/satisfied count, then shrink once fully valid.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The optimization phase begins only after the validity condition becomes true.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track required counts and a formed/satisfied count, then shrink once fully valid. The optimization phase begins only after the validity condition becomes true. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize minimum covering window as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full033",
    "topic": "Binary Search",
    "level": "foundation",
    "type": "mcq",
    "title": "Exact search: Foundation checkpoint",
    "body": "What is the key idea behind **find a value in sorted array**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Compare target with midpoint and discard the half that cannot contain it.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Sorted order creates a monotone elimination rule.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Compare target with midpoint and discard the half that cannot contain it. Sorted order creates a monotone elimination rule. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize exact search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full034",
    "topic": "Binary Search",
    "level": "easy",
    "type": "coding",
    "title": "Exact search: Easy checkpoint",
    "body": "You need an efficient solution for **find a value in sorted array**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Compare target with midpoint and discard the half that cannot contain it.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Sorted order creates a monotone elimination rule.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Compare target with midpoint and discard the half that cannot contain it. Sorted order creates a monotone elimination rule. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize exact search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full035",
    "topic": "Binary Search",
    "level": "medium",
    "type": "debug",
    "title": "Exact search: Medium checkpoint",
    "body": "A teammate has an implementation for **find a value in sorted array**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Compare target with midpoint and discard the half that cannot contain it.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Sorted order creates a monotone elimination rule.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Compare target with midpoint and discard the half that cannot contain it. Sorted order creates a monotone elimination rule. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize exact search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full036",
    "topic": "Binary Search",
    "level": "hard",
    "type": "design",
    "title": "Exact search: Hard checkpoint",
    "body": "For a difficult variant of **find a value in sorted array**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Compare target with midpoint and discard the half that cannot contain it.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Sorted order creates a monotone elimination rule.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Compare target with midpoint and discard the half that cannot contain it. Sorted order creates a monotone elimination rule. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize exact search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full037",
    "topic": "Binary Search",
    "level": "foundation",
    "type": "mcq",
    "title": "Lower bound: Foundation checkpoint",
    "body": "What is the key idea behind **first position with value at least target**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Binary search a monotone predicate A[i] >= target and keep the first true index.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Boundary searches find the transition point of a monotone boolean predicate.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Binary search a monotone predicate A[i] >= target and keep the first true index. Boundary searches find the transition point of a monotone boolean predicate. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lower bound as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full038",
    "topic": "Binary Search",
    "level": "easy",
    "type": "coding",
    "title": "Lower bound: Easy checkpoint",
    "body": "You need an efficient solution for **first position with value at least target**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Binary search a monotone predicate A[i] >= target and keep the first true index."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Boundary searches find the transition point of a monotone boolean predicate.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Binary search a monotone predicate A[i] >= target and keep the first true index. Boundary searches find the transition point of a monotone boolean predicate. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lower bound as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full039",
    "topic": "Binary Search",
    "level": "medium",
    "type": "debug",
    "title": "Lower bound: Medium checkpoint",
    "body": "A teammate has an implementation for **first position with value at least target**. What reasoning best explains why the intended approach works?",
    "options": [
      "Binary search a monotone predicate A[i] >= target and keep the first true index.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Boundary searches find the transition point of a monotone boolean predicate.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Binary search a monotone predicate A[i] >= target and keep the first true index. Boundary searches find the transition point of a monotone boolean predicate. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lower bound as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full040",
    "topic": "Binary Search",
    "level": "hard",
    "type": "design",
    "title": "Lower bound: Hard checkpoint",
    "body": "For a difficult variant of **first position with value at least target**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Binary search a monotone predicate A[i] >= target and keep the first true index.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Boundary searches find the transition point of a monotone boolean predicate.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Binary search a monotone predicate A[i] >= target and keep the first true index. Boundary searches find the transition point of a monotone boolean predicate. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lower bound as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full041",
    "topic": "Binary Search",
    "level": "foundation",
    "type": "mcq",
    "title": "Rotated search: Foundation checkpoint",
    "body": "What is the key idea behind **find target in rotated sorted array**?",
    "options": [
      "Identify which half is sorted, then check whether target lies in that half.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: At least one half retains sorted order in the distinct-key version.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Identify which half is sorted, then check whether target lies in that half. At least one half retains sorted order in the distinct-key version. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize rotated search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full042",
    "topic": "Binary Search",
    "level": "easy",
    "type": "coding",
    "title": "Rotated search: Easy checkpoint",
    "body": "You need an efficient solution for **find target in rotated sorted array**. Which approach is the best starting point?",
    "options": [
      "Identify which half is sorted, then check whether target lies in that half.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: At least one half retains sorted order in the distinct-key version.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Identify which half is sorted, then check whether target lies in that half. At least one half retains sorted order in the distinct-key version. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize rotated search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full043",
    "topic": "Binary Search",
    "level": "medium",
    "type": "debug",
    "title": "Rotated search: Medium checkpoint",
    "body": "A teammate has an implementation for **find target in rotated sorted array**. What reasoning best explains why the intended approach works?",
    "options": [
      "Identify which half is sorted, then check whether target lies in that half.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: At least one half retains sorted order in the distinct-key version.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Identify which half is sorted, then check whether target lies in that half. At least one half retains sorted order in the distinct-key version. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize rotated search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full044",
    "topic": "Binary Search",
    "level": "hard",
    "type": "design",
    "title": "Rotated search: Hard checkpoint",
    "body": "For a difficult variant of **find target in rotated sorted array**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Identify which half is sorted, then check whether target lies in that half.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: At least one half retains sorted order in the distinct-key version.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Identify which half is sorted, then check whether target lies in that half. At least one half retains sorted order in the distinct-key version. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize rotated search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full045",
    "topic": "Binary Search",
    "level": "foundation",
    "type": "mcq",
    "title": "Answer search: Foundation checkpoint",
    "body": "What is the key idea behind **smallest feasible rate/capacity**?",
    "options": [
      "Binary search the numeric answer using a monotone feasibility function.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The key requirement is not sorted input; it is monotone feasibility over the answer domain.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Binary search the numeric answer using a monotone feasibility function. The key requirement is not sorted input; it is monotone feasibility over the answer domain. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize answer search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full046",
    "topic": "Binary Search",
    "level": "easy",
    "type": "coding",
    "title": "Answer search: Easy checkpoint",
    "body": "You need an efficient solution for **smallest feasible rate/capacity**. Which approach is the best starting point?",
    "options": [
      "Binary search the numeric answer using a monotone feasibility function.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The key requirement is not sorted input; it is monotone feasibility over the answer domain.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Binary search the numeric answer using a monotone feasibility function. The key requirement is not sorted input; it is monotone feasibility over the answer domain. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize answer search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full047",
    "topic": "Binary Search",
    "level": "medium",
    "type": "debug",
    "title": "Answer search: Medium checkpoint",
    "body": "A teammate has an implementation for **smallest feasible rate/capacity**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Binary search the numeric answer using a monotone feasibility function.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The key requirement is not sorted input; it is monotone feasibility over the answer domain.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Binary search the numeric answer using a monotone feasibility function. The key requirement is not sorted input; it is monotone feasibility over the answer domain. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize answer search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full048",
    "topic": "Binary Search",
    "level": "hard",
    "type": "design",
    "title": "Answer search: Hard checkpoint",
    "body": "For a difficult variant of **smallest feasible rate/capacity**, which design principle should remain unchanged?",
    "options": [
      "Binary search the numeric answer using a monotone feasibility function.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The key requirement is not sorted input; it is monotone feasibility over the answer domain.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Binary search the numeric answer using a monotone feasibility function. The key requirement is not sorted input; it is monotone feasibility over the answer domain. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize answer search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full049",
    "topic": "Sorting & Intervals",
    "level": "foundation",
    "type": "mcq",
    "title": "Merge intervals: Foundation checkpoint",
    "body": "What is the key idea behind **merge overlapping ranges**?",
    "options": [
      "Sort by start and extend the current merged interval when overlap occurs.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Sorting ensures future intervals cannot start before the current one.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort by start and extend the current merged interval when overlap occurs. Sorting ensures future intervals cannot start before the current one. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize merge intervals as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full050",
    "topic": "Sorting & Intervals",
    "level": "easy",
    "type": "coding",
    "title": "Merge intervals: Easy checkpoint",
    "body": "You need an efficient solution for **merge overlapping ranges**. Which approach is the best starting point?",
    "options": [
      "Sort by start and extend the current merged interval when overlap occurs.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Sorting ensures future intervals cannot start before the current one.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort by start and extend the current merged interval when overlap occurs. Sorting ensures future intervals cannot start before the current one. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize merge intervals as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full051",
    "topic": "Sorting & Intervals",
    "level": "medium",
    "type": "debug",
    "title": "Merge intervals: Medium checkpoint",
    "body": "A teammate has an implementation for **merge overlapping ranges**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Sort by start and extend the current merged interval when overlap occurs.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Sorting ensures future intervals cannot start before the current one.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort by start and extend the current merged interval when overlap occurs. Sorting ensures future intervals cannot start before the current one. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize merge intervals as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full052",
    "topic": "Sorting & Intervals",
    "level": "hard",
    "type": "design",
    "title": "Merge intervals: Hard checkpoint",
    "body": "For a difficult variant of **merge overlapping ranges**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Sort by start and extend the current merged interval when overlap occurs."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Sorting ensures future intervals cannot start before the current one.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort by start and extend the current merged interval when overlap occurs. Sorting ensures future intervals cannot start before the current one. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize merge intervals as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full053",
    "topic": "Sorting & Intervals",
    "level": "foundation",
    "type": "mcq",
    "title": "Activity selection: Foundation checkpoint",
    "body": "What is the key idea behind **maximum number of non-overlapping intervals**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the next interval with earliest finish time.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Earliest finish leaves maximal room for future intervals and is exchange-optimal.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Choose the next interval with earliest finish time. Earliest finish leaves maximal room for future intervals and is exchange-optimal. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize activity selection as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full054",
    "topic": "Sorting & Intervals",
    "level": "easy",
    "type": "coding",
    "title": "Activity selection: Easy checkpoint",
    "body": "You need an efficient solution for **maximum number of non-overlapping intervals**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Choose the next interval with earliest finish time.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Earliest finish leaves maximal room for future intervals and is exchange-optimal.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Choose the next interval with earliest finish time. Earliest finish leaves maximal room for future intervals and is exchange-optimal. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize activity selection as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full055",
    "topic": "Sorting & Intervals",
    "level": "medium",
    "type": "debug",
    "title": "Activity selection: Medium checkpoint",
    "body": "A teammate has an implementation for **maximum number of non-overlapping intervals**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Choose the next interval with earliest finish time.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Earliest finish leaves maximal room for future intervals and is exchange-optimal.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Choose the next interval with earliest finish time. Earliest finish leaves maximal room for future intervals and is exchange-optimal. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize activity selection as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full056",
    "topic": "Sorting & Intervals",
    "level": "hard",
    "type": "design",
    "title": "Activity selection: Hard checkpoint",
    "body": "For a difficult variant of **maximum number of non-overlapping intervals**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the next interval with earliest finish time.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Earliest finish leaves maximal room for future intervals and is exchange-optimal.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Choose the next interval with earliest finish time. Earliest finish leaves maximal room for future intervals and is exchange-optimal. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize activity selection as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full057",
    "topic": "Sorting & Intervals",
    "level": "foundation",
    "type": "mcq",
    "title": "Meeting rooms: Foundation checkpoint",
    "body": "What is the key idea behind **minimum simultaneous rooms**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Count maximum overlap using sorted starts/ends or a min-heap of end times."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Required rooms equal the peak number of active intervals.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Count maximum overlap using sorted starts/ends or a min-heap of end times. Required rooms equal the peak number of active intervals. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize meeting rooms as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full058",
    "topic": "Sorting & Intervals",
    "level": "easy",
    "type": "coding",
    "title": "Meeting rooms: Easy checkpoint",
    "body": "You need an efficient solution for **minimum simultaneous rooms**. Which approach is the best starting point?",
    "options": [
      "Count maximum overlap using sorted starts/ends or a min-heap of end times.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Required rooms equal the peak number of active intervals.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Count maximum overlap using sorted starts/ends or a min-heap of end times. Required rooms equal the peak number of active intervals. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize meeting rooms as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full059",
    "topic": "Sorting & Intervals",
    "level": "medium",
    "type": "debug",
    "title": "Meeting rooms: Medium checkpoint",
    "body": "A teammate has an implementation for **minimum simultaneous rooms**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Count maximum overlap using sorted starts/ends or a min-heap of end times.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Required rooms equal the peak number of active intervals.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Count maximum overlap using sorted starts/ends or a min-heap of end times. Required rooms equal the peak number of active intervals. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize meeting rooms as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full060",
    "topic": "Sorting & Intervals",
    "level": "hard",
    "type": "design",
    "title": "Meeting rooms: Hard checkpoint",
    "body": "For a difficult variant of **minimum simultaneous rooms**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Count maximum overlap using sorted starts/ends or a min-heap of end times.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Required rooms equal the peak number of active intervals.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Count maximum overlap using sorted starts/ends or a min-heap of end times. Required rooms equal the peak number of active intervals. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize meeting rooms as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full061",
    "topic": "Sorting & Intervals",
    "level": "foundation",
    "type": "mcq",
    "title": "Quickselect: Foundation checkpoint",
    "body": "What is the key idea behind **kth order statistic without full sorting**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Partition around a pivot and recurse only into the side containing rank k."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Only the relative position of the pivot matters; full order is unnecessary.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Partition around a pivot and recurse only into the side containing rank k. Only the relative position of the pivot matters; full order is unnecessary. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize quickselect as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full062",
    "topic": "Sorting & Intervals",
    "level": "easy",
    "type": "coding",
    "title": "Quickselect: Easy checkpoint",
    "body": "You need an efficient solution for **kth order statistic without full sorting**. Which approach is the best starting point?",
    "options": [
      "Partition around a pivot and recurse only into the side containing rank k.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Only the relative position of the pivot matters; full order is unnecessary.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Partition around a pivot and recurse only into the side containing rank k. Only the relative position of the pivot matters; full order is unnecessary. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize quickselect as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full063",
    "topic": "Sorting & Intervals",
    "level": "medium",
    "type": "debug",
    "title": "Quickselect: Medium checkpoint",
    "body": "A teammate has an implementation for **kth order statistic without full sorting**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Partition around a pivot and recurse only into the side containing rank k.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Only the relative position of the pivot matters; full order is unnecessary.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Partition around a pivot and recurse only into the side containing rank k. Only the relative position of the pivot matters; full order is unnecessary. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize quickselect as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full064",
    "topic": "Sorting & Intervals",
    "level": "hard",
    "type": "design",
    "title": "Quickselect: Hard checkpoint",
    "body": "For a difficult variant of **kth order statistic without full sorting**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Partition around a pivot and recurse only into the side containing rank k.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Only the relative position of the pivot matters; full order is unnecessary.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Partition around a pivot and recurse only into the side containing rank k. Only the relative position of the pivot matters; full order is unnecessary. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize quickselect as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full065",
    "topic": "Linked Lists",
    "level": "foundation",
    "type": "mcq",
    "title": "Reverse list: Foundation checkpoint",
    "body": "What is the key idea behind **reverse singly linked list in-place**?",
    "options": [
      "Save next, point current.next backward, then advance prev/current.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Separate processed and unprocessed regions prevent losing the remaining list.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Save next, point current.next backward, then advance prev/current. Separate processed and unprocessed regions prevent losing the remaining list. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize reverse list as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full066",
    "topic": "Linked Lists",
    "level": "easy",
    "type": "coding",
    "title": "Reverse list: Easy checkpoint",
    "body": "You need an efficient solution for **reverse singly linked list in-place**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Save next, point current.next backward, then advance prev/current.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Separate processed and unprocessed regions prevent losing the remaining list.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Save next, point current.next backward, then advance prev/current. Separate processed and unprocessed regions prevent losing the remaining list. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize reverse list as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full067",
    "topic": "Linked Lists",
    "level": "medium",
    "type": "debug",
    "title": "Reverse list: Medium checkpoint",
    "body": "A teammate has an implementation for **reverse singly linked list in-place**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Save next, point current.next backward, then advance prev/current.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Separate processed and unprocessed regions prevent losing the remaining list.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Save next, point current.next backward, then advance prev/current. Separate processed and unprocessed regions prevent losing the remaining list. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize reverse list as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full068",
    "topic": "Linked Lists",
    "level": "hard",
    "type": "design",
    "title": "Reverse list: Hard checkpoint",
    "body": "For a difficult variant of **reverse singly linked list in-place**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Save next, point current.next backward, then advance prev/current."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Separate processed and unprocessed regions prevent losing the remaining list.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Save next, point current.next backward, then advance prev/current. Separate processed and unprocessed regions prevent losing the remaining list. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize reverse list as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full069",
    "topic": "Linked Lists",
    "level": "foundation",
    "type": "mcq",
    "title": "Middle node: Foundation checkpoint",
    "body": "What is the key idea behind **find midpoint in one pass**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Move slow one step and fast two steps."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Their relative speeds encode half the traversal length.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Move slow one step and fast two steps. Their relative speeds encode half the traversal length. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize middle node as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full070",
    "topic": "Linked Lists",
    "level": "easy",
    "type": "coding",
    "title": "Middle node: Easy checkpoint",
    "body": "You need an efficient solution for **find midpoint in one pass**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Move slow one step and fast two steps.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Their relative speeds encode half the traversal length.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Move slow one step and fast two steps. Their relative speeds encode half the traversal length. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize middle node as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full071",
    "topic": "Linked Lists",
    "level": "medium",
    "type": "debug",
    "title": "Middle node: Medium checkpoint",
    "body": "A teammate has an implementation for **find midpoint in one pass**. What reasoning best explains why the intended approach works?",
    "options": [
      "Move slow one step and fast two steps.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Their relative speeds encode half the traversal length.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Move slow one step and fast two steps. Their relative speeds encode half the traversal length. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize middle node as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full072",
    "topic": "Linked Lists",
    "level": "hard",
    "type": "design",
    "title": "Middle node: Hard checkpoint",
    "body": "For a difficult variant of **find midpoint in one pass**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Move slow one step and fast two steps.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Their relative speeds encode half the traversal length.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Move slow one step and fast two steps. Their relative speeds encode half the traversal length. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize middle node as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full073",
    "topic": "Linked Lists",
    "level": "foundation",
    "type": "mcq",
    "title": "Nth from end: Foundation checkpoint",
    "body": "What is the key idea behind **remove nth node from end**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use two pointers with an n-node gap and a dummy head.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Equal movement after the gap places slow exactly before the target node.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use two pointers with an n-node gap and a dummy head. Equal movement after the gap places slow exactly before the target node. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize nth from end as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full074",
    "topic": "Linked Lists",
    "level": "easy",
    "type": "coding",
    "title": "Nth from end: Easy checkpoint",
    "body": "You need an efficient solution for **remove nth node from end**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use two pointers with an n-node gap and a dummy head.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Equal movement after the gap places slow exactly before the target node.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use two pointers with an n-node gap and a dummy head. Equal movement after the gap places slow exactly before the target node. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize nth from end as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full075",
    "topic": "Linked Lists",
    "level": "medium",
    "type": "debug",
    "title": "Nth from end: Medium checkpoint",
    "body": "A teammate has an implementation for **remove nth node from end**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Use two pointers with an n-node gap and a dummy head."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Equal movement after the gap places slow exactly before the target node.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use two pointers with an n-node gap and a dummy head. Equal movement after the gap places slow exactly before the target node. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize nth from end as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full076",
    "topic": "Linked Lists",
    "level": "hard",
    "type": "design",
    "title": "Nth from end: Hard checkpoint",
    "body": "For a difficult variant of **remove nth node from end**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use two pointers with an n-node gap and a dummy head.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Equal movement after the gap places slow exactly before the target node.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use two pointers with an n-node gap and a dummy head. Equal movement after the gap places slow exactly before the target node. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize nth from end as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full077",
    "topic": "Linked Lists",
    "level": "foundation",
    "type": "mcq",
    "title": "Intersection: Foundation checkpoint",
    "body": "What is the key idea behind **find shared tail node of two lists**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Redirect each pointer to the other list after reaching its own end."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Both pointers then traverse equal total path lengths, cancelling different prefixes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Redirect each pointer to the other list after reaching its own end. Both pointers then traverse equal total path lengths, cancelling different prefixes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize intersection as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full078",
    "topic": "Linked Lists",
    "level": "easy",
    "type": "coding",
    "title": "Intersection: Easy checkpoint",
    "body": "You need an efficient solution for **find shared tail node of two lists**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Redirect each pointer to the other list after reaching its own end.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Both pointers then traverse equal total path lengths, cancelling different prefixes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Redirect each pointer to the other list after reaching its own end. Both pointers then traverse equal total path lengths, cancelling different prefixes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize intersection as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full079",
    "topic": "Linked Lists",
    "level": "medium",
    "type": "debug",
    "title": "Intersection: Medium checkpoint",
    "body": "A teammate has an implementation for **find shared tail node of two lists**. What reasoning best explains why the intended approach works?",
    "options": [
      "Redirect each pointer to the other list after reaching its own end.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Both pointers then traverse equal total path lengths, cancelling different prefixes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Redirect each pointer to the other list after reaching its own end. Both pointers then traverse equal total path lengths, cancelling different prefixes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize intersection as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full080",
    "topic": "Linked Lists",
    "level": "hard",
    "type": "design",
    "title": "Intersection: Hard checkpoint",
    "body": "For a difficult variant of **find shared tail node of two lists**, which design principle should remain unchanged?",
    "options": [
      "Redirect each pointer to the other list after reaching its own end.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Both pointers then traverse equal total path lengths, cancelling different prefixes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Redirect each pointer to the other list after reaching its own end. Both pointers then traverse equal total path lengths, cancelling different prefixes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize intersection as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full081",
    "topic": "Stacks & Monotonic Structures",
    "level": "foundation",
    "type": "mcq",
    "title": "Valid parentheses: Foundation checkpoint",
    "body": "What is the key idea behind **validate nested delimiters**?",
    "options": [
      "Push openers; each closer must match the stack top.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Nested scopes close in last-in-first-out order.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Push openers; each closer must match the stack top. Nested scopes close in last-in-first-out order. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize valid parentheses as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full082",
    "topic": "Stacks & Monotonic Structures",
    "level": "easy",
    "type": "coding",
    "title": "Valid parentheses: Easy checkpoint",
    "body": "You need an efficient solution for **validate nested delimiters**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Push openers; each closer must match the stack top.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Nested scopes close in last-in-first-out order.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Push openers; each closer must match the stack top. Nested scopes close in last-in-first-out order. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize valid parentheses as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full083",
    "topic": "Stacks & Monotonic Structures",
    "level": "medium",
    "type": "debug",
    "title": "Valid parentheses: Medium checkpoint",
    "body": "A teammate has an implementation for **validate nested delimiters**. What reasoning best explains why the intended approach works?",
    "options": [
      "Push openers; each closer must match the stack top.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Nested scopes close in last-in-first-out order.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Push openers; each closer must match the stack top. Nested scopes close in last-in-first-out order. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize valid parentheses as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full084",
    "topic": "Stacks & Monotonic Structures",
    "level": "hard",
    "type": "design",
    "title": "Valid parentheses: Hard checkpoint",
    "body": "For a difficult variant of **validate nested delimiters**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Push openers; each closer must match the stack top.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Nested scopes close in last-in-first-out order.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Push openers; each closer must match the stack top. Nested scopes close in last-in-first-out order. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize valid parentheses as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full085",
    "topic": "Stacks & Monotonic Structures",
    "level": "foundation",
    "type": "mcq",
    "title": "Next greater: Foundation checkpoint",
    "body": "What is the key idea behind **next greater element to the right**?",
    "options": [
      "Maintain a decreasing stack of unresolved indices.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A current larger value resolves all smaller unresolved values on top.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain a decreasing stack of unresolved indices. A current larger value resolves all smaller unresolved values on top. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize next greater as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full086",
    "topic": "Stacks & Monotonic Structures",
    "level": "easy",
    "type": "coding",
    "title": "Next greater: Easy checkpoint",
    "body": "You need an efficient solution for **next greater element to the right**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Maintain a decreasing stack of unresolved indices.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A current larger value resolves all smaller unresolved values on top.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain a decreasing stack of unresolved indices. A current larger value resolves all smaller unresolved values on top. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize next greater as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full087",
    "topic": "Stacks & Monotonic Structures",
    "level": "medium",
    "type": "debug",
    "title": "Next greater: Medium checkpoint",
    "body": "A teammate has an implementation for **next greater element to the right**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Maintain a decreasing stack of unresolved indices.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A current larger value resolves all smaller unresolved values on top.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain a decreasing stack of unresolved indices. A current larger value resolves all smaller unresolved values on top. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize next greater as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full088",
    "topic": "Stacks & Monotonic Structures",
    "level": "hard",
    "type": "design",
    "title": "Next greater: Hard checkpoint",
    "body": "For a difficult variant of **next greater element to the right**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Maintain a decreasing stack of unresolved indices."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A current larger value resolves all smaller unresolved values on top.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain a decreasing stack of unresolved indices. A current larger value resolves all smaller unresolved values on top. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize next greater as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full089",
    "topic": "Stacks & Monotonic Structures",
    "level": "foundation",
    "type": "mcq",
    "title": "Largest histogram: Foundation checkpoint",
    "body": "What is the key idea behind **maximum rectangle under bars**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Use an increasing stack and compute widths when a shorter bar arrives.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The first smaller bar on each side defines the maximal width of a bar.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use an increasing stack and compute widths when a shorter bar arrives. The first smaller bar on each side defines the maximal width of a bar. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize largest histogram as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full090",
    "topic": "Stacks & Monotonic Structures",
    "level": "easy",
    "type": "coding",
    "title": "Largest histogram: Easy checkpoint",
    "body": "You need an efficient solution for **maximum rectangle under bars**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use an increasing stack and compute widths when a shorter bar arrives.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The first smaller bar on each side defines the maximal width of a bar.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use an increasing stack and compute widths when a shorter bar arrives. The first smaller bar on each side defines the maximal width of a bar. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize largest histogram as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full091",
    "topic": "Stacks & Monotonic Structures",
    "level": "medium",
    "type": "debug",
    "title": "Largest histogram: Medium checkpoint",
    "body": "A teammate has an implementation for **maximum rectangle under bars**. What reasoning best explains why the intended approach works?",
    "options": [
      "Use an increasing stack and compute widths when a shorter bar arrives.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The first smaller bar on each side defines the maximal width of a bar.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use an increasing stack and compute widths when a shorter bar arrives. The first smaller bar on each side defines the maximal width of a bar. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize largest histogram as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full092",
    "topic": "Stacks & Monotonic Structures",
    "level": "hard",
    "type": "design",
    "title": "Largest histogram: Hard checkpoint",
    "body": "For a difficult variant of **maximum rectangle under bars**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Use an increasing stack and compute widths when a shorter bar arrives."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The first smaller bar on each side defines the maximal width of a bar.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use an increasing stack and compute widths when a shorter bar arrives. The first smaller bar on each side defines the maximal width of a bar. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize largest histogram as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full093",
    "topic": "Stacks & Monotonic Structures",
    "level": "foundation",
    "type": "mcq",
    "title": "Min stack: Foundation checkpoint",
    "body": "What is the key idea behind **O(1) minimum with stack updates**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Store the minimum-so-far along with each pushed value or in a second stack."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Each stack state carries a summary that can be restored on pop.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store the minimum-so-far along with each pushed value or in a second stack. Each stack state carries a summary that can be restored on pop. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize min stack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full094",
    "topic": "Stacks & Monotonic Structures",
    "level": "easy",
    "type": "coding",
    "title": "Min stack: Easy checkpoint",
    "body": "You need an efficient solution for **O(1) minimum with stack updates**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Store the minimum-so-far along with each pushed value or in a second stack.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Each stack state carries a summary that can be restored on pop.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store the minimum-so-far along with each pushed value or in a second stack. Each stack state carries a summary that can be restored on pop. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize min stack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full095",
    "topic": "Stacks & Monotonic Structures",
    "level": "medium",
    "type": "debug",
    "title": "Min stack: Medium checkpoint",
    "body": "A teammate has an implementation for **O(1) minimum with stack updates**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Store the minimum-so-far along with each pushed value or in a second stack.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Each stack state carries a summary that can be restored on pop.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store the minimum-so-far along with each pushed value or in a second stack. Each stack state carries a summary that can be restored on pop. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize min stack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full096",
    "topic": "Stacks & Monotonic Structures",
    "level": "hard",
    "type": "design",
    "title": "Min stack: Hard checkpoint",
    "body": "For a difficult variant of **O(1) minimum with stack updates**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Store the minimum-so-far along with each pushed value or in a second stack."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Each stack state carries a summary that can be restored on pop.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store the minimum-so-far along with each pushed value or in a second stack. Each stack state carries a summary that can be restored on pop. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize min stack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full097",
    "topic": "Hashing",
    "level": "foundation",
    "type": "mcq",
    "title": "Two sum: Foundation checkpoint",
    "body": "What is the key idea behind **pair complement lookup**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Store previously seen values and ask for target-x on each element.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Pair search becomes a membership query.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store previously seen values and ask for target-x on each element. Pair search becomes a membership query. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize two sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full098",
    "topic": "Hashing",
    "level": "easy",
    "type": "coding",
    "title": "Two sum: Easy checkpoint",
    "body": "You need an efficient solution for **pair complement lookup**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Store previously seen values and ask for target-x on each element.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Pair search becomes a membership query.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store previously seen values and ask for target-x on each element. Pair search becomes a membership query. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize two sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full099",
    "topic": "Hashing",
    "level": "medium",
    "type": "debug",
    "title": "Two sum: Medium checkpoint",
    "body": "A teammate has an implementation for **pair complement lookup**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Store previously seen values and ask for target-x on each element."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Pair search becomes a membership query.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store previously seen values and ask for target-x on each element. Pair search becomes a membership query. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize two sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full100",
    "topic": "Hashing",
    "level": "hard",
    "type": "design",
    "title": "Two sum: Hard checkpoint",
    "body": "For a difficult variant of **pair complement lookup**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Store previously seen values and ask for target-x on each element."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Pair search becomes a membership query.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store previously seen values and ask for target-x on each element. Pair search becomes a membership query. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize two sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full101",
    "topic": "Hashing",
    "level": "foundation",
    "type": "mcq",
    "title": "Frequency map: Foundation checkpoint",
    "body": "What is the key idea behind **count occurrences**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use a hash map keyed by value/character and increment a counter."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Counting is linear and preserves the identity of each key.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a hash map keyed by value/character and increment a counter. Counting is linear and preserves the identity of each key. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize frequency map as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full102",
    "topic": "Hashing",
    "level": "easy",
    "type": "coding",
    "title": "Frequency map: Easy checkpoint",
    "body": "You need an efficient solution for **count occurrences**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use a hash map keyed by value/character and increment a counter.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Counting is linear and preserves the identity of each key.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a hash map keyed by value/character and increment a counter. Counting is linear and preserves the identity of each key. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize frequency map as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full103",
    "topic": "Hashing",
    "level": "medium",
    "type": "debug",
    "title": "Frequency map: Medium checkpoint",
    "body": "A teammate has an implementation for **count occurrences**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use a hash map keyed by value/character and increment a counter."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Counting is linear and preserves the identity of each key.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a hash map keyed by value/character and increment a counter. Counting is linear and preserves the identity of each key. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize frequency map as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full104",
    "topic": "Hashing",
    "level": "hard",
    "type": "design",
    "title": "Frequency map: Hard checkpoint",
    "body": "For a difficult variant of **count occurrences**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Use a hash map keyed by value/character and increment a counter."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Counting is linear and preserves the identity of each key.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a hash map keyed by value/character and increment a counter. Counting is linear and preserves the identity of each key. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize frequency map as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full105",
    "topic": "Hashing",
    "level": "foundation",
    "type": "mcq",
    "title": "Longest consecutive: Foundation checkpoint",
    "body": "What is the key idea behind **longest integer run in an unsorted array**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Only start a run when x-1 is absent from the set.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: True starts prevent repeatedly rescanning the same run.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Only start a run when x-1 is absent from the set. True starts prevent repeatedly rescanning the same run. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize longest consecutive as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full106",
    "topic": "Hashing",
    "level": "easy",
    "type": "coding",
    "title": "Longest consecutive: Easy checkpoint",
    "body": "You need an efficient solution for **longest integer run in an unsorted array**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Only start a run when x-1 is absent from the set.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: True starts prevent repeatedly rescanning the same run.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Only start a run when x-1 is absent from the set. True starts prevent repeatedly rescanning the same run. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize longest consecutive as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full107",
    "topic": "Hashing",
    "level": "medium",
    "type": "debug",
    "title": "Longest consecutive: Medium checkpoint",
    "body": "A teammate has an implementation for **longest integer run in an unsorted array**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Only start a run when x-1 is absent from the set."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: True starts prevent repeatedly rescanning the same run.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Only start a run when x-1 is absent from the set. True starts prevent repeatedly rescanning the same run. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize longest consecutive as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full108",
    "topic": "Hashing",
    "level": "hard",
    "type": "design",
    "title": "Longest consecutive: Hard checkpoint",
    "body": "For a difficult variant of **longest integer run in an unsorted array**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Only start a run when x-1 is absent from the set.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: True starts prevent repeatedly rescanning the same run.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Only start a run when x-1 is absent from the set. True starts prevent repeatedly rescanning the same run. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize longest consecutive as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full109",
    "topic": "Hashing",
    "level": "foundation",
    "type": "mcq",
    "title": "Grouping anagrams: Foundation checkpoint",
    "body": "What is the key idea behind **group strings by character multiset**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Use a frequency signature or sorted canonical key as the hash key.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Anagrams share the same multiset signature regardless of order.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a frequency signature or sorted canonical key as the hash key. Anagrams share the same multiset signature regardless of order. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize grouping anagrams as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full110",
    "topic": "Hashing",
    "level": "easy",
    "type": "coding",
    "title": "Grouping anagrams: Easy checkpoint",
    "body": "You need an efficient solution for **group strings by character multiset**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use a frequency signature or sorted canonical key as the hash key."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Anagrams share the same multiset signature regardless of order.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a frequency signature or sorted canonical key as the hash key. Anagrams share the same multiset signature regardless of order. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize grouping anagrams as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full111",
    "topic": "Hashing",
    "level": "medium",
    "type": "debug",
    "title": "Grouping anagrams: Medium checkpoint",
    "body": "A teammate has an implementation for **group strings by character multiset**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Use a frequency signature or sorted canonical key as the hash key.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Anagrams share the same multiset signature regardless of order.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a frequency signature or sorted canonical key as the hash key. Anagrams share the same multiset signature regardless of order. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize grouping anagrams as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full112",
    "topic": "Hashing",
    "level": "hard",
    "type": "design",
    "title": "Grouping anagrams: Hard checkpoint",
    "body": "For a difficult variant of **group strings by character multiset**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Use a frequency signature or sorted canonical key as the hash key.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Anagrams share the same multiset signature regardless of order.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a frequency signature or sorted canonical key as the hash key. Anagrams share the same multiset signature regardless of order. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize grouping anagrams as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full113",
    "topic": "Trees & BST",
    "level": "foundation",
    "type": "mcq",
    "title": "BST search: Foundation checkpoint",
    "body": "What is the key idea behind **find a key in a BST**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Compare with current and go left/right according to the ordering invariant.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: BST search uses global subtree ordering to discard half a decision path.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Compare with current and go left/right according to the ordering invariant. BST search uses global subtree ordering to discard half a decision path. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bst search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full114",
    "topic": "Trees & BST",
    "level": "easy",
    "type": "coding",
    "title": "BST search: Easy checkpoint",
    "body": "You need an efficient solution for **find a key in a BST**. Which approach is the best starting point?",
    "options": [
      "Compare with current and go left/right according to the ordering invariant.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: BST search uses global subtree ordering to discard half a decision path.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Compare with current and go left/right according to the ordering invariant. BST search uses global subtree ordering to discard half a decision path. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bst search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full115",
    "topic": "Trees & BST",
    "level": "medium",
    "type": "debug",
    "title": "BST search: Medium checkpoint",
    "body": "A teammate has an implementation for **find a key in a BST**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Compare with current and go left/right according to the ordering invariant."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: BST search uses global subtree ordering to discard half a decision path.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Compare with current and go left/right according to the ordering invariant. BST search uses global subtree ordering to discard half a decision path. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bst search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full116",
    "topic": "Trees & BST",
    "level": "hard",
    "type": "design",
    "title": "BST search: Hard checkpoint",
    "body": "For a difficult variant of **find a key in a BST**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Compare with current and go left/right according to the ordering invariant.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: BST search uses global subtree ordering to discard half a decision path.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Compare with current and go left/right according to the ordering invariant. BST search uses global subtree ordering to discard half a decision path. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bst search as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full117",
    "topic": "Trees & BST",
    "level": "foundation",
    "type": "mcq",
    "title": "Tree depth: Foundation checkpoint",
    "body": "What is the key idea behind **maximum root-to-leaf depth**?",
    "options": [
      "Return 1+max(leftDepth,rightDepth).",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The recursive definition of height mirrors the tree structure.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Return 1+max(leftDepth,rightDepth). The recursive definition of height mirrors the tree structure. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize tree depth as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full118",
    "topic": "Trees & BST",
    "level": "easy",
    "type": "coding",
    "title": "Tree depth: Easy checkpoint",
    "body": "You need an efficient solution for **maximum root-to-leaf depth**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Return 1+max(leftDepth,rightDepth).",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The recursive definition of height mirrors the tree structure.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Return 1+max(leftDepth,rightDepth). The recursive definition of height mirrors the tree structure. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize tree depth as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full119",
    "topic": "Trees & BST",
    "level": "medium",
    "type": "debug",
    "title": "Tree depth: Medium checkpoint",
    "body": "A teammate has an implementation for **maximum root-to-leaf depth**. What reasoning best explains why the intended approach works?",
    "options": [
      "Return 1+max(leftDepth,rightDepth).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The recursive definition of height mirrors the tree structure.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Return 1+max(leftDepth,rightDepth). The recursive definition of height mirrors the tree structure. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize tree depth as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full120",
    "topic": "Trees & BST",
    "level": "hard",
    "type": "design",
    "title": "Tree depth: Hard checkpoint",
    "body": "For a difficult variant of **maximum root-to-leaf depth**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Return 1+max(leftDepth,rightDepth).",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The recursive definition of height mirrors the tree structure.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Return 1+max(leftDepth,rightDepth). The recursive definition of height mirrors the tree structure. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize tree depth as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full121",
    "topic": "Trees & BST",
    "level": "foundation",
    "type": "mcq",
    "title": "LCA BST: Foundation checkpoint",
    "body": "What is the key idea behind **lowest common ancestor in BST**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "If both targets are smaller go left; if both larger go right; otherwise current is the split point."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The first divergence of the two search paths is their LCA.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: If both targets are smaller go left; if both larger go right; otherwise current is the split point. The first divergence of the two search paths is their LCA. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lca bst as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full122",
    "topic": "Trees & BST",
    "level": "easy",
    "type": "coding",
    "title": "LCA BST: Easy checkpoint",
    "body": "You need an efficient solution for **lowest common ancestor in BST**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "If both targets are smaller go left; if both larger go right; otherwise current is the split point."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The first divergence of the two search paths is their LCA.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: If both targets are smaller go left; if both larger go right; otherwise current is the split point. The first divergence of the two search paths is their LCA. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lca bst as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full123",
    "topic": "Trees & BST",
    "level": "medium",
    "type": "debug",
    "title": "LCA BST: Medium checkpoint",
    "body": "A teammate has an implementation for **lowest common ancestor in BST**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "If both targets are smaller go left; if both larger go right; otherwise current is the split point."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The first divergence of the two search paths is their LCA.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: If both targets are smaller go left; if both larger go right; otherwise current is the split point. The first divergence of the two search paths is their LCA. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lca bst as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full124",
    "topic": "Trees & BST",
    "level": "hard",
    "type": "design",
    "title": "LCA BST: Hard checkpoint",
    "body": "For a difficult variant of **lowest common ancestor in BST**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "If both targets are smaller go left; if both larger go right; otherwise current is the split point."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The first divergence of the two search paths is their LCA.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: If both targets are smaller go left; if both larger go right; otherwise current is the split point. The first divergence of the two search paths is their LCA. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lca bst as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full125",
    "topic": "Trees & BST",
    "level": "foundation",
    "type": "mcq",
    "title": "Validate BST: Foundation checkpoint",
    "body": "What is the key idea behind **verify global ordering**?",
    "options": [
      "Carry lower/upper bounds or verify inorder is strictly sorted under the chosen duplicate rule.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Immediate-child checks miss violations against distant ancestors.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Carry lower/upper bounds or verify inorder is strictly sorted under the chosen duplicate rule. Immediate-child checks miss violations against distant ancestors. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize validate bst as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full126",
    "topic": "Trees & BST",
    "level": "easy",
    "type": "coding",
    "title": "Validate BST: Easy checkpoint",
    "body": "You need an efficient solution for **verify global ordering**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Carry lower/upper bounds or verify inorder is strictly sorted under the chosen duplicate rule."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Immediate-child checks miss violations against distant ancestors.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Carry lower/upper bounds or verify inorder is strictly sorted under the chosen duplicate rule. Immediate-child checks miss violations against distant ancestors. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize validate bst as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full127",
    "topic": "Trees & BST",
    "level": "medium",
    "type": "debug",
    "title": "Validate BST: Medium checkpoint",
    "body": "A teammate has an implementation for **verify global ordering**. What reasoning best explains why the intended approach works?",
    "options": [
      "Carry lower/upper bounds or verify inorder is strictly sorted under the chosen duplicate rule.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Immediate-child checks miss violations against distant ancestors.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Carry lower/upper bounds or verify inorder is strictly sorted under the chosen duplicate rule. Immediate-child checks miss violations against distant ancestors. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize validate bst as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full128",
    "topic": "Trees & BST",
    "level": "hard",
    "type": "design",
    "title": "Validate BST: Hard checkpoint",
    "body": "For a difficult variant of **verify global ordering**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Carry lower/upper bounds or verify inorder is strictly sorted under the chosen duplicate rule.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Immediate-child checks miss violations against distant ancestors.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Carry lower/upper bounds or verify inorder is strictly sorted under the chosen duplicate rule. Immediate-child checks miss violations against distant ancestors. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize validate bst as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full129",
    "topic": "Heaps & Priority Queues",
    "level": "foundation",
    "type": "mcq",
    "title": "Heap basics: Foundation checkpoint",
    "body": "What is the key idea behind **minimum item access**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "A min-heap guarantees the minimum at the root, not full sorting.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Heap order is partial.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: A min-heap guarantees the minimum at the root, not full sorting. Heap order is partial. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize heap basics as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full130",
    "topic": "Heaps & Priority Queues",
    "level": "easy",
    "type": "coding",
    "title": "Heap basics: Easy checkpoint",
    "body": "You need an efficient solution for **minimum item access**. Which approach is the best starting point?",
    "options": [
      "A min-heap guarantees the minimum at the root, not full sorting.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Heap order is partial.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: A min-heap guarantees the minimum at the root, not full sorting. Heap order is partial. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize heap basics as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full131",
    "topic": "Heaps & Priority Queues",
    "level": "medium",
    "type": "debug",
    "title": "Heap basics: Medium checkpoint",
    "body": "A teammate has an implementation for **minimum item access**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "A min-heap guarantees the minimum at the root, not full sorting."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Heap order is partial.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: A min-heap guarantees the minimum at the root, not full sorting. Heap order is partial. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize heap basics as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full132",
    "topic": "Heaps & Priority Queues",
    "level": "hard",
    "type": "design",
    "title": "Heap basics: Hard checkpoint",
    "body": "For a difficult variant of **minimum item access**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "A min-heap guarantees the minimum at the root, not full sorting."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Heap order is partial.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: A min-heap guarantees the minimum at the root, not full sorting. Heap order is partial. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize heap basics as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full133",
    "topic": "Heaps & Priority Queues",
    "level": "foundation",
    "type": "mcq",
    "title": "Top k: Foundation checkpoint",
    "body": "What is the key idea behind **retain k largest/smallest values**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use a heap bounded to k elements and evict the weakest candidate.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Only k candidates need to survive.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a heap bounded to k elements and evict the weakest candidate. Only k candidates need to survive. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize top k as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full134",
    "topic": "Heaps & Priority Queues",
    "level": "easy",
    "type": "coding",
    "title": "Top k: Easy checkpoint",
    "body": "You need an efficient solution for **retain k largest/smallest values**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use a heap bounded to k elements and evict the weakest candidate.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Only k candidates need to survive.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a heap bounded to k elements and evict the weakest candidate. Only k candidates need to survive. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize top k as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full135",
    "topic": "Heaps & Priority Queues",
    "level": "medium",
    "type": "debug",
    "title": "Top k: Medium checkpoint",
    "body": "A teammate has an implementation for **retain k largest/smallest values**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use a heap bounded to k elements and evict the weakest candidate.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Only k candidates need to survive.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a heap bounded to k elements and evict the weakest candidate. Only k candidates need to survive. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize top k as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full136",
    "topic": "Heaps & Priority Queues",
    "level": "hard",
    "type": "design",
    "title": "Top k: Hard checkpoint",
    "body": "For a difficult variant of **retain k largest/smallest values**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use a heap bounded to k elements and evict the weakest candidate.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Only k candidates need to survive.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use a heap bounded to k elements and evict the weakest candidate. Only k candidates need to survive. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize top k as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full137",
    "topic": "Heaps & Priority Queues",
    "level": "foundation",
    "type": "mcq",
    "title": "Merge sorted streams: Foundation checkpoint",
    "body": "What is the key idea behind **merge k sorted sources**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Keep the current head of each source in a min-heap.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The next global minimum must be among the current heads.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Keep the current head of each source in a min-heap. The next global minimum must be among the current heads. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize merge sorted streams as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full138",
    "topic": "Heaps & Priority Queues",
    "level": "easy",
    "type": "coding",
    "title": "Merge sorted streams: Easy checkpoint",
    "body": "You need an efficient solution for **merge k sorted sources**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Keep the current head of each source in a min-heap."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The next global minimum must be among the current heads.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Keep the current head of each source in a min-heap. The next global minimum must be among the current heads. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize merge sorted streams as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full139",
    "topic": "Heaps & Priority Queues",
    "level": "medium",
    "type": "debug",
    "title": "Merge sorted streams: Medium checkpoint",
    "body": "A teammate has an implementation for **merge k sorted sources**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Keep the current head of each source in a min-heap.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The next global minimum must be among the current heads.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Keep the current head of each source in a min-heap. The next global minimum must be among the current heads. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize merge sorted streams as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full140",
    "topic": "Heaps & Priority Queues",
    "level": "hard",
    "type": "design",
    "title": "Merge sorted streams: Hard checkpoint",
    "body": "For a difficult variant of **merge k sorted sources**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Keep the current head of each source in a min-heap."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The next global minimum must be among the current heads.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Keep the current head of each source in a min-heap. The next global minimum must be among the current heads. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize merge sorted streams as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full141",
    "topic": "Heaps & Priority Queues",
    "level": "foundation",
    "type": "mcq",
    "title": "Median stream: Foundation checkpoint",
    "body": "What is the key idea behind **online median**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Maintain a max-heap for the lower half and min-heap for the upper half, balanced by size."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The roots bracket the median while each heap stores one side.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain a max-heap for the lower half and min-heap for the upper half, balanced by size. The roots bracket the median while each heap stores one side. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize median stream as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full142",
    "topic": "Heaps & Priority Queues",
    "level": "easy",
    "type": "coding",
    "title": "Median stream: Easy checkpoint",
    "body": "You need an efficient solution for **online median**. Which approach is the best starting point?",
    "options": [
      "Maintain a max-heap for the lower half and min-heap for the upper half, balanced by size.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The roots bracket the median while each heap stores one side.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain a max-heap for the lower half and min-heap for the upper half, balanced by size. The roots bracket the median while each heap stores one side. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize median stream as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full143",
    "topic": "Heaps & Priority Queues",
    "level": "medium",
    "type": "debug",
    "title": "Median stream: Medium checkpoint",
    "body": "A teammate has an implementation for **online median**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Maintain a max-heap for the lower half and min-heap for the upper half, balanced by size.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The roots bracket the median while each heap stores one side.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain a max-heap for the lower half and min-heap for the upper half, balanced by size. The roots bracket the median while each heap stores one side. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize median stream as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full144",
    "topic": "Heaps & Priority Queues",
    "level": "hard",
    "type": "design",
    "title": "Median stream: Hard checkpoint",
    "body": "For a difficult variant of **online median**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Maintain a max-heap for the lower half and min-heap for the upper half, balanced by size.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The roots bracket the median while each heap stores one side.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Maintain a max-heap for the lower half and min-heap for the upper half, balanced by size. The roots bracket the median while each heap stores one side. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize median stream as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full145",
    "topic": "Tries & Strings",
    "level": "foundation",
    "type": "mcq",
    "title": "Trie basics: Foundation checkpoint",
    "body": "What is the key idea behind **prefix search**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Follow one edge per character and mark terminal words.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Node paths explicitly encode prefixes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Follow one edge per character and mark terminal words. Node paths explicitly encode prefixes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize trie basics as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full146",
    "topic": "Tries & Strings",
    "level": "easy",
    "type": "coding",
    "title": "Trie basics: Easy checkpoint",
    "body": "You need an efficient solution for **prefix search**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Follow one edge per character and mark terminal words.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Node paths explicitly encode prefixes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Follow one edge per character and mark terminal words. Node paths explicitly encode prefixes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize trie basics as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full147",
    "topic": "Tries & Strings",
    "level": "medium",
    "type": "debug",
    "title": "Trie basics: Medium checkpoint",
    "body": "A teammate has an implementation for **prefix search**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Follow one edge per character and mark terminal words."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Node paths explicitly encode prefixes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Follow one edge per character and mark terminal words. Node paths explicitly encode prefixes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize trie basics as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full148",
    "topic": "Tries & Strings",
    "level": "hard",
    "type": "design",
    "title": "Trie basics: Hard checkpoint",
    "body": "For a difficult variant of **prefix search**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Follow one edge per character and mark terminal words."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Node paths explicitly encode prefixes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Follow one edge per character and mark terminal words. Node paths explicitly encode prefixes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize trie basics as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full149",
    "topic": "Tries & Strings",
    "level": "foundation",
    "type": "mcq",
    "title": "Autocomplete: Foundation checkpoint",
    "body": "What is the key idea behind **find completions of a prefix**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Walk to the prefix node then enumerate/rank descendants.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The prefix node is the root of exactly the matching completion subtree.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Walk to the prefix node then enumerate/rank descendants. The prefix node is the root of exactly the matching completion subtree. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize autocomplete as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full150",
    "topic": "Tries & Strings",
    "level": "easy",
    "type": "coding",
    "title": "Autocomplete: Easy checkpoint",
    "body": "You need an efficient solution for **find completions of a prefix**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Walk to the prefix node then enumerate/rank descendants."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The prefix node is the root of exactly the matching completion subtree.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Walk to the prefix node then enumerate/rank descendants. The prefix node is the root of exactly the matching completion subtree. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize autocomplete as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full151",
    "topic": "Tries & Strings",
    "level": "medium",
    "type": "debug",
    "title": "Autocomplete: Medium checkpoint",
    "body": "A teammate has an implementation for **find completions of a prefix**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Walk to the prefix node then enumerate/rank descendants.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The prefix node is the root of exactly the matching completion subtree.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Walk to the prefix node then enumerate/rank descendants. The prefix node is the root of exactly the matching completion subtree. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize autocomplete as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full152",
    "topic": "Tries & Strings",
    "level": "hard",
    "type": "design",
    "title": "Autocomplete: Hard checkpoint",
    "body": "For a difficult variant of **find completions of a prefix**, which design principle should remain unchanged?",
    "options": [
      "Walk to the prefix node then enumerate/rank descendants.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The prefix node is the root of exactly the matching completion subtree.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Walk to the prefix node then enumerate/rank descendants. The prefix node is the root of exactly the matching completion subtree. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize autocomplete as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full153",
    "topic": "Tries & Strings",
    "level": "foundation",
    "type": "mcq",
    "title": "Word dictionary: Foundation checkpoint",
    "body": "What is the key idea behind **many words sharing prefixes**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use trie traversal to reject impossible prefixes early.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A failed prefix eliminates an entire family of candidates.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use trie traversal to reject impossible prefixes early. A failed prefix eliminates an entire family of candidates. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize word dictionary as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full154",
    "topic": "Tries & Strings",
    "level": "easy",
    "type": "coding",
    "title": "Word dictionary: Easy checkpoint",
    "body": "You need an efficient solution for **many words sharing prefixes**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Use trie traversal to reject impossible prefixes early.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A failed prefix eliminates an entire family of candidates.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use trie traversal to reject impossible prefixes early. A failed prefix eliminates an entire family of candidates. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize word dictionary as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full155",
    "topic": "Tries & Strings",
    "level": "medium",
    "type": "debug",
    "title": "Word dictionary: Medium checkpoint",
    "body": "A teammate has an implementation for **many words sharing prefixes**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use trie traversal to reject impossible prefixes early."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A failed prefix eliminates an entire family of candidates.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use trie traversal to reject impossible prefixes early. A failed prefix eliminates an entire family of candidates. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize word dictionary as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full156",
    "topic": "Tries & Strings",
    "level": "hard",
    "type": "design",
    "title": "Word dictionary: Hard checkpoint",
    "body": "For a difficult variant of **many words sharing prefixes**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use trie traversal to reject impossible prefixes early.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: A failed prefix eliminates an entire family of candidates.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use trie traversal to reject impossible prefixes early. A failed prefix eliminates an entire family of candidates. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize word dictionary as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full157",
    "topic": "Tries & Strings",
    "level": "foundation",
    "type": "mcq",
    "title": "Bitwise trie: Foundation checkpoint",
    "body": "What is the key idea behind **maximize XOR pair**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "At each bit, prefer the opposite bit if it exists."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Higher-order differing bits dominate the XOR value.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: At each bit, prefer the opposite bit if it exists. Higher-order differing bits dominate the XOR value. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bitwise trie as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full158",
    "topic": "Tries & Strings",
    "level": "easy",
    "type": "coding",
    "title": "Bitwise trie: Easy checkpoint",
    "body": "You need an efficient solution for **maximize XOR pair**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "At each bit, prefer the opposite bit if it exists."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Higher-order differing bits dominate the XOR value.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: At each bit, prefer the opposite bit if it exists. Higher-order differing bits dominate the XOR value. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bitwise trie as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full159",
    "topic": "Tries & Strings",
    "level": "medium",
    "type": "debug",
    "title": "Bitwise trie: Medium checkpoint",
    "body": "A teammate has an implementation for **maximize XOR pair**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "At each bit, prefer the opposite bit if it exists."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Higher-order differing bits dominate the XOR value.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: At each bit, prefer the opposite bit if it exists. Higher-order differing bits dominate the XOR value. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bitwise trie as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full160",
    "topic": "Tries & Strings",
    "level": "hard",
    "type": "design",
    "title": "Bitwise trie: Hard checkpoint",
    "body": "For a difficult variant of **maximize XOR pair**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "At each bit, prefer the opposite bit if it exists.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Higher-order differing bits dominate the XOR value.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: At each bit, prefer the opposite bit if it exists. Higher-order differing bits dominate the XOR value. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bitwise trie as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full161",
    "topic": "Backtracking",
    "level": "foundation",
    "type": "mcq",
    "title": "Subsets: Foundation checkpoint",
    "body": "What is the key idea behind **generate every subset**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "At each item choose include or exclude.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Two choices per item yield 2^n states.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: At each item choose include or exclude. Two choices per item yield 2^n states. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize subsets as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full162",
    "topic": "Backtracking",
    "level": "easy",
    "type": "coding",
    "title": "Subsets: Easy checkpoint",
    "body": "You need an efficient solution for **generate every subset**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "At each item choose include or exclude."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Two choices per item yield 2^n states.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: At each item choose include or exclude. Two choices per item yield 2^n states. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize subsets as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full163",
    "topic": "Backtracking",
    "level": "medium",
    "type": "debug",
    "title": "Subsets: Medium checkpoint",
    "body": "A teammate has an implementation for **generate every subset**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "At each item choose include or exclude.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Two choices per item yield 2^n states.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: At each item choose include or exclude. Two choices per item yield 2^n states. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize subsets as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full164",
    "topic": "Backtracking",
    "level": "hard",
    "type": "design",
    "title": "Subsets: Hard checkpoint",
    "body": "For a difficult variant of **generate every subset**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "At each item choose include or exclude.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Two choices per item yield 2^n states.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: At each item choose include or exclude. Two choices per item yield 2^n states. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize subsets as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full165",
    "topic": "Backtracking",
    "level": "foundation",
    "type": "mcq",
    "title": "Permutations: Foundation checkpoint",
    "body": "What is the key idea behind **generate all orderings**?",
    "options": [
      "Choose one unused item per position and undo after recursion.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Each level fixes one position and removes one available choice.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Choose one unused item per position and undo after recursion. Each level fixes one position and removes one available choice. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize permutations as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full166",
    "topic": "Backtracking",
    "level": "easy",
    "type": "coding",
    "title": "Permutations: Easy checkpoint",
    "body": "You need an efficient solution for **generate all orderings**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Choose one unused item per position and undo after recursion.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Each level fixes one position and removes one available choice.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Choose one unused item per position and undo after recursion. Each level fixes one position and removes one available choice. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize permutations as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full167",
    "topic": "Backtracking",
    "level": "medium",
    "type": "debug",
    "title": "Permutations: Medium checkpoint",
    "body": "A teammate has an implementation for **generate all orderings**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Choose one unused item per position and undo after recursion.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Each level fixes one position and removes one available choice.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Choose one unused item per position and undo after recursion. Each level fixes one position and removes one available choice. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize permutations as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full168",
    "topic": "Backtracking",
    "level": "hard",
    "type": "design",
    "title": "Permutations: Hard checkpoint",
    "body": "For a difficult variant of **generate all orderings**, which design principle should remain unchanged?",
    "options": [
      "Choose one unused item per position and undo after recursion.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Each level fixes one position and removes one available choice.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Choose one unused item per position and undo after recursion. Each level fixes one position and removes one available choice. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize permutations as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full169",
    "topic": "Backtracking",
    "level": "foundation",
    "type": "mcq",
    "title": "Combination sum: Foundation checkpoint",
    "body": "What is the key idea behind **find combinations meeting target**?",
    "options": [
      "Recurse with remaining target and prune when the remaining target is impossible.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: With positive candidates, a negative remainder can never recover.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Recurse with remaining target and prune when the remaining target is impossible. With positive candidates, a negative remainder can never recover. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize combination sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full170",
    "topic": "Backtracking",
    "level": "easy",
    "type": "coding",
    "title": "Combination sum: Easy checkpoint",
    "body": "You need an efficient solution for **find combinations meeting target**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recurse with remaining target and prune when the remaining target is impossible."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: With positive candidates, a negative remainder can never recover.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Recurse with remaining target and prune when the remaining target is impossible. With positive candidates, a negative remainder can never recover. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize combination sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full171",
    "topic": "Backtracking",
    "level": "medium",
    "type": "debug",
    "title": "Combination sum: Medium checkpoint",
    "body": "A teammate has an implementation for **find combinations meeting target**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recurse with remaining target and prune when the remaining target is impossible.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: With positive candidates, a negative remainder can never recover.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Recurse with remaining target and prune when the remaining target is impossible. With positive candidates, a negative remainder can never recover. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize combination sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full172",
    "topic": "Backtracking",
    "level": "hard",
    "type": "design",
    "title": "Combination sum: Hard checkpoint",
    "body": "For a difficult variant of **find combinations meeting target**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recurse with remaining target and prune when the remaining target is impossible.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: With positive candidates, a negative remainder can never recover.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Recurse with remaining target and prune when the remaining target is impossible. With positive candidates, a negative remainder can never recover. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize combination sum as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full173",
    "topic": "Backtracking",
    "level": "foundation",
    "type": "mcq",
    "title": "N-Queens: Foundation checkpoint",
    "body": "What is the key idea behind **place queens without conflicts**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Reject a partial placement immediately when its column or diagonal is occupied.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Pruning prevents impossible partial assignments from expanding.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reject a partial placement immediately when its column or diagonal is occupied. Pruning prevents impossible partial assignments from expanding. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize n-queens as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full174",
    "topic": "Backtracking",
    "level": "easy",
    "type": "coding",
    "title": "N-Queens: Easy checkpoint",
    "body": "You need an efficient solution for **place queens without conflicts**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Reject a partial placement immediately when its column or diagonal is occupied.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Pruning prevents impossible partial assignments from expanding.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reject a partial placement immediately when its column or diagonal is occupied. Pruning prevents impossible partial assignments from expanding. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize n-queens as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full175",
    "topic": "Backtracking",
    "level": "medium",
    "type": "debug",
    "title": "N-Queens: Medium checkpoint",
    "body": "A teammate has an implementation for **place queens without conflicts**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Reject a partial placement immediately when its column or diagonal is occupied.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Pruning prevents impossible partial assignments from expanding.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reject a partial placement immediately when its column or diagonal is occupied. Pruning prevents impossible partial assignments from expanding. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize n-queens as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full176",
    "topic": "Backtracking",
    "level": "hard",
    "type": "design",
    "title": "N-Queens: Hard checkpoint",
    "body": "For a difficult variant of **place queens without conflicts**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Reject a partial placement immediately when its column or diagonal is occupied.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Pruning prevents impossible partial assignments from expanding.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reject a partial placement immediately when its column or diagonal is occupied. Pruning prevents impossible partial assignments from expanding. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize n-queens as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full177",
    "topic": "Greedy",
    "level": "foundation",
    "type": "mcq",
    "title": "Jump reachability: Foundation checkpoint",
    "body": "What is the key idea behind **determine whether end is reachable**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Track the farthest reachable index while scanning.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: All paths from the processed prefix are summarized by one frontier.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track the farthest reachable index while scanning. All paths from the processed prefix are summarized by one frontier. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize jump reachability as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full178",
    "topic": "Greedy",
    "level": "easy",
    "type": "coding",
    "title": "Jump reachability: Easy checkpoint",
    "body": "You need an efficient solution for **determine whether end is reachable**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Track the farthest reachable index while scanning."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: All paths from the processed prefix are summarized by one frontier.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track the farthest reachable index while scanning. All paths from the processed prefix are summarized by one frontier. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize jump reachability as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full179",
    "topic": "Greedy",
    "level": "medium",
    "type": "debug",
    "title": "Jump reachability: Medium checkpoint",
    "body": "A teammate has an implementation for **determine whether end is reachable**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Track the farthest reachable index while scanning."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: All paths from the processed prefix are summarized by one frontier.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track the farthest reachable index while scanning. All paths from the processed prefix are summarized by one frontier. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize jump reachability as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full180",
    "topic": "Greedy",
    "level": "hard",
    "type": "design",
    "title": "Jump reachability: Hard checkpoint",
    "body": "For a difficult variant of **determine whether end is reachable**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Track the farthest reachable index while scanning.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: All paths from the processed prefix are summarized by one frontier.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Track the farthest reachable index while scanning. All paths from the processed prefix are summarized by one frontier. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize jump reachability as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full181",
    "topic": "Greedy",
    "level": "foundation",
    "type": "mcq",
    "title": "Gas station: Foundation checkpoint",
    "body": "What is the key idea behind **find valid circuit start**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Reset the candidate after a negative running balance when total gas is sufficient.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A failed prefix proves every later start inside that prefix also fails.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reset the candidate after a negative running balance when total gas is sufficient. A failed prefix proves every later start inside that prefix also fails. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize gas station as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full182",
    "topic": "Greedy",
    "level": "easy",
    "type": "coding",
    "title": "Gas station: Easy checkpoint",
    "body": "You need an efficient solution for **find valid circuit start**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Reset the candidate after a negative running balance when total gas is sufficient."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A failed prefix proves every later start inside that prefix also fails.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reset the candidate after a negative running balance when total gas is sufficient. A failed prefix proves every later start inside that prefix also fails. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize gas station as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full183",
    "topic": "Greedy",
    "level": "medium",
    "type": "debug",
    "title": "Gas station: Medium checkpoint",
    "body": "A teammate has an implementation for **find valid circuit start**. What reasoning best explains why the intended approach works?",
    "options": [
      "Reset the candidate after a negative running balance when total gas is sufficient.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A failed prefix proves every later start inside that prefix also fails.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reset the candidate after a negative running balance when total gas is sufficient. A failed prefix proves every later start inside that prefix also fails. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize gas station as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full184",
    "topic": "Greedy",
    "level": "hard",
    "type": "design",
    "title": "Gas station: Hard checkpoint",
    "body": "For a difficult variant of **find valid circuit start**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Reset the candidate after a negative running balance when total gas is sufficient."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A failed prefix proves every later start inside that prefix also fails.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reset the candidate after a negative running balance when total gas is sufficient. A failed prefix proves every later start inside that prefix also fails. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize gas station as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full185",
    "topic": "Greedy",
    "level": "foundation",
    "type": "mcq",
    "title": "Activity scheduling: Foundation checkpoint",
    "body": "What is the key idea behind **maximize compatible jobs**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Select the earliest finishing compatible job repeatedly."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: This exchange argument leaves the most remaining capacity.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Select the earliest finishing compatible job repeatedly. This exchange argument leaves the most remaining capacity. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize activity scheduling as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full186",
    "topic": "Greedy",
    "level": "easy",
    "type": "coding",
    "title": "Activity scheduling: Easy checkpoint",
    "body": "You need an efficient solution for **maximize compatible jobs**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Select the earliest finishing compatible job repeatedly."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: This exchange argument leaves the most remaining capacity.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Select the earliest finishing compatible job repeatedly. This exchange argument leaves the most remaining capacity. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize activity scheduling as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full187",
    "topic": "Greedy",
    "level": "medium",
    "type": "debug",
    "title": "Activity scheduling: Medium checkpoint",
    "body": "A teammate has an implementation for **maximize compatible jobs**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Select the earliest finishing compatible job repeatedly."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: This exchange argument leaves the most remaining capacity.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Select the earliest finishing compatible job repeatedly. This exchange argument leaves the most remaining capacity. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize activity scheduling as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full188",
    "topic": "Greedy",
    "level": "hard",
    "type": "design",
    "title": "Activity scheduling: Hard checkpoint",
    "body": "For a difficult variant of **maximize compatible jobs**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Select the earliest finishing compatible job repeatedly."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: This exchange argument leaves the most remaining capacity.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Select the earliest finishing compatible job repeatedly. This exchange argument leaves the most remaining capacity. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize activity scheduling as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full189",
    "topic": "Greedy",
    "level": "foundation",
    "type": "mcq",
    "title": "Huffman merge: Foundation checkpoint",
    "body": "What is the key idea behind **minimize repeated merge cost**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Always merge the two smallest current weights using a min-heap."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Small values should participate in more future merges than large values.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Always merge the two smallest current weights using a min-heap. Small values should participate in more future merges than large values. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize huffman merge as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full190",
    "topic": "Greedy",
    "level": "easy",
    "type": "coding",
    "title": "Huffman merge: Easy checkpoint",
    "body": "You need an efficient solution for **minimize repeated merge cost**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Always merge the two smallest current weights using a min-heap."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Small values should participate in more future merges than large values.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Always merge the two smallest current weights using a min-heap. Small values should participate in more future merges than large values. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize huffman merge as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full191",
    "topic": "Greedy",
    "level": "medium",
    "type": "debug",
    "title": "Huffman merge: Medium checkpoint",
    "body": "A teammate has an implementation for **minimize repeated merge cost**. What reasoning best explains why the intended approach works?",
    "options": [
      "Always merge the two smallest current weights using a min-heap.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Small values should participate in more future merges than large values.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Always merge the two smallest current weights using a min-heap. Small values should participate in more future merges than large values. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize huffman merge as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full192",
    "topic": "Greedy",
    "level": "hard",
    "type": "design",
    "title": "Huffman merge: Hard checkpoint",
    "body": "For a difficult variant of **minimize repeated merge cost**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Always merge the two smallest current weights using a min-heap.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Small values should participate in more future merges than large values.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Always merge the two smallest current weights using a min-heap. Small values should participate in more future merges than large values. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize huffman merge as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full193",
    "topic": "1-D Dynamic Programming",
    "level": "foundation",
    "type": "mcq",
    "title": "House robber: Foundation checkpoint",
    "body": "What is the key idea behind **maximize sum without adjacent picks**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "dp[i]=max(dp[i-1], value[i]+dp[i-2]).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The last decision is take or skip.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[i]=max(dp[i-1], value[i]+dp[i-2]). The last decision is take or skip. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize house robber as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full194",
    "topic": "1-D Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "House robber: Easy checkpoint",
    "body": "You need an efficient solution for **maximize sum without adjacent picks**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "dp[i]=max(dp[i-1], value[i]+dp[i-2])."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The last decision is take or skip.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[i]=max(dp[i-1], value[i]+dp[i-2]). The last decision is take or skip. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize house robber as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full195",
    "topic": "1-D Dynamic Programming",
    "level": "medium",
    "type": "debug",
    "title": "House robber: Medium checkpoint",
    "body": "A teammate has an implementation for **maximize sum without adjacent picks**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "dp[i]=max(dp[i-1], value[i]+dp[i-2])."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The last decision is take or skip.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[i]=max(dp[i-1], value[i]+dp[i-2]). The last decision is take or skip. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize house robber as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full196",
    "topic": "1-D Dynamic Programming",
    "level": "hard",
    "type": "design",
    "title": "House robber: Hard checkpoint",
    "body": "For a difficult variant of **maximize sum without adjacent picks**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "dp[i]=max(dp[i-1], value[i]+dp[i-2]).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The last decision is take or skip.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[i]=max(dp[i-1], value[i]+dp[i-2]). The last decision is take or skip. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize house robber as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full197",
    "topic": "1-D Dynamic Programming",
    "level": "foundation",
    "type": "mcq",
    "title": "Coin change: Foundation checkpoint",
    "body": "What is the key idea behind **minimum coins for amount**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "dp[x]=min over coins of 1+dp[x-coin].",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The final coin partitions the optimum into a smaller amount.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[x]=min over coins of 1+dp[x-coin]. The final coin partitions the optimum into a smaller amount. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize coin change as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full198",
    "topic": "1-D Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "Coin change: Easy checkpoint",
    "body": "You need an efficient solution for **minimum coins for amount**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "dp[x]=min over coins of 1+dp[x-coin].",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The final coin partitions the optimum into a smaller amount.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[x]=min over coins of 1+dp[x-coin]. The final coin partitions the optimum into a smaller amount. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize coin change as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full199",
    "topic": "1-D Dynamic Programming",
    "level": "medium",
    "type": "debug",
    "title": "Coin change: Medium checkpoint",
    "body": "A teammate has an implementation for **minimum coins for amount**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "dp[x]=min over coins of 1+dp[x-coin].",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The final coin partitions the optimum into a smaller amount.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[x]=min over coins of 1+dp[x-coin]. The final coin partitions the optimum into a smaller amount. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize coin change as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full200",
    "topic": "1-D Dynamic Programming",
    "level": "hard",
    "type": "design",
    "title": "Coin change: Hard checkpoint",
    "body": "For a difficult variant of **minimum coins for amount**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "dp[x]=min over coins of 1+dp[x-coin].",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The final coin partitions the optimum into a smaller amount.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[x]=min over coins of 1+dp[x-coin]. The final coin partitions the optimum into a smaller amount. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize coin change as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full201",
    "topic": "1-D Dynamic Programming",
    "level": "foundation",
    "type": "mcq",
    "title": "LIS: Foundation checkpoint",
    "body": "What is the key idea behind **longest increasing subsequence**?",
    "options": [
      "Either use O(n^2) DP or tails + binary search for O(n log n).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A compact tails state stores the smallest ending value for each length.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Either use O(n^2) DP or tails + binary search for O(n log n). A compact tails state stores the smallest ending value for each length. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lis as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full202",
    "topic": "1-D Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "LIS: Easy checkpoint",
    "body": "You need an efficient solution for **longest increasing subsequence**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Either use O(n^2) DP or tails + binary search for O(n log n).",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A compact tails state stores the smallest ending value for each length.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Either use O(n^2) DP or tails + binary search for O(n log n). A compact tails state stores the smallest ending value for each length. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lis as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full203",
    "topic": "1-D Dynamic Programming",
    "level": "medium",
    "type": "debug",
    "title": "LIS: Medium checkpoint",
    "body": "A teammate has an implementation for **longest increasing subsequence**. What reasoning best explains why the intended approach works?",
    "options": [
      "Either use O(n^2) DP or tails + binary search for O(n log n).",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A compact tails state stores the smallest ending value for each length.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Either use O(n^2) DP or tails + binary search for O(n log n). A compact tails state stores the smallest ending value for each length. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lis as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full204",
    "topic": "1-D Dynamic Programming",
    "level": "hard",
    "type": "design",
    "title": "LIS: Hard checkpoint",
    "body": "For a difficult variant of **longest increasing subsequence**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Either use O(n^2) DP or tails + binary search for O(n log n)."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A compact tails state stores the smallest ending value for each length.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Either use O(n^2) DP or tails + binary search for O(n log n). A compact tails state stores the smallest ending value for each length. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lis as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full205",
    "topic": "1-D Dynamic Programming",
    "level": "foundation",
    "type": "mcq",
    "title": "Word break: Foundation checkpoint",
    "body": "What is the key idea behind **segment a string into dictionary words**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "dp[i] records whether the prefix ending at i is segmentable.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Try dictionary words that end at i and connect them to an earlier true state.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[i] records whether the prefix ending at i is segmentable. Try dictionary words that end at i and connect them to an earlier true state. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize word break as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full206",
    "topic": "1-D Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "Word break: Easy checkpoint",
    "body": "You need an efficient solution for **segment a string into dictionary words**. Which approach is the best starting point?",
    "options": [
      "dp[i] records whether the prefix ending at i is segmentable.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Try dictionary words that end at i and connect them to an earlier true state.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[i] records whether the prefix ending at i is segmentable. Try dictionary words that end at i and connect them to an earlier true state. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize word break as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full207",
    "topic": "1-D Dynamic Programming",
    "level": "medium",
    "type": "debug",
    "title": "Word break: Medium checkpoint",
    "body": "A teammate has an implementation for **segment a string into dictionary words**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "dp[i] records whether the prefix ending at i is segmentable.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Try dictionary words that end at i and connect them to an earlier true state.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[i] records whether the prefix ending at i is segmentable. Try dictionary words that end at i and connect them to an earlier true state. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize word break as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full208",
    "topic": "1-D Dynamic Programming",
    "level": "hard",
    "type": "design",
    "title": "Word break: Hard checkpoint",
    "body": "For a difficult variant of **segment a string into dictionary words**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "dp[i] records whether the prefix ending at i is segmentable.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Try dictionary words that end at i and connect them to an earlier true state.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[i] records whether the prefix ending at i is segmentable. Try dictionary words that end at i and connect them to an earlier true state. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize word break as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full209",
    "topic": "2-D Dynamic Programming",
    "level": "foundation",
    "type": "mcq",
    "title": "Unique paths: Foundation checkpoint",
    "body": "What is the key idea behind **count grid paths**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "dp[r][c]=dp[r-1][c]+dp[r][c-1] with boundaries."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Every path reaches a cell from one of its valid predecessors.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[r][c]=dp[r-1][c]+dp[r][c-1] with boundaries. Every path reaches a cell from one of its valid predecessors. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize unique paths as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full210",
    "topic": "2-D Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "Unique paths: Easy checkpoint",
    "body": "You need an efficient solution for **count grid paths**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "dp[r][c]=dp[r-1][c]+dp[r][c-1] with boundaries.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Every path reaches a cell from one of its valid predecessors.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[r][c]=dp[r-1][c]+dp[r][c-1] with boundaries. Every path reaches a cell from one of its valid predecessors. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize unique paths as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full211",
    "topic": "2-D Dynamic Programming",
    "level": "medium",
    "type": "debug",
    "title": "Unique paths: Medium checkpoint",
    "body": "A teammate has an implementation for **count grid paths**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "dp[r][c]=dp[r-1][c]+dp[r][c-1] with boundaries.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Every path reaches a cell from one of its valid predecessors.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[r][c]=dp[r-1][c]+dp[r][c-1] with boundaries. Every path reaches a cell from one of its valid predecessors. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize unique paths as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full212",
    "topic": "2-D Dynamic Programming",
    "level": "hard",
    "type": "design",
    "title": "Unique paths: Hard checkpoint",
    "body": "For a difficult variant of **count grid paths**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "dp[r][c]=dp[r-1][c]+dp[r][c-1] with boundaries.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Every path reaches a cell from one of its valid predecessors.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: dp[r][c]=dp[r-1][c]+dp[r][c-1] with boundaries. Every path reaches a cell from one of its valid predecessors. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize unique paths as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full213",
    "topic": "2-D Dynamic Programming",
    "level": "foundation",
    "type": "mcq",
    "title": "LCS: Foundation checkpoint",
    "body": "What is the key idea behind **longest common subsequence**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Match adds one diagonal; mismatch takes the best of dropping either last character."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Prefix-pair state captures the final alignment choice.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Match adds one diagonal; mismatch takes the best of dropping either last character. Prefix-pair state captures the final alignment choice. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lcs as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full214",
    "topic": "2-D Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "LCS: Easy checkpoint",
    "body": "You need an efficient solution for **longest common subsequence**. Which approach is the best starting point?",
    "options": [
      "Match adds one diagonal; mismatch takes the best of dropping either last character.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Prefix-pair state captures the final alignment choice.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Match adds one diagonal; mismatch takes the best of dropping either last character. Prefix-pair state captures the final alignment choice. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lcs as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full215",
    "topic": "2-D Dynamic Programming",
    "level": "medium",
    "type": "debug",
    "title": "LCS: Medium checkpoint",
    "body": "A teammate has an implementation for **longest common subsequence**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Match adds one diagonal; mismatch takes the best of dropping either last character."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Prefix-pair state captures the final alignment choice.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Match adds one diagonal; mismatch takes the best of dropping either last character. Prefix-pair state captures the final alignment choice. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lcs as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full216",
    "topic": "2-D Dynamic Programming",
    "level": "hard",
    "type": "design",
    "title": "LCS: Hard checkpoint",
    "body": "For a difficult variant of **longest common subsequence**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Match adds one diagonal; mismatch takes the best of dropping either last character."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Prefix-pair state captures the final alignment choice.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Match adds one diagonal; mismatch takes the best of dropping either last character. Prefix-pair state captures the final alignment choice. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lcs as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full217",
    "topic": "2-D Dynamic Programming",
    "level": "foundation",
    "type": "mcq",
    "title": "Edit distance: Foundation checkpoint",
    "body": "What is the key idea behind **minimum insert/delete/replace operations**?",
    "options": [
      "On mismatch take 1+min(delete,insert,replace).",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The final edit is one of exactly three operation types.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: On mismatch take 1+min(delete,insert,replace). The final edit is one of exactly three operation types. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize edit distance as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full218",
    "topic": "2-D Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "Edit distance: Easy checkpoint",
    "body": "You need an efficient solution for **minimum insert/delete/replace operations**. Which approach is the best starting point?",
    "options": [
      "On mismatch take 1+min(delete,insert,replace).",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The final edit is one of exactly three operation types.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: On mismatch take 1+min(delete,insert,replace). The final edit is one of exactly three operation types. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize edit distance as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full219",
    "topic": "2-D Dynamic Programming",
    "level": "medium",
    "type": "debug",
    "title": "Edit distance: Medium checkpoint",
    "body": "A teammate has an implementation for **minimum insert/delete/replace operations**. What reasoning best explains why the intended approach works?",
    "options": [
      "On mismatch take 1+min(delete,insert,replace).",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The final edit is one of exactly three operation types.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: On mismatch take 1+min(delete,insert,replace). The final edit is one of exactly three operation types. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize edit distance as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full220",
    "topic": "2-D Dynamic Programming",
    "level": "hard",
    "type": "design",
    "title": "Edit distance: Hard checkpoint",
    "body": "For a difficult variant of **minimum insert/delete/replace operations**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "On mismatch take 1+min(delete,insert,replace)."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The final edit is one of exactly three operation types.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: On mismatch take 1+min(delete,insert,replace). The final edit is one of exactly three operation types. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize edit distance as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full221",
    "topic": "2-D Dynamic Programming",
    "level": "foundation",
    "type": "mcq",
    "title": "Knapsack: Foundation checkpoint",
    "body": "What is the key idea behind **best value under capacity**?",
    "options": [
      "For 0/1 items, each item is either skipped or taken if it fits.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The item prefix and remaining capacity contain all future-relevant history.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: For 0/1 items, each item is either skipped or taken if it fits. The item prefix and remaining capacity contain all future-relevant history. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize knapsack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full222",
    "topic": "2-D Dynamic Programming",
    "level": "easy",
    "type": "coding",
    "title": "Knapsack: Easy checkpoint",
    "body": "You need an efficient solution for **best value under capacity**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "For 0/1 items, each item is either skipped or taken if it fits.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The item prefix and remaining capacity contain all future-relevant history.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: For 0/1 items, each item is either skipped or taken if it fits. The item prefix and remaining capacity contain all future-relevant history. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize knapsack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full223",
    "topic": "2-D Dynamic Programming",
    "level": "medium",
    "type": "debug",
    "title": "Knapsack: Medium checkpoint",
    "body": "A teammate has an implementation for **best value under capacity**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "For 0/1 items, each item is either skipped or taken if it fits.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The item prefix and remaining capacity contain all future-relevant history.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: For 0/1 items, each item is either skipped or taken if it fits. The item prefix and remaining capacity contain all future-relevant history. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize knapsack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full224",
    "topic": "2-D Dynamic Programming",
    "level": "hard",
    "type": "design",
    "title": "Knapsack: Hard checkpoint",
    "body": "For a difficult variant of **best value under capacity**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "For 0/1 items, each item is either skipped or taken if it fits.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The item prefix and remaining capacity contain all future-relevant history.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: For 0/1 items, each item is either skipped or taken if it fits. The item prefix and remaining capacity contain all future-relevant history. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize knapsack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full225",
    "topic": "Graphs",
    "level": "foundation",
    "type": "mcq",
    "title": "BFS: Foundation checkpoint",
    "body": "What is the key idea behind **shortest path in unweighted graph**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Explore layer by layer; first discovery has minimum edge distance.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Equal edge costs make graph distance equal BFS depth.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Explore layer by layer; first discovery has minimum edge distance. Equal edge costs make graph distance equal BFS depth. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bfs as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full226",
    "topic": "Graphs",
    "level": "easy",
    "type": "coding",
    "title": "BFS: Easy checkpoint",
    "body": "You need an efficient solution for **shortest path in unweighted graph**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Explore layer by layer; first discovery has minimum edge distance."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Equal edge costs make graph distance equal BFS depth.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Explore layer by layer; first discovery has minimum edge distance. Equal edge costs make graph distance equal BFS depth. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bfs as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full227",
    "topic": "Graphs",
    "level": "medium",
    "type": "debug",
    "title": "BFS: Medium checkpoint",
    "body": "A teammate has an implementation for **shortest path in unweighted graph**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Explore layer by layer; first discovery has minimum edge distance.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Equal edge costs make graph distance equal BFS depth.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Explore layer by layer; first discovery has minimum edge distance. Equal edge costs make graph distance equal BFS depth. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bfs as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full228",
    "topic": "Graphs",
    "level": "hard",
    "type": "design",
    "title": "BFS: Hard checkpoint",
    "body": "For a difficult variant of **shortest path in unweighted graph**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Explore layer by layer; first discovery has minimum edge distance.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Equal edge costs make graph distance equal BFS depth.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Explore layer by layer; first discovery has minimum edge distance. Equal edge costs make graph distance equal BFS depth. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bfs as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full229",
    "topic": "Graphs",
    "level": "foundation",
    "type": "mcq",
    "title": "DFS components: Foundation checkpoint",
    "body": "What is the key idea behind **count connected components**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Start a DFS/BFS from every unvisited vertex.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Each new traversal labels exactly one component.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Start a DFS/BFS from every unvisited vertex. Each new traversal labels exactly one component. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize dfs components as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full230",
    "topic": "Graphs",
    "level": "easy",
    "type": "coding",
    "title": "DFS components: Easy checkpoint",
    "body": "You need an efficient solution for **count connected components**. Which approach is the best starting point?",
    "options": [
      "Start a DFS/BFS from every unvisited vertex.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Each new traversal labels exactly one component.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Start a DFS/BFS from every unvisited vertex. Each new traversal labels exactly one component. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize dfs components as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full231",
    "topic": "Graphs",
    "level": "medium",
    "type": "debug",
    "title": "DFS components: Medium checkpoint",
    "body": "A teammate has an implementation for **count connected components**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Start a DFS/BFS from every unvisited vertex."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Each new traversal labels exactly one component.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Start a DFS/BFS from every unvisited vertex. Each new traversal labels exactly one component. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize dfs components as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full232",
    "topic": "Graphs",
    "level": "hard",
    "type": "design",
    "title": "DFS components: Hard checkpoint",
    "body": "For a difficult variant of **count connected components**, which design principle should remain unchanged?",
    "options": [
      "Start a DFS/BFS from every unvisited vertex.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Each new traversal labels exactly one component.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Start a DFS/BFS from every unvisited vertex. Each new traversal labels exactly one component. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize dfs components as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full233",
    "topic": "Graphs",
    "level": "foundation",
    "type": "mcq",
    "title": "Dijkstra: Foundation checkpoint",
    "body": "What is the key idea behind **shortest path with nonnegative weights**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Repeatedly finalize the vertex with smallest tentative distance.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Nonnegative edges ensure later paths cannot improve a finalized minimum.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Repeatedly finalize the vertex with smallest tentative distance. Nonnegative edges ensure later paths cannot improve a finalized minimum. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize dijkstra as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full234",
    "topic": "Graphs",
    "level": "easy",
    "type": "coding",
    "title": "Dijkstra: Easy checkpoint",
    "body": "You need an efficient solution for **shortest path with nonnegative weights**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Repeatedly finalize the vertex with smallest tentative distance.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Nonnegative edges ensure later paths cannot improve a finalized minimum.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Repeatedly finalize the vertex with smallest tentative distance. Nonnegative edges ensure later paths cannot improve a finalized minimum. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize dijkstra as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full235",
    "topic": "Graphs",
    "level": "medium",
    "type": "debug",
    "title": "Dijkstra: Medium checkpoint",
    "body": "A teammate has an implementation for **shortest path with nonnegative weights**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Repeatedly finalize the vertex with smallest tentative distance.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Nonnegative edges ensure later paths cannot improve a finalized minimum.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Repeatedly finalize the vertex with smallest tentative distance. Nonnegative edges ensure later paths cannot improve a finalized minimum. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize dijkstra as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full236",
    "topic": "Graphs",
    "level": "hard",
    "type": "design",
    "title": "Dijkstra: Hard checkpoint",
    "body": "For a difficult variant of **shortest path with nonnegative weights**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Repeatedly finalize the vertex with smallest tentative distance."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Nonnegative edges ensure later paths cannot improve a finalized minimum.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Repeatedly finalize the vertex with smallest tentative distance. Nonnegative edges ensure later paths cannot improve a finalized minimum. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize dijkstra as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full237",
    "topic": "Graphs",
    "level": "foundation",
    "type": "mcq",
    "title": "Topological sort: Foundation checkpoint",
    "body": "What is the key idea behind **dependency ordering**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use indegree-zero vertices or DFS postorder on a DAG."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A directed cycle prevents a complete dependency ordering.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use indegree-zero vertices or DFS postorder on a DAG. A directed cycle prevents a complete dependency ordering. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize topological sort as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full238",
    "topic": "Graphs",
    "level": "easy",
    "type": "coding",
    "title": "Topological sort: Easy checkpoint",
    "body": "You need an efficient solution for **dependency ordering**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Use indegree-zero vertices or DFS postorder on a DAG."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A directed cycle prevents a complete dependency ordering.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use indegree-zero vertices or DFS postorder on a DAG. A directed cycle prevents a complete dependency ordering. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize topological sort as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full239",
    "topic": "Graphs",
    "level": "medium",
    "type": "debug",
    "title": "Topological sort: Medium checkpoint",
    "body": "A teammate has an implementation for **dependency ordering**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Use indegree-zero vertices or DFS postorder on a DAG.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A directed cycle prevents a complete dependency ordering.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use indegree-zero vertices or DFS postorder on a DAG. A directed cycle prevents a complete dependency ordering. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize topological sort as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full240",
    "topic": "Graphs",
    "level": "hard",
    "type": "design",
    "title": "Topological sort: Hard checkpoint",
    "body": "For a difficult variant of **dependency ordering**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use indegree-zero vertices or DFS postorder on a DAG."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A directed cycle prevents a complete dependency ordering.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use indegree-zero vertices or DFS postorder on a DAG. A directed cycle prevents a complete dependency ordering. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize topological sort as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full241",
    "topic": "Advanced Graphs",
    "level": "foundation",
    "type": "mcq",
    "title": "Union-Find: Foundation checkpoint",
    "body": "What is the key idea behind **dynamic connectivity under merges**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use find/union with path compression and union by size/rank.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Components can be represented by representative roots.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use find/union with path compression and union by size/rank. Components can be represented by representative roots. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize union-find as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full242",
    "topic": "Advanced Graphs",
    "level": "easy",
    "type": "coding",
    "title": "Union-Find: Easy checkpoint",
    "body": "You need an efficient solution for **dynamic connectivity under merges**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use find/union with path compression and union by size/rank."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Components can be represented by representative roots.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use find/union with path compression and union by size/rank. Components can be represented by representative roots. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize union-find as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full243",
    "topic": "Advanced Graphs",
    "level": "medium",
    "type": "debug",
    "title": "Union-Find: Medium checkpoint",
    "body": "A teammate has an implementation for **dynamic connectivity under merges**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use find/union with path compression and union by size/rank."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Components can be represented by representative roots.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use find/union with path compression and union by size/rank. Components can be represented by representative roots. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize union-find as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full244",
    "topic": "Advanced Graphs",
    "level": "hard",
    "type": "design",
    "title": "Union-Find: Hard checkpoint",
    "body": "For a difficult variant of **dynamic connectivity under merges**, which design principle should remain unchanged?",
    "options": [
      "Use find/union with path compression and union by size/rank.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Components can be represented by representative roots.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use find/union with path compression and union by size/rank. Components can be represented by representative roots. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize union-find as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full245",
    "topic": "Advanced Graphs",
    "level": "foundation",
    "type": "mcq",
    "title": "Kruskal: Foundation checkpoint",
    "body": "What is the key idea behind **minimum spanning tree**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Process edges by increasing weight and add only edges joining different DSU components."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The cut property supports taking the lightest safe edge.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Process edges by increasing weight and add only edges joining different DSU components. The cut property supports taking the lightest safe edge. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize kruskal as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full246",
    "topic": "Advanced Graphs",
    "level": "easy",
    "type": "coding",
    "title": "Kruskal: Easy checkpoint",
    "body": "You need an efficient solution for **minimum spanning tree**. Which approach is the best starting point?",
    "options": [
      "Process edges by increasing weight and add only edges joining different DSU components.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The cut property supports taking the lightest safe edge.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Process edges by increasing weight and add only edges joining different DSU components. The cut property supports taking the lightest safe edge. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize kruskal as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full247",
    "topic": "Advanced Graphs",
    "level": "medium",
    "type": "debug",
    "title": "Kruskal: Medium checkpoint",
    "body": "A teammate has an implementation for **minimum spanning tree**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Process edges by increasing weight and add only edges joining different DSU components."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The cut property supports taking the lightest safe edge.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Process edges by increasing weight and add only edges joining different DSU components. The cut property supports taking the lightest safe edge. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize kruskal as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full248",
    "topic": "Advanced Graphs",
    "level": "hard",
    "type": "design",
    "title": "Kruskal: Hard checkpoint",
    "body": "For a difficult variant of **minimum spanning tree**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Process edges by increasing weight and add only edges joining different DSU components.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The cut property supports taking the lightest safe edge.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Process edges by increasing weight and add only edges joining different DSU components. The cut property supports taking the lightest safe edge. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize kruskal as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full249",
    "topic": "Advanced Graphs",
    "level": "foundation",
    "type": "mcq",
    "title": "Bellman-Ford: Foundation checkpoint",
    "body": "What is the key idea behind **negative weights and cycle detection**?",
    "options": [
      "Relax every edge V-1 times, then test for one more improving relaxation.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Any simple shortest path has at most V-1 edges; a further improvement implies a reachable negative cycle.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Relax every edge V-1 times, then test for one more improving relaxation. Any simple shortest path has at most V-1 edges; a further improvement implies a reachable negative cycle. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bellman-ford as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full250",
    "topic": "Advanced Graphs",
    "level": "easy",
    "type": "coding",
    "title": "Bellman-Ford: Easy checkpoint",
    "body": "You need an efficient solution for **negative weights and cycle detection**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Relax every edge V-1 times, then test for one more improving relaxation.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Any simple shortest path has at most V-1 edges; a further improvement implies a reachable negative cycle.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Relax every edge V-1 times, then test for one more improving relaxation. Any simple shortest path has at most V-1 edges; a further improvement implies a reachable negative cycle. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bellman-ford as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full251",
    "topic": "Advanced Graphs",
    "level": "medium",
    "type": "debug",
    "title": "Bellman-Ford: Medium checkpoint",
    "body": "A teammate has an implementation for **negative weights and cycle detection**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Relax every edge V-1 times, then test for one more improving relaxation.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Any simple shortest path has at most V-1 edges; a further improvement implies a reachable negative cycle.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Relax every edge V-1 times, then test for one more improving relaxation. Any simple shortest path has at most V-1 edges; a further improvement implies a reachable negative cycle. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bellman-ford as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full252",
    "topic": "Advanced Graphs",
    "level": "hard",
    "type": "design",
    "title": "Bellman-Ford: Hard checkpoint",
    "body": "For a difficult variant of **negative weights and cycle detection**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Relax every edge V-1 times, then test for one more improving relaxation.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Any simple shortest path has at most V-1 edges; a further improvement implies a reachable negative cycle.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Relax every edge V-1 times, then test for one more improving relaxation. Any simple shortest path has at most V-1 edges; a further improvement implies a reachable negative cycle. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bellman-ford as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full253",
    "topic": "Advanced Graphs",
    "level": "foundation",
    "type": "mcq",
    "title": "Bipartite: Foundation checkpoint",
    "body": "What is the key idea behind **2-color a graph**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Color adjacent vertices oppositely during BFS/DFS.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A conflict exposes an odd cycle.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Color adjacent vertices oppositely during BFS/DFS. A conflict exposes an odd cycle. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bipartite as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full254",
    "topic": "Advanced Graphs",
    "level": "easy",
    "type": "coding",
    "title": "Bipartite: Easy checkpoint",
    "body": "You need an efficient solution for **2-color a graph**. Which approach is the best starting point?",
    "options": [
      "Color adjacent vertices oppositely during BFS/DFS.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A conflict exposes an odd cycle.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Color adjacent vertices oppositely during BFS/DFS. A conflict exposes an odd cycle. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bipartite as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full255",
    "topic": "Advanced Graphs",
    "level": "medium",
    "type": "debug",
    "title": "Bipartite: Medium checkpoint",
    "body": "A teammate has an implementation for **2-color a graph**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Color adjacent vertices oppositely during BFS/DFS.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: A conflict exposes an odd cycle.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Color adjacent vertices oppositely during BFS/DFS. A conflict exposes an odd cycle. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bipartite as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full256",
    "topic": "Advanced Graphs",
    "level": "hard",
    "type": "design",
    "title": "Bipartite: Hard checkpoint",
    "body": "For a difficult variant of **2-color a graph**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Color adjacent vertices oppositely during BFS/DFS."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A conflict exposes an odd cycle.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Color adjacent vertices oppositely during BFS/DFS. A conflict exposes an odd cycle. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize bipartite as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full257",
    "topic": "Bit Manipulation",
    "level": "foundation",
    "type": "mcq",
    "title": "XOR unique: Foundation checkpoint",
    "body": "What is the key idea behind **find one unpaired value**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "XOR all values; pairs cancel to zero.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: XOR is associative, commutative, and self-inverse.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: XOR all values; pairs cancel to zero. XOR is associative, commutative, and self-inverse. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize xor unique as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full258",
    "topic": "Bit Manipulation",
    "level": "easy",
    "type": "coding",
    "title": "XOR unique: Easy checkpoint",
    "body": "You need an efficient solution for **find one unpaired value**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "XOR all values; pairs cancel to zero.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: XOR is associative, commutative, and self-inverse.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: XOR all values; pairs cancel to zero. XOR is associative, commutative, and self-inverse. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize xor unique as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full259",
    "topic": "Bit Manipulation",
    "level": "medium",
    "type": "debug",
    "title": "XOR unique: Medium checkpoint",
    "body": "A teammate has an implementation for **find one unpaired value**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "XOR all values; pairs cancel to zero."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: XOR is associative, commutative, and self-inverse.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: XOR all values; pairs cancel to zero. XOR is associative, commutative, and self-inverse. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize xor unique as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full260",
    "topic": "Bit Manipulation",
    "level": "hard",
    "type": "design",
    "title": "XOR unique: Hard checkpoint",
    "body": "For a difficult variant of **find one unpaired value**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "XOR all values; pairs cancel to zero."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: XOR is associative, commutative, and self-inverse.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: XOR all values; pairs cancel to zero. XOR is associative, commutative, and self-inverse. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize xor unique as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full261",
    "topic": "Bit Manipulation",
    "level": "foundation",
    "type": "mcq",
    "title": "Power of two: Foundation checkpoint",
    "body": "What is the key idea behind **test a single set bit**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "For positive n, check (n & (n-1))==0."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Subtracting one turns the only set bit into lower ones.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: For positive n, check (n & (n-1))==0. Subtracting one turns the only set bit into lower ones. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize power of two as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full262",
    "topic": "Bit Manipulation",
    "level": "easy",
    "type": "coding",
    "title": "Power of two: Easy checkpoint",
    "body": "You need an efficient solution for **test a single set bit**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "For positive n, check (n & (n-1))==0."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Subtracting one turns the only set bit into lower ones.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: For positive n, check (n & (n-1))==0. Subtracting one turns the only set bit into lower ones. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize power of two as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full263",
    "topic": "Bit Manipulation",
    "level": "medium",
    "type": "debug",
    "title": "Power of two: Medium checkpoint",
    "body": "A teammate has an implementation for **test a single set bit**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "For positive n, check (n & (n-1))==0.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Subtracting one turns the only set bit into lower ones.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: For positive n, check (n & (n-1))==0. Subtracting one turns the only set bit into lower ones. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize power of two as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full264",
    "topic": "Bit Manipulation",
    "level": "hard",
    "type": "design",
    "title": "Power of two: Hard checkpoint",
    "body": "For a difficult variant of **test a single set bit**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "For positive n, check (n & (n-1))==0."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Subtracting one turns the only set bit into lower ones.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: For positive n, check (n & (n-1))==0. Subtracting one turns the only set bit into lower ones. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize power of two as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full265",
    "topic": "Bit Manipulation",
    "level": "foundation",
    "type": "mcq",
    "title": "Set bits: Foundation checkpoint",
    "body": "What is the key idea behind **count ones in binary**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Repeatedly apply n &= n-1.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Each iteration clears exactly the lowest set bit.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Repeatedly apply n &= n-1. Each iteration clears exactly the lowest set bit. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize set bits as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full266",
    "topic": "Bit Manipulation",
    "level": "easy",
    "type": "coding",
    "title": "Set bits: Easy checkpoint",
    "body": "You need an efficient solution for **count ones in binary**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Repeatedly apply n &= n-1.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Each iteration clears exactly the lowest set bit.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Repeatedly apply n &= n-1. Each iteration clears exactly the lowest set bit. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize set bits as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full267",
    "topic": "Bit Manipulation",
    "level": "medium",
    "type": "debug",
    "title": "Set bits: Medium checkpoint",
    "body": "A teammate has an implementation for **count ones in binary**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Repeatedly apply n &= n-1.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Each iteration clears exactly the lowest set bit.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Repeatedly apply n &= n-1. Each iteration clears exactly the lowest set bit. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize set bits as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full268",
    "topic": "Bit Manipulation",
    "level": "hard",
    "type": "design",
    "title": "Set bits: Hard checkpoint",
    "body": "For a difficult variant of **count ones in binary**, which design principle should remain unchanged?",
    "options": [
      "Repeatedly apply n &= n-1.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Each iteration clears exactly the lowest set bit.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Repeatedly apply n &= n-1. Each iteration clears exactly the lowest set bit. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize set bits as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full269",
    "topic": "Bit Manipulation",
    "level": "foundation",
    "type": "mcq",
    "title": "Two uniques: Foundation checkpoint",
    "body": "What is the key idea behind **find two values appearing once**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "XOR all values, isolate a differing bit, partition by that bit, then XOR each group."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The chosen bit separates the two unique values while pairs still cancel.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: XOR all values, isolate a differing bit, partition by that bit, then XOR each group. The chosen bit separates the two unique values while pairs still cancel. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize two uniques as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full270",
    "topic": "Bit Manipulation",
    "level": "easy",
    "type": "coding",
    "title": "Two uniques: Easy checkpoint",
    "body": "You need an efficient solution for **find two values appearing once**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "XOR all values, isolate a differing bit, partition by that bit, then XOR each group."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The chosen bit separates the two unique values while pairs still cancel.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: XOR all values, isolate a differing bit, partition by that bit, then XOR each group. The chosen bit separates the two unique values while pairs still cancel. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize two uniques as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full271",
    "topic": "Bit Manipulation",
    "level": "medium",
    "type": "debug",
    "title": "Two uniques: Medium checkpoint",
    "body": "A teammate has an implementation for **find two values appearing once**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "XOR all values, isolate a differing bit, partition by that bit, then XOR each group."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The chosen bit separates the two unique values while pairs still cancel.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: XOR all values, isolate a differing bit, partition by that bit, then XOR each group. The chosen bit separates the two unique values while pairs still cancel. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize two uniques as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full272",
    "topic": "Bit Manipulation",
    "level": "hard",
    "type": "design",
    "title": "Two uniques: Hard checkpoint",
    "body": "For a difficult variant of **find two values appearing once**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "XOR all values, isolate a differing bit, partition by that bit, then XOR each group.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The chosen bit separates the two unique values while pairs still cancel.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: XOR all values, isolate a differing bit, partition by that bit, then XOR each group. The chosen bit separates the two unique values while pairs still cancel. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize two uniques as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full273",
    "topic": "Math & Geometry",
    "level": "foundation",
    "type": "mcq",
    "title": "GCD: Foundation checkpoint",
    "body": "What is the key idea behind **greatest common divisor**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Use gcd(a,b)=gcd(b,a mod b).",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Remainders strictly shrink the second argument.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use gcd(a,b)=gcd(b,a mod b). Remainders strictly shrink the second argument. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize gcd as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full274",
    "topic": "Math & Geometry",
    "level": "easy",
    "type": "coding",
    "title": "GCD: Easy checkpoint",
    "body": "You need an efficient solution for **greatest common divisor**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Use gcd(a,b)=gcd(b,a mod b)."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Remainders strictly shrink the second argument.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use gcd(a,b)=gcd(b,a mod b). Remainders strictly shrink the second argument. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize gcd as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full275",
    "topic": "Math & Geometry",
    "level": "medium",
    "type": "debug",
    "title": "GCD: Medium checkpoint",
    "body": "A teammate has an implementation for **greatest common divisor**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use gcd(a,b)=gcd(b,a mod b).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Remainders strictly shrink the second argument.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use gcd(a,b)=gcd(b,a mod b). Remainders strictly shrink the second argument. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize gcd as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full276",
    "topic": "Math & Geometry",
    "level": "hard",
    "type": "design",
    "title": "GCD: Hard checkpoint",
    "body": "For a difficult variant of **greatest common divisor**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use gcd(a,b)=gcd(b,a mod b).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Remainders strictly shrink the second argument.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use gcd(a,b)=gcd(b,a mod b). Remainders strictly shrink the second argument. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize gcd as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full277",
    "topic": "Math & Geometry",
    "level": "foundation",
    "type": "mcq",
    "title": "Fast power: Foundation checkpoint",
    "body": "What is the key idea behind **compute x^n efficiently**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use exponentiation by squaring / binary exponentiation."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The exponent halves every stage.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use exponentiation by squaring / binary exponentiation. The exponent halves every stage. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fast power as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full278",
    "topic": "Math & Geometry",
    "level": "easy",
    "type": "coding",
    "title": "Fast power: Easy checkpoint",
    "body": "You need an efficient solution for **compute x^n efficiently**. Which approach is the best starting point?",
    "options": [
      "Use exponentiation by squaring / binary exponentiation.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The exponent halves every stage.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use exponentiation by squaring / binary exponentiation. The exponent halves every stage. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fast power as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full279",
    "topic": "Math & Geometry",
    "level": "medium",
    "type": "debug",
    "title": "Fast power: Medium checkpoint",
    "body": "A teammate has an implementation for **compute x^n efficiently**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use exponentiation by squaring / binary exponentiation.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The exponent halves every stage.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use exponentiation by squaring / binary exponentiation. The exponent halves every stage. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fast power as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full280",
    "topic": "Math & Geometry",
    "level": "hard",
    "type": "design",
    "title": "Fast power: Hard checkpoint",
    "body": "For a difficult variant of **compute x^n efficiently**, which design principle should remain unchanged?",
    "options": [
      "Use exponentiation by squaring / binary exponentiation.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The exponent halves every stage.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use exponentiation by squaring / binary exponentiation. The exponent halves every stage. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fast power as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full281",
    "topic": "Math & Geometry",
    "level": "foundation",
    "type": "mcq",
    "title": "Prime sieve: Foundation checkpoint",
    "body": "What is the key idea behind **find all primes <= n**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Mark multiples starting from p^2 for each prime p<=sqrt(n)."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Any composite <=n has a prime factor <=sqrt(n).",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Mark multiples starting from p^2 for each prime p<=sqrt(n). Any composite <=n has a prime factor <=sqrt(n). This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize prime sieve as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full282",
    "topic": "Math & Geometry",
    "level": "easy",
    "type": "coding",
    "title": "Prime sieve: Easy checkpoint",
    "body": "You need an efficient solution for **find all primes <= n**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Mark multiples starting from p^2 for each prime p<=sqrt(n).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Any composite <=n has a prime factor <=sqrt(n).",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Mark multiples starting from p^2 for each prime p<=sqrt(n). Any composite <=n has a prime factor <=sqrt(n). This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize prime sieve as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full283",
    "topic": "Math & Geometry",
    "level": "medium",
    "type": "debug",
    "title": "Prime sieve: Medium checkpoint",
    "body": "A teammate has an implementation for **find all primes <= n**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Mark multiples starting from p^2 for each prime p<=sqrt(n).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Any composite <=n has a prime factor <=sqrt(n).",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Mark multiples starting from p^2 for each prime p<=sqrt(n). Any composite <=n has a prime factor <=sqrt(n). This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize prime sieve as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full284",
    "topic": "Math & Geometry",
    "level": "hard",
    "type": "design",
    "title": "Prime sieve: Hard checkpoint",
    "body": "For a difficult variant of **find all primes <= n**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Mark multiples starting from p^2 for each prime p<=sqrt(n).",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Any composite <=n has a prime factor <=sqrt(n).",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Mark multiples starting from p^2 for each prime p<=sqrt(n). Any composite <=n has a prime factor <=sqrt(n). This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize prime sieve as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full285",
    "topic": "Math & Geometry",
    "level": "foundation",
    "type": "mcq",
    "title": "Matrix rotate: Foundation checkpoint",
    "body": "What is the key idea behind **rotate square matrix in-place**?",
    "options": [
      "Transpose then reverse each row for 90° clockwise.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The two transforms compose to the desired coordinate mapping.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Transpose then reverse each row for 90° clockwise. The two transforms compose to the desired coordinate mapping. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize matrix rotate as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full286",
    "topic": "Math & Geometry",
    "level": "easy",
    "type": "coding",
    "title": "Matrix rotate: Easy checkpoint",
    "body": "You need an efficient solution for **rotate square matrix in-place**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Transpose then reverse each row for 90° clockwise."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The two transforms compose to the desired coordinate mapping.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Transpose then reverse each row for 90° clockwise. The two transforms compose to the desired coordinate mapping. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize matrix rotate as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full287",
    "topic": "Math & Geometry",
    "level": "medium",
    "type": "debug",
    "title": "Matrix rotate: Medium checkpoint",
    "body": "A teammate has an implementation for **rotate square matrix in-place**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Transpose then reverse each row for 90° clockwise."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The two transforms compose to the desired coordinate mapping.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Transpose then reverse each row for 90° clockwise. The two transforms compose to the desired coordinate mapping. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize matrix rotate as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full288",
    "topic": "Math & Geometry",
    "level": "hard",
    "type": "design",
    "title": "Matrix rotate: Hard checkpoint",
    "body": "For a difficult variant of **rotate square matrix in-place**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Transpose then reverse each row for 90° clockwise.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The two transforms compose to the desired coordinate mapping.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Transpose then reverse each row for 90° clockwise. The two transforms compose to the desired coordinate mapping. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize matrix rotate as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full289",
    "topic": "Advanced Data Structures",
    "level": "foundation",
    "type": "mcq",
    "title": "Fenwick tree: Foundation checkpoint",
    "body": "What is the key idea behind **point update + prefix sum**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use binary indexed partial sums; both operations are O(log n).",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Each index stores a range whose length is its lowbit.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use binary indexed partial sums; both operations are O(log n). Each index stores a range whose length is its lowbit. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fenwick tree as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full290",
    "topic": "Advanced Data Structures",
    "level": "easy",
    "type": "coding",
    "title": "Fenwick tree: Easy checkpoint",
    "body": "You need an efficient solution for **point update + prefix sum**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Use binary indexed partial sums; both operations are O(log n).",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Each index stores a range whose length is its lowbit.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use binary indexed partial sums; both operations are O(log n). Each index stores a range whose length is its lowbit. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fenwick tree as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full291",
    "topic": "Advanced Data Structures",
    "level": "medium",
    "type": "debug",
    "title": "Fenwick tree: Medium checkpoint",
    "body": "A teammate has an implementation for **point update + prefix sum**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Use binary indexed partial sums; both operations are O(log n).",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Each index stores a range whose length is its lowbit.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use binary indexed partial sums; both operations are O(log n). Each index stores a range whose length is its lowbit. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fenwick tree as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full292",
    "topic": "Advanced Data Structures",
    "level": "hard",
    "type": "design",
    "title": "Fenwick tree: Hard checkpoint",
    "body": "For a difficult variant of **point update + prefix sum**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use binary indexed partial sums; both operations are O(log n).",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Each index stores a range whose length is its lowbit.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use binary indexed partial sums; both operations are O(log n). Each index stores a range whose length is its lowbit. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize fenwick tree as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full293",
    "topic": "Advanced Data Structures",
    "level": "foundation",
    "type": "mcq",
    "title": "Segment tree: Foundation checkpoint",
    "body": "What is the key idea behind **range aggregate + updates**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recursively store aggregates on intervals and combine child answers.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: The query interval can be covered by logarithmically many tree nodes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Recursively store aggregates on intervals and combine child answers. The query interval can be covered by logarithmically many tree nodes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize segment tree as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full294",
    "topic": "Advanced Data Structures",
    "level": "easy",
    "type": "coding",
    "title": "Segment tree: Easy checkpoint",
    "body": "You need an efficient solution for **range aggregate + updates**. Which approach is the best starting point?",
    "options": [
      "Recursively store aggregates on intervals and combine child answers.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: The query interval can be covered by logarithmically many tree nodes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Recursively store aggregates on intervals and combine child answers. The query interval can be covered by logarithmically many tree nodes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize segment tree as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full295",
    "topic": "Advanced Data Structures",
    "level": "medium",
    "type": "debug",
    "title": "Segment tree: Medium checkpoint",
    "body": "A teammate has an implementation for **range aggregate + updates**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recursively store aggregates on intervals and combine child answers.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: The query interval can be covered by logarithmically many tree nodes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Recursively store aggregates on intervals and combine child answers. The query interval can be covered by logarithmically many tree nodes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize segment tree as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full296",
    "topic": "Advanced Data Structures",
    "level": "hard",
    "type": "design",
    "title": "Segment tree: Hard checkpoint",
    "body": "For a difficult variant of **range aggregate + updates**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recursively store aggregates on intervals and combine child answers."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: The query interval can be covered by logarithmically many tree nodes.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Recursively store aggregates on intervals and combine child answers. The query interval can be covered by logarithmically many tree nodes. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize segment tree as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full297",
    "topic": "Advanced Data Structures",
    "level": "foundation",
    "type": "mcq",
    "title": "Coordinate compression: Foundation checkpoint",
    "body": "What is the key idea behind **map sparse large values to compact indices**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Sort unique values and replace each by its rank/index.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Only relative order/identity among observed values is needed.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort unique values and replace each by its rank/index. Only relative order/identity among observed values is needed. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize coordinate compression as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full298",
    "topic": "Advanced Data Structures",
    "level": "easy",
    "type": "coding",
    "title": "Coordinate compression: Easy checkpoint",
    "body": "You need an efficient solution for **map sparse large values to compact indices**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Sort unique values and replace each by its rank/index.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Only relative order/identity among observed values is needed.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort unique values and replace each by its rank/index. Only relative order/identity among observed values is needed. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize coordinate compression as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full299",
    "topic": "Advanced Data Structures",
    "level": "medium",
    "type": "debug",
    "title": "Coordinate compression: Medium checkpoint",
    "body": "A teammate has an implementation for **map sparse large values to compact indices**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Sort unique values and replace each by its rank/index."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Only relative order/identity among observed values is needed.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort unique values and replace each by its rank/index. Only relative order/identity among observed values is needed. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize coordinate compression as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full300",
    "topic": "Advanced Data Structures",
    "level": "hard",
    "type": "design",
    "title": "Coordinate compression: Hard checkpoint",
    "body": "For a difficult variant of **map sparse large values to compact indices**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Sort unique values and replace each by its rank/index.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Only relative order/identity among observed values is needed.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sort unique values and replace each by its rank/index. Only relative order/identity among observed values is needed. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize coordinate compression as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full301",
    "topic": "Advanced Data Structures",
    "level": "foundation",
    "type": "mcq",
    "title": "Lazy propagation: Foundation checkpoint",
    "body": "What is the key idea behind **efficient range updates**?",
    "options": [
      "Store deferred updates at internal nodes and push only when descending.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Do not eagerly update descendants that no query has needed yet.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store deferred updates at internal nodes and push only when descending. Do not eagerly update descendants that no query has needed yet. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lazy propagation as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full302",
    "topic": "Advanced Data Structures",
    "level": "easy",
    "type": "coding",
    "title": "Lazy propagation: Easy checkpoint",
    "body": "You need an efficient solution for **efficient range updates**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Store deferred updates at internal nodes and push only when descending.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Do not eagerly update descendants that no query has needed yet.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store deferred updates at internal nodes and push only when descending. Do not eagerly update descendants that no query has needed yet. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lazy propagation as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full303",
    "topic": "Advanced Data Structures",
    "level": "medium",
    "type": "debug",
    "title": "Lazy propagation: Medium checkpoint",
    "body": "A teammate has an implementation for **efficient range updates**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Store deferred updates at internal nodes and push only when descending.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Do not eagerly update descendants that no query has needed yet.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store deferred updates at internal nodes and push only when descending. Do not eagerly update descendants that no query has needed yet. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lazy propagation as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full304",
    "topic": "Advanced Data Structures",
    "level": "hard",
    "type": "design",
    "title": "Lazy propagation: Hard checkpoint",
    "body": "For a difficult variant of **efficient range updates**, which design principle should remain unchanged?",
    "options": [
      "Store deferred updates at internal nodes and push only when descending.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Do not eagerly update descendants that no query has needed yet.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Store deferred updates at internal nodes and push only when descending. Do not eagerly update descendants that no query has needed yet. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize lazy propagation as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full305",
    "topic": "String Algorithms",
    "level": "foundation",
    "type": "mcq",
    "title": "KMP: Foundation checkpoint",
    "body": "What is the key idea behind **linear substring search**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Build prefix-function/failure information to reuse matched prefixes after mismatch.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Self-overlap avoids restarting from pattern position zero.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Build prefix-function/failure information to reuse matched prefixes after mismatch. Self-overlap avoids restarting from pattern position zero. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize kmp as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full306",
    "topic": "String Algorithms",
    "level": "easy",
    "type": "coding",
    "title": "KMP: Easy checkpoint",
    "body": "You need an efficient solution for **linear substring search**. Which approach is the best starting point?",
    "options": [
      "Build prefix-function/failure information to reuse matched prefixes after mismatch.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Self-overlap avoids restarting from pattern position zero.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Build prefix-function/failure information to reuse matched prefixes after mismatch. Self-overlap avoids restarting from pattern position zero. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize kmp as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full307",
    "topic": "String Algorithms",
    "level": "medium",
    "type": "debug",
    "title": "KMP: Medium checkpoint",
    "body": "A teammate has an implementation for **linear substring search**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Build prefix-function/failure information to reuse matched prefixes after mismatch.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Self-overlap avoids restarting from pattern position zero.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Build prefix-function/failure information to reuse matched prefixes after mismatch. Self-overlap avoids restarting from pattern position zero. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize kmp as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full308",
    "topic": "String Algorithms",
    "level": "hard",
    "type": "design",
    "title": "KMP: Hard checkpoint",
    "body": "For a difficult variant of **linear substring search**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Build prefix-function/failure information to reuse matched prefixes after mismatch."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Self-overlap avoids restarting from pattern position zero.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Build prefix-function/failure information to reuse matched prefixes after mismatch. Self-overlap avoids restarting from pattern position zero. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize kmp as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full309",
    "topic": "String Algorithms",
    "level": "foundation",
    "type": "mcq",
    "title": "Rolling hash: Foundation checkpoint",
    "body": "What is the key idea behind **fast substring fingerprints**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Update a polynomial hash when the window shifts.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Outgoing and incoming characters can be adjusted in O(1).",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Update a polynomial hash when the window shifts. Outgoing and incoming characters can be adjusted in O(1). This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize rolling hash as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full310",
    "topic": "String Algorithms",
    "level": "easy",
    "type": "coding",
    "title": "Rolling hash: Easy checkpoint",
    "body": "You need an efficient solution for **fast substring fingerprints**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Update a polynomial hash when the window shifts."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Outgoing and incoming characters can be adjusted in O(1).",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Update a polynomial hash when the window shifts. Outgoing and incoming characters can be adjusted in O(1). This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize rolling hash as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full311",
    "topic": "String Algorithms",
    "level": "medium",
    "type": "debug",
    "title": "Rolling hash: Medium checkpoint",
    "body": "A teammate has an implementation for **fast substring fingerprints**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Update a polynomial hash when the window shifts."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Outgoing and incoming characters can be adjusted in O(1).",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Update a polynomial hash when the window shifts. Outgoing and incoming characters can be adjusted in O(1). This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize rolling hash as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full312",
    "topic": "String Algorithms",
    "level": "hard",
    "type": "design",
    "title": "Rolling hash: Hard checkpoint",
    "body": "For a difficult variant of **fast substring fingerprints**, which design principle should remain unchanged?",
    "options": [
      "Update a polynomial hash when the window shifts.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Outgoing and incoming characters can be adjusted in O(1).",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Update a polynomial hash when the window shifts. Outgoing and incoming characters can be adjusted in O(1). This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize rolling hash as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full313",
    "topic": "String Algorithms",
    "level": "foundation",
    "type": "mcq",
    "title": "Manacher: Foundation checkpoint",
    "body": "What is the key idea behind **longest palindromic substring in linear time**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Reuse palindrome radii through symmetry around a known center.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Mirrored radii provide a lower bound on the current palindrome expansion.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reuse palindrome radii through symmetry around a known center. Mirrored radii provide a lower bound on the current palindrome expansion. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize manacher as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full314",
    "topic": "String Algorithms",
    "level": "easy",
    "type": "coding",
    "title": "Manacher: Easy checkpoint",
    "body": "You need an efficient solution for **longest palindromic substring in linear time**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Reuse palindrome radii through symmetry around a known center.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Mirrored radii provide a lower bound on the current palindrome expansion.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reuse palindrome radii through symmetry around a known center. Mirrored radii provide a lower bound on the current palindrome expansion. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize manacher as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full315",
    "topic": "String Algorithms",
    "level": "medium",
    "type": "debug",
    "title": "Manacher: Medium checkpoint",
    "body": "A teammate has an implementation for **longest palindromic substring in linear time**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Reuse palindrome radii through symmetry around a known center."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Mirrored radii provide a lower bound on the current palindrome expansion.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reuse palindrome radii through symmetry around a known center. Mirrored radii provide a lower bound on the current palindrome expansion. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize manacher as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full316",
    "topic": "String Algorithms",
    "level": "hard",
    "type": "design",
    "title": "Manacher: Hard checkpoint",
    "body": "For a difficult variant of **longest palindromic substring in linear time**, which design principle should remain unchanged?",
    "options": [
      "Reuse palindrome radii through symmetry around a known center.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Mirrored radii provide a lower bound on the current palindrome expansion.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Reuse palindrome radii through symmetry around a known center. Mirrored radii provide a lower bound on the current palindrome expansion. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize manacher as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full317",
    "topic": "String Algorithms",
    "level": "foundation",
    "type": "mcq",
    "title": "Suffix structures: Foundation checkpoint",
    "body": "What is the key idea behind **repeated substring/prefix queries**?",
    "options": [
      "Use suffix array/tree or automaton depending on query type and constraints.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Preprocessing can organize all suffixes so many substring queries share work.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use suffix array/tree or automaton depending on query type and constraints. Preprocessing can organize all suffixes so many substring queries share work. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize suffix structures as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full318",
    "topic": "String Algorithms",
    "level": "easy",
    "type": "coding",
    "title": "Suffix structures: Easy checkpoint",
    "body": "You need an efficient solution for **repeated substring/prefix queries**. Which approach is the best starting point?",
    "options": [
      "Use suffix array/tree or automaton depending on query type and constraints.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Preprocessing can organize all suffixes so many substring queries share work.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use suffix array/tree or automaton depending on query type and constraints. Preprocessing can organize all suffixes so many substring queries share work. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize suffix structures as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full319",
    "topic": "String Algorithms",
    "level": "medium",
    "type": "debug",
    "title": "Suffix structures: Medium checkpoint",
    "body": "A teammate has an implementation for **repeated substring/prefix queries**. What reasoning best explains why the intended approach works?",
    "options": [
      "Use suffix array/tree or automaton depending on query type and constraints.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Preprocessing can organize all suffixes so many substring queries share work.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use suffix array/tree or automaton depending on query type and constraints. Preprocessing can organize all suffixes so many substring queries share work. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize suffix structures as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full320",
    "topic": "String Algorithms",
    "level": "hard",
    "type": "design",
    "title": "Suffix structures: Hard checkpoint",
    "body": "For a difficult variant of **repeated substring/prefix queries**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Use suffix array/tree or automaton depending on query type and constraints."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Preprocessing can organize all suffixes so many substring queries share work.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Use suffix array/tree or automaton depending on query type and constraints. Preprocessing can organize all suffixes so many substring queries share work. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize suffix structures as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full321",
    "topic": "Foundations & Complexity",
    "level": "foundation",
    "type": "mcq",
    "title": "Amortized analysis: Foundation checkpoint",
    "body": "What is the key idea behind **dynamic array append**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Sum occasional resize costs over a long sequence of appends.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Geometric capacity growth makes total copying linear across n operations.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sum occasional resize costs over a long sequence of appends. Geometric capacity growth makes total copying linear across n operations. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize amortized analysis as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full322",
    "topic": "Foundations & Complexity",
    "level": "easy",
    "type": "coding",
    "title": "Amortized analysis: Easy checkpoint",
    "body": "You need an efficient solution for **dynamic array append**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Sum occasional resize costs over a long sequence of appends."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Geometric capacity growth makes total copying linear across n operations.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sum occasional resize costs over a long sequence of appends. Geometric capacity growth makes total copying linear across n operations. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize amortized analysis as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full323",
    "topic": "Foundations & Complexity",
    "level": "medium",
    "type": "debug",
    "title": "Amortized analysis: Medium checkpoint",
    "body": "A teammate has an implementation for **dynamic array append**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Sum occasional resize costs over a long sequence of appends.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: Geometric capacity growth makes total copying linear across n operations.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sum occasional resize costs over a long sequence of appends. Geometric capacity growth makes total copying linear across n operations. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize amortized analysis as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full324",
    "topic": "Foundations & Complexity",
    "level": "hard",
    "type": "design",
    "title": "Amortized analysis: Hard checkpoint",
    "body": "For a difficult variant of **dynamic array append**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Sum occasional resize costs over a long sequence of appends."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Geometric capacity growth makes total copying linear across n operations.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Sum occasional resize costs over a long sequence of appends. Geometric capacity growth makes total copying linear across n operations. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize amortized analysis as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full325",
    "topic": "Foundations & Complexity",
    "level": "foundation",
    "type": "mcq",
    "title": "Recursion stack: Foundation checkpoint",
    "body": "What is the key idea behind **space for recursive DFS**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Space is O(height), which can be O(n) on a skewed tree."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Call depth follows the longest active path, not node count alone.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Space is O(height), which can be O(n) on a skewed tree. Call depth follows the longest active path, not node count alone. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize recursion stack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full326",
    "topic": "Foundations & Complexity",
    "level": "easy",
    "type": "coding",
    "title": "Recursion stack: Easy checkpoint",
    "body": "You need an efficient solution for **space for recursive DFS**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Space is O(height), which can be O(n) on a skewed tree."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Call depth follows the longest active path, not node count alone.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Space is O(height), which can be O(n) on a skewed tree. Call depth follows the longest active path, not node count alone. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize recursion stack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full327",
    "topic": "Foundations & Complexity",
    "level": "medium",
    "type": "debug",
    "title": "Recursion stack: Medium checkpoint",
    "body": "A teammate has an implementation for **space for recursive DFS**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Space is O(height), which can be O(n) on a skewed tree."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Call depth follows the longest active path, not node count alone.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Space is O(height), which can be O(n) on a skewed tree. Call depth follows the longest active path, not node count alone. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize recursion stack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full328",
    "topic": "Foundations & Complexity",
    "level": "hard",
    "type": "design",
    "title": "Recursion stack: Hard checkpoint",
    "body": "For a difficult variant of **space for recursive DFS**, which design principle should remain unchanged?",
    "options": [
      "Space is O(height), which can be O(n) on a skewed tree.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Call depth follows the longest active path, not node count alone.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Space is O(height), which can be O(n) on a skewed tree. Call depth follows the longest active path, not node count alone. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize recursion stack as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full329",
    "topic": "Foundations & Complexity",
    "level": "foundation",
    "type": "mcq",
    "title": "Decision tree lower bound: Foundation checkpoint",
    "body": "What is the key idea behind **comparison sorting**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "There are n! possible orderings, requiring Omega(log(n!)) comparisons.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Comparison decisions form a tree with enough leaves to distinguish permutations.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: There are n! possible orderings, requiring Omega(log(n!)) comparisons. Comparison decisions form a tree with enough leaves to distinguish permutations. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize decision tree lower bound as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full330",
    "topic": "Foundations & Complexity",
    "level": "easy",
    "type": "coding",
    "title": "Decision tree lower bound: Easy checkpoint",
    "body": "You need an efficient solution for **comparison sorting**. Which approach is the best starting point?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "There are n! possible orderings, requiring Omega(log(n!)) comparisons."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Comparison decisions form a tree with enough leaves to distinguish permutations.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: There are n! possible orderings, requiring Omega(log(n!)) comparisons. Comparison decisions form a tree with enough leaves to distinguish permutations. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize decision tree lower bound as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full331",
    "topic": "Foundations & Complexity",
    "level": "medium",
    "type": "debug",
    "title": "Decision tree lower bound: Medium checkpoint",
    "body": "A teammate has an implementation for **comparison sorting**. What reasoning best explains why the intended approach works?",
    "options": [
      "There are n! possible orderings, requiring Omega(log(n!)) comparisons.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: Comparison decisions form a tree with enough leaves to distinguish permutations.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: There are n! possible orderings, requiring Omega(log(n!)) comparisons. Comparison decisions form a tree with enough leaves to distinguish permutations. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize decision tree lower bound as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full332",
    "topic": "Foundations & Complexity",
    "level": "hard",
    "type": "design",
    "title": "Decision tree lower bound: Hard checkpoint",
    "body": "For a difficult variant of **comparison sorting**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "There are n! possible orderings, requiring Omega(log(n!)) comparisons.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Comparison decisions form a tree with enough leaves to distinguish permutations.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: There are n! possible orderings, requiring Omega(log(n!)) comparisons. Comparison decisions form a tree with enough leaves to distinguish permutations. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize decision tree lower bound as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full333",
    "topic": "Foundations & Complexity",
    "level": "foundation",
    "type": "mcq",
    "title": "Invariant reasoning: Foundation checkpoint",
    "body": "What is the key idea behind **loop correctness**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "State a fact that is true before and after every iteration and implies the final result.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: An invariant connects local updates to a global correctness claim.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: State a fact that is true before and after every iteration and implies the final result. An invariant connects local updates to a global correctness claim. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize invariant reasoning as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full334",
    "topic": "Foundations & Complexity",
    "level": "easy",
    "type": "coding",
    "title": "Invariant reasoning: Easy checkpoint",
    "body": "You need an efficient solution for **loop correctness**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "State a fact that is true before and after every iteration and implies the final result.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: An invariant connects local updates to a global correctness claim.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: State a fact that is true before and after every iteration and implies the final result. An invariant connects local updates to a global correctness claim. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize invariant reasoning as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full335",
    "topic": "Foundations & Complexity",
    "level": "medium",
    "type": "debug",
    "title": "Invariant reasoning: Medium checkpoint",
    "body": "A teammate has an implementation for **loop correctness**. What reasoning best explains why the intended approach works?",
    "options": [
      "State a fact that is true before and after every iteration and implies the final result.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: An invariant connects local updates to a global correctness claim.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: State a fact that is true before and after every iteration and implies the final result. An invariant connects local updates to a global correctness claim. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize invariant reasoning as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full336",
    "topic": "Foundations & Complexity",
    "level": "hard",
    "type": "design",
    "title": "Invariant reasoning: Hard checkpoint",
    "body": "For a difficult variant of **loop correctness**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "State a fact that is true before and after every iteration and implies the final result.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: An invariant connects local updates to a global correctness claim.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: State a fact that is true before and after every iteration and implies the final result. An invariant connects local updates to a global correctness claim. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize invariant reasoning as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full337",
    "topic": "Mixed Interview Patterns",
    "level": "foundation",
    "type": "mcq",
    "title": "Pattern from constraints: Foundation checkpoint",
    "body": "What is the key idea behind **choose technique**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Read input ordering, allowed duplicates, weights, and target complexity before coding.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Constraints are often the strongest signal of the intended pattern.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Read input ordering, allowed duplicates, weights, and target complexity before coding. Constraints are often the strongest signal of the intended pattern. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize pattern from constraints as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full338",
    "topic": "Mixed Interview Patterns",
    "level": "easy",
    "type": "coding",
    "title": "Pattern from constraints: Easy checkpoint",
    "body": "You need an efficient solution for **choose technique**. Which approach is the best starting point?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Read input ordering, allowed duplicates, weights, and target complexity before coding.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: Constraints are often the strongest signal of the intended pattern.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Read input ordering, allowed duplicates, weights, and target complexity before coding. Constraints are often the strongest signal of the intended pattern. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize pattern from constraints as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full339",
    "topic": "Mixed Interview Patterns",
    "level": "medium",
    "type": "debug",
    "title": "Pattern from constraints: Medium checkpoint",
    "body": "A teammate has an implementation for **choose technique**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Read input ordering, allowed duplicates, weights, and target complexity before coding."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Constraints are often the strongest signal of the intended pattern.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Read input ordering, allowed duplicates, weights, and target complexity before coding. Constraints are often the strongest signal of the intended pattern. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize pattern from constraints as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full340",
    "topic": "Mixed Interview Patterns",
    "level": "hard",
    "type": "design",
    "title": "Pattern from constraints: Hard checkpoint",
    "body": "For a difficult variant of **choose technique**, which design principle should remain unchanged?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Read input ordering, allowed duplicates, weights, and target complexity before coding."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: Constraints are often the strongest signal of the intended pattern.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Read input ordering, allowed duplicates, weights, and target complexity before coding. Constraints are often the strongest signal of the intended pattern. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize pattern from constraints as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full341",
    "topic": "Mixed Interview Patterns",
    "level": "foundation",
    "type": "mcq",
    "title": "Composite data structure: Foundation checkpoint",
    "body": "What is the key idea behind **O(1) random + delete + lookup**?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Combine a dynamic array with a hash map from value to index."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: One structure supplies indexing; the other supplies membership/location.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Combine a dynamic array with a hash map from value to index. One structure supplies indexing; the other supplies membership/location. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize composite data structure as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full342",
    "topic": "Mixed Interview Patterns",
    "level": "easy",
    "type": "coding",
    "title": "Composite data structure: Easy checkpoint",
    "body": "You need an efficient solution for **O(1) random + delete + lookup**. Which approach is the best starting point?",
    "options": [
      "Combine a dynamic array with a hash map from value to index.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: One structure supplies indexing; the other supplies membership/location.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Combine a dynamic array with a hash map from value to index. One structure supplies indexing; the other supplies membership/location. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize composite data structure as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full343",
    "topic": "Mixed Interview Patterns",
    "level": "medium",
    "type": "debug",
    "title": "Composite data structure: Medium checkpoint",
    "body": "A teammate has an implementation for **O(1) random + delete + lookup**. What reasoning best explains why the intended approach works?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Combine a dynamic array with a hash map from value to index."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: One structure supplies indexing; the other supplies membership/location.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Combine a dynamic array with a hash map from value to index. One structure supplies indexing; the other supplies membership/location. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize composite data structure as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full344",
    "topic": "Mixed Interview Patterns",
    "level": "hard",
    "type": "design",
    "title": "Composite data structure: Hard checkpoint",
    "body": "For a difficult variant of **O(1) random + delete + lookup**, which design principle should remain unchanged?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Combine a dynamic array with a hash map from value to index.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: One structure supplies indexing; the other supplies membership/location.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Combine a dynamic array with a hash map from value to index. One structure supplies indexing; the other supplies membership/location. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize composite data structure as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full345",
    "topic": "Mixed Interview Patterns",
    "level": "foundation",
    "type": "mcq",
    "title": "Hidden quadratic: Foundation checkpoint",
    "body": "What is the key idea behind **spot accidental O(n^2)**?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Inspect work inside every outer iteration, including helper calls and rebuilding structures.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: A single O(1) operation does not bound the whole loop body.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Inspect work inside every outer iteration, including helper calls and rebuilding structures. A single O(1) operation does not bound the whole loop body. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize hidden quadratic as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full346",
    "topic": "Mixed Interview Patterns",
    "level": "easy",
    "type": "coding",
    "title": "Hidden quadratic: Easy checkpoint",
    "body": "You need an efficient solution for **spot accidental O(n^2)**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Inspect work inside every outer iteration, including helper calls and rebuilding structures.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: A single O(1) operation does not bound the whole loop body.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Inspect work inside every outer iteration, including helper calls and rebuilding structures. A single O(1) operation does not bound the whole loop body. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize hidden quadratic as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full347",
    "topic": "Mixed Interview Patterns",
    "level": "medium",
    "type": "debug",
    "title": "Hidden quadratic: Medium checkpoint",
    "body": "A teammate has an implementation for **spot accidental O(n^2)**. What reasoning best explains why the intended approach works?",
    "options": [
      "Choose the most complicated data structure available so the solution is always general.",
      "Inspect work inside every outer iteration, including helper calls and rebuilding structures.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A single O(1) operation does not bound the whole loop body.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Inspect work inside every outer iteration, including helper calls and rebuilding structures. A single O(1) operation does not bound the whole loop body. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize hidden quadratic as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full348",
    "topic": "Mixed Interview Patterns",
    "level": "hard",
    "type": "design",
    "title": "Hidden quadratic: Hard checkpoint",
    "body": "For a difficult variant of **spot accidental O(n^2)**, which design principle should remain unchanged?",
    "options": [
      "Inspect work inside every outer iteration, including helper calls and rebuilding structures.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 0,
    "hints": [
      "Focus on the invariant/structure: A single O(1) operation does not bound the whole loop body.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: Inspect work inside every outer iteration, including helper calls and rebuilding structures. A single O(1) operation does not bound the whole loop body. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize hidden quadratic as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full349",
    "topic": "Mixed Interview Patterns",
    "level": "foundation",
    "type": "mcq",
    "title": "Correctness proof: Foundation checkpoint",
    "body": "What is the key idea behind **justify greedy/optimization**?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "State the invariant and an exchange/cut/induction argument appropriate to the algorithm.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: A solution is not mastered until you can explain why it is always correct.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: State the invariant and an exchange/cut/induction argument appropriate to the algorithm. A solution is not mastered until you can explain why it is always correct. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize correctness proof as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full350",
    "topic": "Mixed Interview Patterns",
    "level": "easy",
    "type": "coding",
    "title": "Correctness proof: Easy checkpoint",
    "body": "You need an efficient solution for **justify greedy/optimization**. Which approach is the best starting point?",
    "options": [
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general.",
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "State the invariant and an exchange/cut/induction argument appropriate to the algorithm."
    ],
    "answer": 3,
    "hints": [
      "Focus on the invariant/structure: A solution is not mastered until you can explain why it is always correct.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: State the invariant and an exchange/cut/induction argument appropriate to the algorithm. A solution is not mastered until you can explain why it is always correct. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize correctness proof as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full351",
    "topic": "Mixed Interview Patterns",
    "level": "medium",
    "type": "debug",
    "title": "Correctness proof: Medium checkpoint",
    "body": "A teammate has an implementation for **justify greedy/optimization**. What reasoning best explains why the intended approach works?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "Choose the most complicated data structure available so the solution is always general.",
      "State the invariant and an exchange/cut/induction argument appropriate to the algorithm.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward."
    ],
    "answer": 2,
    "hints": [
      "Focus on the invariant/structure: A solution is not mastered until you can explain why it is always correct.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: State the invariant and an exchange/cut/induction argument appropriate to the algorithm. A solution is not mastered until you can explain why it is always correct. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize correctness proof as a pattern, but verify its preconditions before applying it."
    ]
  },
  {
    "id": "full352",
    "topic": "Mixed Interview Patterns",
    "level": "hard",
    "type": "design",
    "title": "Correctness proof: Hard checkpoint",
    "body": "For a difficult variant of **justify greedy/optimization**, which design principle should remain unchanged?",
    "options": [
      "Recompute every candidate from scratch; this guarantees correctness but ignores the structure of the problem.",
      "State the invariant and an exchange/cut/induction argument appropriate to the algorithm.",
      "Optimize code syntax first; algorithmic invariants can be checked afterward.",
      "Choose the most complicated data structure available so the solution is always general."
    ],
    "answer": 1,
    "hints": [
      "Focus on the invariant/structure: A solution is not mastered until you can explain why it is always correct.",
      "Try explaining what information is preserved after each step and why the discarded alternatives cannot contain a better answer."
    ],
    "solution": "The central idea is: State the invariant and an exchange/cut/induction argument appropriate to the algorithm. A solution is not mastered until you can explain why it is always correct. This is the core invariant/pattern that makes the algorithm efficient and correct; implementation details depend on the exact constraints and input conventions.",
    "teaching": [
      "Recognize correctness proof as a pattern, but verify its preconditions before applying it."
    ]
  }
];
