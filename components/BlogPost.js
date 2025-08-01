import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();

  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      <article key={post.id} className="mb-3 md:mb-5 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
        <header className="flex flex-col justify-between md:flex-row md:items-baseline mb-1">
          <h3 className="!text-lg md:!text-xl !font-medium mb-2 md:mb-0 cursor-pointer text-black dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {post.title}
          </h3>
           <time className="flex-shrink-0 text-gray-600 dark:text-gray-400 !tracking-tighter">
             <FormattedDate date={post.date} />
           </time>
        </header>
        <main>
          <p className="hidden md:block !text-base !leading-relaxed !text-gray-600 dark:!text-gray-300 !tracking-tighter  line-clamp-2">
            {post.summary}
          </p>
        </main>
      </article>
    </Link>
  );
};

export default BlogPost;



// import FormattedDate from "@/components/FormattedDate";
// import { useConfig } from "@/lib/config";
// import Link from "next/link";

// const BlogPost = ({ post }) => {
//   const BLOG = useConfig();

//   return (
//     <Link href={`${BLOG.path}/${post.slug}`}>
//       <article key={post.id} className="mb-4 md:mb-6">
//         <header className="flex flex-col justify-between md:flex-row md:items-baseline">
//           <h3 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
//             {post.title}
//           </h3>
//           <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
//             <FormattedDate date={post.date} />
//           </time>
//         </header>
//         <main>
//           <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
//             {post.summary}
//           </p>
//         </main>
//       </article>
//     </Link>
//   );
// };

// export default BlogPost;




// import FormattedDate from "@/components/FormattedDate";
// import { useConfig } from "@/lib/config";
// import Link from "next/link";
// import Image from "next/image";

// const BlogPost = ({ post }) => {
//   const BLOG = useConfig();

//   const getCustomIcon = (title, tags = []) => {
//     const lowerTitle = title.toLowerCase();
//     const allText = `${lowerTitle} ${tags.join(" ").toLowerCase()}`;

//     // 제외 조건
//     if (allText.includes("about")) {
//       return null;
//     }

//     // 제목 우선 체크 (이모지 조건)
//     if (lowerTitle.includes("network")) {
//       return "🌐";
//     }
//     if (lowerTitle.includes("knowledge")) {
//       return "📖";
//     }
//     if (lowerTitle.includes("link")) {
//       return "🔗";
//     }

//     // 제목에 없으면 태그에서 체크
//     const tagsText = tags.join(" ").toLowerCase();
//     if (tagsText.includes("network")) {
//       return "🌐";
//     }
//     if (tagsText.includes("knowledge")) {
//       return "📖";
//     }
//     if (tagsText.includes("link")) {
//       return "🔗";
//     }

//     // 이미지 조건
//     if (allText.includes("kotlin")) {
//       return "/kotlin_icon.png";
//     }
//     if (allText.includes("git")) {
//       return "/git_icon.png";
//     }
//     if (allText.includes("gradle")) {
//       return "/gradle_icon.png";
//     }
//     if (allText.includes("android")) {
//       return "/android_icon.png";
//     }

//     // 기본 없음
//     return null;
//   };

//   const customIconPath = getCustomIcon(post.title, post.tags);

//   return (
//     <Link href={`${BLOG.path}/${post.slug}`}>
//       <article key={post.id} className="mb-4 md:mb-6">
//         <header className="flex flex-col justify-between md:flex-row md:items-baseline">
//           <h3 className="text-lg md:text-xl font-semibold mb-2 cursor-pointer text-black dark:text-gray-100 flex items-center">
//             {/* Notion 아이콘 (있다면) */}
//             {post.icon && (
//               <span className="notion-page-icon inline-block mr-2" style={{ fontSize: "1em" }}>
//                 {post.icon}
//               </span>
//             )}

//             {/* 커스텀 이미지 아이콘 */}
//             {!post.icon && typeof customIconPath === "string" && customIconPath.startsWith("/") && (
//               <div className="notion-page-icon inline-block mr-2" style={{ width: "1em", height: "1em" }}>
//                 <Image
//                   src={customIconPath}
//                   alt="icon"
//                   width={20}
//                   height={20}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             )}

//             {/* 커스텀 이모지 아이콘 */}
//             {!post.icon && typeof customIconPath === "string" && !customIconPath.startsWith("/") && (
//               <span className="notion-page-icon inline-block mr-2" style={{ fontSize: "1em" }}>
//                 {customIconPath}
//               </span>
//             )}

//             {post.title}
//           </h3>
//           <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
//             <FormattedDate date={post.date} />
//           </time>
//         </header>
//         <main>
//           <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
//             {post.summary}
//           </p>
//         </main>
//       </article>
//     </Link>
//   );
// };

// export default BlogPost;

