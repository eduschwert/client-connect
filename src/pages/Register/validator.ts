import { z } from 'zod';

const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

export const schema = z
  .object({
    name: z
      .string()
      .nonempty('Nome é obrigatório')
      .min(3, 'O nome precisa preciso de no mínimo 3 caracteres'),
    email: z
      .string()
      .nonempty('Email é obrigatório')
      .min(1, 'O e-mail é obrigatório')
      .email('O e-mail deve estar no formato correto'),
    password: z
      .string()
      .nonempty('Senha é obrigatória')
      .min(8, 'A senha é obrigatória e precisa ter no mínimo 8 caracteres')
      .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
      .regex(
        /(?=.*?[#?!@$%^&*-])/,
        'É necessário ao menos um caractere especial'
      )
      .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número'),
    phone: z
      .string()
      .nonempty('O telefone é obrigatório')
      .refine((value) => phoneRegex.test(value), {
        message: 'Número inválido',
      }),
    confirm: z.string().nonempty('A confirmação de senha é obrigatória'),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: 'As senhas não conferem',
    path: ['confirm'],
  });

export type iRegisterData = z.infer<typeof schema>;
