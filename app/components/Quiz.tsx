'use client';

import { useState } from 'react';
import styles from './Quiz.module.css';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  questions: Question[];
  articleTitle: string;
}

export default function Quiz({ questions, articleTitle }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});
  const [score, setScore] = useState<number | null>(null);

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleSubmit = (questionId: string) => {
    setShowResults(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleCheckAll = () => {
    const allResults: Record<string, boolean> = {};
    questions.forEach(q => {
      allResults[q.id] = true;
    });
    setShowResults(allResults);
    
    // Calculate score
    const correct = questions.filter(q => selectedAnswers[q.id] === q.correctAnswer).length;
    setScore(correct);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults({});
    setScore(null);
  };

  const getQuestionResult = (question: Question) => {
    const selected = selectedAnswers[question.id];
    if (selected === undefined) return null;
    return selected === question.correctAnswer;
  };

  if (questions.length === 0) return null;

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizHeader}>
        <h2 className={styles.quizTitle}>Practice Quiz</h2>
        <p className={styles.quizSubtitle}>Test your understanding of {articleTitle}</p>
        {score !== null && (
          <div className={styles.scoreDisplay}>
            <span className={styles.scoreText}>
              Score: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
            </span>
          </div>
        )}
      </div>

      <div className={styles.questionsList}>
        {questions.map((question, qIndex) => {
          const isAnswered = selectedAnswers[question.id] !== undefined;
          const isCorrect = getQuestionResult(question);
          const showResult = showResults[question.id];

          return (
            <div key={question.id} className={styles.questionCard}>
              <div className={styles.questionHeader}>
                <span className={styles.questionNumber}>Question {qIndex + 1}</span>
                {showResult && (
                  <span className={`${styles.resultBadge} ${isCorrect ? styles.correct : styles.incorrect}`}>
                    {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                  </span>
                )}
              </div>
              
              <p className={styles.questionText}>{question.question}</p>
              
              <div className={styles.optionsList}>
                {question.options.map((option, optIndex) => {
                  const isSelected = selectedAnswers[question.id] === optIndex;
                  const isCorrectOption = optIndex === question.correctAnswer;
                  const showOptionResult = showResult && isCorrectOption;

                  return (
                    <label
                      key={optIndex}
                      className={`${styles.option} ${
                        isSelected ? styles.selected : ''
                      } ${
                        showResult && isCorrectOption ? styles.correctOption : ''
                      } ${
                        showResult && isSelected && !isCorrectOption ? styles.incorrectOption : ''
                      }`}
                    >
                      <input
                        type="radio"
                        name={question.id}
                        value={optIndex}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(question.id, optIndex)}
                        disabled={showResult}
                        className={styles.radioInput}
                      />
                      <span className={styles.optionText}>{option}</span>
                      {showOptionResult && (
                        <span className={styles.correctIndicator}>✓</span>
                      )}
                    </label>
                  );
                })}
              </div>

              {showResult && (
                <div className={`${styles.explanation} ${isCorrect ? styles.correctExplanation : styles.incorrectExplanation}`}>
                  <strong>{isCorrect ? 'Correct!' : 'Incorrect.'}</strong> {question.explanation}
                </div>
              )}

              {!showResult && isAnswered && (
                <button
                  className={styles.submitButton}
                  onClick={() => handleSubmit(question.id)}
                >
                  Check Answer
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.quizActions}>
        {Object.keys(selectedAnswers).length > 0 && (
          <>
            <button
              className={styles.checkAllButton}
              onClick={handleCheckAll}
              disabled={Object.keys(selectedAnswers).length < questions.length}
            >
              Check All Answers
            </button>
            {(score !== null || Object.keys(showResults).length > 0) && (
              <button
                className={styles.resetButton}
                onClick={handleReset}
              >
                Reset Quiz
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

