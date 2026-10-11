// src/utils/easterEggs.ts
export const FUN_FACTS_EVENT = "ovya:funfacts";

/** Anything can open the hidden fun-facts window without importing it. */
export const openFunFacts = () => window.dispatchEvent(new Event(FUN_FACTS_EVENT));