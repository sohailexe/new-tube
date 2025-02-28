import { auth } from '@clerk/nextjs/server';
import { initTRPC } from '@trpc/server';
import { cache } from 'react';
import superjson  from 'superjson';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { eq } from 'drizzle-orm';

// this function will be called on every request
export const createTRPCContext = cache(async () => {
  const {userId} = await auth()
  return { clerkUserId: userId };//this will be available in the context of all procedures and routers
});
export type Context = Awaited<ReturnType <typeof createTRPCContext>> 
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>(  ).create({
  /**
   * @see https://trpc.io/docs/server/data-transformers
   */
  transformer: superjson,
});
// Base router and procedure helpers
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(async function isAuthed(opts){
  const {ctx } = opts;
  
  if(!ctx.clerkUserId){
    throw new TRPCError({code : "UNAUTHORIZED", message: "You must be logged in to access this resource"})
  }
  // now i am adding the logined user to the context
  const [user]= await db
  .select()
  .from(users)
  .where(eq(users.clerkId,ctx.clerkUserId)) //this will fetch logined user from the db 

  console.log(user);
  
  return opts.next({
    ctx: {
      ...ctx,
    }
  })
})