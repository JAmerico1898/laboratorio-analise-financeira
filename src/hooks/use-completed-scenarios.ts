"use client";

import { useState, useEffect } from "react";
import type { CompletedScenario } from "@/types/results";

const STORAGE_KEY = "finlab-analise-completed";

export function useCompletedScenarios() {
  const [completedScenarios, setCompletedScenarios] = useState<CompletedScenario[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setCompletedScenarios(JSON.parse(stored) as CompletedScenario[]);
      }
    } catch {
      // Ignore parse errors — start with empty state
    }
  }, []);

  // Upsert: a re-played scenario replaces its previous score
  const addCompletedScenario = (scenario: CompletedScenario) => {
    setCompletedScenarios((prev) => {
      const next = [...prev.filter((cs) => cs.id !== scenario.id), scenario];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  };

  const getCompletion = (id: string): CompletedScenario | undefined =>
    completedScenarios.find((cs) => cs.id === id);

  return { completedScenarios, addCompletedScenario, getCompletion };
}
