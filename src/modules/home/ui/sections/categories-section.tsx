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
    <Suspense fallback={<FilterCrousel isLoading data={[]} />}>
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
  return (
    <FilterCrousel
      onSelect={(x) => console.log(x)}
      value={categoryId}
      data={data}
    />
  );
};

export default CategoriesSection;
