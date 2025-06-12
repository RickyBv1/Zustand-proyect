import { create } from "zustand";
import { type Question } from "../types.d";

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => void;
}
