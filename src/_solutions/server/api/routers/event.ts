import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const eventRouter = createTRPCRouter({
  getAvailable: publicProcedure.mutation(async ({ ctx }) => {
    return ctx.db.event.findMany({
      orderBy: { date: "desc" },
    });
  }),

  create: protectedProcedure
    .input(z.object({ name: z.string().min(1), date: z.date() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.event.create({
        data: {
          name: input.name,
          date: input.date,
          adminId: ctx.session.user.id,
        },
      });
    }),
});
