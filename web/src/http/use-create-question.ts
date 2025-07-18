import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { CreateQuestionRequest } from './types/create-question-request';
import type { CreateQuestionResponse } from './types/create-question-response';
import type { GetQuestionsResponse } from './types/get-questions-response';

export function useCreateQuestion(roomId: string) {
  const queryclient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch(
        `http://localhost:3333/rooms/${roomId}/questions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      const result: CreateQuestionResponse = await response.json();

      return result;
    },

    onMutate: ({ question }: CreateQuestionRequest) => {
      const questions = queryclient.getQueryData<GetQuestionsResponse>([
        'get-questions',
        roomId,
      ]);

      const questionsArray = questions ?? [];

      const newQuestion = {
        id: crypto.randomUUID(),
        question,
        answer: null,
        createdAt: new Date().toISOString(),
      };

      queryclient.setQueryData<GetQuestionsResponse>(
        ['get-questions', roomId],
        [newQuestion, ...questionsArray]
      );

      return { newQuestion, questions };
    },

    onSuccess: (data, _variables, context) => {
      queryclient.setQueryData<GetQuestionsResponse>(
        ['get-questions', roomId],
        questions => {
          if (!questions || !context.newQuestion) return questions;

          return questions.map(question => {
            if (question.id === context.newQuestion.id) {
              return {
                ...context.newQuestion,
                id: data.questionId,
                answer: data.answer,
              };
            }

            return question;
          });
        }
      );
    },

    onError: (_, __, context) => {
      if (context?.questions) {
        queryclient.setQueryData<GetQuestionsResponse>(
          ['get-questions', roomId],
          context.questions
        );
      }
    },
  });
}
