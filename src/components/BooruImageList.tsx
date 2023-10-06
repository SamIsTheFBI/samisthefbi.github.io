import { useEffect, useState } from "react"
import { Image } from "astro:assets";

const fetchImages = async () => {
  let urls = []
  const res = await fetch("https://safebooru.donmai.us/posts.json?tags=ordfav%3AAkatsukiRandom6")
  const images = await res.json();
  for (let i = 0; i < images.length; i++) {
    let image = {
      sample: String(images[i].media_asset.variants[2].url),
      orig: `https://safebooru.donmai.us/posts/${String(images[i].id)}`,
    }
    // urls.push(String(images[i].media_asset.variants[2].url))
    urls.push(image)
  }

  return urls
}

interface ImageProps {
  id: number;
  sample: string;
  orig: string;
  caption: string;
}

export default function BooruImageList() {
  const [images, setImages] = useState<ImageProps[]>([])

  useEffect(() => {
    const clearImages = () => {
      setImages([])
    }
    const getImages = async () => {
      const res = await fetch("https://safebooru.donmai.us/posts.json?tags=ordfav%3AAkatsukiRandom6")
      const images = await res.json();
      for (let i = 0; i < images.length && i < 18; i++) {
        const image: ImageProps = {
          id: i,
          sample: String(images[i].media_asset.variants[2].url),
          orig: `https://safebooru.donmai.us/posts/${String(images[i].id)}`,
          caption: `${String(images[i].tag_string_character)} from ${String(images[i].tag_string_copyright)} drawn by ${String(images[i].tag_string_artist)}`,
        }
        setImages(prevImages => [
          ...prevImages,
          image
        ])
      }
    }

    clearImages()
    getImages()
  }, [])

  return (
    <div>
      <ul className="flex flex-wrap justify-center items-center gap-2">
        {images.map((image) => (
          <li key={image.id}>
            <a href={image.orig} target="_blank">
              <img
                loading="lazy"
                title={image.caption}
                src={image.sample}
                className="border-2 border-[#F87171] object-cover object-top w-full sm:w-52 aspect-square" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

