import { z } from "zod";

export const subscribeSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatório!")
    .email("Formato do e-mail inválido."),
});

export type SubscribeFormData = z.infer<typeof subscribeSchema>;
