import { z } from 'zod';

const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export const schema = z.object({
  name: z
    .string()
    .nonempty('Nome é obrigatório')
    .min(3, 'O nome precisa preciso de no mínimo 3 caracteres'),
  email: z
    .string()
    .nonempty('Email é obrigatório')
    .min(1, 'O e-mail é obrigatório')
    .email('O e-mail deve estar no formato correto'),
  phone: z
    .string()
    .nonempty('O telefone é obrigatório')
    .refine((value) => phoneRegex.test(value), {
      message: 'Número inválido',
    }),
});

export type iContactData = z.infer<typeof schema>;
