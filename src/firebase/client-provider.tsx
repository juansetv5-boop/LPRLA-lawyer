'use client';

import React, { useState, useEffect } from 'react';
import { initializeFirebase } from './index';
import { FirebaseProvider } from './provider';

export const FirebaseClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [firebaseInstance, setFirebaseInstance] = useState<ReturnType<typeof initializeFirebase> | null>(null);

  useEffect(() => {
    // Initialize Firebase after the first paint to avoid blocking the main thread
    const timer = setTimeout(() => {
      setFirebaseInstance(initializeFirebase());
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!firebaseInstance) {
    return <>{children}</>;
  }

  return (
    <FirebaseProvider firebaseApp={firebaseInstance.app} firestore={firebaseInstance.db} auth={firebaseInstance.auth}>
      {children}
    </FirebaseProvider>
  );
};
