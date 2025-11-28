import { ReactNode } from 'react';

export type Page = 'home' | 'services' | 'ftl' | 'ltl' | 'warehousing' | 'company' | 'values' | 'fleet' | 'ethics' | 'documents' | 'career' | 'driver' | 'office' | 'contact' | 'forwarding' | 'paper' | 'automotive' | 'cleaning';

export type Language = 'pl' | 'en' | 'de' | 'nl' | 'fr' | 'it' | 'es';

export interface NavItem {
  label: string; // Key for translation
  id?: Page;
  description?: string; // Optional description for dropdown items
  children?: NavItem[];
}

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
  pageId: Page;
}

export interface Stat {
  value: string;
  label: string;
}