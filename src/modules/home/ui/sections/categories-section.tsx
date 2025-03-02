"use client";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import React, { Suspense } from "react";
interface CategoriesSectionProps {
  categoryId?: string;
}

const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <ErrorBoundary fallback={<div>error</div>}>
        <CategoriesSectionSuspence categoryId={categoryId} />
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspence = ({ categoryId }: CategoriesSectionProps) => {
  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  return <div></div>;
};

export default CategoriesSection;
