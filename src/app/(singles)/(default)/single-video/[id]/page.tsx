import React, { Suspense } from "react"
import CategoryBadgeList from "@/components/CategoryBadgeList/CategoryBadgeList"
import PostMeta2 from "@/components/PostMeta2/PostMeta2"
import { DEMO_CATEGORIES } from "@/data/taxonomies"
import SingleTitle from "@/app/(singles)/SingleTitle"
import videoData from "@/data/jsons/__postsVideo.json"
import { getVideoById } from "@/utils/youtube-service"
import VideoPlayer from "./VideoPlayer"
import SingleContent from "@/app/(singles)/SingleContent"
import { PostDataType } from "@/data/types"

const PageSv = async ({ params }: { params: { id: string } }) => {
  const videoId = params.id
  
  // Try to fetch from YouTube
  let video: PostDataType | any = await getVideoById(videoId);
  
  // Fallback to demo data if not found
  if (!video) {
    video = videoData.find(v => v.id === videoId);
  }

  if (!video) {
    return <div>Video no encontrado</div>
  }

  const renderHeader = () => {
    return (
      <div className={`nc-SingleHeader `}>
        <div className="space-y-5 dark text-neutral-100">
          <CategoryBadgeList itemClass="!px-3" categories={[DEMO_CATEGORIES[2]]} />
          <SingleTitle mainClass="text-neutral-900 font-semibold text-3xl md:!leading-[120%] dark:text-neutral-100" title={video.title} />

          <div className="w-full border-b border-neutral-100 dark:border-neutral-800" />
          <div className="flex flex-col space-y-5">
            <PostMeta2 size="large" className="leading-none flex-shrink-0" hiddenCategories avatarRounded="rounded-full shadow-inner" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <header className="container relative py-14 lg:py-20 flex flex-col lg:flex-row lg:items-center">
        <div className="nc-PageSingleVideo__headerWrap absolute inset-y-0 transform translate-x-1/2 end-1/2 w-screen lg:translate-x-0 lg:w-[calc(100vw/2)] bg-neutral-900 dark:bg-black dark:bg-opacity-50 lg:rounded-e-[40px]" />
        <div className="pb-10 lg:pb-0 lg:pr-10 relative">{renderHeader()}</div>
        <div className="relative lg:w-8/12 flex-shrink-0">
          <div className="aspect-w-16 aspect-h-16 sm:aspect-h-9 border-4 border-neutral-300 dark:border-neutral-800 shadow-2xl bg-neutral-800 rounded-3xl overflow-hidden z-0">
             <VideoPlayer url={video.videoUrl} />
          </div>
        </div>
      </header>
      
      <div className="container mt-10">
        <SingleContent data={video as PostDataType} />
      </div>
    </>
  )
}

const PageSingleVideo = ({ params }: { params: { id: string } }) => (
  <Suspense fallback={<div />}>
    {/* @ts-ignore */}
    <PageSv params={params} />
  </Suspense>
)

export default PageSingleVideo
