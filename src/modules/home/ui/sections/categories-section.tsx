"use client";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import React, { Suspense } from "react";
import FilterCrousel from "@/components/filer-carousel";
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
  const data = categories?.map((category) => ({
    value: category.id,
    label: category.name,
  }));
  return <FilterCrousel value={categoryId} data={data} />;
};

export default CategoriesSection;
