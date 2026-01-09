import { motion } from 'framer-motion';
import { Brain, CheckCircle2, XCircle, Trophy, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const questions = [
  {
    question: "What is the largest planet in our Solar System?",
    options: [
      { id: 'a', text: 'Saturn', isCorrect: false },
      { id: 'b', text: 'Jupiter', isCorrect: true },
      { id: 'c', text: 'Neptune', isCorrect: false },
      { id: 'd', text: 'Uranus', isCorrect: false },
    ],
    difficulty: 'Medium',
    topic: 'Planetary Science',
    explanation: "Jupiter is indeed the largest planet, with a diameter of about 139,820 km!"
  },
  {
    question: "Which galaxy is the Milky Way on a collision course with?",
    options: [
      { id: 'a', text: 'Andromeda', isCorrect: true },
      { id: 'b', text: 'Sombrero', isCorrect: false },
      { id: 'c', text: 'Triangulum', isCorrect: false },
      { id: 'd', text: 'Whirlpool', isCorrect: false },
    ],
    difficulty: 'Hard',
    topic: 'Astrophysics',
    explanation: "The Andromeda Galaxy is currently moving towards the Milky Way at about 110 km/s."
  },
  {
    question: "How many moons does Mars have?",
    options: [
      { id: 'a', text: '0', isCorrect: false },
      { id: 'b', text: '1', isCorrect: false },
      { id: 'c', text: '2', isCorrect: true },
      { id: 'd', text: '4', isCorrect: false },
    ],
    difficulty: 'Easy',
    topic: 'Planetary Science',
    explanation: "Mars has two small moons: Phobos and Deimos."
  }
];

export default function QuizSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (optionId: string) => {
    if (showResult) return;
    setSelectedAnswer(optionId);
    setShowResult(true);
    
    if (currentQuestion.options.find(o => o.id === optionId)?.isCorrect) {
      setScore(s => s + 10);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  const isCorrect = currentQuestion.options.find(o => o.id === selectedAnswer)?.isCorrect;

  return (
    <section id="quizzes" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cosmic-gradient" />
      <div className="absolute inset-0 stars-bg opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cosmic-nebula/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-cosmic-nebula font-display font-medium tracking-widest text-sm uppercase">
              AI-Powered Learning
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
              <span className="text-foreground">Test Your </span>
              <span className="bg-gradient-to-r from-cosmic-nebula via-primary to-accent bg-clip-text text-transparent">
                Knowledge
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Our AI-powered quiz system adapts to your learning level. Answer questions 
              to unlock new topics and track your progress through the cosmos.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-8">
              {[
                'Adaptive difficulty based on performance',
                'Instant feedback with detailed explanations',
                'Track progress across different topics',
                'Compete on global leaderboards',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="cosmic" size="xl">
              <Brain className="w-5 h-5" />
              Start Quiz Challenge
            </Button>
          </motion.div>

          {/* Right - Interactive Quiz Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card-cosmic rounded-3xl p-8 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-nebula to-primary flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {currentQuestion.topic}
                    </p>
                    <p className="text-sm font-medium text-primary">
                      {currentQuestion.difficulty}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-accent">
                  <Trophy className="w-5 h-5" />
                  <span className="font-display font-bold">{score} XP</span>
                </div>
              </div>

              {/* Question */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === option.id;
                  const showCorrect = showResult && option.isCorrect;
                  const showWrong = showResult && isSelected && !option.isCorrect;

                  return (
                    <motion.button
                      key={option.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      onClick={() => handleAnswer(option.id)}
                      disabled={showResult}
                      className={`w-full p-4 rounded-xl text-left transition-all duration-300 flex items-center justify-between group ${
                        showCorrect
                          ? 'bg-green-500/20 border-2 border-green-500'
                          : showWrong
                          ? 'bg-red-500/20 border-2 border-red-500'
                          : isSelected
                          ? 'bg-primary/20 border-2 border-primary'
                          : 'bg-muted/30 border-2 border-transparent hover:border-primary/30 hover:bg-muted/50'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm ${
                          showCorrect
                            ? 'bg-green-500 text-primary-foreground'
                            : showWrong
                            ? 'bg-red-500 text-primary-foreground'
                            : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                        }`}>
                          {option.id.toUpperCase()}
                        </span>
                        <span className="text-foreground font-medium">{option.text}</span>
                      </span>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                      {showWrong && <XCircle className="w-5 h-5 text-red-500" />}
                    </motion.button>
                  );
                })}
              </div>

              {/* Result feedback */}
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    isCorrect ? 'bg-green-500/10' : 'bg-red-500/10'
                  }`}
                >
                  {isCorrect ? (
                    <>
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-500">Excellent!</p>
                        <p className="text-sm text-muted-foreground">
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <XCircle className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-red-500">Not quite!</p>
                        <p className="text-sm text-muted-foreground">
                          {currentQuestion.explanation}
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              {showResult && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <Button variant="cosmic-outline" onClick={nextQuestion} className="w-full">
                    {currentQuestionIndex === questions.length - 1 ? "Finish & Restart" : "Next Question"}
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
