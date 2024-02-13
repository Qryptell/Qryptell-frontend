import { z } from "zod";

const formSchema = z.object({
  bio: z
    .string()
    .min(4, {
      message: "Bio must contain atleast 4 characters",
    })
    .max(20, {
      message: "Bio shouldnt exceed 20 characters.",
    }),
  phoneNo: z
    .string()
    .min(10, {
      message: "Enter a valid phone number!",
    })
    .max(10, {
      message: "Enter a valid phone number!",
    }),
  email: z.string().email().min(6),
  brandName: z.string().min(2, {
    message: "Enter a valid brand name!",
  }),
  link1: z.string().min(5, {
    message: "Enter a valid link!",
  }),
  link2: z.string().min(5, {
    message: "Enter a valid link!",
  }),
});

export default formSchema;
