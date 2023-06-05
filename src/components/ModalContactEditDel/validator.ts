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

export type iContactUpdateData = z.infer<typeof schema>;
