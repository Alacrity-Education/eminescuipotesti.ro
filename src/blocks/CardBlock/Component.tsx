import React from "react";
import type { CardBlock as CardBlockProps } from "@/payload-types";
import { cn } from "@/utilities/ui";

export const CardBlock: React.FC<CardBlockProps & { title?: string }> = ({ title, cards }) => {
  const getVariantClasses = (variant: "primary" | "secondary" | "starry") => {
    if (variant === "primary") return "bg-primary text-primary-content";
    if (variant === "secondary") return "bg-secondary text-secondary-content";
    // starry background: gradient from primary to black with stars
    return "text-primary-content bg-linear-to-tr from-primary to-black stars";
  };

  const visibleCards = (cards || []).slice(0, 6);
  const numCards = visibleCards.length;
  // On lg, we show 3 columns; only add a second row if we have >= 4 cards
  const lgRowsClass = numCards >= 3 ? "lg:grid-rows-2" : "lg:grid-rows-1";

  return (
    <section className={cn("container mx-auto w-full h-max lg:w-full")}>
      {title && (
        <h2 className={cn(
          "text-primary pb-20 text-center",
          "text-xl font-semibold",
          "md:text-3xl"
        )}>{title}</h2>
      )}
      <div className={cn(
        // base: single column
        "grid grid-cols-1 gap-6",
        // sm: two columns
        "sm:grid-cols-2",
        // md: three columns
        "md:grid-cols-2",
        // lg: explicit 3 cols with conditional rows based on count
        "lg:grid-cols-2",
        lgRowsClass,
        "h-full w-full"
      )}>
        {visibleCards.map((card, i) => {
          const variant = card?.variant ?? "primary";
          // Only support row span (disable col span)
          const rowSpan = Math.min(Math.max(card?.rowSpan ?? 1, 1), 2);
          const spanClasses = cn(
            // apply row span only at lg when we actually have 2 rows
            numCards >= 3 && rowSpan === 2 ? "lg:row-span-2" : "lg:row-span-1",
          );

          return (
            <article
              key={i}
              className={cn(
                "rounded-lg shadow-xl p-8 h-full w-full min-h-64 ",
                getVariantClasses(variant),
                spanClasses,
              )}
            >
              {card?.title && (
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
              )}
              {card?.description && (
                <p className="text-sm">{card.description}</p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};
