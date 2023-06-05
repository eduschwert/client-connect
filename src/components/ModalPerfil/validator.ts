import { z } from 'zod';

const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export const schema = z.object({
  name: z.preprocess((name) => {
    if (!name || typeof name !== 'string') return undefined;
    return name === '' ? undefined : name;
  }, z.string().min(3, 'O nome precisa preciso de no mínimo 3 caracteres').optional()),
  email: z.preprocess((email) => {
    if (!email || typeof email !== 'string') return undefined;
    return email === '' ? undefined : email;
  }, z.string().min(1, 'O e-mail é obrigatório').email('O e-mail deve estar no formato correto').optional()),
  password: z.preprocess(
    (password) => {
      if (!password || typeof password !== 'string') return undefined;
      return password === '' ? undefined : password;
    },
    z
      .string()
      .min(8, 'A senha precisa ter no mínimo 8 caracteres')
      .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        'É necessário ao menos um caractere especial'
      )
      .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
      .optional()
  ),
  phone: z.preprocess(
    (phone) => {
      if (!phone || typeof phone !== 'string') return undefined;
      return phone === '' ? undefined : phone;
    },
    z
      .string()
      .refine((value) => phoneRegex.test(value), {
        message: 'Número inválido',
      })
      .optional()
  ),
});

export type iUpdateData = z.infer<typeof schema>;
