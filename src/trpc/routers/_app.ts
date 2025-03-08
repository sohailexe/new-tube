import { categoriesRoutes } from '@/modules/categories/server/procedures';
import { studioRouter } from '@/modules/studio/server/procedures';
import {  createTRPCRouter } from '../init';
import { videos } from '@/db/schema';
export const appRouter = createTRPCRouter({
    categories: categoriesRoutes,
    videos: studioRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;