import { z } from 'zod';

export const schema = z.object({
  email: z.string().nonempty('Email é obrigatória').email('Deve ser um e-mail'),
  password: z.string().nonempty('Senha é obrigatória'),
});

export type iLoginData = z.infer<typeof schema>;
