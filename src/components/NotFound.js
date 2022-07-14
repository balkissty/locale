import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/')
    
  }, [navigate])
  

  return (
    <div>404</div>
  )
}
