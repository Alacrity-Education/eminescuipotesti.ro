import type { Post, ArchiveBlock as ArchiveBlockProps } from "@/payload-types";

import configPromise from "@payload-config";
import { getPayload } from "payload";
import React from "react";
import RichText from "@/components/RichText";
import { cn } from "@/utilities/ui";

export const CardsArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string | null;
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
  } = props;

  const limit = limitFromProps || 3;

  let posts: Post[] = [];

  if (populateBy === "collection") {
    const payload = await getPayload({ config: configPromise });

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === "object") return category.id;
      else return category;
    });

    const fetchedPosts = await payload.find({
      collection: "posts",
      depth: 1,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    });

    posts = fetchedPosts.docs;
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === "object") return post.value;
      }) as Post[];

      posts = filteredSelectedPosts;
    }
  }

  return (
    <div className="container mx-auto my-16" id={`block-${id}`}>
      {introContent && (
        <div className="container mb-16">
          <RichText
            className="ms-0 max-w-3xl"
            data={introContent}
            enableGutter={false}
          />
        </div>
      )}
      <div className={cn("w-full")}>
        {(() => {
          const count = posts.length;
          // md breakpoint: 2 cols
          const mdRows = count <= 2 ? 1 : Math.ceil(Math.min(count, 8) / 2);
          const mdRowsClass =
            mdRows === 1
              ? "md:grid-rows-1"
              : mdRows === 2
              ? "md:grid-rows-2"
              : "md:grid-rows-3";
          // lg breakpoint: 3 cols
          const lgRows = count <= 3 ? 1 : Math.ceil(count / 3);
          const lgRowsClass =
            lgRows === 1
              ? "lg:grid-rows-1"
              : lgRows === 2
              ? "lg:grid-rows-2"
              : lgRows >= 3
              ? "lg:grid-rows-3"
              : "";
          // xl breakpoint: 4 cols
          const xlRows = count <= 4 ? 1 : Math.ceil(count / 4);
          const xlRowsClass =
            xlRows === 1
              ? "xl:grid-rows-1"
              : xlRows === 2
              ? "xl:grid-rows-2"
              : xlRows >= 3
              ? "xl:grid-rows-3"
              : "";

          return (
            <div
              className={cn(
                // base: single column
                "grid grid-cols-1 gap-6",
                // md: 2 columns with conditional rows
                "md:grid-cols-2",
                mdRowsClass,
                // lg: 3 columns with conditional rows
                "lg:grid-cols-3",
                lgRowsClass,
                // xl: 4 columns with conditional rows
                "xl:grid-cols-4",
                xlRowsClass
              )}
            >
              {posts.map((post, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-card p-4"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {typeof post === "object" ? post.title : ""}
                  </h3>
                  {/* You can extend this with a Card component if desired */}
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </div>
  );
};
