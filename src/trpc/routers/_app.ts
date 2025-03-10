import { categoriesRoutes } from '@/modules/categories/server/procedures';
import { studioRouter } from '@/modules/studio/server/procedures';
import {  createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
    categories: categoriesRoutes,
    studio: studioRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;