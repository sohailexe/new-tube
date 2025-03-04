"use client";
import { trpc } from "@/trpc/client";
import { ErrorBoundary } from "react-error-boundary";
import React, { Suspense } from "react";
import FilterCarousel from "@/components/filer-carousel";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoriesSectionProps {
  categoryId?: string;
}

const CategoriesSection = ({ categoryId }: CategoriesSectionProps) => {
  return (
    <Suspense
      fallback={<FilterCarousel onSelect={() => {}} isLoading data={[]} />}
    >
      <ErrorBoundary fallback={<div>error</div>}>
        <CategoriesSectionSuspense categoryId={categoryId} />{" "}
      </ErrorBoundary>
    </Suspense>
  );
};

const CategoriesSectionSuspense = ({ categoryId }: CategoriesSectionProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [categories] = trpc.categories.getMany.useSuspenseQuery();
  const data =
    categories?.map((category) => ({
      value: category.id,
      label: category.name,
    })) || [];

  const handleSelect = (selectedCategoryId: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategoryId === null) {
      params.delete("categoryId");
    } else {
      params.set("categoryId", selectedCategoryId);
    }

    const newUrl = `${window.location.pathname}?${params.toString()}`;

    router.push(newUrl);
  };

  return (
    <FilterCarousel onSelect={handleSelect} value={categoryId} data={data} />
  );
};

export default CategoriesSection;
