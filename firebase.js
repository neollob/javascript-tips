//Firebase Essential Queries

// (1) Import & Initialize Firebase
// Remember to import Firebase and initialize your app before running these queries.
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
const db = getFirestore(); // Initialize Firestore

// (2) Basic Query
// Fetch all documents in a collection
const fetchAllDocuments = async () => {
  const snapshot = await getDocs(collection(db, 'users')); // "users" is the collection name
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data()); // Display document data
  });
};

// (3) Simple WHERE Clause
// Fetch documents where a condition is met (e.g., age is greater than 18)
const fetchWithWhere = async () => {
  const q = query(collection(db, 'users'), where('age', '>', 18));
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data()); // Display filtered data
  });
};

// (4) Compound Queries
// Fetch documents matching multiple conditions (e.g., age 18 and city is 'New York')
const fetchWithMultipleConditions = async () => {
  const q = query(
    collection(db, 'users'),
    where('age', '>', 18),
    where('city', '==', 'New York')
  );
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data()); // Display filtered data
  });
};

// (5) Ordering Documents
// Fetch documents and order by a field (e.g., age in descending order)
const fetchOrderedDocuments = async () => {
  const q = query(collection(db, 'users'), orderBy('age', 'desc'));
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data()); // Display ordered data
  });
};

// (6) Limit Results
// Fetch limited number of documents (e.g., first 3 users)
const fetchLimitedDocuments = async () => {
  const q = query(collection(db, 'users'), limit(3));
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data()); // Display limited results
  });
};

/* ========== (7) Pagination (Start After) ========== */
// Fetch documents with pagination (e.g., after a specific age)
const fetchWithPagination = async (lastDoc) => {
  const q = query(
    collection(db, 'users'),
    orderBy('age'),
    startAfter(lastDoc),
    limit(2)
  );
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data()); // Display paginated results
  });
};

// (8) Complex Queries (With Ordering)
// Fetch documents with combined conditions and ordering (e.g., users in 'NY' older than 20, ordered by age)
const fetchComplexQuery = async () => {
  const q = query(
    collection(db, 'users'),
    where('age', '>', 20),
    where('city', '==', 'New York'),
    orderBy('age', 'asc')
  );
  const snapshot = await getDocs(q);
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data()); // Display complex query results
  });
};
