import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import StoryCard from './StoryCard'
import data from '../../pages/data.json'

const Explore = () => {
  const [queryState, setQueryState] = useState<string>('')
  const [storyData, setStoryData] = useState(data)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      if (!queryState) {
        setStoryData(data)
      } else {
        const filteredStories = data.filter(story =>
          story.keywords?.some((keyword: string) =>
            keyword.toLowerCase().includes(queryState.toLowerCase())
          )
        )
        setStoryData(filteredStories)
      }
      setLoading(false)
    }, 200) // small delay for smoother UX

    return () => clearTimeout(timer)
  }, [queryState])

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#0f1116] text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 py-20">
      <section className="flex flex-col justify-center items-center text-center space-y-4 h-[30vh]">
        <h1 className="text-4xl md:text-5xl font-bold">Explore</h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Browse our collection of stories from around the world – find
          something new and unexpected to immerse yourself in.
        </p>
      </section>

      {/* Searchbar */}
      <Searchbar
        onSearch={query => {
          setQueryState(query)
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400 animate-pulse">
            Searching stories...
          </p>
        ) : storyData.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No stories found for <span className="font-semibold">{queryState}</span>
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fadeIn">
            {storyData.map((story, index) => (
              <StoryCard
                key={index}
                id={`${index}`}
                title={story?.title}
                genre={story.genre}
                image={story.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Explore
