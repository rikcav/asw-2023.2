const { z } = require("zod");

export const userValidation = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});
