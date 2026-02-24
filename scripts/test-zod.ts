import { z } from "zod";

const s1 = z.email();
console.log(s1.parse("test@example.com"));
