import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom.'
import MuiModal from '@mui/material/Modal'
import { Genre, Movie } from '../typings'
import toast, { Toaster } from 'react-hot-toast'

const Modal = () => {
 const [movie, setMovie] = useRecoilState(movieState)
 const [trailer, setTrailer] = useState('')
 const [showModal, setShowModal] = useRecoilState(modalState)
 const [muted, setMuted] = useState(true)
 const [genres, setGenres] = useState<Genre[]>([])
 const [addedToList, setAddedToList] = useState(false)
 const [movies, setMovies] = useState<Movie[]>([])

 const toastStyle = {
  background: 'white',
  color: 'black',
  fontWeight: 'bold',
  fontSize: '16px',
  padding: '15px',
  borderRadius: '999px',
  maxWidth: '1000px',
 }

 useEffect(() => {
  if (!movie) return

  async function fetchMovie() {
   const data = await fetch(
    `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'
    }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&append_to_response=videos`
   ).then((response) => response.json())

   if (data?.videos) {
    const index = data.videos.results.findIndex(
     (element: Element) => element.type === 'Trailer'
    )
    setTrailer(data.videos?.results[index]?.key)
   }
   if (data?.genres) {
    setGenres(data.genres)
   }
  }
  fetchMovie()
 }, [])

 const handleClose = () => {
  setShowModal(false)
  setMovie(null)
  toast.dismiss()
 }

 useEffect(
  () =>
   setAddedToList(
    movies.findIndex((result) => result.data().id === movie?.id) !== -1
   ),
  [movies]
 )


 return (
  <MuiModal
   open={showModal}
   onClose={handleClose}
   className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
  >
   <>
    <Toaster position='bottom-center' />
    <button className='modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]'
     onClick={handleClose}
    >

    </button>

   </>

  </MuiModal>
 )
}

export default Modal