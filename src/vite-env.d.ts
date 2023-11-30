/// <reference types="vite/client" />

interface Window {
  android?: {
    registerJs: (s: string) => void;
    getJs: () => string;
  };
}
