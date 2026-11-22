import { getApps, initializeApp, cert, App } from 'firebase-admin/app';
import { getFirestore, Firestore } from 'firebase-admin/firestore';

let firestoreInstance: Firestore | null = null;
let adminApp: App | null = null;

export function getAdminFirestore(): Firestore | null {
  if (firestoreInstance) return firestoreInstance;

  try {
    const apps = getApps();
    if (apps.length === 0) {
      const serviceAccountStr = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
      if (!serviceAccountStr) {
        console.warn('[FirebaseAdmin] No FIREBASE_SERVICE_ACCOUNT_JSON provided.');
        return null;
      }

      const serviceAccount = JSON.parse(serviceAccountStr);
      adminApp = initializeApp({
        credential: cert(serviceAccount),
        projectId: serviceAccount.project_id || 'vihaya-app',
      });
    } else {
      adminApp = apps[0];
    }

    firestoreInstance = getFirestore(adminApp);
    return firestoreInstance;
  } catch (err) {
    console.error('[FirebaseAdmin] Initialization error:', err);
    return null;
  }
}
